---
layout: page
title: "Q210641: How to Send Alert Messages to a Remote Computer"
permalink: /kb/210/Q210641/
---

## Q210641: How to Send Alert Messages to a Remote Computer

{% raw %}

	Article: Q210641
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to automate the sending and receiving of alert messages in
	Windows NT using the Alerter service. Alert messages can include print
	notifications, system errors, or informational messages on other computer
	activity.
	
	MORE INFORMATION
	================
	
	To automate sending alert messages to another networked computer, follow these
	steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. If the Alerter service shows a status of Started and a startup mode of
	  Automatic, go to step four (4).
	
	3. Double-click the Alerter service, click to select Automatic, click OK, click
	  Start, and then click Close.
	
	4. Click Start, point to Programs, point to Administrative Tools, and then click
	  Server Manager.
	
	5. Select the server that is to send the alert messages, and then press ENTER.
	
	6. Click Alerts, type the name of the computer that is to receive the alert
	  messages in the "New computer or username" box, click Add, click OK, and then
	  click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
