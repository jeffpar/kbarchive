---
layout: page
title: "Q258932: PRB: Server Object Error &quot;ASP 0177:800401f3&quot; with WebClass"
permalink: kb/258/Q258932/
---

## Q258932: PRB: Server Object Error &quot;ASP 0177:800401f3&quot; with WebClass

	Article: Q258932
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbASP kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbIIS kbiis300 kbiis40
	Last Modified: 09-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse to your WebClass application (Internet Information Server
	application), you receive the following error message in your browser:
	
	  Server object error 'ASP 0177 : 800401f3'
	  Server.CreateObject failed
	  YourWebClass.asp, line 8
	  Invalid class string
	
	where line 8 contains the following code:
	
	  Set Application("~WC~WebClassManager") = Server.CreateObject("WebClassRuntime.WebClassManager")
	
	CAUSE
	=====
	
	The WebClass Runtime file (Mswcrun.dll) does not exist on your Web server, or
	WebClass Runtime is not registered. WebClass Runtime is one of the system files
	required for your WebClass applications to function properly.
	
	RESOLUTION
	==========
	
	Verify that WebClass Runtime exists on your Web server. If it does not exist,
	use the Package and Deployment Wizard to create a standard setup package. Run
	the setup package on your Web server to install and register the necessary
	system files, which includes WebClass Runtime.
	
	If WebClass Runtime does exist on your Web server, you must register it. To do
	so, type the following at a command prompt:
	
	  
	
	  regsvr32 "C:\Program Files\Common Files\Designer\mswcrun.dll"
	
	NOTE: The authenticating user (IUSR_machinename if using anonymous access) needs
	to have Read and Execute NTFS permissions on Mswcrun.dll.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q242550 INFO: System Files Needed to Run WebClasses (IIS Applications)
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbASP kbVBp kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbIIS kbiis300 kbiis400 kbiis500 
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis500 kbiis400 kbiis300 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :3.0,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
