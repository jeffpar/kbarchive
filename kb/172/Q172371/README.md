---
layout: page
title: "Q172371: SMS: Network Monitor Error: Internal Token Ring Error"
permalink: /kb/172/Q172371/
---

## Q172371: SMS: Network Monitor Error: Internal Token Ring Error

{% raw %}

	Article: Q172371
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbhw smsnetmon kbHardware
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Network Monitor and a token ring network interface card (NIC) to
	capture network frames, the following message may appear:
	
	  Tokenring Error!
	  Internal tokenring software error.
	
	When the dialog box containing this message appears, Network Monitor continues
	capturing. Clicking OK closes the message.
	
	MORE INFORMATION
	================
	
	This is a hardware error passed to Network Monitor by the token ring NIC. The
	NIC receives an error, and the driver interprets it. There is no way to tell if
	it is encountering a network-related error, other than looking at the network
	trace (sniff) at the time of the error.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw smsnetmon kbHardware 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
