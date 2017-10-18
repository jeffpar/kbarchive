---
layout: page
title: "Q235679: XADM: Slow Performance Opening Unread Item from Public Folder"
permalink: kb/235/Q235679/
---

## Q235679: XADM: Slow Performance Opening Unread Item from Public Folder

	Article: Q235679
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 05-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	All users attempting to open any unread message item in a particular public
	folder experience a long delay before the message is opened.
	
	CAUSE
	=====
	
	The public folder has many server-side restriction tables (views) associated
	with it. Whenever a change is made to a message in a folder, or a new message
	created or deleted, the message must be evaluated against all the server-side
	restrictions so that they can be updated. Opening an unread message changes the
	state of the MSGFLAG_READ bit of the PR_MESSAGE_FLAGS MAPI property. Normally,
	each restriction is represented by a table in the database, and this table must
	be opened to be updated/evaluated. It is possible, however, for the information
	store to avoid opening the table if the client operation is simply changing the
	read/unread state of a message, because the server can tell (without opening the
	table) if the restriction involves the MSGFLAG_READ bit.
	
	
	RESOLUTION
	==========
	
	Code was added to the information store to check if the restriction involves the
	read/unread message flags and if not, it can avoid opening the restriction table
	(which improves performance).
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Store.exe   | 5.5.2644.0 | 
	+--------------------------+
	| Mdbmsg.dll  | 5.5.2644.0 | 
	+--------------------------+
	| Netif.dll   | 5.5.2644.0 | 
	+--------------------------+
	| Gapi32.dll  | 5.5.2644.0 | 
	+--------------------------+
	| Dsamain.exe | 5.5.2600.0 | 
	+--------------------------+
	| Perfdsa.dll | 5.5.2600.0 | 
	+--------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Component         : MDB
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
