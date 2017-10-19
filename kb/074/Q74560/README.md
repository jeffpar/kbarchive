---
layout: page
title: "Q74560: Charts and Graphs for Windows-Based Applications"
permalink: /kb/074/Q74560/
---

## Q74560: Charts and Graphs for Windows-Based Applications

	Article: Q74560
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Chapter 11 of the book "Microsoft C Advanced Programming Techniques," included
	with the Microsoft C Compiler version 6.0 discusses creating charts and graphs
	in MS-DOS using the C presentation graphics library PGCHART.LIB.
	
	Windows does not include a presentation graphics library as such, but the Windows
	graphics functions can be used to draw graphs and charts. PGCHART.LIB is only
	for use with MS-DOS-based applications.
	
	Page 570 of Charles Petzold's "Programming Windows" (Second Edition) includes an
	example of using the Windows Pie() function to draw a pie chart. Similarly,
	other GDI functions, such as Rectangle(), Polygon(), or LineTo(), could be used
	to draw charts or graphs.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
