---
layout: page
title: "Q83509: Installing Mouse Systems Driver for COM1 under Windows 3.1"
permalink: /kb/083/Q83509/
---

## Q83509: Installing Mouse Systems Driver for COM1 under Windows 3.1

{% raw %}

	Article: Q83509
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install Microsoft Windows operating system version 3.1 without upgrading
	a Windows 3.0 installation, you will have the following two options for a Mouse
	Systems mouse.
	
	- Mouse Systems serial mouse on COM2
	
	- Mouse Systems serial or bus mouse
	
	If Windows does not recognize your mouse on COM1 and the Windows 3.0 disks are
	available, you can install the earlier Windows 3.0 Mouse Systems driver written
	for COM1.
	
	MORE INFORMATION
	================
	
	To install the Mouse Systems driver for COM1 from Windows 3.0, do the
	following:
	
	1. Edit either the SETUP.INF or the OEM0.INF file. Use a text editor or the
	  Windows-based application Write (WRITE.EXE). If Write is used, be sure to
	  Choose No Conversion when opening the file, so it will be saved as a text
	  file when you exit.
	
	2. Add the following two lines to the [Pointing.Device] section. These lines
	  should appear in the .INF file as one line each, not word wrapped.
	
	       msmouse3 = 1:msmouse1.drv,"Mouse Systems (or VisiOn) connected to
	       COM1:", x:*vmd
	
	       msmouse4 = 1:msmouse2.drv,"Mouse Systems (or VisiOn) connected to
	       COM2:", x:*vmd
	
	3. Copy the following two files to the WINDOWS\SYSTEM directory from the Windows
	  3.0 disks:
	
	  MSMOUSE1.DRV
	  MSMOUSE2.DRV
	
	4. Run the maintenance mode of Windows setup to install the Mouse Systems
	  driver. (See chapter 15 of the "Microsoft Windows User's Guide" for version
	  3.1).
	
	KBCategory: kbhw kb3rdparty
	KBSubcategory: win31
	
	Additional query words: 3.10 com 1 2
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
