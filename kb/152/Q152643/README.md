---
layout: page
title: "Q152643: Netmon Does Not Capture Outbound Frames"
permalink: /kb/152/Q152643/
---

## Q152643: Netmon Does Not Capture Outbound Frames

{% raw %}

	Article: Q152643
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): smsnetmon kbNetworkMon
	Last Modified: 13-FEB-2002
	
	1.20
	WINDOWS
	kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When capturing network traffic "to and from" the local computer, network Monitor
	captures and displays only one-way traffic (traffic to the computer). Network
	Monitor running on systems with network interface cards (NICs) that use
	monolithic Ndis 4.0 drivers may exhibit this symptom.
	
	MORE INFORMATION
	================
	
	LocalOnly is a new bit that Ndis4.0 supports. It gives Network Monitor the
	ability to acquire all the network traffic that is going to and from your
	computer without going into Promiscuous Mode, which is very expensive. Some
	cards, which are monolithic (non-miniport) or are miniport but implement their
	own loopback, indicate that they handle the LocalOnly bit, but actually they do
	not.
	
	
	WORKAROUND
	==========
	
	To correct this problem a registry entry needs to be added.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run the Registry Editor.
	
	2. From the HKEY_LOCAL_MACHINE subtree, find the key:
	
	\SYSTEM\CurrentControlSet\Services\bh\Parameters
	
	3. On Edit menu, choose Add Key:
	
	  Key Name: ForcePmode
	
	  Class: <leave blank>
	
	4. On the Edit menu, choose Add Value.
	
	5. Add the following:
	
	     Value Name: EPRO1  <example>
	
	  The value should be the same as the name in the
	  \SYSTEM\CurrentControlSet\Services\bh\Linkage
	  key, under the Bind Value with the leading "\Device\" stripped off.
	  There are multiple cards on the same line, space delimited.
	
	     Data Type:  REG_DWORD
	
	     Data: 1
	
	6. Choose OK and quit Registry Editor.
	
	7. Shut down and restart Windows NT.
	
	Note: This does NOT effect Netmon counters within Perfmon because pmode willbe
	used.
	
	Additional query words: prodsms 1.10 prodnt 4.00 amd
	
	======================================================================
	Keywords          : smsnetmon kbNetworkMon 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	
	=============================================================================
	

{% endraw %}
