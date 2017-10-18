---
layout: page
title: "Q174095: IGMP Query Times Out in Windows 95 with Winsock2 Update"
permalink: kb/174/Q174095/
---

## Q174095: IGMP Query Times Out in Windows 95 with Winsock2 Update

	Article: Q174095
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbtool win95 kbgraphxlinkcriticalkbfixlist
	Last Modified: 03-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows 95-based computer with the Winsock2 Update for Windows 95
	installed, IGMP queries may time out prematurely. This may result in computers
	that are members of a multicast group being dropped from group membership.
	
	CAUSE
	=====
	
	The TCP/IP driver in the Winsock2 Update for Windows 95 does not properly
	implement the Max Response Time field as documented in the IGMP version 2 draft.
	This behavior may cause clients participating in a multicast group to not
	respond to IGMP requests from a router within the timeout period. When this
	occurs, the router no longer forwards multicast packets to the expired group
	member.
	
	STATUS
	======
	
	This issue is resolved by the following updated file for Windows 95 and Windows
	95 OEM Service Release 2 (OSR2):
	
	  Vip.386 version 4.10.1512 (dated 7/29/97) and later
	
	To install this update, use the following steps.
	
	NOTE: This update should be applied only to Windows 95-based computers on which
	the Winsock2 Update has been installed.
	
	1. Download the Vipup20.exe file from the Microsoft Download Center to an empty
	  folder.
	
	2. In My Computer or Windows Explorer, double-click the Vipup20.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Vipup20.exe now
	  (http://download.microsoft.com/download/win95upg/update3/1/w95/EN-US/vipup20.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following files are installed by Vipup20.exe:
	
	  File name     Version    Date/Time        Size     Destination folder
	  ---------------------------------------------------------------------
	  Vip.386       4.10.1512  7/29/97 3:12p    71,754   Windows\System
	
	MORE INFORMATION
	================
	
	The Winsock2 Update for Windows 95 is included in the Winsock2 Software
	Development Kit (SDK), available from the following location on the Microsoft
	FTP site:
	
	  ftp://ftp.microsoft.com/bussys/winsock/winsock2
	
	This issue is known to occur with the Vip.386 file version 4.10.1423 included in
	the Ws295sdk.exe file dated 6/23/97 from the FTP location listed above. Future
	revisions to this package may not exhibit this symptom.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbnetwork kbtool win95 kbgraphxlinkcritical kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2
	Version           : :2
	
	=============================================================================
	
