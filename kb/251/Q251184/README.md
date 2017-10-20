---
layout: page
title: "Q251184: XADM: Link Monitor Doesn't Work After Priv.edb Is Renamed"
permalink: /kb/251/Q251184/
---

## Q251184: XADM: Link Monitor Doesn't Work After Priv.edb Is Renamed

{% raw %}

	Article: Q251184
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 27-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you rename or delete a private information store (Priv.edb) within your
	Exchsrvr\Mdbdata folder, you may notice that link monitors that were set up to
	monitor that server no longer function properly. This happens if only the
	information store was shut down to do this.
	
	MORE INFORMATION
	================
	
	When starting the Exchange Server services, the system attendant attempts to log
	on to the information store to send and receive its own messages. If you stop
	your information store, rename, or delete your Priv.edb file, and then start the
	private information store by creating a new Priv.edb file, the system attendant
	still thinks that it is logged on to the old private information store.
	
	To get the link monitor messages working again, you need to stop and restart the
	system attendant to log on to the new database that you created. When the next
	polling interval occurs, the system attendant replies properly, and the link
	monitor state indicates that the link is operational.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
