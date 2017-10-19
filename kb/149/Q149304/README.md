---
layout: page
title: "Q149304: TN3270: Admin Tool Causes Application Exception"
permalink: /kb/149/Q149304/
---

## Q149304: TN3270: Admin Tool Causes Application Exception

	Article: Q149304
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Edit, Delete, and Add boxes on the TN3270 Admin Tool are available even if
	there are no LUs to edit, delete, or add.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Define only one LUA LU via SNA Server Admin.
	
	2. Add that one LU to the TN3270 configuration; save it, and go back to main
	  screen.
	
	3. Click Config. You will notice that the edit LU dialog box is available even
	  though there is nothing selected.
	
	4. Click the Edit LU button to generate the exception.
	
	CAUSE
	=====
	
	The TN3270E Administrator tool incorrectly enables the Edit, Delete, and Add
	even though there are no LUs in the list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11. This problem was corrected in the latest Service Pack for SNA Server. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sp1 gray out
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211
	Version           : WINDOWS:2.11
	
	=============================================================================
	
