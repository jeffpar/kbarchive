---
layout: page
title: "Q96558: MS-DOS Setup Installs 80386- and 80486- Specific Files"
permalink: /kb/096/Q96558/
---

## Q96558: MS-DOS Setup Installs 80386- and 80486- Specific Files

{% raw %}

	Article: Q96558
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS Setup installs files that are specific to 80386 and 80486 processors even
	if your processor cannot use these files.
	
	MORE INFORMATION
	================
	
	You can delete the following files if you have an 8088 or 8086:
	
	  File(s)        Requires
	  -------        --------
	
	  HIMEM.SYS      80286 and more than 640 kilobytes (K) of RAM
	  SMARTDRV.EXE   HIMEM.SYS
	  LOADFIX.COM    Useful only if using DOS=HIGH
	  MSTOOLS.DLL    Windows 3.1 (or greater) in standard mode
	  SMARTMON.*     Windows 3.1 (or greater) in standard mode
	  DBLWIN.HLP     Windows 3.1 (or greater) in standard mode
	
	Files you can delete if you have an 8088, 8086, or 80286:
	
	  File(s)        Requires
	  -------        --------
	
	  EMM386.EXE     80386 or greater and HIMEM.SYS
	  MEMMAKER.*     80386 or greater
	  CHKSTATE.SYS   80386 or greater (used by MEMMAKER.EXE)
	  SIZER.EXE      80386 or greater (used by MEMMAKER.EXE)
	  VFINTD.386     Windows 3.0 (or greater) in 386 enhanced mode
	  WINA20.386     Windows 3.0 (or greater) in 386 enhanced mode**
	  MONOUMB.386    Windows 3.0 (or greater) in 386 enhanced mode
	
	** NOTE: WINA20.386 is required in versions of Windows later than 3.0 in enhanced
	mode if you are running any Windows 3.0 device drivers. Remove at your own risk.
	
	Additional query words: 6.22 6.00 sizer 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
