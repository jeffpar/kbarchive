---
layout: page
title: "Q148643: PRB: Error: Too Many Files Open"
permalink: /kb/148/Q148643/
---

## Q148643: PRB: Error: Too Many Files Open

{% raw %}

	Article: Q148643
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error if Visual FoxPro reaches its file handle
	limit of 255:
	
	  Program Error
	  Too many files open.
	
	This error can occur when you are close to the limit of 255 files being opened.
	The maximum number of files that can be opened in Visual FoxPro is 255, but the
	error can occur before 255 because Visual FoxPro opens certain files upon
	startup that use some of the file handles.
	
	RESOLUTION
	==========
	
	To prevent the error from occurring, do not open that many files. If the number
	of files that are being opened is close to the 255 file limit, open and close
	files as necessary. To track how many files are open at any given time, create a
	variable that can store the number of files that already have been opened. For
	example, if you are opening a database container and one table that has a memo
	field and an index, 6 files have been opened at this time. They are the DBC,
	DCT, and DCX files of the database container, and the DBF, CDX, and FPT files of
	the table. By adding and subtracting the number of files that are opened and
	closed to the variable each time, you can evaluate when to close any database
	containers and tables that are not in use so the error will not occur.
	
	NOTE: This error does not occur as quickly in Visual FoxPro 5.0 because it has
	been designed to open as many files as the operating system allows instead of
	the 255 file limit currently in Visual FoxPro 3.0.
	
	STATUS
	======
	
	This behavior is by design. Visual FoxPro 3.0 can only open a maximum of 255
	files.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code sample to demonstrate this behavior:
	
	     FOR i = 1 TO 255
	      = INKEY(.001)   && Gives create cursor time to keep up
	      SELECT (i)
	      CREATE CURSOR ("T" + SUBSTR(SYS(2015), 3, 7)) (xyz c(10))
	      WAIT WINDOW STR(i) + STR(SELECT()) NOWAIT
	     NEXT
	
	When you run this code in a program (.prg) file, watch the Wait Window. Note that
	the number count stops and the error occurs around 245 to 250. The exact number
	in the display (Wait window) may be different depending on how many files Visual
	FoxPro has open when you run the code sample.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	

{% endraw %}
