---
layout: page
title: "Q219031: XADM: Default POP3 Line-Wrap Set to 72 Characters"
permalink: kb/219/Q219031/
---

## Q219031: XADM: Default POP3 Line-Wrap Set to 72 Characters

	Article: Q219031
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
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
	
	When you receive a message from a Microsoft Exchange Server computer using the
	POP3 Internet Protocol, the message text may be wrapped after 72 characters.
	This behavior can be observed when the Message Encoding is set to MIME and the
	"Provide Message Body as plain Text" option is enabled.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2564.0 | 
	+-------------------------+
	| Store.exe  | 5.5.2564.0 | 
	+-------------------------+
	
	
	WORKAROUND
	==========
	
	In order to change the message text word-wrap, a new registry key was created.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To correct this problem, apply the fix described in the Resolution section above,
	and then perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	     Value Name: Pop3 Line Wrap Size
	     Data Type:  REG_DWORD
	     Value:      Type the maximum line length in either decimal or hexadecimal.
	 
	
	NOTE: The registry key is case-sensitive.
	
	4. Quit Registry Editor. Stop and restart the Microsoft Exchange Information
	  Store for the change to take effect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: wrap line body text
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
