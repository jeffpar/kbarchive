---
layout: page
title: "Q71340: Mac Gty: Gateway Access Server Stops Working"
permalink: /kb/071/Q71340/
---

## Q71340: Mac Gty: Gateway Access Server Stops Working

	Article: Q71340
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Mail for AppleTalk Networks server that is also a master
	gateway server has not seen one of its gateway access servers on the network for
	a period of time longer than its Return Undeliverable Mail setting (in the
	Server Settings dialog box), the Mail master gateway server will expire (or
	"forget" about) that gateway access server.
	
	When this happens, the master gateway server purges the users from the forgotten
	server in its own global user list. In addition, it forgets that this server is
	a gateway access server. If this expired (forgotten) server is brought back up
	on the network, the master gateway server will read in the forgotten server's
	user list and will exchange user lists with the expired server again, but the
	master gateway server will not remember that this server was a gateway access
	server.
	
	The server that used to be the gateway access server will not receive any
	notification that it is no longer a gateway access server. However, you may see
	any or all of the following symptoms of this problem:
	
	- Gateway recipients that are defined on the master gateway server will not be
	  forwarded.
	
	-or-
	
	- Changes made to gateway recipients on the master gateway server will not be
	  forwarded.
	
	RESOLUTION
	==========
	
	To restore the access server to working order, the access gateway resources on
	the access server must be removed and then reinstalled.
	
	To Remove an Access Gateway
	---------------------------
	
	1. Sign in to the access server as the Network Manager.
	
	2. Launch the Gateway Installer and select the appropriate gateway.
	
	3. From the Access menu, choose Remove Access Gateway. The Gateway Installer
	  will ask if you are sure you want to remove the selected access gateway.
	  Click Yes.
	
	To Install an Access Gateway
	----------------------------
	
	1. Sign in to the access server as the Network Manager.
	
	2. Launch the Gateway Installer.
	
	3. From the Access menu, choose Install Access Gateway. The Gateway Installer
	  will ask you to select an access gateway to install. Locate the access
	  gateway file and click Install.
	
	To help prevent master gateway servers from expiring access gateway servers, the
	Return Undeliverable Mail setting should be set to an amount of time longer than
	any anticipated breaks in communication.
	
	
	Additional query words: 2.00 2.00a 2.00b 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0,3.1
	
	=============================================================================
	
