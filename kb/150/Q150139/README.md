---
layout: page
title: "Q150139: BUG: Using &quot;Save As&quot; to Save File Causes Application Error"
permalink: /kb/150/Q150139/
---

## Q150139: BUG: Using &quot;Save As&quot; to Save File Causes Application Error

	Article: Q150139
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Saving a fixed-form source file that contains at least one physical TAB
	character at the beginning of a source line, to a file with some other
	non-default extension (such as .txt) by selecting Save As from the File menu in
	Developer Studio, causes one of the following application errors at run time:
	
	Under Windows 95:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	  Details:
	
	  MSDEV caused an invalid page fault in module MSVCSRC.DLL
	
	Under Windows NT version 3.51:
	
	  The instruction at "0x00000000" referenced memory at "0x00000000".
	  The memory could not be "read".
	
	RESOLUTION
	==========
	
	Before saving the file using Save As option, change the file type to free- form
	by right-clicking in the editor window and selecting Properties. Change the
	Language combo-box option to Fortran Free. Then you can safely choose Save As
	from the File menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open a source file that has an .for extension and verify that at least one
	  source line begins with a physical TAB character. The Celsius.for file
	  located in \Msdev\Projects\Celsius is formatted with TAB characters.
	
	2. From the Developer Studio File menu, choose Save As, and save the file with a
	  .txt extension. In some cases, Developer Studio (MSDEV) shuts down without
	  warning, and in others, it hangs (stops responding) and' displays an
	  application error.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
