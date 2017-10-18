---
layout: page
title: "Q202798: PRB: Browser Stops When Calling a Desktop Application from ASP"
permalink: kb/202/Q202798/
---

## Q202798: PRB: Browser Stops When Calling a Desktop Application from ASP

	Article: Q202798
	Product(s): Internet Information Server
	Version(s): winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): kbASP kbInternet kbMTS kbInetDev kbDSupport
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Active Server Pages 
	- Microsoft Transaction Server 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling a Desktop Application (such as Microsoft Word) from Active Server
	Pages (ASP), the following behavior might occur:
	
	  The Browser (IE4) is not responding at all, it appears to be hanging.
	
	CAUSE
	=====
	
	The error occurs because the server is running in the IUSR_computername account
	and cannot connect to the window station and desktop of the Internet Information
	Server (IIS) process in the LocalSystem account.
	
	The implication of this to IIS applications is that the IIS service has its own
	desktop. If your IIS application interacts with a desktop in any way (for
	instance, if it displays a message box), then it displays that message box on a
	desktop that cannot be seen on the computer's monitor. Similarly, an IIS
	application is not able to send or post messages to an application on the
	interactive desktop.
	
	RESOLUTION
	==========
	
	You can resolve this problem by configuring the server using the RunAs registry
	value to run under a user account. You can specify The interactive user if an
	interactive user is logged on; otherwise, use a specific user account if an
	interactive user is not logged on. If you specify The interactive user, the
	server runs in the interactive user's account and connects to the interactive
	desktop. If a specific user account is specified, the server runs in that
	account and connects to its own window station and desktop.
	
	For example, use the following steps to configure a server to run under a user
	account:
	
	1. Run Dcomcnfg.exe.
	
	2. Click the Applications tab, and then click the server.
	
	3. Click the Properties button, and then click the Identity tab.
	
	4. Select The interactive user if an interactive user will be logged on when the
	  server is launched, or select This user and specify a user if an interactive
	  user will not be logged on when the server is launched. This adds a RunAs
	  registry entry under the APPID key of the server.
	
	Make sure that the specified user is given launch and access permissions to the
	server.
	
	If you are using a DLL to create an instance of the Desktop Application, you'll
	also have to create a Microsoft Transaction Server (MTS) package for your DLL,
	and give this package the identity of The interactive user if an interactive
	user will be logged on when the server is launched. Or select This user and
	specify a user if an interactive user will not be logged on when the server is
	launched.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create an ASP page with the following code:
	
	  <%
	  Set objWdDoc = Server.CreateObject("Word.Document")
	  Response.Write ("Object created: ") & IsObject(objWdDoc)
	
	  objWDDoc.SaveAs "c:\mydoc0.doc"
	  objWDDoc.Close
	  Set objWDDOC = Nothing
	  %>
	
	View the ASP page from a browser (such as Internet Explorer 4.0). The Browser
	does not responding at all.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q156223 How To Launch OLE Servers from ISAPI Extensions
	
	  Q159311 Instantiating Remote Components in MTS and IIS
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbASP kbInternet kbMTS kbInetDev kbDSupport 
	Technology        : kbMTSsearch kbiisSearch kbAudDeveloper kbASPsearch kbiis400 kbMTS200
	Version           : winnt:2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
