---
layout: page
title: "Q107810: Err Msg in MS-DOS Session: Cannot Write to Drive C:/Cancel...?"
permalink: kb/107/Q107810/
---

## Q107810: Err Msg in MS-DOS Session: Cannot Write to Drive C:/Cancel...?

	Article: Q107810
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the MS-DOS Prompt icon, you receive one of the following error
	messages:
	
	  Cannot access drive C:
	
	  -or-
	
	  Cannot find drive C:
	
	Or, if you can run the MS-DOS Prompt, you receive the following error message
	when you type "exit" (without the quotation marks) at an MS-DOS prompt:
	
	  Cannot Write to Drive C:
	
	CAUSE
	=====
	
	These errors are caused by a corrupted DOSAPP.INI file; deleting this file
	corrects the problem.
	
	Additional query words: 3.11 err msg writing error retry cancel session
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
