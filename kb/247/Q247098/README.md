---
layout: page
title: "Q247098: HOW TO: Install and Reload the SSL Filter Sspifilt.dll"
permalink: kb/247/Q247098/
---

## Q247098: HOW TO: Install and Reload the SSL Filter Sspifilt.dll

	Article: Q247098
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Install the Filter
	
	   - IIS 4.0 and 5.0
	- IIS 5.1
	
	- Reload the Filter
	- Troubleshooting
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to install or reload the Secure Sockets
	Layer (SSL) filter to turn on SSL for Web sites.
	
	Install the Filter
	------------------
	
	The Web sites must have the Sspifilt.dll file loaded. By default, this filter is
	installed with the Microsoft Windows NT 4.0 Option Pack for Internet Information
	Server (IIS) 4.0, when you install Internet Information Services (IIS) 5.0 on
	Microsoft Windows 2000, and when you install IIS 5.1 on Microsoft Windows XP
	Professional. To find this filter, enumerate the master properties in the
	Microsoft Management Console (MMC).
	
	To verify the status of Sspifilt.dll, follow these steps:
	
	IIS 4.0 and 5.0:
	
	1. In the MMC, under Internet Information Services, right-click
	  <server_name> and then click Properties.
	
	2. In the Master Properties section, click WWW Service, and then click Edit.
	
	3. On the ISAPI Filters tab, notice the direction and color of the arrow:
	
	   - If the arrow is green and pointing up, the filter is loaded correctly.
	
	   - If the arrow is red and pointing down, the filter is not loaded. SSL will
	     not work on this server until this problem is corrected.
	
	IIS 5.1:
	
	1. In the MMC, under Internet Information Services, right-click Web Sites and
	  then click Properties.
	
	2. On the ISAPI Filters tab, notice the direction and color of the arrow:
	
	   - If the arrow is green and pointing up, the filter is loaded correctly.
	
	   - If the arrow is red and pointing down, the filter is not loaded. SSL will
	     not work on this server until this problem is corrected.
	
	If you find that the filter is not loaded, follow the steps in the Reload section
	to correct this problem.
	
	Reload the Filter
	-----------------
	
	To reload the Sspifilt.dll filter, follow these steps:
	
	1. Remove Sspifilt.dll from the master properties. (To access the master
	  properties, see the steps in the Installation section).
	
	2. At a command prompt, type the following command to stop IIS and its dependent
	  services:
	
	  "net stop iisadmin /y" (without the quotation marks)
	
	3. At a command prompt, type the following command to restart IIS and its
	  dependent services:
	
	  "net start w3svc" (without the quotation marks)
	
	4. Open the master properties for the IIS server.
	
	5. On the ISAPI filters tab, click Add. Type "SSPIFILT" (without the quotation
	  marks) for the name and
	  "C:\%<Systemroot>%\System32\Inetsrv\Sspifilt.dll" (without the
	  quotation marks) for the path. By default, the status shows Unknown.
	
	6. Stop and restart IIS and its dependent services (see steps 2 and 3).
	
	If these steps prove unsuccessful, see the steps in the Troubleshooting section.
	
	Troubleshooting
	---------------
	
	1. Check the permissions on the C:\%<Systemroot>%\System32\Intersrv
	  folder. By default, Everyone has Change permissions; the Creator, Owner,
	  Administrators, and System have Full Control permissions.
	
	2. At a command prompt, use the "cd" (without the quotation marks) command to
	  change to the C:\%<systemroot>%\System32\Inetsrv\Adminsamples
	  directory, and then type the following command to check the values that are
	  stored in the metabase:
	
	  "adsutil enum\filters" (without the quotation marks)
	
	The following output is returned:
	
	  
	
	  KeyType               :(String)  "IISFilters"
	  FilterLoadOrder       :(String)  "sspifilt"
	  [/w3svc/filters/sspifilt]
	
	3. If this output is correct, check the values on the specific location,
	  W3svc/Filters/Sspifilt. To do this, type the following command at a command
	  prompt to enumerate the metabase:
	
	  "adsutil enum w3svc/filters/sspifilt" (without the quotation marks)
	
	This returns the following output:
	
	  
	
	  FilterState           :(Integer) 1 (this state shows the filter enabled)
	
	If this procedure is not successful:
	
	For IIS 3.0: Remove and then reinstall IIS 3.0. For additional information, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q184309 How to Install IIS Without Rerunning Windows NT Setup
	
	For IIS 4.0: Remove and then reinstall the Windows NT 4.0 Option Pack. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q187870 HOWTO: How to Remove and Reinstall the Windows NT 4.0 Option Pack
	
	For IIS 5.0 and 5.1: Remove and then reinstall IIS.
	
	
	NOTE: For IIS 4.0, 5.0 and 5.1, you must back up the configuration of IIS before
	you remove it, so that you can restore that configuration after the
	reinstallation. For additional information, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q302573 HOW TO: Back Up and Restore IIS
	
	REFERENCES
	==========
	
	For additional information about SSL, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q292296 'Cannot find server' or 'DNS' Errors When Using SSL (Q and A)
	
	  Q289582 HTTPS Connections Fail After You Upgrade to Windows NT 4.0 Option
	  Pack (IIS 4.0) and Enable SSL
	
	  Q197306 How to Troubleshoot SSL in Internet Information Server 4.0
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis510
	Version           : :3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
