---
layout: page
title: "Q174207: XFOR: Notes Proxy Domain Name Over 31 Characters Stripped"
permalink: /kb/174/Q174207/
---

## Q174207: XFOR: Notes Proxy Domain Name Over 31 Characters Stripped

{% raw %}

	Article: Q174207
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If the Lotus Notes Site Address on an Exchange Server computer is set to use a
	Notes domain name greater then 31 characters, only the first 31 will make it
	over during directory synchronization (dirsync).
	
	CAUSE
	=====
	
	Exchange Server will dirsync over the entire site address name you have created,
	even if the length exceeds 31 characters. Notes (on the receiving end) truncates
	the name to 31 characters.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	

{% endraw %}
