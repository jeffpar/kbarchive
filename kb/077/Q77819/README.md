---
layout: page
title: "Q77819: My Computer Hangs When Using MS-DOS Shell Task Swapper"
permalink: /kb/077/Q77819/
---

## Q77819: My Computer Hangs When Using MS-DOS Shell Task Swapper

{% raw %}

	Article: Q77819
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you're using Task Swapper to switch between programs in MS-DOS Shell, your
	computer stops responding (hangs).
	
	CAUSE
	=====
	
	When MS-DOS Setup upgrades your computer, it determines your monitor type and
	installs a file that saves information about the screen display when you switch
	from one program to another. If Setup incorrectly determines your monitor type,
	or you change your monitor after installing MS-DOS, your computer may hang when
	you switch between programs.
	
	RESOLUTION
	==========
	
	If you are running two or more programs that use expanded memory, call Microsoft
	Product Support Services to obtain a new DOSSWAP.EXE file. The updated file
	corrects problems associated with switching between programs that use expanded
	memory.
	
	If your computer hangs when you try to switch between programs that do not use
	expanded memory, do the following:
	
	1. Make sure you are not running both MS-DOS Shell and Windows. Use either
	  MS-DOS Shell or Windows to switch between programs.
	
	2. Reinstall the DOSSHELL.GRB file in the directory that contains your MS-DOS
	  files. To do so, carry out the procedure described in the following section.
	
	Reinstalling the DOSSHELL.GRB File
	----------------------------------
	
	The MS-DOS 5 Upgrade disks and the MS-DOS 6.0 and 6.2 Supplemental disks include
	compressed files that are required for MS-DOS Shell to work with different kinds
	of monitors. To reinstall the DOSSHELL.GRB file, first determine which file is
	used with your monitor. Then expand and copy the file to the directory that
	contains your MS-DOS files.
	
	The following list shows the compressed file needed for each of the monitors that
	MS-DOS Shell supports. Note that the name of the file on the Upgrade disk is not
	DOSSHELL.GRB. Setup renames the file when it copies the file to the directory
	that contains your MS-DOS files.
	
	 If you have this type of monitor       Expand this file
	 --------------------------------       ----------------
	
	 MONO                                   MONO.GR_
	 CGA                                    CGA.GR_
	 EGA                                    EGA.GR_
	 EGA MONO                               EGAMONO.GR_
	 VGA, Super VGA. XGA, 8514, and other   VGA.GR_
	   high-resolution monitors
	 MONO (VGA, Super VGA. XGA, 8514, and   VGAMONO.GR_
	   other high-resolution monitors
	 Hercules                               HERC.GR_
	
	To reinstall the DOSSHELL.GRB file:
	
	1. Using the preceding list, determine which file you need to copy from the
	  Upgrade disks.
	
	2. If you are using MS-DOS 5.0, open the PACKING.LST file. This file lists the
	  contents of each disk. The file is in the directory that contains your MS-DOS
	  files. You can find PACKING.LST on Disk 3 (5.25-inch disks) or Disk 2
	  (3.5-inch disks).
	
	  If you are using MS-DOS 6.0 or 6.2, the MS-DOS Shell files are on the
	  Supplemental Disk. For more information on obtaining the Supplemental Disk,
	  see the coupon in the back of your printed MS-DOS documentation.
	
	3. Find the name of the file you need for your monitor, and write down the
	  location of the file.
	
	4. Use the following syntax to expand and copy the appropriate .GR_ file from
	  the Upgrade disks to the directory that contains your MS-DOS files:
	
	  expand <drive1:><path1><filename>
	  <drive2:><path2>dosshell.grb
	
	  The <drive1:><path1> parameter specifies the location of the
	  compressed file you want to expand. The <filename> parameter specifies
	  the name of the compressed file. The <drive2:><path2> parameter
	  specifies the location of the expanded file.
	
	  NOTE: Make sure you name the file DOSSHELL.GRB.
	
	  For example, if the VGA.GR_ file is on a disk in drive A, and you want to
	  expand the file to the \DOS directory on drive C, type the following at the
	  MS-DOS command prompt:
	
	  " expand a:\vga.gr_ c:\dos\dosshell.grb" (without the quotation marks)
	
	
	Additional query words: 5.00 5.00a 6.00 switcher dosshell lock blank beep
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	

{% endraw %}
