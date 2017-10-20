---
layout: page
title: "Q71317: Restoring Color Schemes in the Control Panel"
permalink: /kb/071/Q71317/
---

## Q71317: Restoring Color Schemes in the Control Panel

{% raw %}

	Article: Q71317
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Color schemes removed from the Color section of Control Panel are deleted from
	the CONTROL.INI file. To restore a color scheme, the color scheme must be added
	back to the CONTROL.INI file.
	
	For example, if you remove the Designer color scheme, the information for the
	Designer color scheme is deleted from the CONTROL.INI file. To regain the lost
	color scheme, it must be added back to the CONTROL.INI file.
	
	MORE INFORMATION
	================
	
	In Windows 3.0, the preferred way to regain a color scheme is to expand the
	CONTROL.INI file from the Windows Setup Disk to the WINDOWS directory on the
	hard disk. This replaces the CONTROL.INI with the defaults shipped with Windows.
	Any custom color schemes will be lost.
	
	In Windows 3.1, CONTROL.SR_ is the file that contains the color scheme that
	should be expanded and renamed to CONTROL.INI.
	
	The alternative involves modifying the CONTROL.INI file manually.
	
	How to Expand the CONTROL.INI File for Windows 3.0
	--------------------------------------------------
	
	1. Switch to the WINDOWS directory on the hard disk.
	
	2. Insert the Windows Setup Disk #2 (1.2 MB 5.25-inch, 720K 3.5-inch, or 360K
	  5.25-inch formats) in drive A.
	
	3. Copy EXPAND.EXE by typing:
	
	  copy a:\expand.exe
	
	4. Copy and expand the CONTROL.INI file by typing:
	
	  expand a:\control.ini control.ini
	
	  NOTE: If you have the 360K 5.25-inch format disks, CONTROL.INI is on Disk #5.
	
	  This copies the Windows default CONTROL.INI over the CONTROL.INI file on the
	  hard disk.
	
	  WARNING: All custom color schemes will be lost.
	
	How to Expand the CONTROL.INI File for Windows 3.1
	--------------------------------------------------
	
	1. Switch to the WINDOWS directory on the hard disk.
	
	2. If the EXPAND.EXE file is not on your hard drive, insert the Windows Setup
	  Disk #3 (1.44 MB 3.5-inch and 1.2 MB 5.25-inch formats) or Disk #5 (720K
	  3.5-inch format) into drive A.
	
	3. Copy EXPAND.EXE to the WINDOWS subdirectory by typing the following:
	
	  copy a:\expand.exe c:\windows
	
	4. Copy and expand the CONTROL.SR_ file from Windows Setup Disk #5 (1.44 MB
	  3.5-inch format), Disk #6 (1.2 MB 5.25-inch format), or Disk #9 (720K
	  3.5-inch format) into drive A, and type the following:
	
	  expand a:\control.sr_ c:\windows\control.ini
	
	  This expands the CONTROL.SR_ file and replaces the Windows default CONTROL.INI
	  file with the CONTROL.INI file on the hard disk.
	
	  WARNING: All custom color schemes will be lost.
	
	How to Save Custom Color Schemes
	--------------------------------
	
	1. Follow the steps listed above, except step 4. At step 4, type the following:
	
	  expand a:\control.ini control.old
	
	2. Run Notepad.
	
	3. Open CONTROL.OLD.
	
	4. Find the [color schemes] section and select the color scheme that is desired.
	  Copy it to the Clipboard.
	
	5. Open CONTROL.INI.
	
	6. Find the [color schemes] section and paste the missing color scheme.
	
	Additional query words: 3.00 3.00a 3.1 3.10 win31 3.11 restore remove delete reinstall
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
