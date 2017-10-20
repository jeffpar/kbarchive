---
layout: page
title: "Q174755: XFOR: ResolveP2 Registry Setting Expanded in Exchange 5.5"
permalink: /kb/174/Q174755/
---

## Q174755: XFOR: ResolveP2 Registry Setting Expanded in Exchange 5.5

{% raw %}

	Article: Q174755
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Administrators of Microsoft Exchange Server 5.0 who are familiar with the P2
	resolution features outlined in Microsoft Knowledge Base article Q166163 will
	find those options enhanced in version 5.5.
	
	MORE INFORMATION
	================
	
	The ResolveP2 registry setting can now contain the previous settings (0=Don't
	resolve any P2, 1=Resolve all P2) or a set of flags from a revised IMS module
	included with Exchange Server 5.5. The flags currently defined are:
	
	  ADDRESS_CONVERT_SENDER decimal value 1
	  ADDRESS_CONVERT_SENT_REPRESENTING decimal value 2
	  ADDRESS_CONVERT_RECEIVED_BY decimal value 4
	  ADDRESS_CONVERT_RECEIVED_REPRESENTING decimal value 8
	  ADDRESS_CONVERT_RECIPIENTS decimal value 16
	  ADDRESS_CONVERT_REPLY_TO decimal value 32
	
	To determine the value you want, add all of the elements you want resolved, then
	multiply by two. For example, to resolve all but the sender, enter (2+4+8+16+32)
	*2 = 124. To resolve only the recipients, enter 16*2 = 32.
	
	Note: ADDRESS_CONVERT_SENDER does not resolve the P2 "from" field.
	ADDRESS_CONVERT_SENT_REPRESENTING does.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	

{% endraw %}
