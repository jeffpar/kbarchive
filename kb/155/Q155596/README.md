---
layout: page
title: "Q155596: XCLN: Exchange Client Address Search Ignores Hyphens"
permalink: /kb/155/Q155596/
---

## Q155596: XCLN: Exchange Client Address Search Ignores Hyphens

{% raw %}

	Article: Q155596
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are creating multiple Distribution Lists (DLs) or user mailboxes with
	prefixes or names that contain a hyphen, a mail client address search will not
	recognize the hyphen. For example, this would occur with the prefixes XX-, JA-,
	or a name such as Mary-Anne.
	
	MORE INFORMATION
	================
	
	The hyphen is ignored in address searches, so searches on "ja-" or "Mary-Anne"
	return every James and Jane or MaryA in the address book. This can be problem
	for international users, any names that are hyphenated, and distribution lists
	that contain a hyphen. An address search recognizes the slash mark (/) and the
	underscore (_), characters but does not recognize the hyphen.
	
	Additional query words: Address Resolution
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
