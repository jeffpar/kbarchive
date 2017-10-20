---
layout: page
title: "Q222926: XADM: How to Limit Size of Public Folder Replication Messages"
permalink: /kb/222/Q222926/
---

## Q222926: XADM: How to Limit Size of Public Folder Replication Messages

{% raw %}

	Article: Q222926
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Public folder replication messages are system messages, and are not subject to
	size restrictions by the message transfer agent, or by restrictions specified on
	a particular connector (such as the X.400 Connector). If a user posts an
	extremely large message to a public folder and that public folder is configured
	to replicate across a LAN or WAN, then, depending on variables such as the build
	of Microsoft Exchange Server used, the bandwidth, and the quality of the
	connection, other mail delivery may slow down or even stop. One solution is to
	limit the size of posts to the folder.
	
	MORE INFORMATION
	================
	
	From an Exchange client, the owner of a public folder can limit the size of
	posts to the public folder. The owner of the public folder must have "send as"
	permissions for the folder. To configure permissions for a public folder, start
	the Exchange Server Administrator program, click to expand the <Site>
	object, click to expand the <Server> object, click to expand the Public
	Information Store object, click Public Folder Resources, click
	<folder_name>, click Properties, and then click Permissions.
	
	The recommended steps to limit the size of posts to a public folder are outlined
	below, but you can modify the procedure as needed.
	
	1. Right-click the public folder, and then click Properties.
	
	2. Click the Administration tab, and then click Folder Assistant.
	
	3. Click Add Rule, and then click Advanced.
	
	4. Under "In Size (kilobytes)" enter "5,000" (without the quotation marks) (for
	  this example), and then click OK.
	
	5. Click Delete, and then click "Reply with (compose and save a template)".
	  Compose a template reply; for this example, type:
	
	  "This message is too large to post to this folder." (without the quotation
	  marks)
	
	6. To leave the Edit Rule window, click OK. To leave the Folder Assistant
	  window, click OK, and then to leave the <folder_name> Properties
	  window, click OK again.
	
	Public folder replication message size limits are NOT affected by the replication
	message size limit value, which specifies that individual replication messages
	smaller than the specified size should be "batched" in to a single message up to
	the specified size. To set this value, start the Exchange Server Administrator
	program, click to expand the <Site> object, click to expand the
	Configuration object, click to expand the Servers object, click to expand the
	<Server> object, click to expand the Public Information Store object,
	click Properties, and then click the Advanced tab. For additional information
	about the replication message size limit value, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q222833 XADM: Public Information Store Replication Message Size Limit
	  Function
	
	  Q190737 XADM: Message Size Limits Do Not Affect Public Folder Replication
	
	For additional information, please see "Messaging Components, Server
	Communication, and External Connectivity" and "Site Topology and Server
	Placement for Microsoft Exchange" at the following Web site:
	
	  http://www.microsoft.com/technet/exchange/
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
