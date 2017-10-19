---
layout: page
title: "Q123370: PRB: Debugging: Inter-Operability with Visual C++ 2.0"
permalink: /kb/123/Q123370/
---

## Q123370: PRB: Debugging: Inter-Operability with Visual C++ 2.0

	Article: Q123370
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link Visual C++ 2.0 objects using the FORTRAN PowerStation 1.0
	linker fails giving this CVPACK error:
	
	  CVPACK : fatal error CK1022: cannot open program database <path>xx.pdb
	  LINK : warning LNK4027: CVPACK error
	  LINK returned code: 1
	
	The xx is the base name of the Visual C++ .OBJ file and the error indicates that
	the linker cannot read the debug information in the Visual C++ object.
	
	CAUSE
	=====
	
	Microsoft Visual C++ 2.0 takes advantages of a new debug information format (the
	PDB file), which is not available with the linker shipped with Microsoft FORTRAN
	PowerStation 1.0.
	
	NOTE: This problem was corrected in FORTRAN PowerStation32, version 4.0.
	
	RESOLUTION
	==========
	
	There are two ways to work around this problem. If you want to use the FORTRAN
	PowerStation 1.0 linker, you must compile your C/C++ programs with the old style
	(CV4) debug information. To do this, use the '-Z7' switch, instead of the '-Zi'
	switch on the Visual C++ command line. The debug information, from your C
	object, is now in the CV4 format recognizable by the FORTRAN PowerStation
	linker. This will allow you to debug the executable from FORTRAN PowerStation
	1.0.
	
	Alternatively, you can use the Visual C++ version 2.0 linker that understands
	both CV4 and PDB format debug information. This will allow you to debug your
	executable from Visual C++ version 2.0. However, FORTRAN expression evaluator is
	not available with the Visual C++ version 2.0 debugger.
	
	NOTE: To use the Visual C++ version 2.0 linker, you can either use the C++ cl
	command and provide the appropriate FORTRAN libraries on the command line, or
	you can include the FORTRAN object (.OBJ) and static library (.LIB) files by
	listing them in the Project Files, by using the "Project + Files" menu
	selection.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
