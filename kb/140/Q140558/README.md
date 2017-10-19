---
layout: page
title: "Q140558: Deleting Files on Samba Servers May Delete Local Files Instead"
permalink: /kb/140/Q140558/
---

## Q140558: Deleting Files on Samba Servers May Delete Local Files Instead

	Article: Q140558
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kbfile dun 3rdpartynet msnets win95 kbgraphxlinkcritical kb3rdPartyNetClient
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Client for Microsoft Networks (Vredir.vxd) to connect
	to a Samba file server running on a UNIX-based computer and you try to delete
	files on the server, you may delete files on your Windows 95-based computer
	instead.
	
	CAUSE
	=====
	
	This behavior occurs because Samba file servers let you create file names with
	characters that are invalid in Windows 95. These invalid characters include the
	following characters:
	
	- backslash (\)
	
	- asterisk (*)
	
	- question mark (?)
	
	For example, Samba file servers let you create file names such as "c:\*.*"
	(without the quotation marks) or "\\server\share\*.*" (without the quotation
	marks). If a UNIX user creates a file called "c:\*.*" and shares it, a Windows
	95 user who connects to the server and tries to delete the file with Windows
	Explorer or My Computer may delete all the files in the root directory of local
	drive C instead.
	
	NOTE: You are not affected by this problem if any of the following conditions are
	true:
	
	- You are not connected to a local area network.
	
	- You do not use a dial-up application (such as Dial-Up Networking) to dial
	  into a local area network.
	
	- You are connected to a local area network, but you do not connect to Samba
	  file servers running on UNIX-based computers.
	
	- You connect to Samba file servers running on UNIX-based computers but you
	  delete only files you created with Windows Explorer or My Computer.
	
	RESOLUTION
	==========
	
	Although this is not a problem with Windows 95, Microsoft has released a new
	version of the Vredir.vxd file (version 4.00.955) that filters out files that
	have file names with invalid characters. When you use the updated version of the
	Vredir.vxd file, you cannot see these files and cannot, therefore, try to delete
	them.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Vredrupd.exe now
	  (http://download.microsoft.com/download/win95upg/vredir/1/W95/EN-US/vredrupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	Note that Microsoft has also released this update as part of Microsoft Windows 95
	Service Pack 1. For information about Microsoft Windows 95 Service Pack 1,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	Additional query words: smbclient servicepack1
	
	======================================================================
	Keywords          : kbfile dun 3rdpartynet msnets win95 kbgraphxlinkcritical kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	
