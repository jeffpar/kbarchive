---
layout: page
title: "Q88142: Preventing Word Wrap in Microsoft Windows Help Files"
permalink: kb/088/Q88142/
---

## Q88142: Preventing Word Wrap in Microsoft Windows Help Files

	Article: Q88142
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.0,3.1; WINDOWS:3.1,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	- Microsoft Win32 Software Development Kit (SDK), versions 3.1, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the Microsoft Windows Help application wraps lines of text to
	reflect the size of its window. However, there are situations (such as a table
	of information) in which wrapping text is undesirable. The information below
	presents two methods of preventing a section of text from changing when the Help
	application window changes sizes. These techniques apply to version 2.0 of the
	Microsoft Word for Windows-based application.
	
	MORE INFORMATION
	================
	
	Method 1
	--------
	
	This method, which is compatible with versions 3.0 and 3.1 of the Microsoft
	Windows Help Compiler, involves two steps:
	
	1. Place either a hard or a soft carriage return at the end of each line.
	
	2. Format the section with the "keep lines together" paragraph attribute. From
	  the Format menu, choose Paragraph, and select the Keep Lines Together check
	  box in the Paragraph dialog box.
	
	Method 2
	--------
	
	This method, which is compatible only with version 3.1 of the Help Compiler, is
	to create a one row, one column table in Word for Windows. Set the width of the
	table as desired and allow the text to wrap within the table normally. Windows
	Help will duplicate the word breaks in the table provided that the font used to
	author the table is selected by the Help engine when displaying the table. If
	Help uses a different font, the text may wrap differently, even though the table
	keeps the specified width.
	
	Note
	----
	
	When you use either of these methods, if the Windows Help window is not large
	enough to display the entire width of a topic, Help displays a horizontal scroll
	bar rather than wrapping the text to make it visible.
	
	Additional query words: 3.00 3.10 3.50 4.00 95 HLP word wrap wordwrap engine HC31 HC31.EXE HCP HCP.EXE win16sdk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK400 kbWin32SDK310 kbWin32SDK351 kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1; WINDOWS:3.1,3.51,4.0
	
	=============================================================================
	
