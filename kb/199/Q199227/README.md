---
layout: page
title: "Q199227: SMS: Functions of Migrat1x.exe?"
permalink: kb/199/Q199227/
---

## Q199227: SMS: Functions of Migrat1x.exe?

	Article: Q199227
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 07-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the functions of Migrat1x.exe, which is used to upgrade a
	Systems Management Server version 1.2 client to Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Before the boot, when you run Migrat1x.exe, it causes the following actions to
	occur:
	
	1. Starts the executables referenced in the Migrat1x.ini file (such as
	  Copy1x.exe, which copies the Sms.ini file, Ms\Sms\Idmifs and Ms\Sms\Noidmifs
	  directory to the Windows\Ms\Sms sub-directory tree).
	
	2. Uninstalls Systems Management Server 1.x client components.
	
	3. Removes Systems Management Server client services (for 32-bit clients).
	
	4. Removes the Smsrun16/32 load line from the Win.ini file or registry.
	
	5. Updates the Migration Status Key registry key (SMS 1.2 Client Migration) to
	  Pending.
	
	After the boot, when you run Migrat1x.exe, it causes the following actions to
	occur:
	
	1. Removes the SMS Client program group.
	
	2. Removes the Ms\Sms sub-directory tree.
	
	3. Removes the Client Services registry key under
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS.
	
	4. Removes Systems Management Server files from the C:\Windows,
	  C:\Windows\System, and C:\Ms\Sms\Bin folders.
	
	5. Deletes the Sms.ini file.
	
	6. Changes Systems Management Server 1.2 Client Migration Status Key in the
	  registry to Done.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
