---
layout: page
title: "Q199756: XADM: Tips for Modifying an Exchange Server Registry Key on MSCS"
permalink: /kb/199/Q199756/
---

## Q199756: XADM: Tips for Modifying an Exchange Server Registry Key on MSCS

{% raw %}

	Article: Q199756
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article offers some tips for modifying an Exchange Server registry key on a
	Microsoft Cluster Server (MSCS).
	
	MORE INFORMATION
	================
	
	The Exchange Server services must be running before you change a registry key
	for that service. For example, if you want to change the format of the display
	name when you run directory synchronization with Lotus cc:Mail, the Exchange
	Connector for Lotus cc:Mail must be running before you modify the registry on an
	MSCS.
	
	If you manually update these registry keys while the service is off-line, the
	changes may not be replicated or may be lost. To prevent this from happening,
	make any manual changes while the service is online. The ONLY registry that
	should be modified is the registry of the active node.
	
	MSCS provides registry checkpointing. Registry checkpointing for resources occurs
	under the following conditions:
	
	- When you specify a new registry key for the resource, the specified key is
	  checkpointed.
	
	- When the resource goes online, the registry keys are updated with the
	  previously checkpointed information.
	
	- When the resource is brought offline, all the checkpoints associated with
	  this resource are saved.
	
	- When the resource is online and changes are made to the registry key which is
	  registered with the cluster server for replication, MSCS ensures that the
	  updates are written to a checkpoint maintained on the quorum device.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
