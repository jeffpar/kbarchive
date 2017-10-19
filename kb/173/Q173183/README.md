---
layout: page
title: "Q173183: Grpcpy.doc Contains Editing Marks Making It Difficult to Read"
permalink: /kb/173/Q173183/
---

## Q173183: Grpcpy.doc Contains Editing Marks Making It Difficult to Read

	Article: Q173183
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Grpcpy.doc file, which is included with the Windows NT Server 4.0 Resource
	Kit, Supplement Two, cannot be read if you use WordPad to open it.
	
	MORE INFORMATION
	================
	
	Grpcpy.doc was saved in Microsoft Word 95 format before the tracked editing
	changes were accepted. The document still contains both the deleted text (which
	appears in strikethrough format) and the inserted text (which appears in
	underlined format). WordPad does not support tracked editing changes, and it
	cannot distinguish between deleted text and inserted text.
	
	Use one of the following methods to make the document easier to read.
	
	- Open Grpcpy.doc in Microsoft Word 95 or later, accept the editing changes,
	  and then save the document. For more information on tracking editing changes,
	  see the Microsoft Word documentation or Help.
	
	  -or-
	
	- Open Grpcpy.doc in WordPad, and then manually delete the text that appears in
	  strikethrough format.
	
	
	Additional query words: highlighted lines blue extra unreadable
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
