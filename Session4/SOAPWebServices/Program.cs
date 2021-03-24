using ServiceReference1;
using System;

namespace SOAPWebServices
{
    class Program
    {
        static void Main(string[] args)
        {
            MathsOperationsClient client = new MathsOperationsClient(MathsOperationsClient.EndpointConfiguration.BasicHttpBinding_IMathsOperations);
            Console.WriteLine(client.AddAsync(4, 5).Result);
            client.CloseAsync();
        }
    }
}
