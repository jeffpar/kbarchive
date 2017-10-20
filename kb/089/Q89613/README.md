---
layout: page
title: "Q89613: WRK TopDesk Err Msg: Cannot Access the File at This Time"
permalink: /kb/089/Q89613/
---

## Q89613: WRK TopDesk Err Msg: Cannot Access the File at This Time

{% raw %}

	Article: Q89613
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following error message may occur when trying to run a non-program file from
	the TopDesk utility included with the Windows Resource Kit (WRK):
	
	  Cannot access the file at this time.
	  Make sure the file is not in use by another program, and is a valid program
	  file.
	
	The TopDesk utility can only run programs with the following extensions: .EXE,
	.COM, .BAT, and .PIF. TopDesk cannot run a data file that is associated with a
	program.
	
	MORE INFORMATION
	================
	
	If you have already encountered the above error message, then you may change the
	startup path to correct the error by doing the following:
	
	1. From the TopDesk menu, choose Windows.
	
	2. Select Startup Information.
	
	3. Select Write for the title.
	
	4. Type "C:\Windows\Write.EXE README.WRI" (without the quotation marks) in the
	  Startup Path text box.
	
	Additional query words: 3.10 3.11 err msg top desk wrkit wrk snap shot
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11; :3.1
	
	=============================================================================
	

{% endraw %}
