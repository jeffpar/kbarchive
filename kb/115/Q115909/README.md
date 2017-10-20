---
layout: page
title: "Q115909: PRB: File Open Dialog Doesn't Display Table Copied by Finder"
permalink: /kb/115/Q115909/
---

## Q115909: PRB: File Open Dialog Doesn't Display Table Copied by Finder

{% raw %}

	Article: Q115909
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The File Open dialog box doesn't list a table/.DBF file that has been copied by
	the Macintosh Finder.
	
	CAUSE
	=====
	
	The special DEL key, located under the INS/HELP key of an Apple Extended
	Keyboard II, was used to delete the text " copy" from the table's name. This key
	replaces the selected text with a hollow rectangle that isn't visible with all
	fonts.
	
	In the Finder, this key does not behave as a DELETE key.
	
	WORKAROUND
	==========
	
	Use the DELETE key, located to the right of the "+=" (plus and equal sign) key,
	to delete the text " copy" from the table's name. This key is located where the
	BACKSPACE key is usually located on an MS-DOS system's keyboard.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The DELETE key behaves similarly to the BACKSPACE key on an MS-DOS system's
	keyboard. It either deletes the character to the left of the insertion point or
	all of the selected text.
	
	The behavior of the DEL key varies depending on the program that is running. For
	example, when you are editing text or an object in a FoxPro window, this key
	behaves like the DELETE key.
	
	To view the empty rectangle created by the DEL key in the Finder, open the Views
	Control Panel and change the font in the Font For Views box to the Chicago
	font.
	
	Steps to Reproduce Problem
	--------------------------
	
	These steps assume the following:
	
	- FoxPro is installed in a folder (directory) named "FOXPRO".
	
	- An empty folder named "TEST" exists on the volume.
	
	1. From the Apple menu, choose Control Panel.
	
	2. Double-click Views.
	
	3. In the Font For Views box, select Geneva. Close the Views window.
	
	4. Using the Finder, select the Detail.dbf file located in the FOXPRO\TUTORIAL
	  subfolder.
	
	5. From the File menu, choose Duplicate. This creates a file called "Detail.dbf
	  copy."
	
	6. Drag the "Detail.dbf copy" file to the TEST folder.
	
	7. Select the " copy" (include the preceding space) portion of the file's name.
	  Press the DEL key located under the INS/HELP key to delete this part of the
	  name, so that the file's name now appears to be "Detail.dbf" (without the
	  quotation marks).
	
	8. Start FoxPro.
	
	9. From the File menu, choose Open. Verify that the Type box shows Table/DBF.
	  Open the TEST folder.
	
	Note that Detail.dbf is not listed.
	
	Additional query words: VFoxMac FoxMac square empty show database table akz
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	

{% endraw %}
