---
layout: page
title: "Q229089: XADM: Unable to Reply All to Forwarded Post from a Public Folder"
permalink: /kb/229/Q229089/
---

## Q229089: XADM: Unable to Reply All to Forwarded Post from a Public Folder

	Article: Q229089
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
	
	After applying Exchange Server 5.5 Service Pack 2 (SP2), users who receive
	forwarded posts from public folders will not be able to do a Reply-all. The
	message remains a post during the forward process, and the only valid operations
	are Reply, Forward, and Post-reply.
	
	CAUSE
	=====
	
	Changes were made in Exchange Server 5.5 SP2 to preserve the message class for
	forwarded messages when the "Leave message intact" method is used with a Folder
	Assistant rule. For additional information, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q184333 XADM: Message Class Changed during Forward from Public Folder
	
	Previously, a post (IPM.Post message class) was changed to a note (IPM.Note
	message class) during the forward operation. Changing the message class can
	prevent forms from working on forwarded messages. Exchange Server 5.5 SP2
	corrected this problem by preserving the message class during the forward.
	
	Some customers were relying on this transformation of the message class from
	IPM.Post to IPM.Note to allow MAPI clients to Reply-all to these forwarded
	posts. For these customers, the changes made in Exchange Server 5.5 SP2 prevent
	the client from working as they anticipated.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Store
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Store.exe   | 5.5.2607.0 | 
	+--------------------------+
	| Mdbmsg.dll  | 5.5.2607.0 | 
	+--------------------------+
	| Gapi32.dll  | 5.5.2607.0 | 
	+--------------------------+
	| Netif.dll   | 5.5.2607.0 | 
	+--------------------------+
	| Dsamain.exe | 5.5.2600.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5
	Service Pack 2. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	The default behavior of this new information store is to preserve the message
	class for forwarded messages. If you wish to revert the server to performing the
	transformation of the message class, then you must install this fix, and specify
	a new registry value.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	3. On the Edit menu, click Add Value, and use the following entry:
	
	  Value Name: Enable Old Forward Method
	  Data Type: REG_DWORD
	  Value: 1
	
	4. Exit the Registry Editor, and restart the information store service for the
	  change to take effect.
	
	Setting the registry value to 0 (or removing it) restores Exchange Server 5.5 to
	preserving the message class during the forward operation.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
