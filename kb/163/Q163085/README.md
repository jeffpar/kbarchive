---
layout: page
title: "Q163085: XCON: MTA Logs Warning Events When Queues Reach Specified Sizes"
permalink: /kb/163/Q163085/
---

## Q163085: XCON: MTA Logs Warning Events When Queues Reach Specified Sizes

{% raw %}

	Article: Q163085
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP2,5.5
	Operating System(s): 
	Keyword(s): kbusage exc55 exc5sp2
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0 SP2, 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server message transfer agent (MTA) versions 1459.39 and
	later allow Exchange Server administrators to configure queue thresholds that
	cause the MTA to log warnings in the application event log when the specified
	queue size has been exceeded.
	
	This feature is included in the latest Microsoft Exchange Server version 5.0 U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	There are four new registry settings that can be used to configure these warning
	events to be logged:
	
	  Work queue alarm on
	  Work queue alarm off
	  Outbound queue alarm on
	  Outbound queue alarm off
	
	All four of these case-sensitive registry values are REG_DWORDs and can be added
	to the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	  \MSExchangeMTA\Parameters
	
	To create one of these registry values, follow the example below for configuring
	the Work queue alarm:
	
	1. Start Registry Editor (Regedt32.exe) and go to the following sub-key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \MSExchangeMTA\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Click Add Value on the Edit menu.
	
	3. Enter the following in the Value Name field:
	
	  "Work queue alarm on" (without the quotation marks)
	
	4. In the Data Type list, click REG_DWORD.
	
	5. Click OK.
	
	6. Click Decimal option, and then enter the number of messages that must be
	  queued in the Work queue for the Work queue alarm to be triggered.
	
	The work queue alarm may log two different events to notify the administrator
	when the work queue reaches a certain size. One event notifies the administrator
	that the work queue has reached the "alarm on" threshold. This warning is logged
	with the event ID 666 and looks similar to the following:
	
	  Event ID:666
	  Source:MSExchangeMTA
	  Type:Warning
	  Category:Resource
	  Description:
	  The MTA work queue is backlogged with 600 messages in
	  the queue. [MTA SUBMIT 18 231] (14)
	
	After the work queue diminishes in size, the MTA will log a warning with the
	event ID 667 that looks similar to the following:
	
	  Event ID:667
	  Source:MSExchangeMTA
	  Type:Warning
	  Category:Resource
	  Description:
	  The MTA work queue backlog has subsided leaving 300 messages in
	  the queue. [MTA DISP:RESULT 23 234] (14)
	
	The work queue alarm can be configured by using only the "Work queue alarm on"
	registry value. When the "Work queue alarm off" registry value is not present,
	the MTA will automatically substitute half the value specified in the "Work
	queue alarm on" registry value for the "off" value, which uses the 667 event to
	be triggered. The example events shown above illustrate this configuration,
	where the "Work queue alarm off" value is not present in the registry and the
	"Work queue alarm on" registry value has been set to 600 decimal.
	
	The "Work queue alarm off" registry value can be configured to log the 667 event
	at a different value if the administrator wants. For example, if the "Work queue
	alarm off" registry value is set to a value of 0, the 667 event will not be
	logged until the work queue has been emptied completely. Another example would
	be to set the "Work queue alarm off" value to 100 decimal, which would result in
	the 667 event being logged when the work queue diminishes to 100 messages. If
	the "Work queue alarm off" value is set to a higher value than the "Work queue
	alarm on" value, the value specified for "Work queue alarm off" will be ignored,
	and the default value of half the "Work queue alarm on" value will be used
	instead.
	
	The "Outbound queue alarm on" and "Outbound queue alarm off" registry values work
	similarly to the work queue alarm settings. The outbound queue alarm works
	independently from the work queue alarm. The outbound queue alarm logs a 659
	event ID when a queue reaches the specified limit. For example, if the "Outbound
	queue alarm on" registry value is configured to generate the 659 event when an
	outbound queue reaches 500 messages and an X.400 connector becomes backlogged to
	500 messages or more, an event similar to the following will be logged in the
	application event log:
	
	  Event ID:659
	  Source:MSExchangeMTA
	  Type:Warning
	  Category:Resource
	  Description:
	  The queue for /O=MS/OU=GUITARS/CN=CONFIGURATION
	  /CN=CONNECTIONS/CN=X400 CONNECTOR TO BRASS_KITTEN
	  is backlogged with 500 messages in the queue.
	  [MTA GATEWAY 45 512] (14)
	
	When the backlog subsides, a 660 event similar to the following will be logged:
	
	  Event ID:660
	  Source:MSExchangeMTA
	  Type:Warning
	  Category:Resource
	  Description:
	  The queue backlog for /O=MICROSOFT/OU=GUITARS
	  /CN=CONFIGURATION/CN=CONNECTIONS/CN=X400 CONNECTOR TO
	  BRASS_KITTEN has subsided leaving 250 messages in the
	  queue. [MTA GATEWAY 45 512] (14)
	
	The functionality described above is available in version 1459.39 or later of the
	MTA.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc55 exc5sp2 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange500SP2
	Version           : winnt:5.0 SP2,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
