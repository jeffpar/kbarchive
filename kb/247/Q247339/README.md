---
layout: page
title: "Q247339: XADM: Controlling the Size of Intrasite Replication Packets"
permalink: /kb/247/Q247339/
---

## Q247339: XADM: Controlling the Size of Intrasite Replication Packets

{% raw %}

	Article: Q247339
	Product(s): Microsoft Exchange
	Version(s): 5.5
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
	
	This article describes how to set the maximum number of updated objects the
	local directory service can send in one remote procedure call (RPC) response
	when it is responding to a directory replication update request.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The registry parameters that control how the directory service process works are
	found under the following registry key:
	
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/MSExchangeDS/Parameters
	
	  Value: Replicator intra site packet size
	  Data type: REG_DWORD
	  Default: 100
	
	If the local directory service has more than this number of objects, it informs
	the remote directory service (by means of direct RPC) to request more objects.
	This acts as a checkpoint and ensures that the communication link is still
	valid.
	
	IMPORTANT: Leave this value at the default setting unless you have a specific
	purpose for changing it.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
