---
layout: page
title: "Q212905: SMS: Configuring and Suppressing SMS 2.0 Client Agent Messages"
permalink: /kb/212/Q212905/
---

## Q212905: SMS: Configuring and Suppressing SMS 2.0 Client Agent Messages

{% raw %}

	Article: Q212905
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200 kbAdvertisement kbHelpDesk kbsmsMeter
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 2.0, you can configure Client Agent Messages. Some
	messages can be suppressed, others can be customized.
	
	This article outlines the steps for changing the following Client Agent
	Messages:
	
	- Remote Tools
	
	- Advertised Programs
	
	- Software Metering
	
	MORE INFORMATION
	================
	
	To locate the Client Agents, do the following:
	
	1. Open the SMS Administrator console and expand Site Database.
	
	2. Expand Site and then Site Settings.
	
	3. The Client Agents are located under Site Settings.
	
	Remote Tools
	------------
	
	To configure the Remote Tools Client Agent messages:
	
	1. Right-click Remote Tools Client Agent, then click Properties. There are five
	  tabs: General, Security, Policy, Notifications, and Advanced.
	
	2. If the Remote Tools Client Agent will be installed on the client computer,
	  click the General tab and select the Enable check box.
	
	3. To suppress messages, click the Policy tab and select Do Not Ask For
	  Permission as the Access Permission setting.
	
	4. The Notification tab has settings for Display A Visual Indicator and Play A
	  Sound. To suppress messages at the client computer, clear the Display A
	  Visual Indicator check box. To suppress sounds at the client, clear the Play
	  A Sound check box.
	
	Advertised Programs
	-------------------
	
	To configure the Advertised Program Client Agent messages:
	
	1. Right-click Advertised Programs Client Agent, then click Properties. There
	  are two tabs, General and Notification.
	
	2. If the Advertised Programs Client Agent will be installed on the client
	  computer, click the General tab and select the Enable check box.
	
	3. To suppress messages at the client, click the Notification tab and clear the
	  check box for each of the three options displayed:
	
	   - When new advertised programs are available
	   - When a scheduled program is about to run
	   - Show status icon on taskbar or desktop for all system activity
	
	Software Metering
	-----------------
	
	To configure the Software Metering Client Agent messages:
	
	1. Right-click Software Metering Client Agent, then select Properties. There are
	  five tabs: General, Timings, Checked Out, Denials, and Inactivity.
	
	2. If the Software Metering Client Agent will be installed on the client
	  computer, click the General tab and select the Enable check box.
	
	3. The Checked out, Denials, and Inactivity tab messages cannot be silenced.
	  However, an administrator can customize the messages.
	
	NOTE: Software Inventory Client Agent and Hardware Inventory Client Agent do not
	display any messages (though some users might infer from disk activity that a
	process is running on their computers).
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200 kbAdvertisement kbHelpDesk kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
