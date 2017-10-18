---
layout: page
title: "Q145701: HOWTO: Close Shelled Process When Finished under Windows95/98/Me"
permalink: kb/145/Q145701/
---

## Q145701: HOWTO: Close Shelled Process When Finished under Windows95/98/Me

	Article: Q145701
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Visual Basic Shell command is used to execute a batch file or MS- DOS
	program on Windows 95, Windows 98, or Windows Me, the MS-DOS window remains open
	by default when the program is done executing. Under Windows 3.1, Windows for
	Workgroups 3.11, and Windows NT 3.51, the MS-DOS window closes by default when
	the program is done executing. This article shows how to force Windows 95,
	Windows 98, or Windows Me to close the MS-DOS window when the program is done
	executing.
	
	MORE INFORMATION
	================
	
	To force Windows 95, Windows 98, or Windows Me to close the MS-DOS window you
	can use the Visual Basic Shell function with the /C option of COMMAND.COM. The
	/C option of COMMAND.COM will close the MS-DOS window under Windows 95, Windows
	98, or Windows Me. The Visual Basic syntax for using the /C option of
	COMMAND.COM to execute a MS-DOS program is as follows where <pathname> is
	the path and name of the program to execute and any command line options for
	it:
	
	     h = Shell("COMMAND.COM /C <pathname>")
	
	Windows 3.1, Windows for Workgroups 3.11, and Windows NT 3.51 will still behave
	the same if you use the /C option of COMMAND.COM. So, you can use this technique
	without having to check which operating system the program is running on.
	
	Additional query words: createprocess properties close on exit
	
	======================================================================
	Keywords          : kbnokeyword KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
