---
layout: page
title: "Q98681: SAMPLE: VIEW Demonstrates Drawing Ink at a Slower Rate"
permalink: /kb/098/Q98681/
---

## Q98681: SAMPLE: VIEW Demonstrates Drawing Ink at a Slower Rate

{% raw %}

	Article: Q98681
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The View.exe sample is a Windows for Pen Computing sample that demonstrates how
	to:
	
	- Display ink via RedisplayPenData()
	
	- Display the "best guess" in text from the Recognizer
	
	- Use TrueType fonts to mimic the same height of the raw ink text
	
	- Display how to parse through the individual ink data points and do a "slow
	  draw" of the ink, much like the Trainer application does.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  View.exe (http://support.microsoft.com/download/support/mslfiles/View.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	View.exe allows developers to experience how ink display is done, and provides
	one conversion algorithm that can be used to convert the raw ink into recognized
	values [see SYV, SYG, SYE, and SYC in the Microsoft Windows for Pen Computing
	"Programmer's Reference" in the Windows version 3.1 Software Development Kit
	(SDK) for more information on recognition results.]
	
	These values can then be converted and displayed as text on a device context (DC)
	in a TrueType font such that a close approximation of the raw ink string height
	can be mimicked by the font string itself.
	
	Finally, the View.exe sample demonstrates through the use of a timer callback
	function, how to walk through the individual stroke points and draw them one by
	one. With a timer running, it is possible to slow down the speed at which the
	ink is redrawn, and thus to see approximately how the ink was drawn by the
	user.
	
	This is similar to how the Trainer application (available in the Windows for Pen
	Computing environment) does its slow drawing to demonstrate inking techniques.
	
	View.exe was built and tested under Microsoft Windows version 3.1. The program
	requires Penwin.dll, which can be found in both Microsoft Windows for Pen
	Computing and the Microsoft Windows version 3.1 SDK. View also requires the
	TrueType Arial font.
	
	Additional query words: softlib VIEW.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
