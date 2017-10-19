---
layout: page
title: "Q171535: FIX: ANALYZE Crashes When No Log Entries Found in Log File"
permalink: /kb/171/Q171535/
---

## Q171535: FIX: ANALYZE Crashes When No Log Entries Found in Log File

	Article: Q171535
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
	
	In Pass 3 of 4, the status bar stops displaying new files. After processing on
	the same file for a random amount of time, an Access Violation error occurs:
	
	  Analyze.exe Exception: access violation (0xC000005), address 0x00406372
	
	You may experience other variations of errors messages, all resulting in Analyze
	crashing.
	
	CAUSE
	=====
	
	Analyze tries to rebuild a file containing no log entries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Please note that the Visual Studio 97 Service Pack 2 readme states that the
	issue fixed was: "ANALYZE Application Error When Directory Not Found." This is
	incorrect.
	
	Additional query words: gpf general protection fault crash hang
	
	======================================================================
	Keywords          : kbSSafe500bug kbVS97sp2fix 
	Technology        : kbVSsearch kbSSafeSearch kbAudDeveloper kbSSafe500 kbVS97 kbVS97Search
	Version           : WINDOWS:5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
