---
layout: page
title: "Q139771: Fatal Exception Errors and Random Characters Using ATI Mach 32"
permalink: /kb/139/Q139771/
---

## Q139771: Fatal Exception Errors and Random Characters Using ATI Mach 32

	Article: Q139771
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Windows 95 ATI Mach 32 video card drivers, you may see
	random characters on the screen or experience random fatal exception 0E errors.
	
	CAUSE
	=====
	
	This problem can be caused by timing errors between the video card and the
	computer when too many of the card's performance features are enabled. ATI
	Technical Support has confirmed that the problem is caused by subtle differences
	in bus timing when an ISA card is being used. The problem is computer dependent.
	On most computers, the bus can handle the increased demands created by the
	performance options, but some computers cannot. The video card configuration
	options exist to deal with these instances.
	
	RESOLUTION
	==========
	
	Disable one or more of the performance settings on the video card using the
	Install.exe program included with the ATI video card. For information about
	configuring the performance settings or using the Install.exe tool, please
	consult the video card's documentation or manufacturer.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
