---
layout: page
title: "Q58780: Mac AL GW: Installing the AppleLink Gateway for Microsoft Mail"
permalink: kb/058/Q58780/
---

## Q58780: Mac AL GW: Installing the AppleLink Gateway for Microsoft Mail

	Article: Q58780
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: All Microsoft Mail version 2.00 customers who have gateways installed
	should be using the "MS Mail GW" file version 2.00b and the "Microsoft Mail
	Server" file version 2.00b, both of which are located in the System Folder of
	the Mail server. An updated "MS Mail GW" file is available through Microsoft End
	User Sales and Service at (800) 426-9400 or Microsoft International Customer
	Service at (206) 936-8661, but ONLY for customers using the AppleLink Gateway to
	Microsoft Mail. Customers using other gateways must obtain an updated "MS Mail
	GW" file from the developer of the gateway they are using. The Microsoft Mail
	server upgrade can also be obtained at the above numbers.
	
	
	Below are the steps in using the Gateway Installer program to install the
	AppleLink gateway for Microsoft Mail.
	
	MORE INFORMATION
	================
	
	1. The AppleLink gateway must be installed on an up-and-running Microsoft Mail
	  server. This Macintosh should be a Macintosh Plus or newer machine, have at
	  least 2 megabytes (MB) of memory, a hard disk, System version 6.0.2 or later,
	  and run MultiFinder. This Mail server is known as the gateway server.
	
	2. The Mail workstation software must also be installed on this Macintosh
	  because the Network Manager must configure the AppleLink gateway on the
	  gateway server.
	
	3. Copy the "Gateway for AppleLink" folder from the "Gateway for AppleLink" disk
	  to the server's hard disk.
	
	4. Copy the file "MS Mail GW" from the "Gateway for AppleLink" disk to the
	  System Folder of the gateway server.
	
	5. Choose Chooser from the Apple menu and click on the icon for Microsoft Mail.
	  Select the server from step 1 above. Close the Chooser.
	
	6. Start the Gateway Installer program. From the Gateway menu, choose Install
	  Gateway. Select the file containing the AppleLink gateway resources named
	  "AppleLink Gateway" and click the Install button. When done, choose Quit from
	  the File menu. The Gateway Installer and the "AppleLink Gateway" file are
	  located in the "Gateway for AppleLink" folder.
	
	7. Make the AppleLink Comm program and MultiFinder the start-up applications by
	  selecting the AppleLink Comm program and choosing Set Startup from the
	  Special menu when in the Finder. The gateway server has to run MultiFinder
	  for the AppleLink gateway to run correctly. The AppleLink Comm program is in
	  the "Gateway for AppleLink" folder.
	
	8. Connect the modem to the modem port on the mail server Macintosh.
	
	9. Sign into Mail as Network Manager.
	
	10. From the Mail menu, choose Gateway Configuration. Click the icon for the
	  AppleLink gateway and enter the configuration information. For more
	  information, query on the following keywords:
	
	  AppleLink and configuration
	
	11. From the Mail menu, choose Gateway Connect Times. Click the icon for the
	  AppleLink gateway and set the connect times. For more information, query on
	  the following keywords:
	
	  AppleLink and connect and times
	
	12. From the Mail menu, choose Gateway Accounts. Click the icon for the
	  AppleLink gateway and enter the account information. For more information,
	  query on the following keywords:
	
	  AppleLink and gateway and account
	
	13. This step is optional. From the Mail menu, choose Gateway Recipients. Click
	  the icon for the AppleLink gateway and enter the recipient information. For
	  more information, query on the following keywords:
	
	  AppleLink and gateway and recipient
	
	14. Restart the server.
	
	15. From the Apple menu, choose Chooser, and click the icon for the file "MS
	  Mail GW". Select the server from step 1 above.
	
	Now when you send a mail message to an AppleLink recipient, that mail message
	will be routed through the AppleLink gateway. For more information, query on the
	following keywords:
	
	AppleLink and send and mail
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
