---
layout: page
title: "Q155929: BUG: APRINTERS Function Behaves Differently in Windows 95"
permalink: /kb/155/Q155929/
---

## Q155929: BUG: APRINTERS Function Behaves Differently in Windows 95

	Article: Q155929
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp kbvfp300 kbvfp500 kbvfp600
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the APRINTERS() function, you can place the names of printers currently
	installed in the Windows Print Manager into a memory variable array. The
	APRINTERS() function creates a two-dimensional array. The first column of the
	array contains the names of the currently installed printers, and the second
	column contains the ports to which the printers are connected. In Windows 95, if
	the specific printer's share name contains a space, the PRINTERS() function
	returns a separate array row with the same printer name in the first column and
	two incomplete share names in the second column. An example is a printer named
	MyPrinter on share \\MyPrinter Share. The APRINTERS() function produces the
	following two rows:
	
	  Myprinter     \\MyPrinter
	  Myprinter     Share
	
	WORKAROUND
	==========
	
	Use the GETPRINTER() function to print directly to the printer name instead of
	the share name. If the share name is required, concatenate the share name
	strings that have the same printer name in the first column of the array.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Set up a Local Printer in Windows 95 or Windows NT. For this example, the
	  printer name is "HP LaserJet 4Si MX" and the share name is "\\Tim\Test
	  Printer."
	
	2. On a second Windows 95 computer, issue the following command in the Visual
	  FoxPro Command window:
	
	        =APRINTERS(Lprint)
	
	  The preceding command creates an array Lprint with the following elements:
	
	        Lprint(1,1) = "HP LaserJet 4Si MX" , Lprint(1,2) = "\\Tim\Test"
	        Lprint(2,1) = "HP LaserJet 4Si MX" , Lprint(2,2) = "Printer"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
