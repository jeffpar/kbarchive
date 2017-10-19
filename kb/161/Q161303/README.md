---
layout: page
title: "Q161303: HOWTO: Close a Shelled Process When Finished Under Windows"
permalink: /kb/161/Q161303/
---

## Q161303: HOWTO: Close a Shelled Process When Finished Under Windows

	Article: Q161303
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME
	Last Modified: 26-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Visual Basic Shell command is used to execute a batch file or MS- DOS
	program on Windows 95, Windows 98, and Windows Me, the MS-DOS window remains
	open by default when the program is finished executing. Under Windows 3.1,
	Windows for Workgroups 3.11, and Windows NT 3.51, the MS-DOS window closes by
	default when the program is finished executing. This article shows how to force
	Windows 95, Windows 98, and Windows Me to close the MS-DOS window when the
	program is finished executing.
	
	MORE INFORMATION
	================
	
	To force Windows 95, Windows 98, and Windows Me to close the MS-DOS window, you
	can use the Visual Basic Shell function with the /C option of COMMAND.COM. The
	/C option of COMMAND.COM will close the MS-DOS window under Windows 95, Windows
	98, and Windows Me. The Visual Basic syntax for using the /C option of
	COMMAND.COM to execute a MS-DOS program is as follows where <pathname> is
	the path and name of the program to execute and any command line options for
	it:
	
	     h = Shell("COMMAND.COM /C <pathname>")
	
	Windows 3.1, Windows for Workgroups 3.11, and Windows NT 3.51 will still behave
	the same way if you use the /C option of COMMAND.COM. So, you can use this
	technique without having to check which operating system the program is running
	on.
	
	You may want to specify the location of COMMAND.COM using the Environ function
	with the parameter "COMSPEC." This will ensure that COMMAND.COM can be found
	even if it is not on the path. For example:
	
	     h = Shell(Environ("COMSPEC") & " /C <pathname>")
	
	Additional query words: shellexecute winexec createprocess
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
