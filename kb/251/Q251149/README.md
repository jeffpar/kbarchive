---
layout: page
title: "Q251149: XIMS: Guest Account Allows Relaying with Routing Restrictions"
permalink: kb/251/Q251149/
---

## Q251149: XIMS: Guest Account Allows Relaying with Routing Restrictions

	Article: Q251149
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Service may allow non-authenticated users to relay mail if the
	Microsoft Windows NT domain Guest account is enabled.
	
	CAUSE
	=====
	
	This problem can occur if non-authenticated users bypass routing restrictions
	that require authentication by using the Guest account. After Simple Mail
	Transfer Protocol (SMTP) authentication does not work, some clients use the
	Guest account.
	
	WORKAROUND
	==========
	
	To work around this problem, disable the Guest account:
	
	1. In Windows NT User Manager for Domains, double-click the Guest account to
	  select it.
	
	2. Click to select the "Account Disabled" check box, and then click OK to save
	  the changes.
	
	Additional query words: IMS IMC relay netscape
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
