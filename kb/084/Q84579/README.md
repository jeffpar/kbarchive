---
layout: page
title: "Q84579: Invalid VxD Dynamic Link Call to Device Number 000A"
permalink: /kb/084/Q84579/
---

## Q84579: Invalid VxD Dynamic Link Call to Device Number 000A

	Article: Q84579
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbsetup kbdisplay kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After completing Setup, you receive the following error when attempting to start
	Microsoft Windows 3.1 in 386 enhanced mode
	
	  Cannot find a device file that may be needed to run Windows in 386 enhanced
	  mode.
	
	  You need to run the Setup program again.
	  Vxxxxxxx.386
	  Press a key to continue
	
	where Vxxxxxxx.386 is the name of the virtual device driver that Windows cannot
	find. After you press a key, the following message appears:
	
	  Invalid VxD dynamic link call to device number 000A, service 0007.
	  Your Windows configuration is Invalid. Run the Windows Setup program again to
	  correct this problem.
	
	Device number 000A means that the error was caused by a call to the virtual
	display device referenced in the [386Enh] section of the SYSTEM.INI file. The
	missing device is listed in the [386Enh] section in a statement similar to one
	of the following:
	
	       display=*VDDVGA
	
	-or-
	
	       display=Vxxxxxxx.386
	
	CAUSE
	=====
	
	These errors occur after you upgrade from Windows 3.0 to Windows 3.1. Windows
	3.1 may not always update the valid virtual display driver (VDD) with the new
	version from the original Windows 3.1 disks.
	
	WORKAROUND
	==========
	
	The following steps outline the location of the proper virtual display driver
	and tell you where it should be located so that Windows can find it.
	
	NOTE: The following steps apply ONLY to video drivers that are shipped with
	Windows 3.1. If a third-party display driver is used, these steps should still
	work, but all references to SETUP.INF should be replaced with OEMSETUP.INF
	(located on the third-party driver disk) along with the virtual device driver.
	
	1. Print or view the SETUP.INF file. The SETUP.INF file is located in the
	  Windows\SYSTEM directory. The SETUP.INF file is a text file, but it is too
	  large to be edited in Notepad. You can view it in Write, but be absolutely
	  sure you select the No Conversion button when opening the file so it is not
	  converted to Write's format.
	
	2. Check the [DISPLAY] section of SETUP.INF for your video mode to determine
	  which VDD should be used. (The VDD should either be *VDDVGA or
	  Vxxxxxxx.386.)
	
	  NOTE: The format of the line in SETUP.INF can be found at the beginning of the
	  [DISPLAY] section.
	
	3. If the proper VDD is *VDDVGA, change the display= line in the [386Enh]
	  section of the SYSTEM.INI file as follows and go to step 5.
	
	        display=*VDDVGA
	
	4. If the VDD referenced is Vxxxxxxx.386, you need to expand the correct file
	  from the original Windows disks.
	
	  NOTE: The name of the file is Vxxxxxxx.38_ and you must use the EXPAND.EXE
	  program from Windows Disk 3 to expand it. Use the following command to expand
	  the file to the Windows\SYSTEM directory (this example assumes that your
	  Windows directory is named "WINDOWS":
	
	        expand a:vxxxxxxx.38_ c:\windows\system\vxxxxxxx.386
	
	5. Restart Windows.
	
	If the procedure above doesn't correct the problem, try expanding the WIN386.EXE
	file from your original Windows 3.1 installation disks. If the WIN386.EXE file
	on your system is corrupted, it can cause the symptoms mentioned above.
	
	Additional query words: 3.10 3.11 VxD EGA VGA
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
