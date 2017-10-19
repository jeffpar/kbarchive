---
layout: page
title: "Q85453: Windows 3.0 Logo Screen Appears When Starting Windows 3.1"
permalink: /kb/085/Q85453/
---

## Q85453: Windows 3.0 Logo Screen Appears When Starting Windows 3.1

	Article: Q85453
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from an earlier version of Windows to a later version of
	Windows or Windows for Workgroups, the logo screen (which is displayed with you
	start Windows or Windows for Workgroups) is not updated.
	
	CAUSE
	=====
	
	This problem occurs when the Windows SYSTEM subdirectory contains outdated
	versions of the VGALOGO.RLE and VGA.DRV files.
	
	RESOLUTION
	==========
	
	To correct this problem, expand the VGALOGO.RLE and VGA.DRV files from the
	latest Windows or Windows for Workgroups disks.
	
	MORE INFORMATION
	================
	
	The following table shows the correct file sizes and dates for VGALOGO.RLE:
	
	Windows 3.1       Windows 3.11       WFWG 3.1          WFWG 3.11
	---------------------------------------------------------------------
	
	26,778/3-10-92    26,778/12-31-93    35,704/9-30-92    35,784/11-1-93
	
	The following table shows the correct file sizes and dates for VGA.DRV:
	
	Windows 3.1       Windows 3.11       WFWG 3.1          WFWG 3.11
	---------------------------------------------------------------------
	
	73,200/3-10-92    73,200/12-31-93    73,200/9-30-92    73,200/11-1-93
	
	To have the Windows or Windows for Workgroups 3.1 or 3.11 logo screen appear,
	expand these files from the original Windows or Windows for Workgroups 3.1 or
	3.11 disks.
	
	The EXPAND utility should be installed in the Windows directory. With the
	appropriate disk in drive A, enter the following commands at the MS-DOS command
	prompt (press ENTER after each line):
	
	  expand a:\vgalogo.rl_ c:\windows\system\vgalogo.rle
	  expand a:\vga.dr_ c:\windows\system\vga.drv
	
	After you have expanded the files, start Windows and check for the new logo
	screen.
	
	If the new logo screen still does not appear, the Windows 3.1 (or 3.11) VGA
	display driver may not be installed. To install the VGA display driver follow
	these steps:
	
	1. Quit Windows.
	
	2. Change to the C:\WINDOWS directory and type "setup" (without the quotation
	  marks).
	
	3. Check the Display setting for either an OEM display driver or the VGA version
	  3.0 driver. If either of these appear, you must install the new Windows 3.1
	  VGA driver with the following steps:
	
	  a. Use the ARROW keys to select Display, then press ENTER.
	
	  b. Select VGA from the list of video drivers, then press ENTER.
	
	  c. Accept the configuration and insert the appropriate Windows disk.
	
	4. After the VGA display driver is installed, restart Windows.
	
	Additional query words: 3.10 3.1x 3.11 banner logo video
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
