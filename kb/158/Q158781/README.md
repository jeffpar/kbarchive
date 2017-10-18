---
layout: page
title: "Q158781: Determining LANA Numbers in Windows 95"
permalink: kb/158/Q158781/
---

## Q158781: Determining LANA Numbers in Windows 95

	Article: Q158781
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbnetwork win95 kbNetBIOS kbSDKPlatform kbGrpDSNet
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	To determine which LANA numbers are being used on a Windows 95 client, type "net
	diag /status" (without the quotation marks) at a command prompt.
	
	The resulting prompt asks you to enter the remote computer's NetBIOS name, or to
	press ENTER to examine a local adapter's status. It then prompts you to select
	the LANA number you want to use.
	
	NOTE: You are prompted for a LANA number to use only if you are using more than
	one protocol.
	
	MORE INFORMATION
	================
	
	A NetBIOS-providing protocol set to be the default protocol is set to LANA 0. To
	find out which protocol is on which LANA, check the following registry key:
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Class\NetTrans
	
	Beneath this key is a series of \000x branches corresponding to the network
	protocols installed. Skipping the NetBIOS-providing protocol set as the default
	protocol, find the NetBIOS protocols being used and number their LANA numbers
	backwards from seven.
	
	Examples
	--------
	
	A Windows 95-based computer is using NetBIOS over IPX, TCP/IP, and NetBEUI. All
	three are NetBIOS providers. NetBEUI has been set as the default protocol. The
	NET DIAG /STATUS command shows:
	
	  Please enter remote computer's NetBIOS name, or press ENTER to examine a
	  local adapter's status.
	
	  Please enter the LANA number you wish to use. Choose from the following
	  NetBIOS-providing LANA(s): 0 6 7
	
	The registry shows:
	
	HKEY_LOCAL_MACHINE
	
	\System
	\CurrentControlSet
	\Services
	\Class
	\NetTrans
	\0000 - IPX/SPX
	\0001 - NetBEUI
	\0002 - TCP/IP
	\0003 - NetBIOS over IPX
	Using the above guidelines, you can determine that:
	
	- NetBEUI is on LANA 0 (default protocol)
	
	- NetBIOS over TCP/IP is on LANA 7
	
	- NetBIOS over IPX is on LANA 6
	
	Note that IPX/SPX is skipped because it is not a NetBIOS-providing protocol. Had
	NetBEUI not been set to be the default protocol, the NET DIAG /STATUS command
	would not have listed LANA 0:
	
	  Please enter the LANA number you wish to use. Choose from the following
	  NetBIOS-providing LANA(s): 6 7
	
	In this case, LANA numbers 6 and 7 are being used, and no NetBIOS- providing
	protocol has been set as the default protocol. Otherwise, the display would show
	LANA 0 being used.
	
	
	Additional query words: sms remote control
	======================================================================
	Keywords          : kbenv kbnetwork win95 kbNetBIOS kbSDKPlatform kbGrpDSNet 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
