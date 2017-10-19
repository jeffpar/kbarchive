---
layout: page
title: "Q162293: Troubleshooting RAS Client Issues in Windows NT 4.0"
permalink: /kb/162/Q162293/
---

## Q162293: Troubleshooting RAS Client Issues in Windows NT 4.0

	Article: Q162293
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork _IK12469kbfaq
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains steps to help you troubleshoot issues with the Remote
	Access Service (RAS) in Windows NT 4.0. This article focuses on issues that can
	occur when you use RAS to dial into another computer or an Internet service
	provider (ISP).
	
	The issues discussed in this article include:
	
	- Cannot dial with RAS
	
	- Cannot connect after dialing with RAS
	
	MORE INFORMATION
	================
	
	Cannot Dial with RAS
	--------------------
	
	When you attempt to dial with Dial-Up Networking, the following error message may
	appear:
	
	  Error 692: Hardware failure in port or attached device.
	
	If you receive this or another error message that indicates that the modem is not
	working properly, refer to the following articles in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q161516
	  TITLE : Troubleshooting Modem Problems Under Windows NT 4.0
	
	  ARTICLE-ID: Q122839
	  TITLE : Err Msg: Error 692: Hardware Failure in Port or Attached...
	
	If you have upgraded from Windows NT 3.51 and you are running a program that
	monitors the phone line (for example, a fax program), you may receive an error
	message that indicates the port is busy when you try to dial out with Dial-Up
	Networking. For example:
	
	  Error 633: The port is already in use or is not configured for Remote Access
	  dial out.
	
	If you installed RAS in Windows NT 3.51 before upgrading to Windows NT 4.0, the
	kernel-mode telephony driver that is used in Windows NT 3.51 is retained and RAS
	uses non-Unimodem drivers. If another program uses the Unimodem driver and is
	set answer the line automatically, that program causes TAPI 2.0 to control the
	communications port. When this occurs, the communications port is not available
	to the non-Unimodem version of RAS.
	
	To resolve this problem, remove the non-Unimodem driver and replace it with one
	supplied with Windows NT 4.0. To do so, follow theses steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click the Services tab.
	
	3. Click Remote Access Service, and then click Properties.
	
	4. If the type of modem listed indicates that the kernel-mode TAPI driver is
	  still being used [that is, it lists the type as "Modem (modem.inf)"], click
	  the port, and then click Remove.
	
	5. Click Add to add the Unimodem driver (the driver supplied with Windows NT
	  4.0) for this COM port.
	
	6. Click Continue and restart your computer when prompted to do so.
	
	Cannot Connect After Dialing with RAS
	-------------------------------------
	
	If the telephone line is unusually noisy, you may receive an error message such
	as:
	
	  Error 640: A Netbios error has occurred.
	
	This message indicates that the modem may not be able to negotiate a connection
	at a higher speed. Try setting the modem speed on the client computer down to a
	lower speed such as 9600 bps. To do so, follow these steps:
	
	1. In Dial-Up Networking, click the appropriate phone book entry.
	
	2. Click More, and then click Edit Entry And Modem Properties.
	
	3. Click the appropriate modem, and then click Configure.
	
	4. In the Initial Speed box, click 9600, and then click the Enable Modem
	  Compression check box to clear it.
	
	5. Click OK.
	
	6. Click the Server tab, click the Enable Software Compression check box to
	  clear it, and then click OK.
	
	If the RAS server does not answer or you cannot connect, test the connection from
	another computer. If you cannot connect using another computer, there may be a
	problem with the RAS server. Contact your network administrator for assistance.
	
	If you can connect to the RAS server from another computer, there may be a
	hardware compatibility problem with your modem. Check the Windows NT Hardware
	Compatibility List (HCL) to see if your modem is listed. For information about
	where to obtain the HCL, see the following article in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q131303
	  TITLE : Latest Windows 2000 and Windows NT Hardware Compatibility List (HCL)
	
	If your modem is not listed, contact the modem's manufacturer or consider trying
	a supported modem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork _IK12469 kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
