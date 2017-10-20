---
layout: page
title: "Q156765: XADM: Multiple Private IS Logons for Each User"
permalink: /kb/156/Q156765/
---

## Q156765: XADM: Multiple Private IS Logons for Each User

{% raw %}

	Article: Q156765
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	In the Microsoft Exchange Server Administrator program, when you choose
	SERVERS\<servername>\Private Information Store\Logons, you will see
	multiple entries for people connected to the servers.
	
	This is by design. The client logs on once for the private store and once for the
	public store; the spooler logs on once for the private store. The client will
	also create one additional logon for every mailbox opened as a delegate.
	
	MORE INFORMATION
	================
	
	The client version column is controlled by the version of the file
	Emsmdb[32].dll that the client computer uses to connect to the Exchange Server
	computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
