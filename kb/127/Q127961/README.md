---
layout: page
title: "Q127961: PC WRmt: Err Msg: Occurred Preventing Complete Installation..."
permalink: kb/127/Q127961/
---

## Q127961: PC WRmt: Err Msg: Occurred Preventing Complete Installation...

	Article: Q127961
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install version 3.2 of Microsoft Mail Remote for Windows on a system
	that already contains version 3.2 of Microsoft Mail for Windows, you may receive
	the following error near the end of setup before you are asked to provide a data
	disk:
	
	  An error occurred preventing complete installation of MS Mail
	
	Setup does not complete, and it has placed a MSMAILPV.INI file in the \WINDOWS
	directory.
	
	The MSMAILPV.INI searches for a file called FILES.INI in the following
	directories:
	
	  \WINDOWS\MSMAIL \MSRMT
	  \WINDOWS\MSMAIL \MSMAIL
	
	FILES.INI is used to provide transport information.
	
	RESOLUTION
	==========
	
	1. Backup the MSMAILPV.INI file.
	
	2. Add the following to the [Transport] section of the MSMAILPV.INI file:
	
	  MSRMT=Microsoft Mail Remote
	
	  Save the file.
	
	3. Execute MAILDRV.EXE in the Microsoft Mail Remote installation directory.
	
	4. Select Microsoft Mail Remote in the Installed Mail Drivers Section of the
	  Mail System Selector dialog box. Select the Set As Current Mail Driver
	  button, or double-click the Microsoft Mail Remote driver.
	
	  The setup should complete normally.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
