---
layout: page
title: "Q235692: XADM: Cannot Remove Exchange Server on Clustered Server"
permalink: /kb/235/Q235692/
---

## Q235692: XADM: Cannot Remove Exchange Server on Clustered Server

{% raw %}

	Article: Q235692
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to completely remove Exchange Server from a clustered server
	using the Remove All option in the Exchange Server Setup program, the removal
	process may fail and the Setup program may indicate that it was unable to stop a
	particular connector.
	
	CAUSE
	=====
	
	This problem occurs when a connector fails before it can be stopped by the Setup
	program. On a clustered server, the Setup program can only delete connectors
	that have stopped; in addition, it cannot stop a resource that has already
	failed. Therefore, the Setup program cannot delete connectors that have already
	failed.
	
	WORKAROUND
	==========
	
	To work around this problem, manually delete the connector before you attempt to
	completely remove Exchange Server again. For example, if the removal process
	fails and the Setup program indicates that it was unable to stop the Microsoft
	Exchange Connector for Lotus cc:Mail, manually delete the Connector for cc:Mail
	before you attempt to remove Exchange Server again.
	
	Additional query words: cluster uninstall crash terminate hang stop responding
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
