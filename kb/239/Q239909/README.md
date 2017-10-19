---
layout: page
title: "Q239909: BUG: ATL Registrar Code Does Not Handle DBCS Correctly"
permalink: /kb/239/Q239909/
---

## Q239909: BUG: ATL Registrar Code Does Not Handle DBCS Correctly

	Article: Q239909
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0,2.1,3.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL200bug kbATL210bug kbCOMt kbRegistry kbATL300bug kbGrpDSMFCATL
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you register an ATL object on a system that uses a double-byte character
	set (DBCS), ATL might put garbage characters in the registry entry for the
	object.
	
	CAUSE
	=====
	
	In the AddString function in ATL 3.0 in file StatReg.h, lpszT++ is used to walk
	a character buffer, and then characters are added at that position. If the
	buffer contains DBCS characters, this will cause corruption in the string
	because ATL fails to take into account the 2-byte characters.
	
	The function CParseBuffer::AddString in ATL 2.0 and 2.1 in file StatReg.cpp has
	the same problem.
	
	RESOLUTION
	==========
	
	Steps to Fix the Problem for ATL 2.0 and 2.1
	--------------------------------------------
	
	1. In StatReg.cpp, find the CParseBuffer::AddString function.
	
	2. On line 8 of the AddString function, change
	
	  lpszT++
	
	  to:
	
	  CharNext(lpszT)
	
	3. Save StatReg.cpp so the changes will be retained.
	
	4. Rebuild the project with a Release MinDependency build configuration. (If you
	  do not build with this option, you would have to add _ATL_STATIC_REGISTRY to
	  the preprocessor definitions of the project so ATL would add the registration
	  code to your project. You would also have to remove the _ATL_DLL preprocessor
	  option. You do not have to add _ATL_STATIC_REGISTRY if you are building with
	  a Release MinDependency build configuration because it is already defined.)
	
	5. Rebuild the project.
	
	By using this procedure, the registration code for any COM objects in the project
	will be statically linked and will not use the incorrect code in Atl.dll. This
	will also add about 5 KB to the size of the executable or DLL.
	
	Steps to Fix the Problem for ATL 3.0
	------------------------------------
	
	1. In StatReg.h, find the AddString function.
	
	2. On line 8 of the AddString function, change
	
	  lpszT++
	
	  to:
	
	  CharNext(lpszT)
	
	3. Save StatReg.h so the changes will be retained.
	
	4. Rebuild the project with a Release MinDependency build configuration. (If you
	  do not build with this option, you would have to add _ATL_STATIC_REGISTRY to
	  the preprocessor definitions of the project so ATL would add the registration
	  code to your project. You would also have to remove the _ATL_DLL preprocessor
	  option. You do not have to add _ATL_STATIC_REGISTRY if you are building with
	  a Release MinDependency build configuration because it is already defined.)
	
	5. Rebuild the project.
	
	By using the above steps, the registration code for any COM objects in the
	project will be statically linked and will not use the incorrect code in
	ATL.DLL. This will add about 10 KB to the size of the executable or DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ATL object.
	
	2. Register the object on a system that uses DBCS, such as the Japanese version
	  of Windows NT 4.0.
	
	3. Use Regedt32 to view the key under HKEY_CLASSES_ROOT that your object added
	  to see if the name is correct.
	
	Additional query words: regsvr32 ATL.DLL registry CharNext
	
	======================================================================
	Keywords          : kbActiveX kbATL200bug kbATL210bug kbCOMt kbRegistry kbATL300bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch kbATL200 kbATL300 kbATL210
	Version           : WINDOWS:2.0,2.1,3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
