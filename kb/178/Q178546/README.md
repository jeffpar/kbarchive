---
layout: page
title: "Q178546: CSNW Does Not Display Directory Name with Extended Characters"
permalink: kb/178/Q178546/
---

## Q178546: CSNW Does Not Display Directory Name with Extended Characters

	Article: Q178546
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft File and Print Services for NetWare version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Client Services for NetWare (CSNW) client using Windows NT Explorer
	double-clicks a directory containing Russian characters on a File and Print
	Services for NetWare (FPNW) server, an error message is displayed:
	
	  The folder xxx is not available, folder has been moved or has been
	  deleted.
	
	All files and directories below this directory are not accessible.
	
	CAUSE
	=====
	
	After you receive a directory listing from a FPNW server and in the process of
	accessing one of these directories by double-clicking it, CSNW converts a
	Unicode string to an OEM string for NetWare compatibility reasons. During this
	conversion, the directory name with Russian characters was incorrectly changed
	into uppercase. Therefore, the client tried to access a directory containing
	only uppercase characters on the FPNW server. Because this directory does not
	exist on the FPNW server, the above error was displayed.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbServicesNetwareSearch kbFPNW400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
