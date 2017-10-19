---
layout: page
title: "Q307557: BUG: 32-Bit App. Use of DBGrid Fails When 16-Bit Already Running"
permalink: /kb/307/Q307557/
---

## Q307557: BUG: 32-Bit App. Use of DBGrid Fails When 16-Bit Already Running

	Article: Q307557
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have Dbgrid16.ocx and Dbgrid32.ocx controls on your Windows 95 or Windows
	98-based system that are in use by two different applications. One application
	uses the 16-bit control (Dbgrid16.ocx) and another application uses the 32-bit
	control (Dbgrid32.ocx). If you start the 16-bit application and then try to
	start the 32-bit application, the 32-bit application fails and returns the
	following error message:
	
	  Component 'DBGRID32.OCX' or one of its dependencies not correctly registered:
	  a file is missing or invalid.
	
	The problem does not happen if you run these applications on Windows NT 4.0,
	Windows 2000, or Windows XP. Also, it does not happen if you start the 32-bit
	application first and then start the 16-bit application.
	
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to computers
	that are experiencing this specific problem.
	
	NOTE: You must have a Visual Studio license agreement to obtain this fix.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  9/7/2001  3:37pm  5.1.93.30    524 KB  DBGrid32.ocx
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbOSWin98 kbOSWin95 kbVBSearch kbAudDeveloper kbOSWin98SE kbOSWinSearch kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
