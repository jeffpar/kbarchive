---
layout: page
title: "Q58771: Mac GW: Installing a Gateway in Microsoft Mail"
permalink: /kb/058/Q58771/
---

## Q58771: Mac GW: Installing a Gateway in Microsoft Mail

	Article: Q58771
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
	
	
	Below are the steps in using the Gateway Installer program to install a generic
	gateway for Microsoft Mail. Since these are the steps for installing a generic
	gateway, the steps for installing a real gateway (for example, the AppleLink
	gateway) will vary.
	
	MORE INFORMATION
	================
	
	The gateway must be installed on a Microsoft Mail server that is up and running.
	This Mail server is known as the gateway server.
	
	1. Copy the gateway files to the server's hard disk. Also copy the file "MS Mail
	  GW" to the System Folder of the gateway server.
	
	2. From the Apple menu, choose the Chooser and click the icon for Microsoft
	  Mail.
	
	3. Click the name of the mail server on which you are installing the gateway.
	  Close the Chooser.
	
	4. Start the Gateway Installer program. The name of the mail server selected in
	  Step 3 should be displayed.
	
	5. From the Gateway menu, choose Install Gateway.
	
	6. In the Open dialog box, select the gateway resource file to install. Click
	  the Install button.
	
	7. When done, choose Quit from the File menu.
	
	8. Connect any communications hardware required by the gateway, for example, a
	  modem or serial cable, to the modem port. Gateways may even use AppleTalk for
	  communications.
	
	9. Restart the gateway server Macintosh.
	
	10. From the Apple menu, choose the Chooser and click the icon representing the
	  file "MS Mail GW".
	
	11. Click the name of the gateway server, the same server as in step 4 above.
	  Close the Chooser.
	
	12. The Network Manager should set up gateway accounts if needed and do gateway
	  configuration if needed.
	
	At this point, the generic gateway installed with the above steps should be ready
	to send and receive mail.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
