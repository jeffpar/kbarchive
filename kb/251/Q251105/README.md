---
layout: page
title: "Q251105: PRB: Err Msg: Can Not Run Unicode Version of Atl.dll on Win 95"
permalink: kb/251/Q251105/
---

## Q251105: PRB: Err Msg: Can Not Run Unicode Version of Atl.dll on Win 95

	Article: Q251105
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 sp1, sp2, sp3
	Operating System(s): 
	Keyword(s): kbSSafe600 kbVBp600 kbVC600 kbvfp600 kbVisID600 kbVJ600 kbVS600 kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Studio versions 6.0, 6.0 sp1, sp2, sp3 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Visual InterDev, version 6.0 
	- Microsoft Visual J++, version 6.0 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Near the end of the installation for Visual Studio 6.0 (or individual language
	products), you may receive one of the following error messages:
	
	  can not run unicode version of atl.dll on Win 95 please install the correct
	  version
	
	  -or-
	
	  ACMSetup executed an invalid instruction in module ATL.DLL at 015f:5f3e303e
	
	This error may also occur when you install Visual Studio 6.0 (or individual
	language products) on Windows 95 or Windows 98.
	
	CAUSE
	=====
	
	The cause of this error is a conflict between the version of Atl.dll on your
	system and the version Visual Studio is trying to install.
	
	RESOLUTION
	==========
	
	1. Search for "Atl.dll" (without the quotation marks).
	
	2. Rename the version found in Windows\System as "Atl.123" (without the
	  quotation marks).
	
	3. Restart the system.
	
	4. Install Visual Studio 6.0.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Restarting the computer may not be necessary but will insure updating of the
	system cache.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Replace your version of Atl.dll with version 3.0.8168.0 - ATL Module for Windows
	NT (Unicode).
	
	NOTE: The Unicode and ANSI versions of this file have the same version number. By
	renaming the existing Atl.dll on your system as Atl.123, you allow Setup to
	install the version it requires.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe600 kbVBp600 kbVC600 kbvfp600 kbVisID600 kbVJ600 kbVS600 kbDSupport 
	Technology        : kbVCsearch kbVSsearch kbVJsearch kbVisIDsearch kbVFPsearch kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVC600 kbVC32bitSearch kbVFP600 kbVisID600 kbVJ600 kbSSafe600 kbVS600 kbVS600SPxSearch kbVS600Search
	Version           : :6.0,6.0 sp1, sp2, sp3
	Issue type        : kbprb
	
	=============================================================================
	
