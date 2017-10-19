---
layout: page
title: "Q124409: UT1x: Upsizing Wizard Incorrectly Converts Extended Characters"
permalink: /kb/124/Q124409/
---

## Q124409: UT1x: Upsizing Wizard Incorrectly Converts Extended Characters

	Article: Q124409
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 24-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Upsizing Tools 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Access Upsizing Tools Upsizing Wizard to transfer
	tables from Microsoft Access version 2.0 to Microsoft SQL Server, certain
	extended ASCII characters in table or field names are not transferred as
	underscore characters as they should be. When the Upsizing Wizard creates items
	such as triggers, rules, and defaults for these tables or fields, however, it
	refers to the underscore character that should have been used, instead of to the
	extended character. For example, if you have a table with a counter field named
	
	  
	
	  <accented A>bracadabra
	
	the INSERT trigger will reference the field as
	
	  
	
	  _bracadabra
	
	even though the field will still be named:
	
	  
	
	  <accented A>bracadabra
	
	RESOLUTION
	==========
	
	To work around this problem, replace the extended characters in table or field
	names with an underscore character in Microsoft Access before you transfer the
	tables to Microsoft SQL Server. Characters with a value greater than 128 can
	exhibit this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Access Upsizing
	Tools version 1.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAccessSearch kbAccessUpsizingTools100
	Version           : WINDOWS:1.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
