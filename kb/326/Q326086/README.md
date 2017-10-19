---
layout: page
title: "Q326086: HOW TO: Isolate Web Applications into Their Own Process"
permalink: /kb/326/Q326086/
---

## Q326086: HOW TO: Isolate Web Applications into Their Own Process

	Article: Q326086
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 12-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - IIS 4.0
	   - IIS 5.0
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to isolate Internet Information Server
	(IIS) 4.0 and Internet Information Services (IIS) 5.0 applications into their
	own respective processes.
	
	In this article, all isolation steps are performed at the Web site level instead
	of at the virtual directory level. If an application needs isolation at the
	virtual directory level, follow the same steps, but use the Virtual Directory
	tab instead of the Home Directory tab.
	
	IIS 4.0
	-------
	
	1. Click Start, point to Program Files, click Windows NT 4.0 Option Pack, click
	  Microsoft Internet Information Server, and then click Internet Service
	  Manager.
	
	2. In the Internet Service Manager (ISM), right-click the Web site that you want
	  to isolate, and then click Properties.
	
	3. In the Web site property sheet, click the Home Directory tab.
	
	4. On the Home Directory tab, click to select the Run in separate memory space
	  check box.
	
	5. Click OK.
	
	NOTE: Because the IIS services are already running and the site is currently in
	the Inetinfo (Inetinfo.exe) process, you must restart the IIS services. You do
	not have to do this right away. To do this:
	
	6. Click Start, click Run, type "cmd" (without the quotation marks), and then
	  click Run.
	
	7. At the command prompt, type "net stop iisadmin /y" (without the quotation
	  marks).
	
	8. When the services complete shutting down, type the following to restart each
	  individual service that is installed:
	
	   - WWW: "net start w3svc" (without the quotation marks)
	
	   - File Transfer Protocol (FTP): "net start msftpsvc" (without the quotation
	     marks)
	
	   - Simple Mail Transfer Protocol (SMTP): "net start smtpsvc" (without the
	     quotation marks)
	
	   - Network News Transfer Protocol (NNTP): "net start nntpsvc" (without the
	     quotation marks)
	
	IIS 5.0
	-------
	
	1. Click Start, click Program Files, click Administrative Tools, and then click
	  Internet Services Manager.
	
	2. In the ISM, right-click the Web site that you want to isolate, and then click
	  Properties.
	
	3. In the Web site property sheet, click the Home Directory tab.
	
	4. Under Application Settings, click High (Isolated) in the Application
	  Protection drop-down list.
	
	5. Click OK.
	
	NOTE: Because the IIS services are already running and this site is probably
	loaded in the DLLHost process that is already running, you must restart the IIS
	services. You do not have to do this right away. To do this:
	
	6. In the ISM, right-click the server name, and then click Restart IIS.
	
	7. Click OK.
	
	REFERENCES
	==========
	
	For more information, visit the following Microsoft Web site, which focuses on
	the advantages and disadvantages of using the built-in isolating features of
	IIS:
	
	  Support WebCast: Microsoft Internet Information Server Process Model
	  http://support.microsoft.com/default.aspx?scid=http://support.microsoft.com/servicedesks/webcasts/wc062602/wcblurb062602.asp
	
	For the Microsoft PowerPoint presentation only, visit the following Microsoft Web
	site:
	
	  IIS Process Models PowerPoint Presentation
	  http://support.microsoft.com/servicedesks/webcasts/wc062602/WC062602.ppt
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q279729 Web Pages Not Serving from IIS
	
	  Q297989 PRB: Configured Identity Is Incorrect for IWAM Account
	
	  Q180677 New Features in Internet Information Server (IIS) Version 4.0
	
	  Q294774 MS01-044: IIS Loads ISAPI Extension In-Process Even When Application
	  Is Marked for High Isolation
	
	  Q290884 HOWTO: Determine Which Application Is Running Within a COM+ or
	  Transaction Server Package
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
