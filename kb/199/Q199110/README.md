---
layout: page
title: "Q199110: SMS: How Bandwidth Calculations Differ in SMS 2.0"
permalink: /kb/199/Q199110/
---

## Q199110: SMS: How Bandwidth Calculations Differ in SMS 2.0

{% raw %}

	Article: Q199110
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120 kbSender kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 2.0, the Standard Sender takes the place of the LAN
	Sender from Systems Management Server 1.2. Standard Sender, as it is now called,
	is used for connecting sites across high-speed links such as 10BaseT LAN lines.
	
	MORE INFORMATION
	================
	
	Each time the Standard Sender in Systems Management Server 2.0 sends a buffer of
	the package to the remote site, it recomputes the delay factor and indicates in
	the log file how long it will delay before sending the next buffer. In this way,
	the total average usage of the link will be controlled, even though while
	sending a single buffer of the package the Standard Sender will use the full
	bandwidth of the connection.
	
	In Systems Management Server 2.0, all you configure is the Number of Retries, the
	Delay before retrying (Min.), and the Maximum concurrent sendings to All Sites
	and Per Site. There is no longer a need to specify the maximum amount of
	bandwidth that the Standard Sender will be allowed to use.
	
	In Systems Management Server 1.2, the administrator specified how much bandwidth
	the connection consisted of. An administrator configuring the bandwidth of the
	Standard Sender in Systems Management Server 2.0 does not have to do this
	because the Standard Sender calculates the instantaneous available rate
	continuously. The bandwidth control in Systems Management Server 2.0 is based
	only on the address rather than a mixture of the address and the sender (as it
	was in Systems Management Server 1.2).
	
	Additional query words: prodsms smssvr std
	
	======================================================================
	Keywords          : kbsms200 kbsms120 kbSender kbSMSSender 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
