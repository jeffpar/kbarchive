---
layout: page
title: "Q82509: Standard Mode May Require Increased File Handles"
permalink: /kb/082/Q82509/
---

## Q82509: Standard Mode May Require Increased File Handles

	Article: Q82509
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows operating system version 3.1, file handles are shared in
	standard mode. This can have a dramatic impact on software products, such as
	database programs, that use a large number of file handles. The number of file
	handles should be increased to at least 50 (for example, FILES=50 in the
	CONFIG.SYS file).
	
	A low number of file handles may result in only a limited number of applications
	being able to run at the same time, poor performance, or becoming locked in a
	DOS session.
	
	MORE INFORMATION
	================
	
	For example, with FILES= set to a low number, from Program Manager, run an
	MS-DOS database program that requires a large number of file handles; the
	application's screen will briefly flash and then it will close again leaving a
	minimized application at the bottom of the screen. This application can be
	closed only by:
	
	1. Clicking its icon to bring up its control menu.
	
	2. Choosing Settings and then choosing the Terminate button.
	
	This method will cause lost clusters to be left on the hard drive, and may cause
	other problems.
	
	Additional query words: 3.10 3.11 font fields
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
