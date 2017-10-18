---
layout: page
title: "Q157543: PRB: Bitmap Editor Distorts Icons and Bitmaps"
permalink: kb/157/Q157543/
---

## Q157543: PRB: Bitmap Editor Distorts Icons and Bitmaps

	Article: Q157543
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtshoot kbide _IK920 kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When editing a bitmap using the Resource Editor, you may observe that icons and
	bitmaps are distorted (lose form and change color) throughout the system. Also,
	the bitmap itself looks distorted in the Resource Editor.
	
	CAUSE
	=====
	
	This is caused by problems in certain video drivers.
	
	RESOLUTION
	==========
	
	Reducing the resolution and/or the number of colors using the display control
	panel applet may work around this problem. There is no fix for this problem at
	this time. Please check the Windows NT, Windows 2000, Windows 95, Windows 98,
	and Windows Millennium Edition (Me) support pages on the Microsoft Web
	(http://www.microsoft.com) for video driver updates.
	
	Additional query words: Icons Bitmaps Resource Editor
	
	======================================================================
	Keywords          : kbtshoot kbide _IK920 kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
