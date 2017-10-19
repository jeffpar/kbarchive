---
layout: page
title: "Q321512: HOWTO: Call a Visual FoxPro 7.0 Web Service from ASP"
permalink: /kb/321/Q321512/
---

## Q321512: HOWTO: Call a Visual FoxPro 7.0 Web Service from ASP

	Article: Q321512
	Product(s): Microsoft FoxPro
	Version(s): 2.0,7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700
	Last Modified: 29-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	- Microsoft Active Server Pages 
	- Microsoft SOAP Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses Visual FoxPro Web Services, and how to call them from an
	Active Server Pages (ASP) page.
	
	NOTE: This article assumes that you are familiar with creating Web Services with
	Visual FoxPro 7.0.
	
	MORE INFORMATION
	================
	
	How you access your Visual FoxPro Web Service from ASP depends on where each is
	installed. If the client ASP and the Visual FoxPro Web Service are installed on
	the same Web server computer, you do not have to use Simple Object Access
	Protocol (SOAP) to call the Web Service methods. Because the Web service and ASP
	are installed on the same computer, you can use the Visual Basic Script
	CREATEOBJECT() function to create a new instance of the Visual FoxPro Web
	Service, and then call the methods of the Web Service. The Visual FoxPro Web
	Service is a multithreaded COM DLL (MTDLL) that is installed and registered on
	the same computer. What makes the MTDLL a Web Service is how it is called.
	
	Call Your Web Service From an ASP Page Using the SOAP Client:
	
	To make your ASP more portable, you can call your Web Service .dll by using the
	Microsoft SOAP client. When the Web Service and client ASP are installed on the
	same computer, you create the SOAP object, and then have the SOAP object call
	the Web Service through HTTP. The Web Service is then instantiated, and replies
	over COM and HTTP to the SOAP object. The SOAP object displays the results.
	
	Install the SOAP Toolkit on the computer that hosts your Web Service. For
	additional information about the SOAP Toolkit, including download instructions,
	visit the following Microsoft Developer Network (MSDN) Web site:
	
	  SOAP Toolkit 2.0 SP2
	  http://msdn.microsoft.com/code/sample.asp?url=/msdn-files/027/001/580/msdncompositedoc.xml
	
	When you install the SOAP Toolkit, the SOAP Internet Server API (ISAPI) Listener
	is also installed. The ISAPI Listener is an ISAPI extension that handles
	requests for SOAP content (for example, Web Services Description Language (WSDL)
	files). The ISAPI Listener is faster than the ASP Listener, and when it is
	installed, you do not have to generate an ASP Listener in Visual FoxPro when you
	publish your Web Service.
	
	Assume your Visual FoxPro Web Service is named MyWebService and has a method
	named GetMachineName. The class in Visual FoxPro has to be strongly typed (a new
	feature in Visual FoxPro 7.0) and has to be based on the Visual FoxPro Session
	class. The following three features of the Session class make it the best choice
	to use in Visual FoxPro COM servers:
	
	- The Visual FoxPro Session class provides a private data session for your
	  data.
	
	- When it is compiled into an OLEPUBLIC COM object by Visual FoxPro, only the
	  custom properties and methods that you specify are written out to the Type
	  Library (.tlb) that is created. Intrinsic properties, methods, and events are
	  no longer written out to the Type Library.
	
	- The following SET values have a new default setting for private data session
	  with Session class in Visual FoxPro:
	
	   - EXCLUSIVE=OFF
	
	   - SAFETY=OFF
	
	   - TALK=OFF
	
	The potential drawback of using the Session class (to some developers) is that it
	is a programmatic-only class. That means that there is no visual designer for
	the Session class. With the new Document View Window in Visual FoxPro, however,
	you can easily move through the methods of even large program files. It is best
	to use the Session class for your Visual FoxPro COM servers and Web Services.
	
	The following is an example of the Web Service class definition in Visual
	FoxPro:
	
	NOTE: This assumes that the Web service will be installed to a Web server that is
	running a Microsoft Windows operating system.
	
	  *-----------------------------------
	  * Web Service Definition for MTDLL "MyWebService"
	  *  CREATED: 04/23/2002 01:02:00 PM
	  * ABSTRACT: Defines a simple Web Service
	  *           for use in Microsoft Knowledge base
	  *           article Q321512.
	  *-----------------------------------
	  DEFINE CLASS MyWebService AS SESSION OLEPUBLIC
	
	  	PROCEDURE INIT
	          *!* If you do any work with SQL Pass-Through
	          *!* these settings are a good idea.
	  		SQLSetProp(0,"DispLogin",3)
	  		SQLSetProp(0,"DispWarnings",.F.)
	  	ENDPROC
	
	  	PROCEDURE GetMachineName AS STRING
	  		LOCAL lcThisMachineName AS STRING
	  		lcThisMachineName = LEFT(SYS(0),ATC("#",SYS(0))-1)
	
	  		RETURN lcThisMachineName
	  	ENDPROC
	
	  	PROCEDURE Error(nError, cMethod, nLine)
	  		COMRETURNERROR([method "] + cMethod + ["], MESSAGE())
	  	ENDPROC
	
	  ENDDEFINE
	
	When you have installed and registered the MTDLL on your Web server, when you
	have the WSDL, and when you have installed the the correct runtime files for the
	Visual FoxPro object (for Visual FoxPro 7.0 MTDLLS the runtime is Vfp7t.dll),
	you can call the Visual FoxPro Web Service from an ASP page as follows:
	
	NOTE: This code assumes that your Web Service WSDL is on a server named
	WEBSERVER, and is in a virtual directory named VFP7WS.
	
	  <%@ Language=VBScript %>
	  <HTML>
	  <HEAD>
	  <TITLE>VFP7 Web Service Test</TITLE>
	  </HEAD>
	  <BODY style="font-family: Verdana; font-size: 12pt; color: #000080">
	
	  <%
	  DIM oMSSoapClient, lcRetVal
	
	  SET oMSSoapClient = CreateObject("MSSOAP.SoapClient")
	  oMSSoapClient.ClientProperty("ServerHTTPRequest") = True
	  oMSSoapClient.mssoapinit _
	  "HTTP://WEBSERVER/VFP7WS/mywebservice.WSDL", _
	  		"mywebservice", _
	  		"mywebserviceSoapPort"
	
	  lcRetVal = oMSSoapClient.GetMachineName
	  SET oMSSoapClient = Nothing
	
	  Response.Write("This Web Server machine is named " & lcRetVal)
	  %>
	
	  </BODY>
	  </HTML>
	
	You must use the ClientProperty setting on the SOAP client object in an ASP page
	or the page does not load. This setting determines whether to use the
	server-safe XML components to load the WSDL and the Web Services Meta Language
	(WSML) files. Set the server-safe setting to True when an ASP application or an
	ISAPI DLL uses the SOAP client object.
	
	Note that SOAP calls are case-sensitive. Make sure that the case is correct in
	the call to MSSoapInit. To verify the case, open your WSDL file in a text editor
	such as Notepad, and locate the "service name=" and "port name=" entries. These
	entries correspond to the second and third parameters on the MSSoapInit function
	call respectively.
	
	Make sure that the "soap:address location=" line in the WSDL points to the
	correct Web server. If you built the Web Service on the same computer that has
	Internet Information Server (IIS) installed, it is not a problem. However, if
	you intend to port the Web Service to another computer, you must update this
	line accordingly, or the SOAP calls will be redirected back to your development
	computer. The GetMachineName() method in the Web Service code in this article
	returns the computer name. Without this change, the name of your development
	computer is returned, which can be confusing.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q307355 HOW TO: Call a Web Service in Visual FoxPro 7.0
	
	For additional information about the Microsoft SOAP Toolkit, visit the following
	Microsoft Web site:
	
	  SOAP Toolkit 2.0
	  http://msdn.Microsoft.com/library/default.asp?URL=/library/sdkdoc/soap/kit_intro_19bj.htm
	  (http://msdn.Microsoft.com/library/default.asp?URL=/library/sdkdoc/soap/kit_intro_19bj.htm)
	
	For additional information about the WinHTTP Proxy Configuration Utility, visit
	the following Microsoft Web site:
	
	  Using the WinHTTP Proxy Configuration Utility
	  http://msdn.Microsoft.com/library/default.asp?url=/library/en-us/xmlsdk30/htm/serverxmlhttpproxy.asp
	  (http://msdn.Microsoft.com/library/default.asp?url=/library/en-us/xmlsdk30/htm/serverxmlhttpproxy.asp)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbASPsearch kbMSXMLSearch kbVFP700 kbSOAPTK200
	Version           : :2.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
