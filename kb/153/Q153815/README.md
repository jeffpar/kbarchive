---
layout: page
title: "Q153815: XCLN: Exchange Client Cannot Send Mail Across Router"
permalink: kb/153/Q153815/
---

## Q153815: XCLN: Exchange Client Cannot Send Mail Across Router

	Article: Q153815
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can send and receive mail in a Microsoft Exchange client for Chinese Windows
	3.x only when you are on the same network segment as the Microsoft Exchange
	Server. If the Microsoft Exchange Server is located on the other side of an
	Ethernet router, you can only read mail. When you attempt to send mail, you
	receive the following error message:
	
	  The item could not be sent. Network problems are preventing connection to the
	  Microsoft Exchange Server computer
	
	CAUSE
	=====
	
	This can happen if the message is being sent over IPX and the router MTU for IPX
	is set to only pass packets that are smaller than the Microsoft Exchange client
	is using.
	
	WORKAROUND
	==========
	
	Configure the Microsoft Exchange Server and the Novell ODI driver to send out
	IPX packages equal or smaller than the MTU value. The following example shows
	how to set the value to 576 bytes.
	
	To do this on the Microsoft Exchange Server, start Regedt32.exe and change to:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\ServicesNwlnkIpx
	                     \Netconfig\driver01
	
	Now increase the following registry value, note that this is hexidecimal:
	
	  MaxPktSize: REG_DWORD: 0X240
	
	At the client, add following lines to your Net.cfg file:
	
	  Protocol ipx
	  ipx packet size limit 576
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
