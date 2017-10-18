---
layout: page
title: "Q84889: Asymetrix DayBook/ToolBook Issues and Problems/Solutions"
permalink: kb/084/Q84889/
---

## Q84889: Asymetrix DayBook/ToolBook Issues and Problems/Solutions

	Article: Q84889
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The initial release of Microsoft Windows operating system version 3.0 came with
	run-time versions of Asymetrix DayBook and ToolBook. Microsoft was responsible
	for supporting these run-time versions. As of the release of the Microsoft
	Windows operating system version 3.1, Asymetrix is responsible for supporting
	all versions of DayBook and ToolBook.
	
	This article includes information on some specific problems with DayBook and
	ToolBook and possible solutions or workarounds.
	
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
	
	The error message
	
	  Error when compiling script: Syntax Error
	
	may occur when DayBook is running and either Setup Applications is started from
	the Windows Setup Options menu or Microsoft PowerPoint for Windows is being set
	up. Quit DayBook and run Setup again.
	
	Valid Dates Problem
	-------------------
	
	The error message
	
	  Valid dates for this version of DayBook are 1-1-91 through 12-31-91. Please
	  check your system date
	
	may occur when the internal clock reaches 1992. According to Asymetrix, this
	problem occurs only in ToolBook's DayBook version 1.5, in both the full and
	run-time versions. There are two solutions to this problem:
	
	1. Download DB15FIX.ZIP from the Asymetrix bulletin board service (BBS) at (425)
	  451-1173.
	
	2. If the full version of ToolBook 1.5 is being used, the DAYBOOK.SBK script
	  file can be edited; the following two changes need to be made:
	
	  a. Change "12-31-91" to "12-31-93".
	
	  b. Change "12,31,91" to "12,31,93".
	
	ToolBook and DayBook are manufactured by Asymetrix, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	  Asymetrix Technical Support:
	
	  (425) 637-1600 (DayBook Plus and full DayBook versions) or
	  (900) 896-9191 (version 1.0, 1.5, and run-time versions)
	  BBS - (425) 451-1173
	  FAX - (425) 454-0672
	
	  Asymetrix Corporation
	  Sales & Marketing
	  110-111th Ave. NE, Suite 717
	  Bellevue, WA 98004
	
	Additional query words: 3.00 3.00a day book tool 1.0 1.5 Asimatrix Asimetrics 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
