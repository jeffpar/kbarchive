---
layout: page
title: "Q87967: FIX: CVW 4.0 Does Not Work with Dynamically Loaded DLL"
permalink: kb/087/Q87967/
---

## Q87967: FIX: CVW 4.0 Does Not Work with Dynamically Loaded DLL

	Article: Q87967
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft CodeView for Windows (CVW) version 4.0 and 4.01 may not work with a
	DLL that has been dynamically loaded, freed, and loaded again. Problems include
	not stopping on existing breakpoints, not allowing new breakpoints, watches
	displaying invalid or incorrect data, and mixed source/assembly mode showing the
	wrong code.
	
	CAUSE
	=====
	
	CVW associates source lines and symbols with addresses when programs and DLLs
	are loaded into memory. When Windows loads, frees, and loads a DLL again, the
	DLL may be loaded into a new area of memory. CVW is not updating the addresses
	of the symbols when this occurs.
	
	RESOLUTION
	==========
	
	If the DLL is loaded by another program before CVW is used, the DLL is not
	loaded or freed by the program that is being debugged. Windows will not load
	more than one copy of a DLL. It will just increase or decrease the instance
	count of the DLL when the program is being debugged.
	
	The solution to this problem is to create a stub program that loads the DLLs that
	are being dynamically loaded. This program can be run before running CVW.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft CodeView for Windows
	versions 4.0 and 4.01. This problem was corrected in CodeView version 4.1.
	
	MORE INFORMATION
	================
	
	A dynamically loaded DLL is a DLL that is loaded using the LoadLibrary() Windows
	API function.
	
	Additional query words: 4.00 4.10 FreeLibrary
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView400 kbCodeView401
	Version           : :4.0,4.01
	Solution Type     : kbfix
	
	=============================================================================
	
