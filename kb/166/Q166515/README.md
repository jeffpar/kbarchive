---
layout: page
title: "Q166515: XADM: Primary SMTP Proxy Not Used for E-mail Address"
permalink: /kb/166/Q166515/
---

## Q166515: XADM: Primary SMTP Proxy Not Used for E-mail Address

{% raw %}

	Article: Q166515
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the primary SMTP proxy is not used for the original e-mail address, the
	subsequent outbound message uses the second primary proxy address.
	
	RESOLUTION
	==========
	
	To avoid the problem, always regenerate (use partial fidelity) the headers with
	addresses for outbound messages if P2 proxy lookups are being done. If this
	value is set, then on outbound messages, all address headers are regenerated
	with the primary proxy. All addresses will be regenerated if these flags are
	set.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	To resolve the problem, do the following:
	
	1. Install Service Pack 1 for Microsoft Exchange Server version 5.0.
	
	2. Start Registry Editor (Regedt32.exe).
	
	3. Go to the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ 
	     MSExchangeIMC\Parameters
	
	4. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: AddressRewrite
	     Data Type:  REG_DWORD
	     Value:      1
	
	5. Locate the Resolve2 value name. Double-click it and change the value to 1. It
	  should resemble the following:
	
	     Value Name: ResolveP2
	     Data Type:  REG_DWORD
	     Value:      1
	
	When both ResolveP2 and AddressRewrite are set in the IMS registry, Microsoft
	Exchange Server will look up the SMTP proxies and remap the inbound SMTP proxy
	to the corresponding primary SMTP proxy.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
