namespace NotifyObjectGenerate.Model
{
	using System;
	using System.ComponentModel;
	using System.Runtime.CompilerServices;
	using System.Xml;

	public partial class TestA : INotifyPropertyChanged
	{
		public event PropertyChangedEventHandler PropertyChanged;
        private void NotifyPropertyChanged([CallerMemberName] string propertyName = "")
        {
            if (PropertyChanged != null)
            {
                PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }
        }

		private int _Id;
		public int Id
		{
			get { return _Id; }
			set 
			{				
				_Id = value;
				NotifyPropertyChanged();
			}
		}

		private string _Name;
		public string Name
		{
			get { return _Name; }
			set 
			{				
				_Name = value;
				NotifyPropertyChanged();
			}
		}
	}

	public partial class TestB : INotifyPropertyChanged
	{
		public event PropertyChangedEventHandler PropertyChanged;
        private void NotifyPropertyChanged([CallerMemberName] string propertyName = "")
        {
            if (PropertyChanged != null)
            {
                PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }
        }

		private int _Id;
		public int Id
		{
			get { return _Id; }
			set 
			{				
				_Id = value;
				NotifyPropertyChanged();
			}
		}

		private string _Name;
		public string Name
		{
			get { return _Name; }
			set 
			{				
				_Name = value;
				NotifyPropertyChanged();
			}
		}
	}
}