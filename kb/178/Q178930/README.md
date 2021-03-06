---
layout: page
title: "Q178930: XADM: Directory Does Not Start After Service Pack Upgrade"
permalink: /kb/178/Q178930/
---

## Q178930: XADM: Directory Does Not Start After Service Pack Upgrade

{% raw %}

	Article: Q178930
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are installing the service pack, a message appears stating that the
	MAPI32.dll file is in use by another application and then gives you the options
	to Abort, Retry, or Ignore.
	
	If you choose Ignore, the Setup process completes with no other error messages
	and gives you the message that the Setup completed. However, when you start the
	directory, the clock will continue to turn.
	
	In the Event Viewer Application Log, the most recent events are Event ID 11,
	"Database engine stopped", and Event ID 10, "Database engine started". No other
	significant events are listed.
	
	CAUSE
	=====
	
	This problem usually occurs with the Exchange services when the upgrade
	encounters errors during the process, mainly when files involved in the upgrade
	are in use. This prevents a graceful upgrade.
	
	RESOLUTION
	==========
	
	To resolve this problem, make sure that ONLY the necessary services are running
	in Control Panel/Services. Make sure all third-party programs are stopped,
	including SNMP, backup software, e-mail clients, virus software, Systems
	Management Server, and SQL Server. After this is done, reapply the Exchange
	Server Service Pack; it should go through cleanly. After it does, the Exchange
	services should start in normal fashion, with a consistent database.
	
	WORKAROUND
	==========
	
	The only way to get out of this process is to "kill" it with Kill.exe. Microsoft
	recommends not stopping any Microsoft Exchange process while it may be writing
	information to the database, for this may lead to inconsistencies in the
	database. Contact Microsoft Product Support Services before continuing.
	
	MORE INFORMATION
	================
	
	The installation of new Service Packs should complete error-free; if not, the
	actual messages or pop-up errors should be viewed as important and may indicate
	an installation failure.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
