---
layout: page
title: "Q164200: Writer 2: How to Mute All Sound In Creative Writer"
permalink: kb/164/Q164200/
---

## Q164200: Writer 2: How to Mute All Sound In Creative Writer

	Article: Q164200
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Creative Writer for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files located
	in the Windows folder.
	
	SUMMARY
	=======
	
	The following article describes how to turn off (mute) all sounds within
	Creative Writer. This can be done by editing the Windows registry.
	
	MORE INFORMATION
	================
	
	To turn off the sounds in Creative Writer, you can change the Mute value to 1 in
	the HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Microsoft Kids\ Creative Writer key in
	the Windows 95 registry.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should make a
	backup copy of the registry files (System.dat and User.dat) before you edit the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk. The registry is a system-wide database used for storing
	Windows 95 software and hardware configuration settings.
	
	To mute all sounds in Creative Writer, do the following:
	
	1. Backup your System.dat and User.dat files.
	
	2. Click the Start button, and then click Run.
	
	3. Type the following and click OK:
	
	  "regedit" (without the quotation marks)
	
	4. Change the Mute value to 1 in the HKEY_LOCAL_MACHINE\SOFTWARE\
	  Microsoft\Microsoft Kids\Creative Writer key in the Windows 95 registry by
	  doing the following:
	  a. When the Registry Editor appears, double-click the HKEY_LOCAL_MACHINE
	     folder.
	
	  b. Double-click the SOFTWARE folder, and then double-click the Microsoft
	     folder.
	
	  c. Double-click the Microsoft Kids folder, and then double-click the Creative
	     Writer folder.
	
	  d. Double-click the Mute value.
	
	  e. Change the Value Data from 0 to 1, and then click OK.
	
	5. Close the Registry Editor and launch Creative Writer.
	
	The sounds in Creative Writer are now disabled.
	
	NOTE: If you do not have a sound card installed in your computer, you may receive
	the following error message which means you do not have a sound card installed:
	
	  Creative Writer could not access a sound card on your computer.
	  The sound card is missing, or one of the sound devices (sound effects or MIDI
	  music) is incompatible.
	
	Additional query words: kids mskids writer cw2 cw2.0 2 turn off
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbCreativeWriter200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
