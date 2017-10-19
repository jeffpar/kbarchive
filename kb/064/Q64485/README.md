---
layout: page
title: "Q64485: IBM EE 1.2 Lan Server Expanded Character Set"
permalink: /kb/064/Q64485/
---

## Q64485: IBM EE 1.2 Lan Server Expanded Character Set

	Article: Q64485
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	When installing IBM EE 1.2 Lan Server or Lan Requester, the User ID, Group ID,
	Password, and Domain names are by default limited to what IBM refers to as the
	"Minimal Character Set," which consists of the characters A-Z, a-z, #, @, $, and
	0-9. This limitation is meant to maintain compatibility with the Communications
	Manager and Database Manager components of IBM EE 1.2 Lan Server or Lan
	Requester, which are limited to this minimal set.
	
	If names with other characters are desired (for example, a domain name of
	"FLOOR_5"), the "Expanded Character Set" can be used by entering the following
	from the command line:
	
	  " upmcset /e" (without the quotation marks)
	
	The Expanded Character Set permits use of the following characters:
	
	  A-Z, a-z, #, @, $, 0-9
	  All accented characters
	  All extended keyboard character, except ."/\[];:|<>+=,?*
	
	To return to the Minimal Character Set, enter the following from the command
	line:
	
	  " upmcset /m" (without the quotation marks)
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
