---
layout: page
title: "Q177539: Windows 95 Stops Responding Because of Land Attack"
permalink: kb/177/Q177539/
---

## Q177539: Windows 95 Stops Responding Because of Land Attack

	Article: Q177539
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr2 win95 kbgraphxlinkcritical
	Last Modified: 13-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After receiving spoofed connection request (SYN) packets over TCP/IP, a computer
	running Windows 95 may begin to operate slowly. After about one minute, Windows
	returns to normal operation.
	
	This problem may occur with TCP/IP on other operating systems as well.
	
	CAUSE
	=====
	
	This behavior occurs due to "Land Attack." Land Attack sends SYN packets with
	the same source and destination IP addresses and the same source and destination
	ports to a host computer. This makes it appear as if the host computer sent the
	packets to itself. Windows 95 operates more slowly while the host computer tries
	to respond to itself.
	
	RESOLUTION
	==========
	
	Without WinSock 2.0 Update
	--------------------------
	
	This issue is resolved by the following updated file for Windows 95 and Windows
	95 OEM Service Release 2 (OSR2) without the WinSock 2.0 update only:
	
	  Vtcp.386 version 4.00.956 (dated 11/26/97) and later
	
	To install this update, follow these steps:
	
	1. Download the Vtcpup11.exe file from the Microsoft Download Center to an empty
	  folder on your hard disk..
	
	2. In My Computer or Windows Explorer, double-click the Vtcpup11.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Vtcpup11.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following files are installed by Vtcpup11.exe:
	
	  File name     Version    Date/Time        Size     Destination folder
	  ----------------------------------------------------------------------
	  Vtcp.386      4.00.956   11/26/97 9:56a   47,413   Windows\System
	
	
	With WinSock 2.0 Update
	-----------------------
	
	This issue is resolved by the following updated file for Windows 95 and Windows
	95 OEM Service Release 2 with the Winsock 2 update only:
	
	  Vtcp.386 version 4.00.1424 (dated 12/10/97) and later
	
	To install this update, follow these steps:
	
	1. Download the Vtcpup20.exe file from the Microsoft Download Center to an empty
	  folder.
	
	2. In My Computer or Windows Explorer, double-click the Vtcpup20.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download vtcpup20.exe now
	  (http://download.microsoft.com/download/win95upg/update4/1/w95/EN-US/vtcpup20.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following files are installed by Vtcpup20.exe:
	
	  File name     Version    Date/Time        Size     Destination folder
	  ---------------------------------------------------------------------
	  VTCP.386      4.00.1424  12/10/97  2:24p  52,133   Windows\SYSTEM
	
	
	Identifying the Winsock 2.0 update
	----------------------------------
	
	For information about how to determine whether the Winsock 2.0 update has been
	installed an a computer running Windows 95, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q177719 Identifying Windows Sockets 2 Run-Time Components for Windows 95
	
	MORE INFORMATION
	================
	
	For additional information about this issue as it applies to Microsoft Windows
	NT, please see the following article in the Microsoft Knowledge Base:
	
	  Q165005 Windows NT Slows Down Because of Land Attack
	
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q170791 Windows 95 TCP Clients Run Out of Ports
	
	  Q168747 Update to Windows 95 TCP/IP to Address Out-of-Band Issue
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork osr2 win95 kbgraphxlinkcritical 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Solution Type     : kbfix
	
	=============================================================================
	
