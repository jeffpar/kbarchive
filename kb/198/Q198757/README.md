---
layout: page
title: "Q198757: DNS Events 5501, 5000, and 9999 Fill Up the Event Log"
permalink: kb/198/Q198757/
---

## Q198757: DNS Events 5501, 5000, and 9999 Fill Up the Event Log

	Article: Q198757
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you have the Domain Name System (DNS) service installed on your computer, one
	or more of the following event error messages may appear in the event log:
	
	   - Event 5501
	  Source: DNS
	  Description: DNS Server encountered bad packet from <IP Address>. Packet
	  processing leads beyond packet length.
	
	   - Event 5000
	  Source: DNS
	  Description: DNS Server is logging numerous run-time events. This is usually
	  caused by the reception of bad or unexpected packets, or from problems with
	  or excessive replication traffic. See previous event log entries for
	  information about bad packet source. Now suppressing event logging for these
	  events.
	
	   - Event 9999
	  Source: DNS
	  Description: DNS Server has encountered numerous run-time events. These are
	  usually caused by the reception of bad or unexpected packets, or from
	  problems with or excessive replication traffic. The data is the number of
	  suppressed events encountered in the last 15-minute interval.
	
	CAUSE
	=====
	
	The occurrence of these event error messages does not necessarily indicate a
	problem with the DNS service.
	
	Event 5501 indicates that after sending a recursive query on behalf of a client,
	DNS received a response with a fragmented flat set indicating that the answer
	did not fit in one packet and that there is more data to follow. In versions of
	Windows NT 4.0 earlier than Service Pack 4 (SP4), DNS incorrectly discards the
	packet. Windows 2000 behaves correctly in this case.
	
	Event 5000 indicates that DNS is not going to continue logging the warning events
	that are filling up the event log.
	
	Event 9999 indicates the number of events DNS blocked from being logged in Event
	Viewer, and then the logging of those events starts again.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this problem in Windows NT 4.0, install SP4 or later.
	
	To adjust the level of DNS logging in Event Viewer, use the registry key listed
	below.
	
	NOTE: In Windows NT 4.0, SP4 or later is required for this key to work.
	
	Registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	Value: EventLogLevel
	
	Type: REG_DWORD
	
	Data values:
	
	  0 - Event logging disabled
	  1 - Only error events
	  2 - Warning and error events
	  4 - Information, warning, and error events
	
	For example, if the data value is set to 1, no warning or information events are
	logged.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Windows NT 4.0
	--------------
	
	This problem was corrected in Windows NT 4.0 Service Pack 4.
	
	For information on obtaining the service pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q154984 DNS Server May Not Recursively Resolve Some Names
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
