#include <Windows.h>
#include <string>

using namespace std;

class CServiceModule;
CServiceModule *g_pModule;

class CServiceModule
{
public:
	CServiceModule(wstring svcname) :
		status({}),
		statusHandle(nullptr),
		stop(nullptr)
	{
		wcscpy_s(name, svcname.c_str());
	}

	~CServiceModule()
	{
	}

public:
	int Run()
	{
		int argc;
		LPWSTR *args = CommandLineToArgvW(GetCommandLine(), &argc);
		if (args != nullptr && argc > 1)
		{
			if (wcscmp(args[1], L"install") == 0)
				this->Install();
			return 0;
		}

		SERVICE_TABLE_ENTRY DispatchTable[] =
		{
			{ this->name, (LPSERVICE_MAIN_FUNCTION)_Main },
			{ NULL, NULL }
		};

		return 0;
	}

	void WINAPI Main(DWORD dwArgc, LPTSTR *lpszArgv)
	{
	}

	void WINAPI Handler(_In_ DWORD dwOpcode)
	{
	}

	void Install()
	{

	}

	static void WINAPI _Main(DWORD dwArgc, LPTSTR *lpszArgv)
	{
		g_pModule->Main(dwArgc, lpszArgv);
	}

	static void WINAPI _Handler(_In_ DWORD dwOpcode)
	{
		g_pModule->Handler(dwOpcode);
	}

private:
	wchar_t name[256];
	SERVICE_STATUS status;
	SERVICE_STATUS_HANDLE statusHandle;
	HANDLE stop;
};

CServiceModule module(L"win32 service");

extern "C" int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE, LPTSTR, int nShowCmd)
{
	return module.Run();
}