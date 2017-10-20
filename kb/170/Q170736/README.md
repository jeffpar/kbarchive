---
layout: page
title: "Q170736: Windows 95 MSDLC32 Does Not Receive Multicast Packets"
permalink: /kb/170/Q170736/
---

## Q170736: Windows 95 MSDLC32 Does Not Receive Multicast Packets

{% raw %}

	Article: Q170736
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr1 osr2 win95 kbAPI kbDLC kbSDKPlatform kbGrpDSNet
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A DLC program may not receive multicast packets in Windows 95 using Microsoft's
	32-bit Data Link Control protocol (MSDLC32).
	
	CAUSE
	=====
	
	MSDLC32 does not receive packets addressed to multicast addresses.
	
	STATUS
	======
	
	This issue is resolved by the following updated file for Windows 95 and OSR2:
	
	  Dlc.vxd version 4.10.995 (dated 6/18/97) and later
	
	To install this update, follow these steps:
	
	1. Download the Dlc32upd.exe file from the online service listed below to an
	  empty folder.
	
	2. In My Computer or Windows Explorer, double-click the Dlc32upd.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Dlc32upd.exe now
	  (http://download.microsoft.com/download/win95upg/updt_a/1.0/W95/EN-US/Dlc32upd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following files are installed by Dlc32upd.exe:
	
	  File name     Version    Date/Time        Size     Destination folder
	  ----------------------------------------------------------------------
	  Dlc.vxd       4.10.995   6/18/97 3:31p    237,470  Windows\System
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q170737 Windows 95 MSDLC32 Does Not Receive Broadcast Packets
	
	  Q170736 Windows 95 MSDLC32 Does Not Receive Multicast Packets
	
	  Q159344 Fatal Exception in DLC Running Program from NetWare Server
	
	  Q156149 MSDLC32 May Not Receive All Packets in Heavy Traffic
	
	  Q148765 Availability of DLC Update for MSDLC32 Protocol
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	A multicast address is associated with a group of network nodes or stations.
	Packets sent to a multicast address are expected to be received by all stations
	on the network segment or ring that have the specified multicast address
	registered.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr1 osr2 win95 kbAPI kbDLC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWin95search kbOPKSearch kbWin95 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	
	=============================================================================
	

{% endraw %}
