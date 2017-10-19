---
layout: page
title: "Q260567: BUG: LNK2019 When Building For Pocket PC Emulation"
permalink: /kb/260/Q260567/
---

## Q260567: BUG: LNK2019 When Building For Pocket PC Emulation

	Article: Q260567
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSETK
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual C++ version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building an application for Pocket PC emulation that uses the Windows CE
	operating system functions, errors similar to the following may be encountered:
	
	  <filename>.obj : error LNK2019: unresolved external symbol
	  _CeDeleteDatabase referenced in function <function>
	
	CAUSE
	=====
	
	These operating system functions use the _stdcall calling convention, but the
	compiler is declaring them as _cdecl. This problem occurs with the Windows CE
	Platform SDK for Pocket PC because the functions are incorrectly declared in the
	Windbase.h file without a linkage type.
	
	RESOLUTION
	==========
	
	Use one of the following workarounds:
	
	- Add the /Gz compiler switch to the configuration's project settings when
	  building for Pocket PC emulation.
	
	-or-
	
	- If the first workaround prevents other functions/libraries from linking in
	  your project, then modify the Windows CE database function declarations in
	  the Windbase.h file. For example, for the error in the "Symptoms" section,
	  change the following declaration
	
	  BOOL CeDeleteDatabase (CEOID oid);
	
	  to read:
	
	  BOOL WINAPI CeDeleteDatabase (CEOID oid);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This bug affects the following function classes:
	
	- Windows CE Database
	- GDI
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSETK 
	Technology        : kbVCsearch kbAudDeveloper kbVCeMb
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
