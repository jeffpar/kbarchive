---
layout: page
title: "Q111458: Changing to EGA or Hercules Video Support in WFWG 3.11"
permalink: /kb/111/Q111458/
---

## Q111458: Changing to EGA or Hercules Video Support in WFWG 3.11

{% raw %}

	Article: Q111458
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If your system requires EGA or Hercules video support for Windows for Workgroups
	version 3.11, you have two options for installing this support:
	
	- Install Windows 3.1 or Windows for Workgroups 3.1, choose the correct video
	  support, and then upgrade to Windows for Workgroups 3.11.
	
	  -or-
	
	- Rename the SETUP.INF file from Windows for Workgroups 3.1 to OEMSETUP.INF and
	  then select the correct video driver.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups 3.11 currently does not include video drivers for EGA and
	Hercules monochrome display options. Use one of the options listed below to
	provide the video support you need.
	
	Option 1
	--------
	
	Install Windows 3.1 or Windows for Workgroups 3.1, which both have the video
	support needed. After you install either operating system with the video support
	you require, upgrade your system to Windows for Workgroups 3.11, maintaining the
	current video driver selected in version 3.1.
	
	Option 2
	--------
	
	Before you begin this procedure, create a new directory on your hard disk drive.
	(You can also use your TEMP directory.)
	
	1. Copy the SETUP.INF file from Windows for Workgroups 3.1 Disk 1 and rename it
	  OEMSETUP.INF in your newly created directory.
	
	2. At the MS-DOS command prompt, run SETUP.EXE from the Windows directory (or
	  from Windows for Workgroups 3.11 Disk 1 if this is a new installation) and
	  select the Other Display option from the list of video drivers. When Setup
	  prompts you for a location, provide the path to the directory in which the
	  "new" OEMSETUP.INF file exists. After you select the desired driver, Setup
	  prompts you for the appropriate version 3.1 disks to copy the required files.
	
	3. When Setup is finished copying the files, remove the OEMSETUP.INF file from
	  the newly created directory. You must also delete the OEMSETUP.INF or
	  OEMx.INF file from the Windows SYSTEM subdirectory that matches the "new"
	  OEMSETUP.INF's file size and date in the newly created directory. This
	  prevents version 3.11 driver selections from being overwritten with similar
	  .INF entries that would incorrectly request version 3.1 disks.
	
	Additional query words: quadvga plasma monochrome mcga olivetti att pvc vip tiga 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
