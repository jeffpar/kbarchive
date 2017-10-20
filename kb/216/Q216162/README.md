---
layout: page
title: "Q216162: XFOR: Exchange IMS Can Suppress Generation of a Delivery Receipt"
permalink: /kb/216/Q216162/
---

## Q216162: XFOR: Exchange IMS Can Suppress Generation of a Delivery Receipt

{% raw %}

	Article: Q216162
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 11-JUN-2002
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Service will allow delivery receipts to be returned to the
	Internet if the originator asks for a receipt (Return-Receipt-To:). This can
	open up a security hole as this will show a valid recipient on a Microsoft
	Exchange system.
	
	RESOLUTION
	==========
	
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
	| Imcmsg.dll   | 5.5.2539.1 | 
	+---------------------------+
	| Msexcimc.exe | 5.5.2539.1 | 
	+---------------------------+
	
	This hotfix has been posted to the following Internet location as Psp2imca.zip
	and Psp2imci.zip:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.5/PostSP2/imc-fix
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	There is a new registry entry that will prevent delivery receipts from being sent
	to the Internet while allowing other auto-replies to be sent.
	To add this new registry entry, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters  
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	     Value Name: AlwaysSuppressDR
	     Data Type:  REG-DWORD 1
	     Value: 1 or 0
	 
	
	Note: Set the value to 1 to suppress the generation of delivery receipts. The
	default value of 0 allows deliver receipts to be generated.
	
	4. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
