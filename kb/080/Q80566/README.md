---
layout: page
title: "Q80566: MS-DOS Shell Flashes with Metheus Display Card"
permalink: kb/080/Q80566/
---

## Q80566: MS-DOS Shell Flashes with Metheus Display Card

	Article: Q80566
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Metheus technical support, the MS-DOS Shell screen may flash the
	display boxes if Shell is configured for either VGA or EGA when using the
	Megheus graphics card model 1104 or Premier 1Mb.
	
	MORE INFORMATION
	================
	
	If you are using the Metheus graphics card model 1104 or Premier 1Mb and have
	configured Shell to use VGA or EGA mode, the display may flash the list boxes
	where files names and directories are listed. To correct this problem, you need
	to configure Shell for a CGA resolution.
	
	To reconfigure Shell, do the following:
	
	1. Expand the file CGA.GR_ (on disk 3 [5.25-inch set] or disk 2 [3.5-inch set])
	  to the MS-DOS directory on your hard drive with the following command:
	
	     expand a:\cga.gr_ c:\dos\dosshell.grb
	
	2. Expand the file CGA.IN_ (on disk 3 [5.25-inch set] or disk 2 [3.5-inch set])
	  to the MS-DOS directory on your hard drive with the following command:
	
	     expand a:\cga.in_ c:\dos\dosshell.ini
	
	3. Expand the file CGA.VI_ (on disk 2 [5.25-inch set] or disk 1 [3.5-inch set)
	  to the MS-DOS directory on your hard drive with the following command:
	
	     expand a:\cga.vi_ c:\dos\dosshell.vid
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	REFERENCES
	==========
	
	Metheus technical support: (800) 638-4387
	
	Additional query words: 5.00 5.00a 6.00dosshell MB 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	
