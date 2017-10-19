---
layout: page
title: "Q165403: Windows 95 Update Prevents Sending Clear-Text Password Over Net"
permalink: /kb/165/Q165403/
---

## Q165403: Windows 95 Update Prevents Sending Clear-Text Password Over Net

	Article: Q165403
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbnetwork osr1 osr2 win95 kbgraphxlinkcriticalkbfixlist
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using a program specifically designed for such a purpose, it may be possible to
	force a Windows 95-based computer running the Microsoft Client for Microsoft
	Networks to send a user's logon name and password across the network in a
	clear-text format, instead of the normal encrypted format. It may then be
	possible to intercept and read that password using such a program.
	
	
	CAUSE
	=====
	
	When a Windows 95-based computer running the Microsoft Client for Microsoft
	Networks (which uses the SMB file-sharing protocol) connects to an SMB server, a
	negotiation takes place to determine which dialect of the SMB protocol will be
	used for communication. Microsoft Networking clients and servers generally
	support the ability to use older SMB dialects to support interoperability with
	older products. Some of these older dialects do not support sending passwords
	over the network in an encrypted form. When such a dialect is negotiated,
	passwords are sent over the network in clear-text form.
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated files for Windows 95:
	
	  Vredir.vxd version 4.00.1114 (dated 6/2/97) and later
	  Vnetsup.vxd version 4.00.1112 (dated 6/2/97) and later
	
	To install this update, follow these steps:
	
	1. Download the Vrdrupd.exe file to an empty folder.
	
	2. In My Computer or Windows Explorer, double-click the Vrdrupd.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Vrdrupd.exe now
	  (ftp://ftp.microsoft.com/softlib/mslfiles/vrdrupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following files are installed by Vrdrupd.exe:
	
	  File name     Version    Date/Time        Size     Destination folder
	  ---------------------------------------------------------------------
	  Vredir.vxd    4.00.1114  6/2/97 11:14a    156,773  Windows\System
	  Vnetsup.vxd   4.00.1112  6/2/97 11:12a     17,595  Windows\System
	
	
	MORE INFORMATION
	================
	
	With this update installed, connecting to older SMB servers using the Client for
	Microsoft Networks is no longer possible, because these older servers do not
	support encryption of passwords sent over the network.
	
	The following SMB servers are known not to support password encryption over the
	network:
	
	- LAN Manager for UNIX (including Hewlett-Packard LM/X)
	
	- Samba (unless configured for Challenge/Response password encryption)
	
	
	For additional information about security in Microsoft products, see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	For additional information about this issue as it applies to Microsoft Windows NT
	4.0, see the following article in the Microsoft Knowledge Base:
	
	  Q166730 With Unencrypted Password SP3 Fails to Connect to SMB Server
	
	
	For additional information about issues resolved by updates to these components,
	see the following articles in the Microsoft Knowledge Base:
	
	  Q165402 Windows 95 Update to Encrypt Passwords in Memory
	
	  Q161100 File May Be Truncated When Copied to a Full Network Drive
	
	  Q157114 "Access Denied" Attempting to Run File on LM/X Server
	
	  Q152186 Possible Network Data Corruption If Locking Not Used
	
	  Q148367 Possible Network File Corruption with Redirector Caching
	
	  Q142803 Updated Vredir.vxd Corrects Problems Accessing Database Files
	
	  Q140558 Deleting Files on Samba Servers May Delete Local Files Instead
	
	  Q138249 Updated Vredir.vxd Corrects Errors Running Files on LMX
	
	  Q160807 Cannot Connect to Windows NT Server with Many Shares
	
	  Q150215 Disabling Automatic Network Shortcut Resolution
	
	  Q138014 File May Be Truncated to Zero Bytes When Copied Onto Itself
	
	  Q136834 Error Copying Read-Only Files to Core SMB Server
	
	Additional query words: hp
	
	======================================================================
	Keywords          : kbfile kbnetwork osr1 osr2 win95 kbgraphxlinkcritical kbfixlist
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :
	
	=============================================================================
	
