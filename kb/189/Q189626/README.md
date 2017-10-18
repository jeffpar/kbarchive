---
layout: page
title: "Q189626: HOWTO: Use the Winsock Control Through a Serial Connection"
permalink: kb/189/Q189626/
---

## Q189626: HOWTO: Use the Winsock Control Through a Serial Connection

	Article: Q189626
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI _IK12469 kbSDKPlatform kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbWinso
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 SP3 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use the Windows CE Toolkit for Visual Basic 6.0 (VBCE) Winsock control in a
	VBCE application using a serial connection with a desktop machine, the Remote
	Access Server on the desktop must be configured to allow remote TCP/IP clients
	to access the entire network.
	
	MORE INFORMATION
	================
	
	When the handheld device is connected via a serial connection to a host desktop
	machine, the desktop machine assigns a pre-defined TCP/IP address to the
	handheld device from a pool of static addresses. Additionally, by default, the
	desktop's TCP/IP clients are only given access to the local machine, not the
	entire network. This means that when a VBCE Winsock application tries to get a
	RemoteHostIP address from a pre-defined remote host, it is unable to do so
	because the handheld device's LocalIP address is known only to the host desktop
	machine and not to the network.
	
	Without the right Remote Access Server configuration settings, the error 10050
	"Network Subsystem Failed" occurs when the VBCE Winsock application tries to
	connect to a remote host.
	
	The following steps describe how to configure the desktop machine to allow
	dynamic assignment of IP addresses and access to remote hosts that will allow
	the handheld device to connect to a remote host on the network. Note that this
	will require a reboot of the machine when completed.
	
	Step-by-Step Example
	--------------------
	
	1. From the Control Panel, click Network.
	
	2. In the Network dialog box, click the Services tab.
	
	3. Click Remote Access Server, and click Properties.
	
	4. Select the COM port that your device is connected to (presumably, COM1), and
	  click Network.
	
	5. In Server Settings, make sure that the TCP/IP check box is selected and click
	  Configure.
	
	6. In Allow remote TCP/IP clients to access:, make sure that Entire network is
	  selected.
	
	7. Ensure that "Use DHCP to assign remote TCP/IP client addresses" is selected.
	
	8. Click OK to dismiss the RAS Server TCP/IP Configuration dialog box.
	
	9. Click OK to dismiss the Network Configuration dialog box.
	
	10. Click Continue in the Remote Access Setup dialog box.
	
	11. Click Close to dismiss the Network utility. The computer will restart.
	
	Additional query words: VBCE WCE wince vbce6
	
	======================================================================
	Keywords          : kbnetwork kbAPI _IK12469 kbSDKPlatform kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbWinsock kbGrpDSVB kbGrpDSNet 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :4.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
