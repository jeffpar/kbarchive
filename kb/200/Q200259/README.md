---
layout: page
title: "Q200259: XCON: Event ID 9156 from the Exchange Server 5.5 MTA"
permalink: /kb/200/Q200259/
---

## Q200259: XCON: Event ID 9156 from the Exchange Server 5.5 MTA

{% raw %}

	Article: Q200259
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may notice that mail flow over several X.400 Connectors that are installed
	on the same Exchange Server computer is slow or even stops. Event ID 9156 may
	also by logged in the application log of an Exchange Server 5.5 computer with
	more than two X.400 Connectors installed.
	
	CAUSE
	=====
	
	The number of control blocks available for the message transfer agent (MTA) to
	transfer mail over multiple X.400 Connectors may be insufficient. This behavior
	is particularly noticeable during heavy mail traffic or when a backlog of mail
	exists on X.400 Connectors installed on the same Exchange Server 5.5 computers.
	
	WORKAROUND
	==========
	
	MTA associations are managed by control blocks. With Exchange Server 5.5, one
	control block manages each association to a remote MTA over an X.400 Connector.
	
	The registry setting that affects X.400 Connector traffic over the TCP protocol
	stack is set by default to 20 (decimal), and is found in the following registry
	key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\TCP/IP
	  Control blocks
	
	The control block allocation TP4 protocol stack is found at:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMTA\Parameters\TP4
	  Control blocks
	
	If there are more than two X.400 Connectors on the same Exchange Server 5.5
	computer, you should increase this registry value to
	
	  (10 * number of X.400 connectors) + 10
	
	for the appropriate protocol stack. For example, if there are five X.400
	Connectors installed on an Exchange Server computer, set this registry string to
	a value of 60 (decimal). This setting allows 10 control blocks for each X.400
	Connector, which is the maximum number of allowable associations for each X.400
	Connector.
	
	If you adjust the Control Block registry parameter as noted above, and the Event
	ID 9156 is still logged, then try this second possible resolution.
	
	On each X.400 Connector's property page, on the Override tab, increase the
	"Association Parameters, Disconnect (sec)" setting to a value between 300-600
	seconds (the default is 120).
	
	When an MTA needs to open an association, an open request is passed down the Open
	Systems Interconnection (OSI) stack, each layer in the stack maintains a timer.
	The problem occurs when an open association to another MTA fails due to a
	network problem. The disconnect timer at the session layer expires before the
	transport layer has abandoned its attempt to open a transport connection. The
	transport layer timers are not configurable, but the session layer disconnect
	time can be adjusted (on the Disconnect (sec) value on the Override tab of the
	X.400 Connector).
	
	This discrepancy in disconnect time leads to a dropped control block, which is
	not recovered by the MTA, and thus a shortage of control blocks. The 9156 errors
	that you see in the event log require the MTA to be restarted for mail flow to
	be resumed. Increasing this value to 300-600 seconds will allow the session
	layer to keep the association open longer, and thus reduce the chance that the
	session layer disconnect timer will expire before the network layer closes the
	network connection.
	
	If the above procedures have been implemented (registry setting for TCP/IP
	control blocks and Disconnect time increased), see the following article in the
	Microsoft Knowledge Base:
	
	  Q193894 XCON: MTA Stops Processing Messages and Generates 9156 Events
	
	MORE INFORMATION
	================
	
	For more information regarding Exchange Server 4.0 and 5.0 control block issues,
	see the following article in the Microsoft Knowledge Base:
	
	  Q166602 XCON: MTA Only AllowS 64 TCP/IP or TP4 Connections
	
	For more information regarding leaking control blocks in Exchange Server 5.5, see
	the following article in the Microsoft Knowledge Base:
	
	  Q193894 XCON: MTA Stops Processing Messages and Generates 9156 Events
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
