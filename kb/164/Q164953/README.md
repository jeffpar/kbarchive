---
layout: page
title: "Q164953: Visual C++ Alpha Edition 4.2B C2.EXE 10.20.7032"
permalink: kb/164/Q164953/
---

## Q164953: Visual C++ Alpha Edition 4.2B C2.EXE 10.20.7032

	Article: Q164953
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2b
	Operating System(s): 
	Keyword(s): kbfile kbCompiler
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2b, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The /Oa (Assume No Aliasing) and /Ow (Assume Aliasing Across Function Calls)
	options do not work correctly in the compiler shipped with Visual C++ version
	4.2b for Alpha. The same options can be selected via the #pragma optimize
	statement.
	
	If your code is compiled with the /Oa or /Ow command-line options, or if the code
	you compile turns on the "a" or "w" options in a #pragma optimize statement,
	your code could experience aliasing problems. These problems most frequently
	manifest as corrupted data.
	
	Version 10.20.7032 of c2.exe disables these options regardless of whether they
	are set on the command line or using pragmas in the code.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Ac242bpa.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	
	
	REFERENCES
	==========
	
	For further details on aliasing, please see the InfoViewer topic "Visual C++
	Books | User's Guides | Visual C++ User's Guide | CL Reference | Reference to
	Command-Line Options | /Oa, /Ow"
	
	Additional query words: Digital DEC CL
	
	======================================================================
	Keywords          : kbfile kbCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : winnt:4.2b
	Hardware          : ALPHA
	
	=============================================================================
	
