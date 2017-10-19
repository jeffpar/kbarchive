---
layout: page
title: "Q155319: Cannot Install Modem After Removing and Reinstalling RAS"
permalink: /kb/155/Q155319/
---

## Q155319: Cannot Install Modem After Removing and Reinstalling RAS

	Article: Q155319
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove and reinstall the remote access service (RAS) in Windows NT
	4.0, the Install New Modem Wizard may be unable to detect your modem.
	
	CAUSE
	=====
	
	Removing and reinstalling RAS in Windows NT 4.0 causes the Modem.inf file to be
	overwritten. Any changes or modifications made to the previous Modem.inf file
	are lost.
	
	NOTE: The Modem.inf file is not overwritten during the normal Setup process.
	During Setup, the current versions of the Modem.inf, Switch.inf, and Pad.inf
	files are not altered, and new versions of these files are saved as Modem.new,
	Switch.new, and Pad.new.
	
	RESOLUTION
	==========
	
	If your modem is not on the Windows NT 4.0 Hardware Compatibility List (HCL),
	use one of the following procedures to install your modem:
	
	- Obtain an .inf file that is designed for Windows NT 4.0 from the modem
	  manufacturer. Follow the manufacturer's instructions for installing the modem
	  in Windows NT 4.0. Contact the modem manufacturer for assistance with this
	  procedure.
	
	- Install your modem as a standard modem using the following steps:
	
	  1. In Control Panel, double-click Modems.
	
	  2. The Install New Modem Wizard starts automatically if you have not
	     installed a modem before. If the wizard does not start automatically, you
	     have installed a modem previously and you should click Add to start the
	     wizard.
	
	  3. Click "Don't detect my modem; I will select it from a list," and then
	     click Next.
	
	  4. In the Manufacturers box, click Standard Modem Types. In the Models box,
	     click a model that corresponds to the speed of your modem, and then follow
	     the instructions in the Install New Modem Wizard.
	
	Additional query words: prodnt dial-up networking DUN
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
