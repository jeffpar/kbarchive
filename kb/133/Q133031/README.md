---
layout: page
title: "Q133031: Event ID 4280 Appears for WINS Bound to One NIC"
permalink: /kb/133/Q133031/
---

## Q133031: Event ID 4280 Appears for WINS Bound to One NIC

{% raw %}

	Article: Q133031
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Windows Internet Naming Service (WINS) on a computer
	that has one network interface card (NIC), the following event appears in the
	Event Viewer system log:
	
	  Event ID: 4280
	  Source: WINS
	  Type: Error
	  Description: The machine you are running the WINS server on does
	  not have a valid address. When WINS requested the system for the
	  address, it got 0.0.0.0 as the address.
	
	CAUSE
	=====
	
	This problem occurs if the WINS client binds last, and TCP/IP is below Remote
	Access Service (RAS). WINS binds to the first NIC on a computer that has
	multiple NICs bound to TCP/IP.
	
	WORKAROUND
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	To work around this problem:
	
	1. Run Control Panel and choose Network.
	
	2. Choose Bindings.
	
	3. In the Show Bindings For list box, choose WINS Client(TCP/IP).
	
	4. Ensure TCP/IP binds before RAS (Remote Access WAN Wrapper).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest U.S. Service Pack for Windows NT
	Workstation or Server version 3.51. For information on obtaining this update,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
