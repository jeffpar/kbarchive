---
layout: page
title: "Q166469: FIX: Multiple Check In Fails with Keyword Expansion"
permalink: kb/166/Q166469/
---

## Q166469: FIX: Multiple Check In Fails with Keyword Expansion

	Article: Q166469
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0,97; winnt:5.0
	Operating System(s): 
	Keyword(s): kbSSafe kbSSafe500bug kbVBp kbVBp400 kbVC kbVC500 kbVS97sp1fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Developer Studio or Visual Basic to check multiple files containing
	SourceSafe keywords into a SourceSafe database that has keyword expansion
	enabled for those files, only the first file checks in.
	
	RESOLUTION
	==========
	
	Use the SourceSafe Explorer to check in multiple files when keyword expansion is
	required.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe kbSSafe500bug kbVBp kbVBp400 kbVC kbVC500 kbVS97sp1fix 
	Technology        : kbVCsearch kbVSsearch kbVBSearch kbSSafeSearch kbAudDeveloper kbVB400Search kbVB400 kbVC500 kbVC32bitSearch kbSSafe500 kbVS97 kbVS97Search kbVC500Search
	Version           : WINDOWS:4.0,5.0,97; winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
