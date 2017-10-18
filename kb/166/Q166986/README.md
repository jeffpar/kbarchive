---
layout: page
title: "Q166986: XCLN: Error Printing from MS Schedule+ If Normal.fmt Corrupted"
permalink: kb/166/Q166986/
---

## Q166986: XCLN: Error Printing from MS Schedule+ If Normal.fmt Corrupted

	Article: Q166986
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Schedule+ 7.0, when you attempt to print any view, you receive the
	following error message:
	
	  The print operation could not be completed. The specified directory name is
	  not valid."
	
	CAUSE
	=====
	
	This error occurs if the Microsoft Schedule+ print format file, Normal.fmt, is
	corrupted. Normal.fmt is installed by the Microsoft Schedule+ Setup program.
	
	RESOLUTION
	==========
	
	Use the appropriate method to recreate the Normal.fmt file:
	
	Method 1. Run the Microsoft Schedule+ Setup program
	---------------------------------------------------
	
	1. Start the Microsoft Schedule+ Setup program.
	
	2. Click Add/Remove.
	
	3. In the list of installed components, click to clear the "Print Layouts and
	  Paper Formats" check box.
	
	4. Click OK.
	
	5. Click Continue.
	
	6. Follow the instructions on the screen.
	
	7. Restart the Microsoft Schedule+ Setup program.
	
	8. Click to select the "Print Layouts and Paper Formats" check box.
	
	9. Click OK.
	
	10. Click Continue.
	
	11. Follow the instructions on the screen.
	
	Method 2. Run the Microsoft Office 95 Setup program
	---------------------------------------------------
	
	1. Start the Microsoft Office 95 Setup program.
	
	2. Click Add/Remove.
	
	3. Click to select the Microsoft Schedule+ check box.
	
	4. Click Change Option.
	
	5. In the list of installed components, click to clear the "Print Layouts and
	  Paper Formats" check box.
	
	6. Click OK.
	
	7. Click Continue.
	
	8. Follow the instructions on the screen.
	
	9. Restart the Microsoft Schedule+ Setup program.
	
	10. Click to select the "Print Layouts and Paper Formats" check box.
	
	11. Click OK.
	
	12. Click Continue.
	
	13. Follow the instructions on the screen.
	
	Additional query words: error printing format
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	Hardware          : x86
	
	=============================================================================
	
