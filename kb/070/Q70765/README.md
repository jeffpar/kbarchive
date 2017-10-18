---
layout: page
title: "Q70765: Changing Prompt for DOS Sessions Inside of Windows"
permalink: kb/070/Q70765/
---

## Q70765: Changing Prompt for DOS Sessions Inside of Windows

	Article: Q70765
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to identify an MS-DOS session that has been started from inside
	of Windows. This requires the use of a batch file to change the prompt. The
	MS-DOS ANSI.SYS driver can be used to enhance the appearance of the prompt once
	initiated.
	
	MORE INFORMATION
	================
	
	Changing the prompt can be done through the use of a batch file that invokes a
	prompt command. The following batch file has been used successfully:
	
	     @echo off
	     prompt Windows Prompt $p$g
	     command
	
	This batch file causes a prompt that looks like "Windows Prompt C:\WINDOWS>"
	to be displayed. This prompt draws attention to the fact that the MS-DOS session
	has been invoked from inside of Windows, which can be beneficial in some
	instances.
	
	This batch file can replace the MS-DOS Prompt icon's Properties from the Main
	Group of Program Manager. Simply replace COMMAND.COM with:
	
	  batch_file_name.BAT
	
	The Prompt command can be enhanced through the use of ANSI.SYS to add color or
	blinking text to further draw attention. For more information about ANSI.SYS,
	please refer to your MS-DOS manual.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
