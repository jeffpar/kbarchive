---
layout: page
title: "Q86951: 3COM: Errors During Installation"
permalink: kb/086/Q86951/
---

## Q86951: 3COM: Errors During Installation

	Article: Q86951
	Product(s): Microsoft Mail For PC Networks
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the most common problems encountered when installing the
	Microsoft Mail Gateway to 3Com 3+Mail.
	
	MORE INFORMATION
	================
	
	Not Accepting Mail Service
	--------------------------
	
	If the installation program does not accept the three-part name of the mail
	service, it could be the wrong name, an incorrect Ethernet address, or a slow
	mail service.
	
	Make sure the name entered is the full three-part name of the mail service
	currently running. To find out the name of the mail service, type "3m server="
	at the MS-DOS prompt.
	
	There may also be a problem with the 3+Mail service's Ethernet address, if the
	Ethernet address of the mail service is different than that of the server it is
	running on.
	
	Check the Ethernet address of the server machine by doing one of the following:
	
	- Type "3n stat" (without the quotation marks) on the server machine to display
	  the Ethernet address of the server.
	
	- If the server is a dedicated 3Com server machine, open the panel on the
	  front. There should be a sticker there with the address.
	
	- As a last resort, look on the network interface card.
	
	Check the Ethernet address of the mail service by typing "3n mod server" at a
	workstation. At the prompt, enter the full three-part name of the mail service.
	Press ENTER to accept the first two parameters. If the Ethernet address is
	different from that of the server, change this address so that it matches the
	server.
	
	Another situation where the installation program will not accept the Mail Service
	is when the service is running very slow. The installation program makes a call
	to the mail service APIs, with a time limit. If the service is too slow, it will
	not respond in time, and the installation will fail. You can try speeding up the
	mail service by running the installation when there is nobody on the mail
	system.
	
	Re-Installing
	-------------
	
	Before re-installing the gateway, make sure to delete both the _GATEWAY user ID
	and the domain:organization entered during the installation. If the installation
	does not work, try deleting the _GATEWAY user again, and also edit the MBXX
	file, which is in the 3MAIL directory in the 3Com database. You can edit this
	file using any text editor. Delete the entry for the _GATEWAY user. Then delete
	the domain:organization for the gateway. You now can try the install again.
	
	Installing from Floppy Disks
	----------------------------
	
	You must install the gateway from floppy disks; you cannot copy the files to a
	hard drive and install them from there.
	
	Gateway Directory
	-----------------
	
	The directory where the gateway files will be installed must be created before
	the installation; otherwise, the installation will fail.
	
	Domain:Organization for Gateway
	-------------------------------
	
	The domain:organization for the _GATEWAY user must be unique.
	
	
	Additional query words: 3.00 pcmail install 3com ethernet
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
