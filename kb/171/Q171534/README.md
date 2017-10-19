---
layout: page
title: "Q171534: FIX: Source Code Control Integration Holds .dat Files Open"
permalink: /kb/171/Q171534/
---

## Q171534: FIX: Source Code Control Integration Holds .dat Files Open

	Article: Q171534
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbVS97sp2fix
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual Studio 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The .DAT files in the Visual SourceSafe data directory are unexpectedly left
	open, causing such operations as backing up the database to fail.
	
	CAUSE
	=====
	
	When using the Source Code Control integration with other developer products,
	such as Visual Basic 5.0 and Visual C++ 5.0, the integration component holds the
	Rights.Dat, Status.Dat, etc. open any time a source- code controlled project is
	opened. This prevents these files from being backed up if a user inadvertently
	leaves a developer application(s) running.
	
	RESOLUTION
	==========
	
	Install the Visual Studio 97 Service Pack 2. The SourceSafe integration
	component will then close the files after a period of inactivity, allowing for
	the files to be backed up.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in Visual Studio 97 Service Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words: lock locked access denied
	
	======================================================================
	Keywords          : kbSSafe500bug kbVS97sp2fix 
	Technology        : kbVSsearch kbSSafeSearch kbAudDeveloper kbSSafe500 kbVS97 kbVS97Search
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
