---
layout: page
title: "Q220157: PRB: GETPRINTER()  Behaves Differently Based on Machine's OS"
permalink: /kb/220/Q220157/
---

## Q220157: PRB: GETPRINTER()  Behaves Differently Based on Machine's OS

	Article: Q220157
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOSWinNT kbvfp500 kbvfp500a kbvfp600 kbOSWin95 kbOSWin98 kbXBase
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The GETPRINTERS() function produces both a different dialog and different
	results when querying printers from a machine running Windows 95 or 98 as
	opposed to Windows NT 4.0.
	
	RESOLUTION
	==========
	
	As a workaround, use the APRINTERS() function to store the available printers
	into an array. Also, if you want to choose the printer when running a report,
	add the PROMPT clause to the REPORT FORM command.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual FoxPro 6.0 or 5.0 on a Windows NT 4.0 machine.
	
	2. In the Command window, type:
	
	  ? GETPRINTER()
	
	3. Expand the drop-down list and note the values that appear next to the Name,
	  Type, and Where labels in the dialog box.
	
	4. Perform the steps above on a Windows 95 or 98 machine.
	
	5. On the Windows NT machine, the Name drop-down box contains the address of the
	  printer if the printer is on a network. Therefore, the GETPRINTER() function
	  returns the printer's network address, if the printer is on a network. The
	  Type label lists the actual printer name. If it is a local printer, they are
	  the same. The Where label has a number and the word PASSTHRU.
	
	  On Windows 95 or 98, the Name drop-down box contains the name of the printer.
	  Therefore, GETPRINTERS() returns the name of the printer and not its network
	  address under Windows 95 or 98. The Type label also has the name of the
	  printer. The Where label has the network address. If the printer is local,
	  Name and Type are the same.
	
	REFERENCES
	==========
	
	For additional information about APRINTERS, please see the following article in
	the Microsoft Knowledge Base:
	
	Q155929 BUG: APRINTERS Function Behaves Differently in Windows 95
	
	For more information about the APRINTERS function, search for APRINTERS, and then
	in Visual FoxPro Help.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbOSWinNT kbvfp500 kbvfp500a kbvfp600 kbOSWin95 kbOSWin98 kbXBase 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
