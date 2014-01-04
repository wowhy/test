namespace NotifyObjectGenerate.Model
{
	using System;
	using System.ComponentModel;
	using System.Xml;

	public class TestA : INotifyPropertyChanged
	{
		public event PropertyChangedEventHandler PropertyChanged;

		private int _Id;
		public int Id
		{
			get { return _Id; }
			set 
			{
				_Id = value;
				if(PropertyChanged != null)
					PropertyChanged(this, new PropertyChangedEventArgs("Id"));
			}
		}

		private string _Name;
		public string Name
		{
			get { return _Name; }
			set 
			{
				_Name = value;
				if(PropertyChanged != null)
					PropertyChanged(this, new PropertyChangedEventArgs("Name"));
			}
		}
	}

	public class TestB : INotifyPropertyChanged
	{
		public event PropertyChangedEventHandler PropertyChanged;

		private int _Id;
		public int Id
		{
			get { return _Id; }
			set 
			{
				_Id = value;
				if(PropertyChanged != null)
					PropertyChanged(this, new PropertyChangedEventArgs("Id"));
			}
		}

		private string _Name;
		public string Name
		{
			get { return _Name; }
			set 
			{
				_Name = value;
				if(PropertyChanged != null)
					PropertyChanged(this, new PropertyChangedEventArgs("Name"));
			}
		}
	}
}