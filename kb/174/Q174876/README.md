---
layout: page
title: "Q174876: FIX: &quot;Invalid DOS Path&quot; to SSADMIN.INI on Unix"
permalink: /kb/174/Q174876/
---

## Q174876: FIX: &quot;Invalid DOS Path&quot; to SSADMIN.INI on Unix

	Article: Q174876
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbSSafe500bug kbVS97sp2fix
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a UNIX and a Windows version of SourceSafe accessing the same
	database, launching the SourceSafe Admin program on UNIX invokes the following
	error:
	
	  Invalid DOS path <path>\SSADMIN.INI
	
	CAUSE
	=====
	
	The UNIX operating system is case sensitive to filenames and the UNIX version of
	SourceSafe requires that ssadmin.ini be lower-case. However, when exiting the
	Windows version of the SourceSafe Admin, it writes the filename in upper-case.
	
	RESOLUTION
	==========
	
	Install Visual Studio Service Pack 3 for Visual SourceSafe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	SourceSafe for UNIX is manufactured by MAINSOFT, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	  Mainsoft Technical Support
	  1270 Oakmead Parkway, Suite 310
	  Sunnyvale, CA 94086
	  (408) 774-3410
	
	  http://www.mainsoft.com/
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbSSafe500bug kbVS97sp2fix 
	Technology        : kbVSsearch kbSSafeSearch kbAudDeveloper kbSSafe500 kbVS97 kbVS97Search
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
