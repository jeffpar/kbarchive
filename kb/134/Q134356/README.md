---
layout: page
title: "Q134356: Error Message: General Failure in Microsoft Transport"
permalink: kb/134/Q134356/
---

## Q134356: Error Message: General Failure in Microsoft Transport

	Article: Q134356
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a multiple-recipient message that is password protected, you may
	receive the following error message:
	
	  General Failure in Microsoft Transport
	
	CAUSE
	=====
	
	The error message is misleading. It may occur if one of the receiving fax
	machines is a G3 fax machine. G3 fax machines do not support security features.
	
	RESOLUTION
	==========
	
	Remove the password protection from the fax before you send it to a fax machine
	that does not support security features.
	
	MORE INFORMATION
	================
	
	If you send a single-recipient message that is password protected to a G3 fax
	machine, you receive the following error message:
	
	  Security features are not supported by the recipient
	
	Additional query words: winfax
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
