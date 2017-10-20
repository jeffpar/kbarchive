---
layout: page
title: "Q169775: XFOR: Preserving PABs During Upgrade or Re-installation"
permalink: /kb/169/Q169775/
---

## Q169775: XFOR: Preserving PABs During Upgrade or Re-installation

{% raw %}

	Article: Q169775
	Product(s): Microsoft Exchange
	Version(s): 3.2; WINDOWS:3.2
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Linkage Connector to IBM PROFS and OfficeVision, version 3.2 
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	LinkAge Connectors use the MAPI Personal Address Book service for storing any
	required temporary proxy addresses. These are stored under
	
	  C:\LINKAGE\TABLES\*.PAB
	
	or wherever the root is.
	
	When you upgrade or re-install, it is important that these .pab files do not get
	deleted if you do not want to lose any previously generated temporary proxy
	addresses. You should also back these files up from time to time.
	
	A Personal Address Book (PAB) is created for each of the Linkage connectors. This
	is because, in theory, certain addresses such as X.400 addresses for a Sender or
	Passive Recipient, can exceed the capacity of cc:Mail and Notes to directly
	represent them and therefore may require a map through the Exchange PAB.
	However, in practice, this seldom happens.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbLinkAgeSearch kbLinkAge320 kbExchangeConnIBMPROFS320
	Version           : :3.2; WINDOWS:3.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
