#include <Windows.h>
#include <string>

using namespace std;

class CServiceModule
{
public:
	CServiceModule(wstring svcname) :
		name(svcname),
		status({}),
		statusHandle(nullptr),
		stop(nullptr)
	{
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
			{ L"", (LPSERVICE_MAIN_FUNCTION)this->Main },
			{ NULL, NULL }
		};

		return 0;
	}

	static void WINAPI Main(DWORD dwArgc, LPTSTR *lpszArgv)
	{
		
	}

	void Install()
	{

	}

private:
	wstring name;
	SERVICE_STATUS status;
	SERVICE_STATUS_HANDLE statusHandle;
	HANDLE stop;


};

CServiceModule module(L"win32 service");

extern "C" int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE, LPTSTR, int nShowCmd)
{
	return module.Run();
}