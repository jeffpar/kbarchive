---
layout: page
title: "Q61785: END.DATAGRAM Returning Undocumented Error"
permalink: /kb/061/Q61785/
---

## Q61785: END.DATAGRAM Returning Undocumented Error

{% raw %}

	Article: Q61785
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	
	Question:
	
	When using the LAN Manager version 1.01 NetBIOS, we periodically receive a
	NetBIOS return code 09 when sending a MSG.SEND.DATAGRAM (A0). A code 09 is not a
	legitimate return code according to the IBM technical reference Token-Ring
	Network PC adapter manual. What should we do when this occurs?
	
	Response:
	
	This error comes from NetBEUI as it runs out of resources. You should increase
	the following parameters in PROTOCOL.INI in the [netbeui] section, as follows:
	
	1. If you are using the Mnetb/Mdlc stack (for more information, see the
	  "Microsoft LAN Manager 1.0 Network Device Drivers Guide")
	
	                          Min Max   Default
	                          --- ----  -------
	
	     tx.u.buffers         2   32    4 + 1/4(commands=)
	
	  where:
	
	         commands         1    255  32
	
	  Tx.u.buffers controls the number of buffers allocated for the UI frame
	  including datagrams, status queries, and session establishment frames.
	
	2. If you are using the NetBEUI stack (for more information, see the
	  documentation enclosed with the release notes dated August 23, 1989):
	
	                          Min   Max   Default
	                          ---   ----  -------
	
	     datagrampackets      2    1000    2     packets
	     looppackets          1    1000    1     packets
	
	  Datagrampackets controls the number of data descriptors to allocate for
	  packetizing NetBIOS datagrams into UI frames.
	
	  Looppackets controls the number of packets looped back on the workstation.
	  This parameter will affect the workstation issuing MSG.SEND.DATAGRAM if it
	  has also put out RECEIVE.BROADCAST.DATAGRAM. It will receive its own datagram
	  through the loop back in NetBEUI.
	
	Additional query words: 1.00 1.01 2.00
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
