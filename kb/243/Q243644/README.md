---
layout: page
title: "Q243644: XADM: Cannot Synchronize Clock on Exchange Server"
permalink: /kb/243/Q243644/
---

## Q243644: XADM: Cannot Synchronize Clock on Exchange Server

	Article: Q243644
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to synchronize a Microsoft Exchange Server clock, it may not
	synchronize with the clocks on other servers. Server monitor reports that the
	time is out of sync, but does not synchronize the time.
	
	CAUSE
	=====
	
	The Exchange Server service account does not have the "Change the system time"
	User right. This right is not given to the service account during the
	installation of Exchange Server and must be added manually.
	
	RESOLUTION
	==========
	
	To resolve this problem, give the Exchange Server service account the "Change
	the system time" User right on the server. To add the permission:
	
	1. Log on to the server with an account that can fully administer the server.
	
	2. Open User Manager for Domains.
	
	3. Click Policies, click User Rights, and then click "Change the system time" in
	  the drop-down list.
	
	4. Click Add.
	
	5. Select the Exchange Server service account from the list, and then click Add.
	
	6. Click OK to close the Add Users and Groups window.
	
	7. The Exchange Server service account should now appear in the User Rights
	  Policy window. Click OK.
	
	MORE INFORMATION
	================
	
	To synchronize one server's clock with another server's clock, create a server
	monitor and verify that the Synchronize check box is selected on the Clock tab
	in the server monitor Properties. To do so:
	
	1. On the server that you want to use to synchronize the clocks, on the File
	  menu, point to New Other, and then click Server Monitor.
	
	2. On the General tab, type a name that uniquely identifies the server monitor
	  in the Directory Name box, and then type a display name in the Display Name
	  box.
	
	3. On the Notification tab, specify how you want to be notified if the clock
	  being synchronized is off by the number of seconds specified on the Clock
	  tab. This causes the monitored server to enter an alert or warning state.
	
	4. On the Servers tab, click the server whose clock you want to synchronize, and
	  then click Add.
	
	5. Click the Clock tab, and then verify that both Synchronize check boxes are
	  selected. To modify the amount of time by which the clocks can differ before
	  the monitored server enters an alert or warning state (causing you to be
	  notified as specified on the Notification tab), modify the values in the
	  "Warning if off by more than" and "Alert if off by more than" boxes.
	
	NOTE: If you are monitoring services on servers in other time zones, you can
	specify that the clocks of the monitored servers are synchronized with the
	monitoring computer's clock. Synchronization uses the time zone information in
	Windows NT Server so monitors can function correctly with servers in other time
	zones. Clock synchronization ensures that time-based events such as message
	tracking and event logs are recorded accurately.
	
	Additional query words: GMT
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
