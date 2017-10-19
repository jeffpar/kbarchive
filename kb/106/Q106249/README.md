---
layout: page
title: "Q106249: WFWG 3.11 ErrMsg: Error 13: The Data Is Invalid"
permalink: /kb/106/Q106249/
---

## Q106249: WFWG 3.11 ErrMsg: Error 13: The Data Is Invalid

	Article: Q106249
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you type the NET command, you receive the following error message:
	
	  Error 13: The data is invalid
	
	This error does not occur if you type "net start workstation" (without the
	quotation marks) or "net start full" (without the quotation marks).
	
	CAUSE
	=====
	
	This problem occurs when the SHARE.EXE program is loaded in the AUTOEXEC.BAT
	file.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In your AUTOEXEC.BAT file, add the path to SHARE.EXE. (It does not matter
	  where the SHARE command is located in the AUTOEXEC.BAT file.)
	
	2. Restart the computer by pressing CTRL+ALT+DEL.
	
	3. At the MS-DOS command prompt, type "net" (without the quotation marks), and
	  then press ENTER.
	
	You are then prompted for your name and password. If there were any previous
	connections, they are restored. At this point, the error message is displayed.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
