---
layout: page
title: "Q154752: SMS: Client Does Not Deinstall for All Users"
permalink: /kb/154/Q154752/
---

## Q154752: SMS: Client Does Not Deinstall for All Users

	Article: Q154752
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On a Windows NT or Windows 95 client that is used by multiple users (multiple
	logons and profiles), when Systems Management Server is deinstalled using
	Deinstal.bat, CLI_NT /R, or CLI_DOS /R, the Systems Management Server files are
	removed, but Systems Management Server references in the registry are left for
	all users other than the one that ran the deinstall.
	
	This causes the following two problems for the user profiles that did not run the
	deinstallation program:
	
	- The Systems Management Server Client Program Group is not removed. When users
	  click on one of the icons, they will receive an error message saying that the
	  file specified could not be found.
	
	- The Smsrun16/32 file is left in the load key in the registry causing the
	  following error message on startup:
	
	  Cannot find file Smsrun32.exe/Smsrun16.exe specified in the Win.ini (or one
	  of its components); check to ensure the path and filename are correct and
	  that all required libraries are available.
	
	CAUSE
	=====
	
	Systems Management Server does not currently support multiple users on one
	computer.
	
	WORKAROUND
	==========
	
	Each user needs to run the deinstallation program individually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
