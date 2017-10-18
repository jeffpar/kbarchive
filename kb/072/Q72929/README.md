---
layout: page
title: "Q72929: Windows Resource Kit HDC Memory Viewer and Windows 3.0"
permalink: kb/072/Q72929/
---

## Q72929: Windows Resource Kit HDC Memory Viewer and Windows 3.0

	Article: Q72929
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The hDC Memory Viewer is a utility included as part of the Windows Resource Kit.
	This utility gives you a graphic display of how your system's memory (including
	extended and expanded memory) is being used. It also uses an icon to display the
	amount of free memory you have available. The following is a description of how
	Memory Viewer reports the memory usage under Windows.
	
	MORE INFORMATION
	================
	
	The amount of memory use being reported in the DOS area includes the memory used
	by any TSR (terminate-and-stay-resident) programs and drivers, including
	SMARTDrive or RAMDrive.
	
	When the Include Discardables check box is selected in the Options File menu in
	the hDC Memory Viewer, it will display the sum amount of memory including code
	segments that Windows has marked as "discardable." Not all the code segments
	that an application requires are needed at any given moment. When these unused
	code segments are marked as discardable, Windows can use that area of memory for
	another applications. However, it must always save enough memory space so that
	all the applications that are loaded can perform any potential functions that
	they might call. This is where the "Swap Area" listed on the Memory Viewer comes
	in; this is a common "ensure area" that Windows uses to ensure that all
	applications have the potential memory that they may need.
	
	Most Windows-based applications have a large portion of their code segment marked
	as discardable; however, not all Window's-based applications do this.
	
	The Memory Viewer has the option to display memory used by applications, system
	libraries, system fonts, and device drivers. The memory reported in use by
	system libraries (User, GDI, and so on) is an indication of how much system
	resources are being used, but it requires some interpretation. The amount
	reported for each library includes the data segment, any code segments, and any
	objects on the local heap "owned" by that library. Any one of these items can be
	up to 64K (thus the 64K limitation on system resources in Windows 3.0). When
	combined, however, they could be a lot more -- this is why each of the libraries
	can total 100K or more.
	
	REFERENCES
	==========
	
	hDC Corp. Technical Support
	
	"Windows Resource Kit," page 173
	
	KBCategory: kbtool kbdisplay
	KBSubcategory: win30
	
	Additional query words: 3.00 3.00a 3.0a 3.0 WRK win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
