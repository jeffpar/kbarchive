---
layout: page
title: "Q206081: NMI Parity Errors on NCR WorldMark 4300 Pentium Pro"
permalink: kb/206/Q206081/
---

## Q206081: NMI Parity Errors on NCR WorldMark 4300 Pentium Pro

	Article: Q206081
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Windows NT 3.51 on an NCR WorldMark 4300 Pentium Pro
	computer, you may receive non-maskable interrupt (NMI) parity errors.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Activate the computer's BIOS Setup tool.
	
	2. Click Advanced, and then click Advanced Chipset Configuration.
	
	3. Click Disable PERR Mode.
	
	4. Quit the BIOS Setup tool, restart the computer, and then begin the Windows NT
	  3.51 installation process.
	
	MORE INFORMATION
	================
	
	For more information, please contact NCR Technical Support for further details
	concerning this issue or go to NCR's Web site at:
	
	  http://www.ncr.com/
	
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbprb
	
	=============================================================================
	
