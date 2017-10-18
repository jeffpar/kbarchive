---
layout: page
title: "Q87931: Preventing Microsoft LINK From Running CVPACK"
permalink: kb/087/Q87931/
---

## Q87931: Preventing Microsoft LINK From Running CVPACK

	Article: Q87931
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, when the LINK command line includes the /CO[DEVIEW] option (to add
	symbolic debugging information to the executable file), LINK runs the CVPACK
	program to reduce the size of the data. To prevent LINK from running CVPACK,
	specify the following option on the LINK command line:
	
	  /CO[DEVIEW]:N[OCVPACK]
	
	To debug an application with Microsoft CodeView versions 4.0 and later, CVPACK
	must process the executable file. If CVPACK does not process the file, an
	attempt to debug it with CodeView does not show any source code and one of the
	following messages appears:
	
	  CV0102: unpacked CodeView information in 'filename': use CVPACK
	  CV0103: relink 'filename' with the current linker
	
	Additional query words: kbinf 5.30 5.31.009 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch
	Version           : :
	
	=============================================================================
	
