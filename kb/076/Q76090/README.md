---
layout: page
title: "Q76090: WPP Err Msg: An Error Occurred While Setup...(with NDW)"
permalink: /kb/076/Q76090/
---

## Q76090: WPP Err Msg: An Error Occurred While Setup...(with NDW)

{% raw %}

	Article: Q76090
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you attempt to install the Microsoft Windows Productivity Pack on a machine
	that has Norton Desktop for Windows (NDW) installed, you may receive the
	following Productivity Pack error message:
	
	  An error occurred while setup was trying to create a group in the Program
	  Manager. Exit now and run setup again.
	
	MORE INFORMATION
	================
	
	Temporarily Removing the Norton Desktop as the Windows Shell
	------------------------------------------------------------
	
	To correctly install the Productivity Pack on a machine with Norton Desktop you
	will need to remove Norton Desktop as the Windows shell and replace it with the
	Program Manager. Use the following steps to make this change.
	
	1. Run the Windows 3.0 Notepad program.
	
	2. Open the file SYSTEM.INI located in the Windows directory.
	
	3. Edit the "SHELL=" line to read
	
	        SHELL=PROGMAN.EXE
	
	  instead of SHELL=NDW.EXE.
	
	4. Save the modified file and exit Windows.
	
	5. Run the Productivity Pack Setup program as you normally would.
	
	6. You can then change the "SHELL=" line back once the Setup program has
	  completed.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
