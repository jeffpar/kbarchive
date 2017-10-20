---
layout: page
title: "Q178539: XCON: How to Adjust Message Time-Outs for the Exchange MTA"
permalink: /kb/178/Q178539/
---

## Q178539: XCON: How to Adjust Message Time-Outs for the Exchange MTA

{% raw %}

	Article: Q178539
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage exc55
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server message transfer agent (MTA) by default will hold
	messages based on priority for a set amount of time before sending them back to
	the originator as undeliverable.
	
	These default times include:
	
	  Urgent - 2 days
	  Normal - 7 Days
	  Non-urgent - 10 days
	
	A new feature of Microsoft Exchange Server 5.5 is the ability to adjust these
	parameters.
	
	MORE INFORMATION
	================
	
	The default message time-out values for the MTA are effective in most usage
	scenarios of Exchange Server; however, there are times when the Exchange
	administrator will need to increase the time-out values for slow network links
	or server outages or to decrease these values in the case of highly important
	and time-sensitive material.
	
	To adjust these settings, do the following:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Open the Microsoft Windows NT registry using the REGEDIT utility.
	
	2. Go to the following key:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	     \MSExchangeMTA\Parameters
	
	3. Select Edit.
	
	4. Select New, and then DWORD Value.
	
	5. Make a new entry for each one of the following time-out categories:
	
	  Message timeout (urgent), minutes
	  Message timeout (normal), minutes
	  Message timeout (non-urgent), minutes
	
	  These must be typed exactly as they appear above. They can be individually
	  entered or all used.
	
	6. After the new key is created, enter the desired time-out in minutes. This can
	  be anything from 1 to 65536.
	
	  For example, to set normal messages to time out in 14 days, enter 20160.
	
	  The maximum time-out value is 45 days.
	
	Additional query words: time-out expiration expiry
	
	======================================================================
	Keywords          : kbusage exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
