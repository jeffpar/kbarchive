---
layout: page
title: "Q66308: PWB's Use of Expanded Memory"
permalink: /kb/066/Q66308/
---

## Q66308: PWB's Use of Expanded Memory

	Article: Q66308
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	The MS-DOS version of the Programmer's WorkBench (PWB) will utilize
	expanded memory to swap its own segment overlays if it detects that
	expanded memory is available in the system. When PWB needs a new
	overlay, the existing overlay in memory is first copied into expanded
	memory. If there is not enough room in expanded memory to copy the
	overlay, the least recently used overlay is discarded to make room for
	it. This scheme allows most overlays to be read from expanded memory
	instead of from disk.
	
	Note that this is the only method by which PWB will take advantage of
	available expanded memory, and that PWB versions 1.0 and 1.1 have no
	internal provisions to make use of extended memory in any way.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS
	Version           : MS-DOS:1.0,1.1
	
	=============================================================================
	
