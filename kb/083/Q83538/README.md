---
layout: page
title: "Q83538: Mac Fax: Running Fax Gateway with Other Gateways"
permalink: /kb/083/Q83538/
---

## Q83538: Mac Fax: Running Fax Gateway with Other Gateways

	Article: Q83538
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.x, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 1.1.2 and 3.0 of the Microsoft Mail for AppleTalk Networks Gateway to
	Fax can be run on a Mail for AppleTalk Networks server that has other gateways
	installed. If the other gateways require use of a data modem and the printer
	port is being used for a network connection, you must use a combination fax/data
	modem. Fax gateway is configured to use the modem port.
	
	If fax gateway is in Send mode, it will only attempt to use the modem port to
	send a fax and then release the modem port for other gateways to use.
	
	When running fax gateway in Receive mode, the Gateway Connect Times screen should
	have the Pause box checked if other gateway(s) need to use the modem attached to
	the modem port. This will cause fax gateway to release the modem port once every
	2 hours so that the other gateway(s) will be able to use the modem port. Also,
	all incoming calls will be answered by fax gateway, unless you configure the
	Gateway Connect Times so that each gateway's access to the modem does not
	overlap with another gateway. This is because BackRas may independently schedule
	the FaxInit to look for incoming calls.
	
	Additional query words: 2.0 2.00 2.0a 2.00a 2.0b 2.00b 3.00 faxgate
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN2xSearch
	Version           : WINDOWS:2.x,3.0
	
	=============================================================================
	
