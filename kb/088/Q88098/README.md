---
layout: page
title: "Q88098: Windows Err Msg: &quot;Offending Command&quot; on Microtek Printer"
permalink: /kb/088/Q88098/
---

## Q88098: Windows Err Msg: &quot;Offending Command&quot; on Microtek Printer

{% raw %}

	Article: Q88098
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	According to Microtek Technical Support, when printing large files (over 20
	pages) from Microsoft Windows version 3.1 to the TrueLaser PostScript printer
	model MTP-306, you may receive the following error message on the printout:
	
	  Offending Command
	
	To correct this problem, Microtek suggests adding the following line to the
	AUTOEXEC.BAT file:
	
	  Mode LPT1:,,P
	
	MORE INFORMATION
	================
	
	Setting Windows' Transmission Retry to 999 does not correct this problem.
	
	The MODE command shown above is a retry setting to indicate how a print job
	should be handled when a printer does not accept information.
	
	The two commas are placeholders for the first two parameters (characters-per-line
	and line-per-inch), which will not change. Information is then sent to the
	printer until the printer returns a completion code or an error code to MS-DOS,
	or until you press CTRL+C or CTRL+BREAK to stop printing.
	
	This MODE command is documented on page 256 of the Microsoft MS-DOS version 5.0
	"User's Guide and Reference."
	
	NOTE: an alternative troubleshooting method would be to turn off the Windows
	Print Manager.
	
	
	Additional query words: 3.10 microtech microtec micro true laser WIN31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
