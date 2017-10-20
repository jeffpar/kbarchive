---
layout: page
title: "Q138721: &quot;Line Non-Operational&quot; in Remote Access Service Monitor"
permalink: /kb/138/Q138721/
---

## Q138721: &quot;Line Non-Operational&quot; in Remote Access Service Monitor

{% raw %}

	Article: Q138721
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears in RAS Admin on your Windows NT Remote
	Access Service (RAS) computer:
	
	  Line Non-Operational
	
	CAUSE
	=====
	
	When a connection is made to a RAS port, the RAS service searches for the next
	available port. If a port is available, it queries the device to verify that its
	status is OK. If an error is returned, the port is listed as "Line
	Non-Operational" in RAS Monitor.
	
	RESOLUTION
	==========
	
	This error can mean that the port itself is damaged or not set up correctly.
	
	Alternatively, this error can mean:
	
	- You are running out of resources:
	
	  If this is the case, disable some or all of the ports for outgoing calls and
	  make them incoming lines only.
	
	
	  -or-
	
	- The registry has the wrong information:
	
	  To see if this is the case:
	
	  1. Run Registry Editor (REGEDT32.EXE).
	
	  2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \System\CurrentControlSet\Services\Asyncmac\Parameters
	
	     The Ports entry may be set to a value that is less than the number of
	     incoming ports available. If NetBEUI is not loaded, this entry is not
	     updated properly. If this is the case, first install NetBEUI, then
	     configure RAS to use NetBEUI for dialin and restart.
	
	
	Additional query words: prodnt nonoperational
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
