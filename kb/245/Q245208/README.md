---
layout: page
title: "Q245208: Problem with added SMTP service through Add/Remove"
permalink: kb/245/Q245208/
---

## Q245208: Problem with added SMTP service through Add/Remove

	Article: Q245208
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you add the Microsoft SMTP service through Add/Remove Programs after you
	install the Windows NT Option Pack (NTOP), the SMTP service may not work
	immediately, if the initial NTOP installation was on a non-default path. The
	following error message may occur in the event log:
	
	  Event ID 7000 Source: Service Control manager. "Microsoft SMTP service.
	  Service failed to start due to the following error: the system cannot find
	  the file specified
	
	CAUSE
	=====
	
	Although the NTOP was installed to a customer selected non-default path, the
	SMTP service is still installed to the default location for Inetinfo
	(Winnt\System32\Inetsrv), which causes the problems to occur. For example, if
	IIS is installed in Inetsrv directory instead of the Winnt\System32\Ineterv
	directory , Add/Remove Programs still attempts to put the SMTP service in to the
	Winnt\System32\Inetsrv directory instead of the current location of
	Inetinfo.exe.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Verify which folder is the current working directory for IIS by searching for
	  Inetinfo.exe (for example: d:\inetsrv).
	
	2. Copy the following SMTP related DLLs from the Winnt\System32\Inetsrv
	  directory to the location where Inetinfo.exe is currently located:
	
	  Jpudll.dll
	  Mboxapi.dll
	  Seo.dll
	  Seos.dll
	  Smtpadm.dll
	  Smtpkey.dll
	  Smtpread.txt
	  Smtpsnap.dll
	  Smtpsvc.dll
	
	3. Run Regedit.
	
	  Note: Before you modify the registry, export the current registry first as a
	  backup.
	
	  Search for the following DLLs in the registry:
	
	  Seo.dll
	  Seos.dll
	  Smtpadm.dll
	  Smtpsnap.dll
	  Smtpsvc.dll
	
	4. Change the default path to the current working directory for IIS (to
	  d:\Inetsrv).
	
	5. In the registry, change the Inetinfo.exe image path to map to the current
	  working directory:
	
	  [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SMTPSVC]
	  ImagePath=Changed Image Path to point to the real path for Inetinfo.exe
	
	  \PARAMETERS
	  InstallPath=Changed Image Path to point to the real path for Inetinfo.exe
	
	  [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SMTPSVC\Enum]
	  0="Root\\LEGACY_SMTPSVC\\0000"
	  Count=dword:00000001
	  NextInstance=dword:00000001
	
	6. Try to start the SMTP service in the Control Panel, or restart the computer.
	
	Additional query words: IIS NTOP SMTP
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
