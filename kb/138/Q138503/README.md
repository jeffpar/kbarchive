---
layout: page
title: "Q138503: PRB: Visual FoxPro Help Jumps to Wrong Topic"
permalink: /kb/138/Q138503/
---

## Q138503: PRB: Visual FoxPro Help Jumps to Wrong Topic

	Article: Q138503
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro Help displays the wrong help topic.
	
	CAUSE
	=====
	
	This can be caused by a corrupt Foxhelp index file (Foxhelp.gid or Foxhelp.fts).
	
	RESOLUTION
	==========
	
	Foxhelp.gid is the file used to search for a topic in the Help screen when you
	click Index. Foxhelp.fts is used to search when you click Find. If you have
	trouble moving to the correct page in the Help file, delete the appropriate Help
	index file, and then restart Help. This will rebuild the index file.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
