---
layout: page
title: "Q154434: Err Msg: No Domain Server Was Available to Validate..."
permalink: /kb/154/Q154434/
---

## Q154434: Err Msg: No Domain Server Was Available to Validate...

	Article: Q154434
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbfile kbnetwork dun win95 kbgraphxlinkcritical kbDialUp
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Dial-Up Networking in Windows 95 to dial into a remote network, you
	may receive the following error message when the remote Microsoft Windows NT
	server attempts to validate you:
	
	  No domain server was available to validate your logon.
	
	After you receive this error message, the dial-up client may still be attached to
	the network (but without authentication) and may have access to some resources
	on the domain. In some cases, connectivity is not established at all.
	
	CAUSE
	=====
	
	This error message occurs when the TCP/IP protocol (specifically, Vnbt.386) is
	not completely bound to the redirector (Vredir) before the logon request occurs.
	The DOMAINNAME<1ch> name query request is never sent to the WINS server;
	therefore, the Windows 95 client never finds a domain controller that can
	validate its logon.
	
	The DOMAINNAME<1ch> request is normally sent by a TCP/IP client to locate
	domain controllers on the network for the purpose of logging on to the domain.
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated file for Windows 95 and OEM
	Service Release 1 (OSR1):
	
	RASAPI32.DLL version 4.0.953 (7/9/96) and later
	
	This file is included in the self-extracting RASUPD.EXE file.
	
	This issue is resolved by the following updated file for Windows 95 OEM Service
	Release 2 (OSR2) and 2.1:
	
	RASAPI32.DLL version 4.0.1112 (3/3/97) and later
	
	This file is included in the self-extracting RAS2UPD.EXE file.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Rasupd.exe now
	  (http://download.microsoft.com/download/win95/update/4.0.953/w95/en-us/rasupd.exe)
	
	  DownloadDownload Ras2upd.exe now
	  (http://download.microsoft.com/download/win95/update/4.0.1112/w95/en-us/ras2upd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	STATUS
	======
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	This issue is also discussed in the following article in the Microsoft Knowledge
	Base:
	
	  Q150053 Erratic Domain Logon from Windows 95 Dial-Up Networking
	
	Additional query words: timeout
	
	======================================================================
	Keywords          : kberrmsg kbfile kbnetwork dun win95 kbgraphxlinkcritical kbDialUp 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	
