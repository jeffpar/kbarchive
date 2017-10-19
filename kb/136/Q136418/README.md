---
layout: page
title: "Q136418: Updated Vserver.386 File for Windows for Workgroups"
permalink: /kb/136/Q136418/
---

## Q136418: Updated Vserver.386 File for Windows for Workgroups

	Article: Q136418
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile 3rdpartynet msnets kbgraphxlinkcritical kb3rdPartyNetClient
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you share a folder on a Windows for Workgroups 3.11-based computer, users
	on UNIX-based computers running the SMBCLIENT Samba network client who connect
	to the shared folder may have access to the entire drive on which the shared
	folder is located.
	
	CAUSE
	=====
	
	This problem can occur when all of the following conditions exist:
	
	- You use the Vserver.386 file included with Windows for Workgroups 3.11.
	
	- You use the TCP/IP network protocol.
	
	- There are UNIX-based computers on the network.
	
	
	RESOLUTION
	==========
	
	To resolve this problem in Windows for Workgroups 3.11, follow these steps:
	
	1. Download the Wfwvsrvr.exe file from one of the online services listed below
	  to an empty directory.
	
	2. In File Manager, double-click the Wfwvsrvr.exe file to expand the Vserver.386
	  file it contains.
	
	3. Quit Windows for Workgroups.
	
	4. Copy the new Vserver.386 file to the Windows\System directory, overwriting
	  the existing version of the file.
	
	5. Restart your computer.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Wfwvsrvr.exe now
	  (http://download.microsoft.com/download/wfw311/NetFile/1/WFW/EN-US/wfwvsrvr.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: 3.11 msnWFWmisc
	
	======================================================================
	Keywords          : kbfile 3rdpartynet msnets kbgraphxlinkcritical kb3rdPartyNetClient 
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : :
	
	=============================================================================
	
