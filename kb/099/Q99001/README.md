---
layout: page
title: "Q99001: Mac Gty: Additional Steps for Upgrading MCI CommGATE Gateway"
permalink: kb/099/Q99001/
---

## Q99001: Mac Gty: Additional Steps for Upgrading MCI CommGATE Gateway

	Article: Q99001
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you upgrade version 3.0 of Microsoft Mail for AppleTalk Networks Mail
	Server to version 3.1, you must remove the MCI CommGATE gateway prior to the
	upgrade and re-install it after the upgrade is complete. If the gateway is not
	removed and re-installed, it may fail to function.
	
	To Upgrade to Version 3.1 with the MCI CommGATE Gateway
	-------------------------------------------------------
	
	1. Use the Gateway Installer application to copy the CommGATE Gateway
	  Recipients. Log in to the gateway server as the Network Manager and launch
	  the Gateway Installer. Select the CommGATE MCI gateway and select the Copy
	  Accounts and Recipients item from the Gateway Menu option. Choose the Save
	  button to extract a copy of the CommGATE Gateway Recipients into the CommGATE
	  MCI Acct/Recip file.
	
	2. Remove the CommGATE gateway by selecting Gateway:Remove Gateway from the top
	  menu bar.
	
	3. Upgrade the Microsoft Mail server to version 3.1.
	
	4. Re-install the CommGATE gateway as described in the CommGATE Administrator's
	  Guide.
	
	5. Restore the CommGATE Gateway Accounts and Recipients using the Gateway
	  Installer Application. Log in to the gateway server as the Network Manager
	  and launch the Gateway Installer. Select the CommGATE MCI gateway and go to
	  Gateway:Install Accounts and Recipients from the top menu bar. Select the
	  Accounts and Recipient file that was created prior to the server upgrade
	  (CommGATE MCI Acct/Recip) and choose the Install button.
	
	Refer to the Server Read Me file for more information on upgrading servers and
	gateways.
	
	
	Additional query words: 3.10 3.00 won't connect
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
