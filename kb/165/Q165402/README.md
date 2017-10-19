---
layout: page
title: "Q165402: Windows 95 Update to Encrypt Passwords in Memory"
permalink: /kb/165/Q165402/
---

## Q165402: Windows 95 Update to Encrypt Passwords in Memory

	Article: Q165402
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbfile kbnetwork win95 kbgraphxlinkcriticalkbfixlist
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a computer running Windows 95 is left unattended while a user is logged on to
	a network, it may be possible to obtain that user's network password by a
	programmatic examination of the computer's memory. Typically, accomplishing this
	would require physical access to the computer. However, the network password
	could also potentially be acquired if a program designed to search for passwords
	using the same examination of memory were to be downloaded and run by a
	currently logged-on user.
	
	CAUSE
	=====
	
	In Windows 95, passwords are encrypted before being sent over the network.
	However, the network password for the user who is currently logged on to the
	Windows 95-based computer is stored temporarily in memory in an unencrypted
	format.
	
	Using detailed knowledge of Windows 95 internal memory structures, it may be
	possible to write a program that runs in Windows 95 and reads the password for
	the currently logged-on user from memory.
	
	RESOLUTION
	==========
	
	Microsoft recommends the following precautions to prevent the current user's
	network password from being accessed by unauthorized means:
	
	- Log off the computer when you leave it for long periods of time.
	
	- Run a password-protected screen saver when you leave the computer for short
	  periods of time.
	
	- Do not run untrusted programs on the network, the Web, or that have been sent
	  in e-mail.
	
	- Install the update described in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and OEM
	Service Release 2 (OSR2). An update to address this problem is now available.
	
	This issue is resolved by the following updated files:
	
	- For Windows 95 (all releases):
	
	Mprserv.dll version 4.00.955 (dated 6/12/97) and later
	Nwnet32.dll version 4.00.951 (dated 4/21/97) and later
	Nwredir.vxd version 4.00.960 (dated 4/21/97) and later
	Pppmac.vxd version 4.00.954 (dated 4/28/97) and later
	Vredir.vxd version 4.00.1114 (dated 6/2/97) and later
	Vnetsup.vxd version 4.00.1112 (dated 6/2/97) and later
	
	- For Windows 95 (retail release) and OEM Service Release 1 (OSR1) only:
	
	Rasapi32.dll version 4.00.954 (dated 4/25/97) and later
	
	- For Windows 95 OSR2 and OSR2.1 only:
	
	Rasapi32.dll version 4.00.1113 (dated 4/25/97) and later
	
	- For the Microsoft Service for NetWare Directory Services [MSNDS] (all Windows
	  95 releases):
	
	Nwredir.vxd version 4.00.975 (dated 4/21/97) and later
	
	To install this update, follow these steps:
	
	1. Download the appropriate update file(s) to an empty folder.
	
	  a. If you are running Windows 95 retail release (version 4.00.950) or OSR1
	     (version 4.00.950 A), download the Secupd.exe file.
	
	  b. If you are running Windows 95 OEM Service Release 2 or 2.1 (version
	     4.00.950 B), download the Secupd2.exe file.
	
	  c. If you are running the Microsoft Client for NetWare Networks with the
	     Microsoft Service for NetWare Directory Services (MSNDS) installed, also
	     download the Nwredup4.exe file.
	
	2. In My Computer or Windows Explorer, double-click the update file(s) you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Download Secupd.exe now
	
	  Download Secupd2.exe now
	
	  Download Nwredup4.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	This problem was corrected in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	These components have been updated to encrypt the current user's network
	password even when it is stored in memory so that it cannot be read even by a
	programmer with detailed knowledge of Windows 95 internal memory structures.
	
	For additional information about Windows 95 security, see Chapter 14 ("Security")
	in the Windows 95 Resource Kit.
	
	The following files are installed by Secupd.exe:
	
	  File name     Version    Date/Time        Size     Destination folder
	  ---------------------------------------------------------------------
	  Mprserv.dll   4.00.955   6/12/97  9:54a   127,488  Windows\System
	  Nwnet32.dll   4.00.951   4/21/97  9:51a    22,016  Windows\System
	  Nwredir.vxd   4.00.960   4/21/97 10:00a   123,987  Windows\System
	  Pppmac.vxd    4.00.954   4/28/97  9:54a   135,288  Windows\System
	  Vredir.vxd    4.00.1114  6/2/97 11:14a    156,773  Windows\System
	  Vnetsup.vxd   4.00.1112  6/2/97 11:12a     17,595  Windows\System
	  Rasapi32.dll  4.00.954   4/25/97  9:54a   151,552  Windows\System
	
	
	The following files are installed by Secupd2.exe:
	
	  File name     Version    Date/Time        Size     Destination folder
	  ---------------------------------------------------------------------
	  Mprserv.dll   4.00.955   6/12/97  9:54a   127,488  Windows\System
	  Nwnet32.dll   4.00.951   4/21/97  9:51a    22,016  Windows\System
	  Nwredir.vxd   4.00.960   4/21/97 10:00a   123,987  Windows\System
	  Pppmac.vxd    4.00.954   4/28/97  9:54a   135,288  Windows\System
	  Vredir.vxd    4.00.1114  6/2/97 11:14a    156,773  Windows\System
	  Vnetsup.vxd   4.00.1112  6/2/97 11:12a     17,595  Windows\System
	  Rasapi32.dll  4.00.1113  4/25/97 11:13a   175,104  Windows\System
	
	
	The following files are installed by Nwredup4.exe:
	
	  File name     Version    Date/Time        Size     Destination folder
	  ---------------------------------------------------------------------
	  Nwredir.vxd   4.00.975   4/21/97 10:15a   178,714  Windows\System
	
	
	For additional information about issues resolved by updates to these components,
	please see the following articles in the Microsoft Knowledge Base:
	
	Vredir.vxd:
	
	  Q165403 Windows 95 Update Prevents Sending Clear-Text Password Over Net
	
	  Q161100 File May Be Truncated When Copied to a Full Network Drive
	
	  Q157114 "Access Denied" Attempting to Run File on LM/X Server
	
	  Q148367 Possible Network File Corruption with Redirector Caching
	
	  Q142803 Updated Vredir.vxd Corrects Problems Accessing Database Files
	
	  Q140558 Deleting Files on Samba Servers May Delete Local Files Instead
	
	  Q138249 Updated Vredir.vxd Corrects Errors Running Files on LMX
	
	  Q160807 Cannot Connect to Windows NT Server with Many Shares
	
	  Q150215 Disabling Automatic Network Shortcut Resolution
	
	  Q138014 File May Be Truncated to Zero Bytes When Copied Onto Itself
	
	  Q136834 Error Copying Read-Only Files to Core SMB Server
	
	Nwredir.vxd:
	
	  Q136303 Connecting to Schedule+ 1.0 Calendar File Drops Connections
	
	Rasapi32.dll/Pppmac.vxd:nect to Remote Access Server with Dial-Up
	
	  Q149396 Cannot Change Expired Windows NT Password with DUN
	
	  Q154434 Err Msg: No Domain Controller Was Available to Validate...
	
	
	Additional query words: security
	
	======================================================================
	Keywords          : kbfile kbnetwork win95 kbgraphxlinkcritical kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
