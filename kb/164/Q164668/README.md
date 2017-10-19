---
layout: page
title: "Q164668: FIX: Small Portion of Win32 Documentation Missing From VCEE 4.2"
permalink: /kb/164/Q164668/
---

## Q164668: FIX: Small Portion of Win32 Documentation Missing From VCEE 4.2

	Article: Q164668
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kbEEdition kbVC kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you search for the reference of a Win32 function between SetCursor and
	SetMenuContextHelpID you will not find it.
	
	If you look in the SDKs Folder in the InfoView; /Win32 SDK/Win32 Programmer's
	Reference/Reference/Functions/SetCursorPos to SetProcessAffinityMask, the help
	topics are missing.
	
	CAUSE
	=====
	
	The Online documentation is missing references for Win32 functions between
	SetCursor and SetMenuContextHelpID.
	
	RESOLUTION
	==========
	
	1. Refer to the documentation in Visual C++ 4.2 Professional Edition.
	
	2. Refer to the documentation in MSDN October 1996 or later
	
	3. Refer to http://www.microsoft.com/msdn/sdk/ and select the Documentation Tab.
	  The Win32 reference is published at this site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbEEdition kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
