---
layout: page
title: "Q200467: INFO: Modem Selection Algorithm for &quot;Use Another Port If Busy&quot;"
permalink: /kb/200/Q200467/
---

## Q200467: INFO: Modem Selection Algorithm for &quot;Use Another Port If Busy&quot;

{% raw %}

	Article: Q200467
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article explains the algorithm used by remote access
	service (RAS) when you select "use another port if busy" under Dialup
	Networking, and how this can cause connectivity problems with multiport serial
	adapters.
	
	MORE INFORMATION
	================
	
	If you are using a multiport serial adapter to provide connectivity for numerous
	modems, the modems must be homogeneous if you want "use another port if busy" to
	work. The reason for this is that the list of ports is maintained in the order
	that TAPI enumerates them to RAS. The order is arbitrary, and Unimodem is not
	capable of assigning a particular order. TAPI is a neutral layer between the TSP
	(Unimodem) and the application (RAS), and enforces no rules about ordering on
	either side.
	
	Applications should, therefore, not make assumptions that there is an order to
	the selection of COM ports. RAS merely assumes that the TAPI list is the list it
	should use when failing over. If the list is out of order, the COM ports will be
	tried out of order. Note that adding and removing devices will have the same
	affect on device order.
	
	For example, you have a multiport serial adapter with 24 ports. COM 1 through 12
	have analog modems installed. COM 13 through 24 have ISDN modems installed.
	
	You will find that rollover to available ports will result in random instability
	and dropped connections when analog strings are sent to ISDN modems, and vice
	versa. This is also true for other types of modems that cannot communicate with
	each other for one reason or another. Currently, there is no way to configure
	which ports should be used for failover for particular devices. Because of this,
	applications must assume responsibility for choosing which ports they will dial
	when one is determined to be busy.
	
	The current workaround to this problem involves disabling the RAS/RRAS servers
	attempt to use another port.
	
	For RAS
	-------
	
	To disable the automatic dialing of another port if the current port is busy, go
	to the Basic tab of the phonebook entry and click to clear "Use another port if
	busy". This will prevent the RAS server from attempting to use another port if
	the device it is configured to use is busy.
	
	For RRAS
	--------
	
	To disable the automatic dialing of another port if the current port is busy on a
	RRAS router, you need to edit %Windir%\System32\Router.pbk:
	
	 MEDIA=rastapi
	 Port=nameofinterface
	 OtherPortOk=1
	 Device=rasinterface
	
	Router.pbk is arranged as an .ini file with the name of demand dial interfaces as
	sections. Go to the section corresponding to the demand dial interface for which
	you want to change this behavior. Change the OtherPortOk field in this section
	to 0, instead of 1.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
