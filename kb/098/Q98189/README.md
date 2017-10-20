---
layout: page
title: "Q98189: Compaq 32 Bit EISA NIC (Netflex)"
permalink: /kb/098/Q98189/
---

## Q98189: Compaq 32 Bit EISA NIC (Netflex)

{% raw %}

	Article: Q98189
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Compaq is shipping a Compaq 32-bit token ring and Ethernet, EISA, MSP network
	interface card (which is actually a Netflex card). This card can be used either
	as token ring or Ethernet just by changing a chip that you plug into the board.
	The driver that ships with LAN Manager, however, does not bind to the card, even
	though it is a selection in the Setup program. The correct driver is supplied by
	Compaq on their OS/2 Support Software Disk shipped with the Compaq PC.
	
	Here is the procedure for installing the correct drive:
	
	1. Run the Setup program from the LAN Manager directory.
	
	2. Go to Config.
	
	3. Go to Network Drivers.
	
	4. Add new config.
	
	5. Select COMPAQ 32-bit token ring and Ethernet, EISA, MSP.
	
	6. Go to the other driver selection and select it (it will prompt you to enter
	  the path for the driver)
	
	7. Put the OS/2 Support Software Disk (supplied with your Compaq PC) in drive A.
	
	8. Choose OK (or press ENTER).
	
	9. Select the driver COMPAQ 32-bit Token-ring and Ethernet, EISA, MSP. This
	  installs the correct driver for the card.
	
	10. Select the protocol you want to use.
	
	11. Exit from Setup.
	
	12. View the configuration (LANMAN.INI and PROTOCOL.INI) files to ensure they
	  are correct. If they are, shut down and reboot the PC.
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
