---
layout: page
title: "Q111094: RAS ErrMsg: NETBIOS Error 640: A Netbios Error Has Occurred..."
permalink: /kb/111/Q111094/
---

## Q111094: RAS ErrMsg: NETBIOS Error 640: A Netbios Error Has Occurred...

	Article: Q111094
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): kbdisplay kbnetwork
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you dial in from Windows for Workgroups 3.11 Remote Access Services (RAS)
	client to a RAS server, the following error message is displayed:
	
	  NETBIOS error 640: a netbios error has occurred (with failed code 0x5)
	
	NOTE: This problem may occur with some modems and not with others.
	
	CAUSE
	=====
	
	The "NETBIOS error 640" message can be caused by the following conditions:
	
	- The connection speed is too fast for the current line quality.
	
	- The correct modem has not been selected from the Configuration menu.
	
	- The cable being used does not support all the pinouts needed for RAS.
	
	- Your modem is not fully compatible with the Microsoft RAS compression.
	
	- You are loading PC Anywhere virtual device drivers (AW5VCD.386 and
	  VPCAW5.386) from the [386Enh] section of your SYSTEM.INI file. Comment out
	  these drivers and add DEVICE=*VCD to the same section of the SYSTEM.INI file.
	
	- You logged on to the domain you are trying to connect to before connecting
	  with RAS.
	
	- Microsoft LAN Manager OS/2 RAS server has NetBiosRetries set too high.
	
	- The Windows NT server is low on available memory.
	
	- There is an incompatibility with your third-party video driver.
	
	
	RESOLUTION
	==========
	
	
	If you receive the "NETBIOS error 640" message several seconds after connecting
	to the RAS server, use the following procedure to determine what is causing the
	error. After each step, try to establish a RAS connection.
	
	1. Choose Setup and ensure RAS is configured for the correct modem.
	
	2. Make sure you are using the correct cabling. For more information, run RAS
	  and check online Help.
	
	3. Make sure you are not logged on to the domain you are trying to connect to
	  before connecting with RAS.
	
	4. Make sure you are not using a 9-to-25-pin converter that was supplied with a
	  mouse. Many 9-to-25-pin converters supplied with mouse hardware do not carry
	  modem signals.
	
	5. Disable hardware flow control and lower the connection speed as follows:
	
	  a. Edit the RAS phone book and select Modem from the Advanced options.
	
	  b. Clear the Enable Hardware Flow Control check box.
	
	  c. Change the connection speed to the lowest setting.
	
	  If the connection is successful, try increasing the connection speed until the
	  maximum throughput of the line is found.
	
	6. If RAS software compression is enabled, disable it.
	
	7. Try using the standard Windows for Workgroups VGA video driver.
	
	8. If you are trying to connect to a Microsoft LAN Manager OS/2 RAS server, make
	  sure NetBiosRetries is not set too high. For example, some Microsoft
	  customers have reported this problem when NetBiosRetries is set to 6. To
	  correct this problem, lower the LAN Manager server NetBiosRetries value in
	  the [NetBEUI] section of the PROTOCOL.INI file.
	
	9. If you are trying to connect to a Microsoft Windows NT server, make as much
	  memory available as possible on the server.
	
	
	Additional query words: err msg errmsg vxd vxds 4 8
	
	======================================================================
	Keywords          : kbdisplay kbnetwork 
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
