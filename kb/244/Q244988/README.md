---
layout: page
title: "Q244988: How to Completely Remove IIS4 and NTOP from a Server"
permalink: /kb/244/Q244988/
---

## Q244988: How to Completely Remove IIS4 and NTOP from a Server

	Article: Q244988
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to completely remove Microsoft Internet Information
	Server 4.0 (IIS4) and Microsoft Windows NT 4.0 Option Pack (NTOP) from a
	Microsoft Windows NT Server 4.0-based computer.
	
	MORE INFORMATION
	================
	
	To completely remove Internet Information Server 4.0 (IIS4) and the Windows NT
	4.0 Option Pack (NTOP) from a Windows NT Server 4.0-based computer:
	
	1. If SQL is installed and you are just removing the IIS4 and NTOP components,
	  back up your SQL databases.
	
	2. Stop and reset the startup type for IIS services and all other nonessential
	  services, including but not limited to third-party products, all Exchange
	  services, and SQL services:
	
	  a. Click Start, point to Settings, click Control Panel, and then double-click
	     Services.
	
	  b. For each service to be stopped, click the service, click Stop, click Yes
	     to confirm stopping the service, click Startup, click Manual, and then
	     click OK.
	
	  c. After you have set the services to Manual, click Close.
	
	3. Restart the server.
	
	  NOTE: Restarting the server is required to clear the .dll files loaded by
	  services from memory. These .dll files would remain in memory if the services
	  were only stopped and the server not restarted.
	
	4. Before removing IIS, remove FrontPage Server Extensions if they are in use:
	
	  a. Click Start, point to Programs, and then click Windows NT 4.0 Option Pack.
	
	  b. Click Microsoft Internet Information Server, and then click FrontPage
	     Server Administrator.
	
	  c. Click Uninstall.
	
	  d. Click OK to start uninstalling FrontPage extensions.
	
	5. Remove the Windows NT Option Pack:
	
	  a. Click Start, point to Programs, click Windows NT4.0 Option Pack, and then
	     click Windows NT 4.0 Option Pack Setup.
	
	  b. Click Next, click Remove All, and then follow the instructions on the
	     screen to finish.
	
	6. Delete the IUSR_computer and IWAM_computer accounts from within Windows NT
	  User Manager:
	
	  a. Start User Manager for Domains.
	
	  b. Select the IUSR_computer and IWAM_computer accounts.
	
	  c. On the User menu, click Delete.
	
	7. Run the DCOMCNFG utility and set the Default Impersonation Level to Identify:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "dcomcnfg" (without the quotation marks), and then
	     click OK.
	
	  c. Click the Default Properties tab.
	
	  d. In the Default Impersonation Level box, click Identify.
	
	  e. Click OK.
	
	8. Restart the computer.
	
	9. Run RDISK, and create a new Emergency Repair Disk (ERD), complete with the
	  registry.
	
	  NOTE: Run RDISK with the /s parameter to back up the Security database. It is
	  possible that this can exceed the size of a single floppy disk, so you may
	  have to back up to a share on the computer.
	
	10. Reinstall the latest Windows NT Service Pack.
	
	11. Restart the computer.
	
	12. Run RDISK again and create a new ERD, complete with the registry.
	
	  NOTE: The /s parameter should not be necessary.
	
	13. Clear out the event logs in Windows NT by either saving them or deleting
	  them:
	
	  a. Open Event Viewer.
	
	  b. On the Log menu, click either System, Security, or Application, to display
	     the selected log.
	
	  c. Delete the log, or save it to a file.
	
	14. Install the Windows NT 4.0 Option Pack, making a note of any errors that may
	  occur during the installation.
	
	15. Download and install the latest version of the Microsoft Data Access
	  Components.
	
	  NOTE: These are available on the following Microsoft Web site:
	
	  http://www.microsoft.com/data/download.htm
	
	16. If SQL is installed and you are just removing IIS4 and NTOP, run the SQL
	  Setup program and choose the Update option.
	
	  NOTE: This will reinstall the shared ODBC components needed to allow SQL
	  Executive and the utilities to run. This step is necessary only if you are
	  not reinstalling the NTOP.
	
	17. Reset the startup type of the services previously stopped to Automatic, and
	  then start the services one program grouping at a time, to make sure that
	  they start correctly.
	
	18. If SQL is installed and you are just removing IIS4 and NTOP, run the SQL
	  admin and restore the databases from the backup you created in step 1.
	
	For more information about the DCOM impersonation level, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q180119 "CreateIISPackage or DeleteIISPackage..." During NTOP Setup
	
	Additional query words: nt 4.0 iis 4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
