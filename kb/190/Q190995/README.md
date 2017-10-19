---
layout: page
title: "Q190995: XADM: DS_E_INVALID_ATTRIBUTE_SYNTAX Modifying DL Owner"
permalink: /kb/190/Q190995/
---

## Q190995: XADM: DS_E_INVALID_ATTRIBUTE_SYNTAX Modifying DL Owner

	Article: Q190995
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify the Owner field of a distribution list (DL) using the Microsoft
	Exchange Server Administrator program, the following error is received:
	
	  An internal processing error has occurred: Invalid Attribute Syntax.
	  Please restart the Administrator program, Microsoft Exchange Server or
	  both.
	
	  Microsoft Directory ID: DS_E_INVALID_ATTRIBUTE_SYNTAX
	
	CAUSE
	=====
	
	The value of the Expansion Server field is invalid. In the Exchange Server
	Administrator program, the Expansion Server field is blank, instead of
	containing "Any Server In Site" or a valid server name.
	
	WORKAROUND
	==========
	
	Change the setting for the Expansion Server to either "Any Server In Site" or
	one of the servers listed.
	
	You should now be able to modify the Owner field.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
