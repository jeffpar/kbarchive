---
layout: page
title: "Q282073: ASP Application Fails If No User Is Logged On to the Server"
permalink: /kb/282/Q282073/
---

## Q282073: ASP Application Fails If No User Is Logged On to the Server

	Article: Q282073
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbASP kbCOMPlus kbMTS kbIIS kbiis400 kbiis500 kbSysAdmin
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	- Microsoft COM+, version 1.0 
	- Microsoft Transaction Server 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users access an application from an Active Server Pages (ASP) page, the
	application may fail if there is no user logged on to the Internet Information
	Server (IIS) console. The client computer returns the following error message:
	
	  HTTP 500 Internal server error
	
	  -or-
	
	  Server Application Error The server has reached the maximum recovery limit
	  for the application during the processing of your request. Please contact the
	  server administrator for assistance.
	
	The following error appears in the event log on the server:
	
	  The server stop serving requests for application '/LM/W3SVC/1/Root/Test'
	  because the number of Out of Process component crashes exceed a limit.
	
	CAUSE
	=====
	
	The identity for the COM+ application or the Microsoft Transaction Server (MTS)
	package is configured for "Interactive user - the current logged on user".
	Because no user is currently logged on to the IIS console, the application
	cannot run.
	
	RESOLUTION
	==========
	
	To resolve this problem, set the identity for the COM+ application or the MTS
	package to "This User", and specify a user account. See the "More Information"
	section for the step-by-step procedure.
	
	MORE INFORMATION
	================
	
	How to Set the COM+ Application Identity on IIS 5.0:
	
	1. On the Start menu, point to Programs, point to Administrative Tools, and then
	  click Component Services.
	
	2. Click to expand the Component Services, Computers, My Computer, and COM+
	  Applications nodes. Locate the application whose identity you want to
	  change.
	
	  If you are not sure which application to modify, check the properties of the
	  Web site (or virtual directory) where your ASP application resides in the
	  Internet Services Manager.
	
	  On the Home Directory or Virtual Directory tab, check the Application
	  Protection setting:
	
	  a. If the default Medium (Pooled) setting is selected, you should modify the
	     IIS Out-of-Process Pooled COM+ Applications application identity in
	     Component Services.
	
	  b. If High (Isolated) is selected, you should modify the COM+ application
	     that has the same name as your Web site.
	
	  c. If Low (IIS Process) is selected, the site is running in the IIS memory
	     space. This service is running under the local system account and cannot
	     be modified through the IIS snap-in.
	
	3. Right-click the appropriate COM+ application, and then click Properties.
	
	4. On the Identity tab, click This User, and type a valid account for the
	  computer. Click OK to apply the changes.
	
	How to Set the MTS Application Identity on IIS 4.0:
	
	1. Start the Internet Service Manager.
	
	2. Click to expand the Computers, My Computer, and Microsoft Transaction Server
	  nodes. Locate the package whose identity you want to change. The application
	  is listed under the Packages Installed folder.
	
	  If you are not sure which application to modify, check the properties of the
	  Web site (or virtual directory) where the ASP application resides under
	  Internet Information Server.
	
	  On the Home Directory or Virtual Directory tab, check the Run in separate
	  memory space check box:
	
	  a. If the check box is selected, the name of the package is the same as the
	     name of the site.
	
	  b. If the check box is not selected (which is the default setting), the site
	     is running in the IIS process and cannot be modified.
	
	3. Right-click the package, and then click Properties.
	
	4. On the Identity tab, click This User, and type a valid account. Apply the
	  changes.
	
	Additional query words: HTTP 500
	
	======================================================================
	Keywords          : kbASP kbCOMPlus kbMTS kbIIS kbiis400 kbiis500 kbSysAdmin 
	Technology        : kbMTSsearch kbiisSearch kbAudDeveloper kbiis500 kbiis400 kbCOMPlusSearch kbZNotKeyword3 kbCOMPlus100 kbMTS200
	Version           : :1.0,2.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
