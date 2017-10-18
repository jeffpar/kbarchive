---
layout: page
title: "Q85420: PRINTERS.WRI Assumes Device Contention for LPT Ports"
permalink: kb/085/Q85420/
---

## Q85420: PRINTERS.WRI Assumes Device Contention for LPT Ports

	Article: Q85420
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 3.1 PRINTERS.WRI file incorrectly states in section 6.2 that it is
	necessary to disable device contention for LPT1 to print using IBM EPT software.
	In Windows 3.1, device contention for LPT ports is disabled by default. To
	employ device contention for LPT ports, you must obtain and install the Windows
	Driver Library VPD.386 file.
	
	Section 6.2 also refers to chapter 14 of the "Microsoft Windows User's Guide"
	version 3.1 manual as giving more information about setting device contention.
	This is incorrect. Device contention is defined on page 247.
	
	MORE INFORMATION
	================
	
	Section 6.2 of the PRINTERS.WRI file contains the following text:
	
	  6.2  Printing to an IBM Personal Pageprinter, Using the EPT Port
	
	  For best results, use the IBM Personal Pageprinter Adapter Program
	  version 1.3.1 or later.
	
	  If you are running Windows in 386 enhanced mode and want to print
	  to an IBM Personal Pageprinter assigned to the EPT port, you must
	  set the LPT1 device contention to never issue a warning. Standard
	  mode does not require special settings. For more information about
	  setting device-contention options, see Chapter 14, "Optimizing
	  Windows," in the "Microsoft Windows User's Guide."
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
