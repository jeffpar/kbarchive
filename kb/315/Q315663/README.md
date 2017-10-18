---
layout: page
title: "Q315663: HOW TO: Update DLLs Used by Active Server Pages in IIS 4.0"
permalink: kb/315/Q315663/
---

## Q315663: HOW TO: Update DLLs Used by Active Server Pages in IIS 4.0

	Article: Q315663
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbAudDeveloper kbHOWTOmaster
	Last Modified: 09-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Determine if Site is Running In-Process or Out-Of-Process
	- Update a DLL in an Out-of-Process Site
	- Update a DLL in an In-Process Site
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	An Active Server Pages (ASP) application may make use of Component Object Model
	(COM) objects in dynamic link libraries (DLLs). When such an ASP application is
	running, the DLL is loaded into memory. While it is loaded in memory, Windows
	locks the file so that it cannot be updated. Occasionally, you may need to
	update the DLL file as part of development or maintenance processes. This
	step-by-step article describes how to update DLL files from an active ASP
	application.
	
	Requirements
	------------
	
	The following items describe the recommended hardware, software, network
	infrastructure, skills and knowledge, and service packs that you need:
	
	- Microsoft Windows NT version 4.0 with Service Pack 3 or later
	- Familiarity with IIS site management, and the creation of in-process DLL COM
	  components
	
	Determine if Site is Running In-Process or Out-of-Process
	---------------------------------------------------------
	
	1. Run the Internet Service Manager. To do this with Windows NT 4.0 and Internet
	  Information Server (IIS) 4.0, click Start, click Windows NT 4.0 Option Pack,
	  click Microsoft Internet Information Server, and then click Internet Service
	  Manager. The Microsoft Management Console (MMC) appears.
	
	2. In the left pane, expand the Internet Information Server node.
	
	3. Select the node that corresponds to the name of the computer that hosts IIS.
	
	4. Select the Web site that this computer hosts. By default, each IIS
	  installation has one site named Default Web Site, although the site
	  administrator may have changed this.
	
	5. Select the virtual directory for the application that contains the DLL.
	  Right-click the directory and then click Properties.
	
	6. Locate the Run in separate memory space (isolated process) check box. If this
	  check box is selected, the application is running out-of-process. If this
	  check box is not selected, the application is running in-process.
	
	Update a DLL in an Out-of-Process Site
	--------------------------------------
	
	To update a DLL in a site that is run out-of-process, unload the DLL from memory
	by clicking Unload in the Properties dialog box for the site. After you unload
	the DLL, the DLL file is no longer locked and may be updated as required. The
	new DLL is loaded as soon as the next browser client makes a request on the Web
	application that involves the COM component or components of the DLL.
	
	Update a DLL in an In-Process Site
	----------------------------------
	
	If the site is running in-process, you can update the DLL by using either the
	Control Panel Services applet or a command prompt. Note that you must stop all
	of IIS before you can update the DLL.
	
	To update the DLL by using the Control Panel Services applet, follow these
	steps:
	
	1. Stop IIS. To do this, click Start, click Settings, click Control Panel, and
	  then double-click Services. Select IIS Admin Service and click Stop. When you
	  are prompted to stop any extra services, such as the World Wide Web
	  Publishing Service, click OK.
	
	2. Update the DLL file.
	
	3. Restart IIS. To do this, click Start, click Settings, click Control Panel,
	  and then double-click Services. Select IIS Admin Service and then click
	  Start. Select World Wide Web Publishing Service and then click Start.
	
	To update the DLL by using a command prompt, follow these steps:
	
	1. Stop IIS. To do this, open a command prompt window and type "net stop
	  iisadmin /y" (without the quotation marks).
	
	2. Update the DLL file.
	
	3. Restart IIS from the command line. To do this, open a command prompt window
	  and type the following commands:
	
	  net start iisadmin
	  net start w3svc
	
	Troubleshooting
	---------------
	
	The net stop iisadmin /y command stops all services that depend on IISAdmin.
	These services may include the Simple Mail Transport Protocol (SMTP) service and
	File Transfer Protocol (FTP) server, depending on your configuration. If these
	services are needed, you may need to include the net start msftpsvc and net
	start smtpsvc commands to restart the services.
	
	REFERENCES
	----------
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q166279 HOWTO: Lifetime of a COM Component Under IIS, ASP, and RDS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudDeveloper kbHOWTOmaster 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
