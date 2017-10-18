---
layout: page
title: "Q157125: FIX: Setup Does Not Copy Visigenic's VSDRVM32.DLL File"
permalink: kb/157/Q157125/
---

## Q157125: FIX: Setup Does Not Copy Visigenic's VSDRVM32.DLL File

	Article: Q157125
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbusage kbDatabase kbMFC kbODBC kbVC
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install the Visigenics ODBC driver for Oracle from Visual C++ 4.2
	Professional Edition, the setup program fails to copy the file VSDRVM32.DLL that
	is used by the driver.
	
	CAUSE
	=====
	
	The setup program uses the information in VCODBC.INF file that does not list
	this additional DLL (VSDRVM32.DLL).
	
	RESOLUTION
	==========
	
	Copy VSDRVM32.DLL from the MSDEV\REDIST subdirectory on the Visual C++ CD-ROM to
	your Windows\system or Winnt\system32 directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. The VCODBC.INF file was corrected in Visual C++
	version 4.2 Enterprise Edition.
	
	Additional query words: kbVC420bug
	
	======================================================================
	Keywords          : kb3rdparty kbusage kbDatabase kbMFC kbODBC kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
