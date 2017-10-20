---
layout: page
title: "Q157712: XFOR: Lowercase Address Types in Dir-Sync with Exchange"
permalink: /kb/157/Q157712/
---

## Q157712: XFOR: Lowercase Address Types in Dir-Sync with Exchange

{% raw %}

	Article: Q157712
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbnetwork exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The address type parameter (that is, SMTP, PCM, SNADS, and so forth) in a
	directory synchronization (dir-sync) transaction is not case sensitive, by
	definition.
	
	A Microsoft Mail postoffice sends all its transaction address types in
	uppercase.
	
	Microsoft Exchange Server sends all its transaction address types in lowercase.
	
	Both Microsoft Mail and Microsoft Exchange Server read these transactions without
	sensitivity to case. Some third-party dir-sync requesters are sensitive to the
	case of the address type parameter and incorrectly expect it to be uppercase.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
