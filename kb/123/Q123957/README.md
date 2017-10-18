---
layout: page
title: "Q123957: Error Updating PowerPoint 4.0 File Using CSNW/GSNW"
permalink: kb/123/Q123957/
---

## Q123957: Error Updating PowerPoint 4.0 File Using CSNW/GSNW

	Article: Q123957
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create and save a PowerPoint version 4.0 file to a NetWare server
	using the Client Services for NetWare (CSNW) or Gateway Services for NetWare
	(GSNW), you may receive the following error message when you attempt to save
	changes to the file:
	
	  x:\<filename>.ppt
	  Sorry, the file or directory is write-protected.
	
	CAUSE
	=====
	
	This problem occurs when your system is using the new NetWare redirector
	(NWRDR.SYS) shipped with Windows NT version 3.5.
	
	WORKAROUND
	==========
	
	To work around the problem:
	
	1. Copy the file from the NetWare server to your computer and save changes to
	  the PowerPoint file.
	
	2. Remove or rename the same file on the NetWare server and copy the updated
	  PowerPoint file to the NetWare server.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT version
	3.5. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt Novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
