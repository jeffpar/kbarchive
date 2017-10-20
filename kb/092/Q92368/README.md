---
layout: page
title: "Q92368: Asymetrix DayBook/ToolBook Issues and Problems/Solutions"
permalink: /kb/092/Q92368/
---

## Q92368: Asymetrix DayBook/ToolBook Issues and Problems/Solutions

{% raw %}

	Article: Q92368
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The initial release of Microsoft Windows operating system version 3.0 came with
	run-time versions of Asymetrix DayBook and ToolBook. Microsoft was responsible
	for supporting these run-time versions. Since the release of Microsoft Windows
	operating system version 3.1, Asymetrix is responsible for supporting all
	versions of DayBook and ToolBook.
	
	This article includes information on some specific problems with DayBook and
	ToolBook and possible solutions or workarounds. The following topics are
	discussed:
	
	- Can't drag icons when mouse buttons are swapped
	
	- Error when compiling script
	
	- Valid dates problem
	
	- Mouse required
	
	MORE INFORMATION
	================
	
	Can't Drag Icons When Mouse Buttons Are Swapped
	-----------------------------------------------
	
	DayBook version 1.0 with the run-time version of ToolBook does not allow you to
	drag icons when the mouse buttons are reversed or swapped in Control Panel. To
	work around this behavior, click both the mouse buttons in quick succession; for
	example, if the right button is the "active" button, quickly click the right
	button, then click and hold down the left button.
	
	Error When Compiling Script
	---------------------------
	
	  Error when compiling script: Syntax Error
	
	may occur when DayBook is running and either Setup Applications is started from
	the Windows Setup Options menu or Microsoft PowerPoint for Windows is being set
	up. Quit DayBook and run Setup again.
	
	Valid Dates Problem
	-------------------
	
	You may receive the following message when the internal clock reaches 1992:
	
	  Valid dates for this version of DayBook are 1-1-91 through 12-31-91. Please
	  check your system date.
	
	According to Asymetrix, this problem occurs only in ToolBook's DayBook version
	1.5, in both the full and run-time versions. There are two solutions to this
	problem:
	
	1. Download DB15FIX.ZIP from the Asymetrix bulletin board service (BBS) at (425)
	  451-1173.
	
	2. If the full version of ToolBook 1.5 is being used, the DAYBOOK.SBK script
	  file can be edited. The following two changes need to be made:
	
	  a. Change "12-31-91" to "12-31-93".
	
	  b. Change "12,31,91" to "12,31,93".
	
	Mouse Required
	--------------
	
	A mouse is not listed as a system requirement on the envelope in which run-time
	ToolBook version 1.0 is packaged.
	
	A mouse is necessary to be able to access all the features in both TourBook (An
	Introduction to ToolBook) and DayBook. Without a mouse, TourBook does not allow
	you to select or execute any of the tutorials. In DayBook, the keyboard allows
	you to access the file menu options only.
	
	You will be able to successfully exit both programs using keyboard commands. In
	TourBook, press ALT+SPACE and choose Close. In DayBook, press ALT+F and choose
	exit.
	
	ToolBook and DayBook are manufactured by Asymetrix, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional Information About ToolBook, DayBook
	----------------------------------------------
	
	For more information, contact:
	
	  Asymetrix technical support:
	
	  (425) 637-1600 (DayBook Plus and full DayBook versions) or
	  (900) 896-9191 (version 1.0, 1.5, and run-time versions)
	  BBS - (425) 451-1173
	  FAX - (425) 454-0672
	
	  Asymetrix Corporation
	  Sales & Marketing
	  110-111th Ave. NE, Suite 717
	  Bellevue, WA 98004
	
	Additional query words: 3.00 3.00a 3.10 day book tool 1.0 1.5 Asimatrix Asimetrics
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
