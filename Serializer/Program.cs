using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Xml.Serialization;

namespace Serializer
{
    public class TestModel 
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    [DataContract]
    public class Data
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string Name { get; set; }
    }

    class Program
    {
        static void Test1()
        {
            TestModel[] source = new TestModel[] 
            {
                new TestModel(){ Id = 1, Name = "1" },
                new TestModel(){ Id = 2, Name = "1" },
                new TestModel(){ Id = 3, Name = "1" },
                new TestModel(){ Id = 4, Name = "1" },
            };

            var query = from p in source
                        where p.Id > 2
                        select p;

            var list = query.ToList();

            XmlSerializer xml = new XmlSerializer(typeof(List<TestModel>));
            if (File.Exists("test.xml"))
                File.Delete("test.xml");
            xml.Serialize(File.Create("test.xml"), list);
        }

        static void Test2()
        {
            Data[] source = new Data[] 
            {
                new Data(){ Id = 1, Name = "1" },
                new Data(){ Id = 2, Name = "1" },
                new Data(){ Id = 3, Name = "1" },
                new Data(){ Id = 4, Name = "1" },
            };

            var query = from p in source
                        where p.Id > 2
                        select p;

            var list = query.ToList();

            DataContractSerializer xml = new DataContractSerializer(typeof(List<Data>));
            if (File.Exists("test.xml"))
                File.Delete("test.xml");
            xml.WriteObject(File.Create("test.xml"), list);

        }

        static void Main(string[] args)
        {
            //Test1();
            Test2();
        }
    }
}
