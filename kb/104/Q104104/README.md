---
layout: page
title: "Q104104: FIX: CodeView for Windows Corrupts Display"
permalink: kb/104/Q104104/
---

## Q104104: FIX: CodeView for Windows Corrupts Display

	Article: Q104104
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The region on the Windows display where CodeView was active is displayed in
	monochrome after CodeView is exited. The rest of the screen is displayed in
	color.
	
	CAUSE
	=====
	
	CodeView affects the Western Digital 90C30 graphic chip and causes the next
	several paints done by Windows to be monochrome; that is, completely black and
	white. This problem occurs with the standard VGA and the standard Super VGA
	drivers that ship with Windows version 3.1.
	
	RESOLUTION
	==========
	
	The colors on the screen can be restored by forcing a repaint in the problem
	region. Try maximizing some application or try going to a full-screen MS-DOS
	session under Windows.
	
	Upgrading the video card BIOS may help prevent the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with CodeView for Windows version
	4.0 and 4.01. The problem has been fixed in CodeView version 4.1 for Windows.
	
	Additional query words: 4.00 MONO Trident SpeedStar DELL GATEWAY AST Power Premium SVGA 90C31
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView400 kbCodeView401
	Version           : :4.0,4.01
	Solution Type     : kbfix
	
	=============================================================================
	
