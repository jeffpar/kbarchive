---
layout: page
title: "Q191262: XFOR: IMC Accepts SMTP Address with Space While IMS Does Not"
permalink: /kb/191/Q191262/
---

## Q191262: XFOR: IMC Accepts SMTP Address with Space While IMS Does Not

{% raw %}

	Article: Q191262
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Administrators of Microsoft Exchange managing multiple versions of the Internet
	Mail Connector may notice that in older versions, address nomenclature not
	normally seen in Internet Mail messages are accepted inbound, but not accepted
	inbound with later versions. The 553 malformed address: return code will be
	seen.
	
	CAUSE
	=====
	
	As the Microsoft Exchange product matures, the Internet Mail Connector by design
	is more strict with respect to address formatting.
	
	MORE INFORMATION
	================
	
	The Internet Mail Connector can be slackened with respect to allowing uncommon
	addresses inbound. The following registry entry can be employed.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe, depending on your version
	  of Windows NT).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  System/CurrentControlSet/Services/MSExchangeIMC/Parameters
	
	3. On the Edit menu, click Add Value, and then use the following entry:
	
	  Value Name: AcceptMalformed821Adrs
	  Data Type: REG_DWORD
	  Value: 1
	
	4. Cycle the Internet Mail Connector when done
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
