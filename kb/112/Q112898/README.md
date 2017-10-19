---
layout: page
title: "Q112898: PC Adm: Err Msg: Notice 31 Error Loading Template"
permalink: /kb/112/Q112898/
---

## Q112898: PC Adm: Err Msg: Notice 31 Error Loading Template

	Article: Q112898
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a new user to a postoffice address list, the following error may
	occur:
	
	  Notice 31
	  Error Loading Template
	
	CAUSE
	=====
	
	This error can be caused by a corrupted or incorrectly created or modified
	ADMIN.TPL file.
	
	RESOLUTION
	==========
	
	To test for a corrupted or incorrectly edited file:
	
	1. Rename ADMIN.TPL.
	
	  NOTE: This will prevent the system from using it.
	
	2. Create a new test user. If no error messages are generated, the problem
	  probably lies with the file syntax.
	
	3. Restore a valid copy of the ADMIN.TPL file from a backup copy or edit the
	  existing file to ensure that the syntax is correct.
	
	
	Additional query words: 2.10x 3.00 3.0a 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	
