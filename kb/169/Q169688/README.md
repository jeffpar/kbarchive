---
layout: page
title: "Q169688: XADM: Admin Unescapes Invalid X.400 Characters in DDA Fields"
permalink: kb/169/Q169688/
---

## Q169688: XADM: Admin Unescapes Invalid X.400 Characters in DDA Fields

	Article: Q169688
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	After you add a new custom recipient using the Admin utility, invalid X.400
	characters may be displayed when you view the newly added address.
	
	CAUSE
	=====
	
	X.400 addresses have a limited set of characters that are valid. When you use
	the Admin.exe tool to add a custom recipient X.400 address, and the X.400
	address is to include a DDA value with invalid X.400 characters, the invalid
	X.400 characters are to be entered as an escape sequence (as defined by RFC98).
	
	The invalid character is represented by its decimal value enclosed in
	parentheses. For example, to enter a DDA value of "UserA & UserB", you would
	actually enter "UserA (038) UserB".
	
	If you look at the DDA value after you save the new address, the DDA value is
	incorrectly displayed as "UserA & UserB". It should be displayed as entered,
	that is, "UserA (038) UserB".
	
	WORKAROUND
	==========
	
	There is no workaround. The issue is cosmetic. Internally, the string is stored
	correctly, with the invalid X.400 character in the escaped format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
