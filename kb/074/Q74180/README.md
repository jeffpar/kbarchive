---
layout: page
title: "Q74180: MS-DOS: Compaq Plasma Display Requires MONO.INI File"
permalink: /kb/074/Q74180/
---

## Q74180: MS-DOS: Compaq Plasma Display Requires MONO.INI File

{% raw %}

	Article: Q74180
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Compaq plasma display requires the MONO.INI file for MS-DOS Shell; typically
	the MS-DOS 5 and 6 Upgrades use the EGA.INI file instead.
	
	MORE INFORMATION
	================
	
	Do the following to install the MONO.INI file:
	
	1. Insert the disk that has the file named EXPAND.EXE into a floppy disk drive
	  (for example, drive A).
	
	2. Type the following (assuming that DOS is the directory containing the MS-DOS
	  files):
	
	  " copy a:expand.exe c:\dos " (without the quotation marks)
	
	3. Move to the DOS directory by typing:
	
	  " cd\
	  cd dos " (without the quotation marks)
	
	4. Insert the Upgrade disk that has the file named MONO.IN_ into a floppy disk
	  drive (for example, drive A).
	
	5. Type the following:
	
	  " expand a:\MONO.IN_ c:\dos\DOSSHELL.INI " (without the quotation marks)
	
	6. Then type:
	
	  " expand a:\MONO.GR_ c:\dos\DOSSHELL.GRB " (without the quotation marks)
	
	The Compaq product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 5.00 5.00a 6.00 third-party 3rdparty hardware dosshell shell
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	

{% endraw %}
