---
layout: page
title: "Q136045: PC Gen: Template Utility Ignores Record with a Space"
permalink: /kb/136/Q136045/
---

## Q136045: PC Gen: Template Utility Ignores Record with a Space

	Article: Q136045
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the TEMPLATE utility to create template information from a text
	file, some records may be ignored, and no warnings or errors are reported.
	
	CAUSE
	=====
	
	If there is a space after the record separator ~~, the record following the ~~
	is ignored.
	
	RESOLUTION
	==========
	
	Do not use spaces after the record separator when you use the TEMPLATE utility.
	You can also use the Mail Administration program (ADMIN.EXE) or IMPORT.EXE to
	add template information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 TEMPLATE.EXE for
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
