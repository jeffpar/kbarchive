---
layout: page
title: "Q148916: FIX: Setup Could Not Open &#92;Msdev&#92;Redist&#92;Oracle.hlp File"
permalink: /kb/148/Q148916/
---

## Q148916: FIX: Setup Could Not Open &#92;Msdev&#92;Redist&#92;Oracle.hlp File

	Article: Q148916
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbsetup kbVC410bug kbVC420fix
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing ODBC drivers from the Visual C++ 4.1 CD-ROM, you may see the
	following error message:
	
	  Setup could not open the file:
	  "...\MSDEV\REDIST\ORACLE.HLP".
	
	CAUSE
	=====
	
	Setup is installing the Oracle ODBC driver that ships with Visual C++ and the
	help file for the driver is missing from the 4.1 CD-ROM.
	
	RESOLUTION
	==========
	
	Prior to running setup, copy Oracle.hlp from your Visual C++ 4.0 CD-ROM into
	your System32 (System in Windows 95) directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32- bit Edition
	version 4.2.
	
	MORE INFORMATION
	================
	
	This should not result in any loss of information. The Oracle.hlp file that
	shipped with Visual C++ 4.0 is the same file that shipped with version 4.1.
	
	Additional query words: vc40setup
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbsetup kbVC410bug kbVC420fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC410
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
