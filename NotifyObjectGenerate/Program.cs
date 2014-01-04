using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace NotifyObjectGenerate
{
    using Model;

    class Program
    {
        static void Main(string[] args)
        {
            TestA a = new TestA() 
            {
                Id = 1,
                Name = "testA"
            };

            TestB b = new TestB()
            {
                Id = 2,
                Name = "testB"
            };

            a.PropertyChanged += (sender, e) =>
            {
                Console.WriteLine("Class: TestA");
                Console.WriteLine("{0} has changed.", e.PropertyName);
            };

            b.PropertyChanged += (sender, e) =>
            {
                Console.WriteLine("Class: TestB");
                Console.WriteLine("{0} has changed.", e.PropertyName);
            };

            a.Id = 10;
            b.Name = "Hello, World!";

            Console.ReadKey();
        }
    }
}
