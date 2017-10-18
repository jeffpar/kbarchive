---
layout: page
title: "Q169035: Windows 95 WinSock Update to Improve Multihoming Support"
permalink: kb/169/Q169035/
---

## Q169035: Windows 95 WinSock Update to Improve Multihoming Support

	Article: Q169035
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbfile kbnetwork kbtool osr1 win95 kbAPI kbSDKPlatform kbWinsock
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple network adapters are configured to use the Microsoft TCP/IP
	protocol (a configuration known as multihoming), network names may not be
	resolved correctly using a Domain Name Service(DNS) server. Specific symptoms
	include:
	
	- When multiple DNS servers are configured on a single workstation with one DNS
	  server for a Dial-Up Networking connectoid and another DNS server for a
	  primary network adapter, the DNS server configured for the Dial-Up Networking
	  connectoid is not used.
	
	- When you attempt to use multiple Dynamic Host Configuration Protocol (DHCP)
	  servers to dynamically assign DNS server addresses to multiple network
	  adapters installed in your computer, the DNS server addresses may not be
	  assigned properly.
	
	These problems may be encountered when you are using either 32-bit or 16-bit
	programs.
	
	CAUSE
	=====
	
	These symptoms occur because the Microsoft TCP/IP protocol included with Windows
	95 (retail release) and Windows 95 OEM Service Release 1 (OSR1) does not provide
	support for multihoming with TCP/IP.
	
	These problems do not occur with the Microsoft TCP/IP protocol included with
	Windows 95 OEM Service Release versions 2 and 2.1, which does provide support
	for multiple DNS configurations.
	
	STATUS
	======
	
	This issue is resolved by the following updated files for Windows 95 and OSR1:
	
	  Winsock.dll version 4.00.1111 (dated 8/24/96) and later
	  Wsock32.dll version 4.00.1111 (dated 8/24/96) and later
	
	To install this update, follow these steps:
	
	1. Download the Wsockupd.exe file to an empty folder.
	
	2. In My Computer or Windows Explorer, double-click the Wsockupd.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Wsockupd.exe now
	  (http://download.microsoft.com/download/win95upg/winsock/1/W9X/EN-US/Wsockupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following files are installed by Wsockupd.exe:
	
	  File name     Version    Date/Time        Size     Destination folder
	  ---------------------------------------------------------------------
	  Wsock32.dll   4.00.1111  8/24/96 11:11a   66,560   Windows\System
	  winsock.dll   4.00.1111  8/24/96 11:11a   42,368   Windows
	
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to these components,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q157944 Domain Name Service in DUN Connection Does Not Work
	
	  Q157930 Multiple DNS Server Addresses Not Assigned Properly with DHCP
	
	Additional query words: w95cnfaq
	
	======================================================================
	Keywords          : kbfile kbnetwork kbtool osr1 win95 kbAPI kbSDKPlatform kbWinsock 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : :1.0
	
	=============================================================================
	
