---
layout: page
title: "Q131827: PC NTMMTA: Err Msg: Drive Is Either Local, Used, or Greater..."
permalink: kb/131/Q131827/
---

## Q131827: PC NTMMTA: Err Msg: Drive Is Either Local, Used, or Greater...

	Article: Q131827
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you deliver messages for postoffices on Novell servers with the Microsoft
	Mail Multitasking MTA for Windows NT (NT MMTA) running as a Service, one of the
	following errors may occur in a Monitor window or in the SESSION.LOG:
	
	  Drive is either local, used or greater than LASTDRIVE.
	  Initializing data structures. Could not connect to drive.
	
	  -or-
	
	  Unable to Grab Semaphore File: <Drive Letter>:P1\xxxxxxxx.OLK
	
	CAUSE
	=====
	
	When the NT MMTA is running as a Windows NT Service, and messages are being sent
	or received from a postoffice hosted on a Novell NetWare file server, if you
	open File Manager and from the Window menu, you choose the Refresh option, the
	NT MMTA may stop responding.
	
	RESOLUTION
	==========
	
	To recover, stop and restart the NT MMTA instance. It is strongly suggested that
	the File Manager Window menu Refresh option not be selected when an NT MMTA
	service is running.
	
	NOTE: If there is a "stranded" drive letter previously connected to a Novell
	server, you can release the drive by doing the following:
	
	1. Run Control Panel and open the Services icon.
	
	2. Select the Gateway Service for NetWare service.
	
	3. Click on the Stop button.
	
	  Warning: If your primary network provider is NetWare or Compatible, and you
	  stop this service, it will also shut down other services including Netlogon
	  and Browser. To prevent this, run Control Panel and open Network. Select the
	  Network button and Microsoft Network as the primary provider.
	
	4. Select the Start button to restart the service.
	
	5. Go to a command prompt and type NET USE. The stranded drive is no longer
	  listed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of Microsoft Mail
	Multitasking MTA for Windows NT. This problem was corrected in version 3.5.27 of
	the NTMMTA.
	
	This fix is available to you on the BBS at (972) 518-0393 or (972) 550-0226 with
	the proper password that you get from a Microsoft Mail Support Professional.
	
	
	Additional query words: 3.50 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
