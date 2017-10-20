---
layout: page
title: "Q88759: Using the Quadram EGA Prosync Card with Windows"
permalink: /kb/088/Q88759/
---

## Q88759: Using the Quadram EGA Prosync Card with Windows

{% raw %}

	Article: Q88759
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to National Semiconductor, Microsoft Windows versions 3.0 and 3.0a are
	compatible with the Quadram EGA Prosync that has an EPROM and four switches. If
	you have the video card with six switches, you need to upgrade the EPROM.
	
	The Windows EGA.SYS file is not compatible with this card and should not be
	loaded. The symptoms of EGA.SYS being loaded include screen distortion when the
	mouse is moved and a possible system hang when switching to MS-DOS-based
	applications.
	
	This card only supports CGA. Windows 3.1 does not ship with CGA drivers, and has
	only limited support for CGA. Windows 3.0 shipped with CGA drivers.
	
	MORE INFORMATION
	================
	
	An earlier EPROM may cause Windows to experience problems shelling out to the
	MS-DOS command prompt. When this occurs, the error message "386 display type
	mismatch" is displayed.
	
	For more information on this error message, query on the following words in the
	Microsoft Knowledge Base:
	
	  386 and display and type and mismatch
	
	The Quadram products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 3.00 3.00a erasing locking freezing 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
