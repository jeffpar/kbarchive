---
layout: page
title: "Q187593: INFO: MSVBVM50.DLL Is Included in Windows 98"
permalink: /kb/187/Q187593/
---

## Q187593: INFO: MSVBVM50.DLL Is Included in Windows 98

	Article: Q187593
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbOSWin98 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Msvbvm50.dll version 05.00.4319 is included in Windows 98.
	
	MORE INFORMATION
	================
	
	Msvbvm50.dll is the Visual Basic Virtual Machine and is the required run- time
	library for Visual Basic 5.0 applications. The version of Msvbvm50.dll that is
	included in Windows 98 is 05.00.4319, which is the same version included in
	Visual Basic 5.0 Service Pack 2 and Visual Studio 97 Service Pack 3.
	
	The file was optimized using WinAlign, a tool for aligning executable code
	(binaries) so as to optimize their performance under Windows 98. The file size
	of the Microsoft Visual Basic Virtual Machine is approximately 8K larger on
	Windows 98 computers and has a last modified date of May 11th, 1998.
	
	The file versions, 5.00.4319 (SP2), are identical except for the 4K alignment
	optimizations. The files size and dates are different as described below:
	
	Distributed With              Date Modified    Size
	--------------------------------------------------------------
	Windows 98                    May  11, 1998    1,355,776 bytes
	Visual Basic SP2 & SP3        July 19, 1997    1,347,344 bytes
	
	Including the run-time file in Windows 98 decreases the amount of time it takes
	to install Visual Basic 5.0 applications. The most noticeable difference is in
	the amount of time for Internet Download Setups that include Msvbvm50.dll.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbOSWin98 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbWin98search kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3 kbWin98
	Version           : WINDOWS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
