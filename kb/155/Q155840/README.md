---
layout: page
title: "Q155840: XCON: How the Use of '&amp;' in Organization Name Affects Exchange"
permalink: kb/155/Q155840/
---

## Q155840: XCON: How the Use of '&amp;' in Organization Name Affects Exchange

	Article: Q155840
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an ampersand (&) is included as part of a Microsoft Exchange Organization
	name, it will not cause any routing or addressing problems. The Distinguished
	Name (DN) will show the Organization name exactly as it was typed. However, the
	X.400 addresses that are generated will have a question mark (?) substituted for
	the ampersand and the name will be truncated to 16 characters (per the X.400
	specifications).
	
	MORE INFORMATION
	================
	
	X.400 does not allow an ampersand in addresses, so the question mark is
	substituted. The fact that the DN shows a different literal string for the
	Organization name compared to the X.400 Address suggests, at first glance, that
	this might be a source of problems. However, this is not true. The X.400 Address
	and the DN are used for totally different processes. No attempt to make these
	two items look the same should be made. This is by design.
	
	When you one-off address a message to another user (to test a site/X.400
	connector, for example), the X.400 address should be typed just as it appears on
	the Email Addresses property page for that recipient in the Microsoft Exchange
	Administrator program.
	
	For additional information about the printable character set, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q108732 X400: Address Syntax
	
	This is the character set that is allowed in messaging systems that conform to
	the X.400 series of specifications. This information can also be found in the
	X.409 Specification, which is contained in the CCITT (The International
	Telegraph & Telephone Consultative Committee) Red Book volume VIII-fascicle
	VIII.7.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
