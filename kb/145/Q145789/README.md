---
layout: page
title: "Q145789: XCLN: Boldon James MAPI X.500 Address Book Client Service Crash"
permalink: /kb/145/Q145789/
---

## Q145789: XCLN: Boldon James MAPI X.500 Address Book Client Service Crash

{% raw %}

	Article: Q145789
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are using the Boldon James MAPI X.500 Address Book client service on a
	computer that is also running Microsoft Exchange Server. When you attempt to
	save configuration changes, the Inbox or the Outlook client stops responding. An
	access violation message similar to the following appears:
	
	  An application error has occurred and an application error log is being
	  generated EXCHNGE32.EXE
	  Exception: access violation (0xc0000005), Address: 0x6de3e107
	
	This will not happen if the Inbox client or the Outlook client software is
	installed on a computer other than the one running Microsoft Exchange Server.
	
	CAUSE
	=====
	
	When installed on the same computer as Microsoft Exchange Server, the client
	Setup.exe will not overwrite the existing Wmsui[32].Dll files. This is proper
	behavior.
	
	However, the DBCS-enabled code in the server's Wmsui that displays property sheet
	dialogs (for address book and configuration) would access violate on close.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Boldon James MAPI X.500 Address Book client service is manufactured by
	Boldon James, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbExchange500NT
	Version           : :5.0
	
	=============================================================================
	

{% endraw %}
