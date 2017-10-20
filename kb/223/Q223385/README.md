---
layout: page
title: "Q223385: XIMS: IMS Routing Incorrectly When Directory Replication Enabled"
permalink: /kb/223/Q223385/
---

## Q223385: XIMS: IMS Routing Incorrectly When Directory Replication Enabled

{% raw %}

	Article: Q223385
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The Internet Mail Service may route mail incorrectly when directory replication
	is enabled. Instead of going through a single hop, the mail may go through
	multiple hops. The issue has to do with the way Exchange Server builds its
	routing topology when directory replication is enabled.
	
	For example, if a company has three Exchange Server Sites that do not replicate,
	and the users want to send mail using SMTP, they address mail to each other as
	user@site1.microsoft.com. Exchange Server looks up site1.microsoft.com in Domain
	Name System (DNS), and the mail is sent directly. If those three sites begin
	Exchange Server directory replication in a hub-and-spoke manner, users will gain
	the benefit of being able to pick users out of the global address list, but all
	mail from Site1 to Site2 will flow first through the hub by default. This adds
	an additional hop to the mail flow, and also creates a single point of failure.
	
	CAUSE
	=====
	
	When Exchange Server builds its routing table, it doesn't detect that sites are
	connected by means of Internet Mail Service, and therefore, does not set routing
	to direct using DNS.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Internet Mail Service
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Imcmsg.dll   | 5.5.2580.0 | 
	+---------------------------+
	| Msexcimc.exe | 5.5.2580.0 | 
	+---------------------------+
	
	This hotfix has been posted to the following Internet location as Psp2imca.zip
	and Psp2imci.zip:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP2/imc-fix
	
	
	In addition to the new files noted above, the following registry changes must be
	made to enable this functionality. To make the registry changes, perform the
	following steps:
	
	NOTE: The registry change is required to enable this feature in SP3 and later
	service packs.
	
	1. Stop the Exchange Server Internet Mail Service.
	
	2. Apply the fixed files noted above.
	
	3. Start Registry Editor (Regedt32.exe).
	
	4. Go to the following location in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	5. On the Edit menu, click Add Value, and add the following value:
	
	  Value Name: OnlySystemMessagesUseCDs
	  Data Type: REG_DWORD
	  Value: 0x0, 0x1
	  Default: 0x0 (not in registry by default)
	
	After this key is set, Exchange Server will detect that sites are connected by
	Internet Mail Service, and will set its routing to direct using DNS (1 hop).
	
	6. Click OK, and quit Registry Editor.
	
	7. Restart the Microsoft Exchange Internet Mail Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
