---
layout: page
title: "Q114335: Deleting Outdated Registry Trees for Fortran or Visual C++"
permalink: /kb/114/Q114335/
---

## Q114335: Deleting Outdated Registry Trees for Fortran or Visual C++

	Article: Q114335
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 4.0 
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have installed more than one release of a Microsoft software development
	product and are noticing strange build errors that seem, like undefined
	identifiers, it is possible that you have an outdated or incorrect Visual C++ or
	FORTRAN PowerStation registry. This situation can be corrected by deleting the
	appropriate registry key. Exit the Visual WorkBench and follow the steps below.
	
	WARNING NOTE: Please follow the instructions closely, because the Windows NT
	installation may be corrupted if you happen to incorrectly delete the wrong
	key.
	
	1. Select the Run... option from the Program Manager's File menu.
	
	2. Type "regedt32" (without the quotation marks) in the Command Line field and
	  press [Enter].
	
	3. Select "HKEY_CURRENT_USER" under the Window menu
	
	4. Open the "HKEY_CURRENT_USER" folder
	
	5. Open the "Software" folder
	
	6. Open the "Microsoft" folder
	
	7. Select the "Development" folder (for Visual C++ version 4.0) or the "Visual
	  C++ <version>" folder (<version> may be blank or be a version
	  number such as "2.0") or the "FORTRAN PowerStation" folder.
	
	8. Press the [Del] key
	
	9. Answer [Yes] to the confirmation Dialog
	
	10. Close the Registry Editor (regedt32).
	
	The Visual WorkBench will inform you that a new registry key will be created the
	next time it is run.
	
	Additional query words: kbinf 1.00 2.00 2.10 4.00
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbFortranSearch kbvc100 kbZNotKeyword2 kbVC200 kbVC210 kbFORTRANPower32100NT kbFORTRANPower32400NT
	Version           : :1.0,2.0,2.1,4.0
	
	=============================================================================
	
