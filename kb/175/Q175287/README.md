---
layout: page
title: "Q175287: XADM: Incorrectly Formatted Export File Contains Only Obj-Class"
permalink: /kb/175/Q175287/
---

## Q175287: XADM: Incorrectly Formatted Export File Contains Only Obj-Class

	Article: Q175287
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the Microsoft Exchange Administrator program and export data to a
	header file that is formatted incorrectly, only the Obj-Class field may appear
	in the .csv file. No errors are logged.
	
	CAUSE
	=====
	
	This problem occurs if the header file uses an invalid separator, such as a
	percent sign (%). A valid separator can be a comma, tab, or space.
	
	Additional query words: import text edit
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
