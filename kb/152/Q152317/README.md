---
layout: page
title: "Q152317: FIX: Setup Could Not Open &#92;MSDEV&#92;REDIST&#92; QFEUPD.EXE"
permalink: /kb/152/Q152317/
---

## Q152317: FIX: Setup Could Not Open &#92;MSDEV&#92;REDIST&#92; QFEUPD.EXE

	Article: Q152317
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbVC410bug kbVC420fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing ODBC drivers from the Visual C++ 4.1 CD-ROM by running setup
	from \MSDEV\REDIST, you may see the following error message:
	
	  Setup could not open the file:
	  "...\MSDEV\REDIST\QFEUPD.EXE".
	
	When this happens, you have to quit the setup program.
	
	CAUSE
	=====
	
	Setup is looking for the QFEUPD.EXE file that it could not find on Visual C++
	4.1 CD-ROM.
	
	RESOLUTION
	==========
	
	Prior to running setup, copy QFEUPD.EXE from your Visual C++ 4.0 CD-ROM into
	your System32 (System in Windows 95) directory.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32- bit Edition
	version 4.2.
	
	MORE INFORMATION
	================
	
	This behavior occurs when you choose custom installation and remove Oracle from
	the list of drivers to be installed. If you choose to install Oracle, you will
	hit another setup error:
	
	  Setup could not open the file: "...\MSDEV\REDIST\Oracle.hlp"
	
	and you have to quit the setup at that point. For more information, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q148916 BUG: Setup Could Not Open \Msdev\Redist\Oracle.hlp File
	
	When you already have the Oracle.hlp file on your machine and you do not have
	QFEUPD.EXE, you will hit the error described in this article.
	
	Additional query words: kbinterop
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbVC410bug kbVC420fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC410
	Version           : winnt:4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
