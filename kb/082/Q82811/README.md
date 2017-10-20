---
layout: page
title: "Q82811: Adding Screen Savers to Control Panel's Desktop Dialog Box"
permalink: /kb/082/Q82811/
---

## Q82811: Adding Screen Savers to Control Panel's Desktop Dialog Box

{% raw %}

	Article: Q82811
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Additional screen savers can be added to Control Panel's Desktop dialog box list
	by copying the screen saver files into the WINDOWS or WINDOWS\SYSTEM directory.
	(The files can be copied using File Manager.)
	
	The Microsoft Windows Entertainment Pack's IdleWild screen savers will also be
	added to the Desktop dialog box list provided that the system is configured
	properly (see below).
	
	MORE INFORMATION
	================
	
	Control Panel scans the WINDOWS and WINDOWS\SYSTEM directories for files with
	the *.SCR extension. It also checks the header of each *.SCR file for a specific
	code indicating that it is a Windows 3.1 compatible screen saver. If the screen
	saver meets this criterion, its descriptive name will be listed in the Desktop
	dialog box's Screen Saver list box.
	
	For IdleWild screen savers to be listed in the Control Panel Desktop dialog box,
	the following conditions must be met:
	
	1. IWLIB.DLL must be in the same directory as the IdleWild screen saver files
	  (*.IW).
	
	2. The directory with IWLIB.DLL and the IdleWild screen savers must either be on
	  the MS-DOS path (which is set in the AUTOEXEC.BAT file) or they must be
	  located in the WINDOWS or WINDOWS\SYSTEM directory.
	
	3. The file SCRNSAVE.SCR (provided with Windows 3.1) must be in the WINDOWS or
	  WINDOWS\SYSTEM directory.
	
	Additional query words: 3.10 3.1 idle wild
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
