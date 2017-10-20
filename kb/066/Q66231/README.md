---
layout: page
title: "Q66231: How to Insert Spaces Before a Block of Text in PWB"
permalink: /kb/066/Q66231/
---

## Q66231: How to Insert Spaces Before a Block of Text in PWB

{% raw %}

	Article: Q66231
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is sometimes desirable to indent or move over a block of text in the
	Programmer's WorkBench (PWB) or the Microsoft (M) Editor. The following steps
	can be used to insert spaces before a block of text to indent it:
	
	1. Get into boxarg mode. You can select this mode from the Edit menu under the
	  PWB, or select the boxstream function under the M Editor.
	
	2. Highlight the area you want to contain the spaces. This may be anywhere in
	  the file.
	
	3. Select the linsert function. By default, this is CTRL+N.
	
	The highlighted area should now be moved over and replaced by spaces.
	
	MORE INFORMATION
	================
	
	You don't have to be in boxarg mode for this to work; linsert always treats its
	argument as a boxarg regardless of the current mode. However, the highlight on
	the screen won't match the area that is going to be inserted unless you use
	boxarg mode.
	
	Also, ldelete can be used to unindent a block of text. However, you must be in
	boxarg or streamarg mode for it to work correctly. In linearg mode, it will
	delete entire lines.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
