---
layout: page
title: "Q247319: PRB: PUBLIC Variables Not Released from InProcess Servers in ASP"
permalink: /kb/247/Q247319/
---

## Q247319: PRB: PUBLIC Variables Not Released from InProcess Servers in ASP

	Article: Q247319
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbInternet kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Public variables declared in an in-process Microsoft Visual FoxPro OLE
	Automation Server, launched from an ASP page, are not released when the OLE
	Automation Server is released.
	
	CAUSE
	=====
	
	PUBLIC variables declared within an in-process OLE Automation Server are public
	to the thread and any object on the thread. PUBLIC variables are not released
	until the thread has been uninitialized and the client has unloaded the
	in-process server. Setting the instance of the in-process server object to
	"nothing" does not unload the server.
	
	RESOLUTION
	==========
	
	Set the scope of variables used within in-process OLE Automation Servers, used
	with Active Server Pages, to PRIVATE rather than PUBLIC.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project named MTHREAD.
	
	2. Add a new program file to the project, using the following code:
	
	  DEFINE CLASS mthread AS CUSTOM OLEPUBLIC
	
	     FUNCTION PublicHit
	        LPARAMETER lnSecs
	        LOCAL x
	        lnSecs=IIF(EMPTY(lnSecs),0,lnSecs)
	
	        IF lnSecs > 60
	           lnSecs = 61
	        ENDIF
	
	        IF VARTYPE(gnPubValue) = "N"
	           gnPubValue = gnPubValue + 1
	        ELSE
	           PUBLIC gnPubValue
	           gnPubValue = 1
	        ENDIF
	
	        IF VARTYPE(gnPrivValue) = "N"
	           gnPrivValue = gnPrivValue + 1
	        ELSE
	           PRIVATE gnPrivValue
	           gnPrivValue = 1
	        ENDIF
	
	        DECLARE Sleep IN WIN32API INTEGER
	        FOR x=1 TO lnSecs
	           FOR x=1 TO lnSecs
	              Sleep(1000)
	           ENDFOR
	        ENDFOR
	
	        DECLARE INTEGER GetCurrentThreadId IN WIN32API
	        lcHTML = [<p><table style="background:black;color:white">] + CHR(13) + ;
	           [<tr><td style="font:normal normal 14pt Verdana">] + ;
	           "The request completed in " + TRANS(lnSecs) + " seconds." + [</td></tr>] +CHR(13) +;
	           [<table>] + CHR(13) + ;
	           "The current Thread ID is: " + TRANS(GetCurrentThreadId()) + "<p>"+CHR(13) + ;
	           "The Public Value  (gnPubValue) : = " + TRANS(gnPubValue) + "<br>"+ CHR(13) + ;
	           "The Private Value (gnPrivValue): = " + TRANS(gnPrivValue) + "<br>"
	
	        RETURN lcHTML
	     ENDFUNC
	  ENDDEFINE
	
	3. Click the Build button on the Project Manager, and select either a
	  Single-threaded COM server (dll) or a Multi-threaded COM server (dll).
	
	4. Install the COM Server and run-time files on a computer running Internet
	  Information Server.
	
	5. Register the COM Server.
	
	6. Create an Active Server Page named TEST.ASP in the IIS WWWROOT directory
	  using the following code, and make certain that the directory has execute
	  privileges:
	
	  <%@ Language=VBScript %>
	  <HTML>
	  <HEAD>
	  <META NAME="GENERATOR" Content="Microsoft Visual Studio 6.0">
	  </HEAD>
	  <BODY>
	
	  <%
	  Set oVFPApp = Server.CreateObject("mthread.mthread")
	
	  Response.Write oVFPApp.PublicHit
	
	  set oVFPApp = nothing
	
	  %>	
	
	  </BODY>
	  </HTML>
	
	7. Launch your Web Browser and navigate to the Active Server Page that was
	  created in step 4. Refresh the page several times, and note that the value of
	  gnPubValue is incremented each time the page is refreshed.
	
	8. Close your Web Browser.
	
	9. Launch your Web Browser and navigate to the Active Server Page that was
	  created in step 4. Note that the value of gnPubValue is not 1.
	
	REFERENCES
	==========
	
	  Q156547 HOWTO: Manually Register a Custom OLE Server
	
	  Q156014 HOWTO: Set Up OLE Automation in Visual FoxPro
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbInternet kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	
