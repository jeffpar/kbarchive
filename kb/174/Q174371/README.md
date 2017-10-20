---
layout: page
title: "Q174371: Possible Database File Damage When Data Is Appended"
permalink: /kb/174/Q174371/
---

## Q174371: Possible Database File Damage When Data Is Appended

{% raw %}

	Article: Q174371
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbfile kbnetwork osr2 win95 kbgraphxlinkcriticalkbfixlist
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Database programs running in Windows 95 OEM Service Release 2 (OSR2) or 2.1 (OSR
	2.1) over a Microsoft network may damage the database.
	
	CAUSE
	=====
	
	When a program uses the GetFileSize() API to get the size of an existing file on
	a Microsoft networking server (such as a Windows NT-based server), the Client
	for Microsoft Networks may not return the correct file size. When the program
	then attempts to write additional information to the end of the file, it may
	overwrite existing data instead.
	
	This problem has been observed only with the version of the Client for Microsoft
	Networks (Vredir.vxd) included with OSR2 (version 4.00.1111) and later.
	
	STATUS
	======
	
	This issue is resolved by the following updated file for Windows 95 OSR2:
	
	  Vredir.vxd version 4.00.1116 (dated 9/11/97) and later
	
	To install this update, follow these steps:
	
	1. Download the following file from the Microsoft Download Center:
	
	  DownloadDownload Vredrupd.exe now
	  (ftp://ftp.microsoft.com/softlib/mslfiles/vrdrupd.exe)
	
	2. Double-click the Vredrupd.exe file that you downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following files are installed by Vrdrupd.exe:
	
	  File name     Version    Date/Time        Size     Destination folder
	  ---------------------------------------------------------------------
	  Vredir.vxd    4.00.1116  9/11/97 11:16a   156,773  Windows\System
	  Vnetsup.vxd   4.00.1112  5/30/97 11:12a    17,595  Windows\System
	
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q172594 Cannot Connect to Server with 15 Characters and Period in Name
	
	  Q165402 Windows 95 Update to Encrypt Passwords in Memory
	
	  Q161100 File May Be Truncated When Copied to a Full Network Drive
	
	  Q157114 "Access Denied" Attempting to Run File on LM/X Server
	
	  Q152186 Possible Network Data Corruption If Locking Not Used
	
	  Q148367 Possible Network File Corruption with Redirector Caching
	
	  Q142803 Hang or Locking Error Accessing Database Files Over Network
	
	  Q140558 Deleting Files on Samba Servers May Delete Local Files Instead
	
	  Q138249 Updated Vredir.vxd Corrects Errors Running Files on LMX
	
	  Q160807 Cannot Connect to Windows NT Server with Many Shares
	
	  Q150215 Disabling Automatic Network Shortcut Resolution
	
	  Q138014 File May Be Truncated to Zero Bytes When Copied Onto Itself
	
	  Q136834 Error Copying Read-Only Files to Core SMB Server
	
	Additional query words: corrupt
	
	======================================================================
	Keywords          : kbfile kbnetwork osr2 win95 kbgraphxlinkcritical kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
