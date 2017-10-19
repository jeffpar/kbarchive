---
layout: page
title: "Q119641: Mac GW: Solution for Possible Multiple MS Mail GW"
permalink: /kb/119/Q119641/
---

## Q119641: Mac GW: Solution for Possible Multiple MS Mail GW

	Article: Q119641
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Support for gateways in Microsoft Mail for AppleTalk Networks is provided by MS
	Mail GW, also known as Gateway Services or GWS. There should be one MS Mail GW
	per Mail gateway server on the Mail network.
	
	Symptoms of more than one MS Mail GW include:
	
	- Outgoing gateway messages sometimes disappear.
	
	- Gateways report errors in trying to process messages.
	
	If you suspect that multiple MS Mail GWs is causing a problem, then one way to
	test this is to rename the gateway Mail server. To change the name of a Mail
	server, sign into the server as Network Manager and change the name in Server
	Settings. After the Mail server reboots, go to the Chooser and point MS Mail GW
	at the gateway server again. Now test the gateway again.
	
	NOTE: After renaming the Mail server, users who sign into this Mail server must
	also go to the Chooser and re-establish connection with the re-named Mail
	Server. However, the above steps do not affect communication with other Mail
	servers. The new name of this Mail server will soon propagate to other Mail
	servers on the network.
	
	MORE INFORMATION
	================
	
	If there is more than one copy of MS Mail GW causing a problem, then the above
	steps work because renaming the Mail server breaks the AppleTalk connection
	between all copies of GWS on the network and the Mail server. If the gateway
	works correctly now, then this probably indicates more than one GWS on the
	network and the Network Manager must now try to find these extra copies.
	
	NOTE: MS Mail GW version 3.1d registers itself on the network and may be found
	using AppleTalk network tools. See the Mail 3.1d disks for more information. For
	MS Mail GW prior to 3.1d, the Network Manager must do a machine by machine
	search.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
