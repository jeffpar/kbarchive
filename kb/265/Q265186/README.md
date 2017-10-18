---
layout: page
title: "Q265186: XCON: MTA Fanout Slows on Multiprocessor Servers"
permalink: kb/265/Q265186/
---

## Q265186: XCON: MTA Fanout Slows on Multiprocessor Servers

	Article: Q265186
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbenv kbExchange550
	Last Modified: 07-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you run Exchange Server 5.5 on a multiprocessor server, the message
	transfer agent (MTA) fanout may slow down or stall. Messages back up in the
	private information store but nowhere else. When you try running Performance
	Optimizer (Perfwiz.exe), the overall performance of Exchange Server slows down.
	
	CAUSE
	=====
	
	This behavior can occur because Performance Optimizer does not properly optimize
	the MTA and information store when you run it on multiprocessor servers.
	Specifically, it does not allocate enough information store threads to increase
	the routing capacity of the MTA. Performance Optimizer also resets any changes
	that you make.
	
	RESOLUTION
	==========
	
	There are two ways to resolve this behavior.
	
	Run Performance Monitor in Verbose Mode to Modify Thread Counts
	---------------------------------------------------------------
	
	To resolve this behavior, run Performance Optimizer in verbose mode (perfwiz -v)
	to modify thread counts:
	
	1. At a command prompt, switch to the Exchsrvr\Bin directory, type "perfwiz -v"
	  (without the quotation marks), and then press ENTER to start Performance
	  Optimizer in verbose mode.
	
	2. In the Microsoft Exchange Performance Optimizer, click Next until you find
	  the property page that includes the Users on this server and Users in
	  organization boxes. In these boxes, be sure to allocate enough resources to
	  handle your work load. If the number of users falls in the high end of a
	  range, select the next higher range. Under Memory Usage, do not limit
	  Exchange Server memory usage.
	
	3. Click Next until you find the # of background threads box. Note this value
	  but do not change it, and then click Next.
	
	4. In the Public and Private Information Store box, increase each of the four
	  send and delivery thread values to 8.
	
	5. Click Back to return to the # of background threads box, and then increase
	  that value accordingly. For example, if you increase each of the four send
	  and delivery thread values from 2 to 8, increase the background threads value
	  by 24.
	
	  NOTE: You can make these changes manually in the registry, but these values
	  are not visible by default. Running perfwiz -v automatically adds the values
	  for you and eliminates any worry about spelling and case sensitivity.
	
	6. Click Next until you find the # of submit/deliver threads box. The MTA uses
	  these threads to pass mail off to the information store. Increase this value
	  to 8 also; its maximum default setting is 4.
	
	7. On the same page, specify the following values:
	
	  Dispatcher threads: 8
	  Kernel threads: 8
	  RTS threads: 8
	  Transfer threads: 8
	
	  Increasing these values to 8 allows for a larger pipe between the MTA and the
	  information store, yielding more efficient clearing of the message backlog
	  under high-traffic conditions.
	
	8. Click Next until you find the # of TCP/IP control blocks box. Make sure it is
	  not reset to 20 unless that is the appropriate value.
	
	NOTE: Perfwiz -v tries to reset the Transmission Control Protocol (TCP) control
	blocks parameter to 20. Compare settings before committing changes.
	
	9. Click Next, click Finish, and then restart services. Monitor the MTA queue to
	  the information store to verify that the changes affect the queue.
	
	Modify the Registry
	-------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior, create or change the following in the Windows NT
	registry:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Allow fuzzy proxy search
	  Data Type: REG_DWORD
	  Value: 2
	
	NOTE: If this registry value does not exist in the registry, the MTA assumes a
	value of 1 for this setting and enables fuzzy proxy searches.
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	"Fanout" is the process of placing objects into the various queues.
	
	Verbose mode stops all services and offers options not available in normal mode.
	You do not need to analyze hard disks or move files; this procedure presents the
	opportunity to change some resource (thread) settings from the defaults.
	
	To view the current settings for Users on this server and Users in organization
	without stopping services, at a command prompt, run "perfwiz -r" (without the
	quotation marks). You can also use the Perfopt.log file in the Winnt\System32
	folder to view any changes that Performance Optimizer makes to the system.
	
	For additional information about MTA fanout, messages in the information store,
	and improving MTA network performance, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q176046 XCON: Routing Issues with Microsoft Exchange Server, Version 5.0
	
	  Q159184 XADM: MTA Fails to Deliver Messages with High DS Activity
	
	  Q234280 XCON: Increasing MTA Ability to Pass Mail over Slow Connections
	
	  Q234702 XGEN: MTA Queue to Information Store Processing Slowly
	
	Concerning Knowledge Base article Q234702, note that if you change the public and
	private send and deliver threads, you must also check the concurrent XAPI
	sessions to make sure that value is set adequately. Otherwise, you may
	experience new performance issues and may receive an error message about Event
	ID 3120 from the MTA.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbExchange550 
	Component         : MTA
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
