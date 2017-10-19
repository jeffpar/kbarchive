---
layout: page
title: "Q117922: BUG: CONTROL+C, CONTROL+X, &amp; CONTROL+V Don't Always Work"
permalink: /kb/117/Q117922/
---

## Q117922: BUG: CONTROL+C, CONTROL+X, &amp; CONTROL+V Don't Always Work

	Article: Q117922
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FoxPro for Windows and MS-DOS shortcut keys that use the CONTROL (CTRL) key
	combined with C, X, or V for copying, cutting, and pasting don't work in all
	areas of FoxPro for Macintosh.
	
	WORKAROUND
	==========
	
	Use the COMMAND key instead of the CONTROL key for these shortcuts. (The COMMAND
	key usually has the picture of the Apple logo and a clover-leaf on it).
	
	The CONTROL key is not the standard modifier key for these actions on the
	Macintosh, the COMMAND key is. Hence, the COMMAND key can be used in more
	places.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FoxPro versions 2.5b and 2.5c
	for Macintosh.
	
	MORE INFORMATION
	================
	
	In FoxPro for Windows and MS-DOS, the CTRL shortcut key combinations work
	consistently in all components to copy, cut, or paste objects and text. The key
	combination CTRL+C performs a copy, CTRL+X performs a cut, and CTRL+V performs a
	paste operation.
	
	The SET KEYCOMP setting has no effect on this behavior.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, type "MODIFY FILE" (without the quotation marks).
	
	2. In the "Untitled" file window, type "TEST" (without the quotation marks) then
	  select it.
	
	3. Press CONTROL+C to copy the selection.
	
	4. From the File menu, choose Save As.
	
	5. In the Save Document As text box, press CONTROL+V.
	
	Note that a hollow box appears on the screen, rather than the text copied in step
	3. However, pressing COMMAND+V will paste "TEST" into the Save Document As text
	box.
	
	Additional query words: VFoxMac FoxMac buglist2.50b buglist2.50c buglist3.00b short cut hot key hotkey akz
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
