﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace NotifyObjectGenerate
{
    class Program
    {
        static void Main(string[] args)
        {
            var xml = XElement.Load("Object.xml");
            Console.WriteLine(xml.Element("using").Value);
        }
    }
}
