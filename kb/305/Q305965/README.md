---
layout: page
title: "Q305965: HOW TO:Consume XML Web Service Methods by Using SOAP Toolkit 2.0"
permalink: /kb/305/Q305965/
---

## Q305965: HOW TO:Consume XML Web Service Methods by Using SOAP Toolkit 2.0

	Article: Q305965
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,4.0,6.0,6.0 SP5
	Operating System(s): 
	Keyword(s): kbAudDeveloper kbHOWTOmaster
	Last Modified: 10-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP5 
	- Microsoft XML, version 4.0 
	- Microsoft SOAP Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Create an Application in Visual Basic
	- Troubleshooting
	
	
	SUMMARY
	=======
	
	This step-by-step article describes how to make simple calls to an XML Web
	service by using Simple Object Access Protocol (SOAP) Toolkit version 2.0.
	
	Create an Application in Visual Basic
	-------------------------------------
	
	1. Download and install the SOAP Toolkit from the following Microsoft Developer
	  Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/downloads/default.asp?URL=/code/sample.asp?url=/msdn-files/027/001/580/msdncompositedoc.xml
	
	  This includes downloads for the Toolkit, the Toolkit samples, and a merge
	  module for redistributing the underlying objects that you can include with
	  the setup program for your application.
	
	2. Make a local copy of the Web Services Description Language (WSDL) file.
	
	NOTE: Although this step is not required, you should make a copy on your local
	computer. It is possible to specify the URL for the WSDL on the remote server,
	but it can be more convenient to copy the file locally.
	
	3. In your Visual Basic project, add a reference to the Microsoft SOAP Type
	  Library. To do this, select References on the Project menu, and then be sure
	  that Microsoft Soap Type Library is selected in the list. Click OK.
	
	4. Create an instance of the SoapClient object, as follows:
	
	  Dim oSoapClient As New MSSOAPLib.SoapClient
	
	5. Initialize the SoapClient object with the WSDL file that you copied in Step 2
	  by using the mssoapinit method, as follows:
	
	  oSoapClient.mssoapinit "C:\CLIENTWSDLS\CALC.WSDL", "Calc", "CalcSoapPort"
	
	  The first parameter is the path to the WSDL file. The second parameter is the
	  value of the name attribute for the service element in the WSDL file that
	  corresponds to the XML Web service that you want to call. The third parameter
	  is the port type for the service element that corresponds to the XML Web
	  service that you want to call. This parameter indicates the type of
	  connection that will be made to the XML Web service.
	
	6. Call the XML Web service method by using the SoapClient object as if it were
	  a method that is exposed by the SoapClient object itself. For example, if you
	  attempt to call an XML Web service method called Add that takes two integers
	  as parameters, your code may resemble the following:
	
	  Dim Sum As Integer
	  Sum = oSoapClient.Add(3, 4)
	
	7. Build and run the program.
	
	Troubleshooting
	---------------
	
	If the methods require complex parameters, you may need to handle them
	differently. For more information, see the "Handling Complex Types" topic in the
	online documentation for SOAP Toolkit 2.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudDeveloper kbHOWTOmaster 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbMSXMLSearch kbZNotKeyword2 kbVB600Search kbVB600 kbSOAPTK200 kbVB600SP5 kbMSXML400
	Version           : :2.0,4.0,6.0,6.0 SP5
	Issue type        : kbhowto
	
	=============================================================================
	
