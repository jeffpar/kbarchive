---
layout: page
title: "Q274018: Err Msg When Receive Load Balancing Is Enabled with Netmon"
permalink: /kb/274/Q274018/
---

## Q274018: Err Msg When Receive Load Balancing Is Enabled with Netmon

{% raw %}

	Article: Q274018
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbsms200
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Systems Management Server, when you are using the 3Com NIC Teaming
	feature, or when you attempt to run Microsoft Network Monitor with the Receive
	Load Balancing feature enabled, you may receive the following error message:
	
	  The Receive Load Balancing feature-set is not available when running
	  Microsoft Network Monitor.
	  We have disabled the receive Load Balance Features.
	  To enable Receive Load Balancing feature-set please uninstall Microsoft
	  Network Monitor and reconfigure the Receive Load Balancing features.
	
	CAUSE
	=====
	
	This behavior occurs because a feature in the 3COM Load Balancing software is
	incompatible with Network Monitor. When the Receive Load Balancing feature is
	running, Network Monitor cannot accurately determine usage or throughput.
	
	This behavior occurs on servers that use dual network adapters and run the 3COM
	Load Balancing software with Network Monitor.
	
	WORKAROUND
	==========
	
	Network Monitor is only incompatible with the Receive Load Balancing feature.
	When you configure the load balancing group to enable the Transmit Only Load
	Balancing feature, Network Monitor functions as expected.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
