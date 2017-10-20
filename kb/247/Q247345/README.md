---
layout: page
title: "Q247345: XADM: Setting the Number of Objects in a Replication Message"
permalink: /kb/247/Q247345/
---

## Q247345: XADM: Setting the Number of Objects in a Replication Message

{% raw %}

	Article: Q247345
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article outlines how to set the maximum number of updated directory objects
	an Exchange Server bridgehead computer can send in one message when responding
	to a directory replication update request message.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	The Registry parameters that control how the directory service process works are
	found under:
	
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/MSExchangeDS/Parameters
	
	  Value: Intersite packet size
	
	  Data type: REG_WORD
	
	  Default: 512
	
	Description: For a directory service acting as a bridgehead server, this key sets
	the maximum number of directory update objects the directory service can send in
	one message when it is responding to a directory replication update request
	message. If the local directory service has more than this number of objects, it
	tells the remote directory service (by means of a message) to request more
	objects.
	
	IMPORTANT: Leave this value alone unless you have a specific requirement.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
