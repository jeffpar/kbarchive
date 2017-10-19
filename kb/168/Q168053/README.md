---
layout: page
title: "Q168053: HOWTO: Use VFP Automation Servers with Active Server Pages"
permalink: /kb/168/Q168053/
---

## Q168053: HOWTO: Use VFP Automation Servers with Active Server Pages

	Article: Q168053
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbvfp500 kbvfp600
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Server (IIS) 3.0 supports Active Server Pages
	(ASP). ASPs allow you to perform server-side processing and scripting through
	the use of automation servers, including automation servers that were created in
	Visual FoxPro 5.0 or 6.0. This article demonstrates how to use a Visual FoxPro
	automation server with Active Server Pages.
	
	MORE INFORMATION
	================
	
	There are primarily two components:
	
	- Visual FoxPro Automation Server.
	
	- Active Server Page that instantiates the server.
	
	The Visual FoxPro Automation Server
	-----------------------------------
	
	For this example, you can create a simple automation server in Visual FoxPro.
	This automation server has two methods: one called GetTime(), which will return
	the current time and one called GetDate(), which will return the current date.
	
	Creating the automation server:
	
	1. Create a new project named ASPSrv in Visual FoxPro.
	
	2. Add a new program to the project with the following code:
	
	          DEFINE CLASS WristWatch AS Custom OLEPUBLIC
	
	        PROCEDURE GetTime()
	           RETURN Time()
	        ENDPROC
	
	        PROCEDURE GetDate()
	           RETURN Date()
	        ENDPROC
	
	          ENDDEFINE
	
	3. Build the project into an OLE DLL automation server.
	
	4. Install the automation server onto your IIS 3.0 server.
	
	  NOTE: It is recommended that you use the Setup Wizard in Visual FoxPro as a
	  distribution method. Files that will be included for distribution are the
	  Visual FoxPro runtime, the OLE server .DLL, .TLB, and .VBR files.
	
	The Active Server Page
	----------------------
	
	The ASP file is the component that instantiates the automation server and calls
	the methods of the automation server.
	
	1. Create the following file in a text editor, such as Notepad:
	
	       <%@ LANGUAGE="VBSCRIPT" %>
	       <!-- Ensure that there is a space before LANGUAGE and
	            after "VBSCRIPT" -->
	       <HTML>
	       <HEAD>
	       <TITLE> VFP and ASP </TITLE>
	       </HEAD>
	
	       <BODY>
	       <H2>Active Server Pages and Visual FoxPro Automation Servers</H2>
	
	       <%Set VFPSrv = Server.CreateObject("ASPSrv.WristWatch")%>
	
	       Today's Date is <%=VFPSrv.GetDate()%>
	       <P>
	       The Current Time is <%=VFPSrv.GetTime()%>
	
	       </BODY>
	       </HTML>
	
	2. Save this file to your IIS WWWROOT directory as VFPSrv.ASP, and make certain
	  that this directory has Execute privileges.
	
	3. You should now be able to access this Active Server Page from your Web
	  browser. The page should show the current date and time from the server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
