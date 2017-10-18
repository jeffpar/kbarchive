---
layout: page
title: "Q158430: FIX: VSS 4.x Integration with VC 4.x under Windows NT 4.0"
permalink: kb/158/Q158430/
---

## Q158430: FIX: VSS 4.x Integration with VC 4.x under Windows NT 4.0

	Article: Q158430
	Product(s): Microsoft SourceSafe
	Version(s): 4.0 4.0a 4.1 4.2
	Operating System(s): 
	Keyword(s): kbusage kbSSafe400bug kbSSafe400fixkbbuglist kbfixlist
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a 
	- Microsoft Visual C++, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT 4.0, the SourceSafe integration with Visual C++ may not work
	correctly. When using a source-code control action in Visual C++, you may
	experience one or more of the following symptoms:
	
	1. Visual C++ hangs or locks up.
	
	2. Blank dialog boxes appear in Visual C++.
	
	3. Dialog boxes do not appear.
	
	4. Dialog boxes contain unreadable text/symbols.
	
	RESOLUTION
	==========
	
	The SourceSafe SSSCC.DLL needs to be updated to SSSCC.DLL version 1310. To
	obtain this DLL, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q151411 UPD: New Version of Ssscc.dll Available
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual SourceSafe
	patch SSSCC.DLL version 1310 for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbSSafe400bug kbSSafe400fix kbbuglist kbfixlist
	Technology        : kbVCsearch kbVC400 kbSSafeSearch kbAudDeveloper kbVC410 kbVC420 kbSSafe400 kbSSafe400a
	Version           : 4.0 4.0a 4.1 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
