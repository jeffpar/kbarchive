---
layout: page
title: "Q166549: XCLN: Can't Access Proptags in Other Propsets Via Fields.Item()"
permalink: /kb/166/Q166549/
---

## Q166549: XCLN: Can't Access Proptags in Other Propsets Via Fields.Item()

{% raw %}

	Article: Q166549
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 17-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 5.0 
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SetNamespace command only works for accessing named properties by name and
	not by proptag. Named properties can be referred to a by a GUID and a name (a
	string) but not by a GUID and a hexadecimal number such as 0x1234.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Microsoft has planned the following added feature for inclusion in Microsoft
	Exchange version 5.0 U.S. Service Pack 1. Hexadecimal numbers as well as strings
	will be allowed, so you can refer to a named property by a GUID and "0x1234."
	Tthe hexadecimal number must start with "0x," followed by four hexadecimal
	digits, for example "0x0012."
	
	The following is an example of using strings or a hexadecimal number:
	
	  Fields.SetNameSpace("0006200300000000C000000000000046")
	  Fields.Item(&H81010000)
	
	NOTE: Any string starting with "0x" will be treated the same as a hexadecimal
	number. "NNNNNNNN" will not be converted to a hexadecimal number. Hexadecimal
	entries will only be accepted up to eight hex digits.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT kbExchange500Win95
	Version           : 5.0
	
	=============================================================================
	

{% endraw %}
