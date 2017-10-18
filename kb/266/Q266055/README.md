---
layout: page
title: "Q266055: Error Message Appears When Service Does Not Start"
permalink: kb/266/Q266055/
---

## Q266055: Error Message Appears When Service Does Not Start

	Article: Q266055
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.01,4.01 Service Pack 1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Internet Explorer versions 4.01, 4.01 Service Pack 1 for Windows 95 
	- Microsoft Internet Explorer versions 4.01, 4.01 Service Pack 1 for Windows NT 4.0 
	- Microsoft Internet Explorer version 4.0 for Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you restart a computer after installing a third-party software product, you
	may receive an error message explaining that the Protected Storage Service did
	not start. The exact error message varies, depending on the operating system
	(Windows 95, Windows 98, or Windows NT 4.0). However, the message indicates that
	the Protected Storage Service did not load.
	
	In Windows NT Workstation 4.0, the error message generates the logging of Event
	127, indicating that the service failed.
	
	CAUSE
	=====
	
	This behavior can occur when the Protected Storage Service is attempting to
	execute an application programming interface (API) call to an Imagehlp.dll file
	that does not exist in the older .dll files.
	
	RESOLUTION
	==========
	
	To resolve the issue, check for the presence of an Imagehlp.dll file in the
	Winnt\System32 folder for Windows NT or in the Windows\System folder for Windows
	95 or 98.
	
	MORE INFORMATION
	================
	
	The file's size and date should be as follows:
	
	Windows NT Workstation 4.0, Internet Explorer 4.01: 104KB, 11/18/97
	Windows NT Workstation 4.0, Internet Explorer 4.01, Service Pack 1: 104KB,
	5/8/98
	Windows 95 or 98: 112KB, 5/11/98
	
	If the file is dated earlier than 1997, then either it needs to be replaced with
	the one from Internet Explorer 4.01 or you need to reinstall Internet Explorer
	4.01.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbIEsearch kbWin95search kbWin98search kbZNotKeyword2 kbIENT400Search kbIE95Search kbZNotKeyword3 kbIE98Search kbWin98 kbIE401Win95 kbIE401Win95SP1 kbIE400Win98 kbIE401WinNT400 kbIE401WinNT400SP1
	Version           : :4.0,4.01,4.01 Service Pack 1
	Issue type        : kbprb
	
	=============================================================================
	
