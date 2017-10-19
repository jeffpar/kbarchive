---
layout: page
title: "Q101554: PC Mac: Err Msg: The Control Panel...Cannot Be Used with..."
permalink: /kb/101/Q101554/
---

## Q101554: PC Mac: Err Msg: The Control Panel...Cannot Be Used with...

	Article: Q101554
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0, on platform(s):
	   - the operating system: Mac OS (ALL) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.0 of Microsoft Mail for PC Networks, Macintosh workstation, you may
	receive the following error message when trying to access the Microsoft Mail
	Notifier Control Panel device (cdev):
	
	  The control panel "Microsoft Mail Notifier" cannot be used with this
	  Macintosh.
	
	After adding the Notifier to the Macintosh's System Folder and restarting
	(rebooting) the computer, the icon for the Notifier is crossed out (it appears
	as an envelope with an "X" through it). This indicates that the Notifier Control
	Panel device did not load.
	
	RESOLUTION
	==========
	
	The above error message is incorrect. The Notifier can work with any Macintosh
	computer.
	
	To correct this problem, do the following:
	
	1. Log on to Mail.
	
	  NOTE: Mail may prompt you to locate the postoffice before login can be
	  completed.
	
	2. From the File menu, choose Set Preferences.
	
	3. In the Misc Options section, retype the default login name in a different
	  case; for example, replace JohnDoe with johndoe. If you change one character,
	  the problem is corrected.
	
	4. Choose the OK button.
	
	  NOTE: You may see the login name go back to its original case. That is OK.
	  Continue with steps 5 and 6.
	
	5. Quit Mail.
	
	6. Restart the computer. The Notifier icon, without the "X," should appear when
	  you restart (reboot) the computer.
	
	  NOTE: If the Control Panel icon for the Notifier appears as a blank page
	  instead of the dog, rebuild the desktop by pressing COMMAND+OPTION while
	  rebooting the computer.
	
	NOTE: If the above steps do not work and you have 32-bit addressing on, do the
	following:
	
	1. Turn off 32-bit addressing.
	
	2. Follow the steps above.
	
	3. Confirm that the Notifier works.
	
	4. Turn back on the 32-bit addressing.
	
	NOTE: If the above two procedures do not work, do the following:
	
	The AppleShare volume where the Microsoft Mail for PC Networks postoffice is
	located must also be mounted at startup. This share is where the PC postoffice
	resides--on a PC file server running Macintosh services.
	
	The Microsoft Mail Notifier Control Panel device must be able to verify the
	username in the Mail Preferences dialog at startup time. This means the
	postoffice, on the AppleShare volume, must be available so that the Notifier can
	access the local user files on the postoffice, the ACCESS*.GLB files. If this
	check fails, the Notifier will not load.
	
	STATUS
	======
	
	Microsoft has confirmed this to be problem in version 3.0 of Microsoft Mail for
	PC Networks, Macintosh workstation. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: 3.00 err msg errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0
	
	=============================================================================
	
