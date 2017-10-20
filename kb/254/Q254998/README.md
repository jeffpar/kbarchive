---
layout: page
title: "Q254998: XCON: MIXER Maps X.400 Address to SMTP Address"
permalink: /kb/254/Q254998/
---

## Q254998: XCON: MIXER Maps X.400 Address to SMTP Address

{% raw %}

	Article: Q254998
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If an X.400 user sends a message to an SMTP recipient and to an X.400 recipient
	and the message is sent to SMTP over an Exchange Server computer that is
	configured for MIME Internet X.400 Enhanced Relay (MIXER) address mapping but
	that has no mapping table entry for the X.400 recipient's address, the X.400
	address is translated to an SMTP address according to the algorithm that is
	defined in Request for Comments (RFC) 2156 (MIXER), instead of being
	encapsulated in the SMTP address of the MIXER server so that replies can be
	routed back to this server.
	
	For example, if an X.400 user sends a message to both an SMTP recipient and to
	the following X.400 user
	
	  "c=us; a=mci; p=prmd; s=user; g=another"
	
	this user's X.400 address is mapped according to the RFC 2156 algorithm to the
	address "another.user@prmd.mci.us," which is almost certainly an invalid address
	for this user. This means that the SMTP recipient cannot reply to the X.400
	recipient. The Exchange Server MIXER server should encapsulate the X.400 address
	to create the following correct reply address:
	
	  "/G=another/S=user/P=prmd/A=mci/c=us/"@microsoft.org.com
	
	where microsoft.org.com is the domain address of the MIXER server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this issue, create a custom recipient for the X.400 recipient on
	the MIXER server. The SMTP address of the custom recipient can be used instead
	of the mapped version of the X.400 address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	If you want addresses to be translated according to the RFC 2156 algorithm and
	not encapsulated after you apply this fix, then you need to edit the registry:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Strict MIXER Conformance
	  Data Type: REG_DWORD
	  Value: 1
	
	4. Quit Registry Editor.
	
	Additional query words: MIXER RFC2156
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
