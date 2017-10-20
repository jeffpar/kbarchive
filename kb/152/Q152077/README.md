---
layout: page
title: "Q152077: SMS: Network Drive No Longer Exists"
permalink: /kb/152/Q152077/
---

## Q152077: SMS: Network Drive No Longer Exists

{% raw %}

	Article: Q152077
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbConfig smssetup smsconfig
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMSLS script may fail with client computers, receiving the following error:
	
	  Network drive no longer exists: error reading drive ?
	  Abort/Retry/Fail
	
	This problem occurs most frequently when you perform heavy file I/O with network
	servers.
	
	CAUSE
	=====
	
	This network error is most likely to occur on token ring environments. In a
	network sniff on a token ring network, you may notice Receiver Congestion
	Errors. Receiver Congestion Errors indicate that the reporting ring station (RS)
	could not receive a frame addressed to it.
	
	This error is not an error with Systems Management Server, but can manifest when
	the Systems Management Server logon script runs.
	
	Some possible causes are:
	
	- A lack of buffer space within the network interface card (NIC) on the
	  destination RS.
	
	- The server NIC is incorrectly configured or using an outdated driver.
	
	- Other client redirector issues.
	
	WORKAROUND
	==========
	
	The following are suggestions for troubleshooting this problem:
	
	- Ensure that both servers and clients have the latest NIC drivers.
	
	- Limit the maximum frame size on the token ring to 4 KB (4,096 bytes).
	
	- For client computers running Windows for Workgroups, ensure that you have the
	  updated redirector files from the Clients\WFW directory of the Windows NT
	  compact disc. Also, set the Lmscript.pif file on Windows for Workgroups
	  clients to background exclusive mode. For more information, see the following
	  article in the Microsoft Knowledge Base:
	
	  Q126159 LMSCRIPT.PIF and the SMSLS Logon Script
	
	- For client computers running Windows 95, set the Dosprmpt.pif MISC Idle
	  Sensitivity to "Low".
	
	- If possible, run a hardware level network sniff that is able to detect runt
	  packets, or other badly behaved packets.
	
	Additional query words: prodsms wfw win95 ls tr
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbConfig smssetup smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
