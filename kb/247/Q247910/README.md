---
layout: page
title: "Q247910: Windows 95/98/Me RAS Client Cannot Log On to the Domain"
permalink: kb/247/Q247910/
---

## Q247910: Windows 95/98/Me RAS Client Cannot Log On to the Domain

	Article: Q247910
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use a client running Microsoft Windows 95, Windows 98, Windows
	Millennium Edition (Me) to connect to a Microsoft Windows NT Server 4.0-based
	domain through Remote Access Server (RAS), you may receive the following error
	message:
	
	  No domain server was available to validate your password, you may not be able
	  to access all resources on the domain
	
	CAUSE
	=====
	
	This behavior can occur when the primary domain controller (PDC) is not
	registered with the Windows Internet Name Service (WINS) server. If the 1bh
	(domain master browser) entry is not registered in WINS, remote clients cannot
	log on or obtain the browse list for the domain.
	
	RESOLUTION
	==========
	
	To resolve this behavior, make sure that the correct Internet Protocol (IP)
	addresses for the WINS servers are specified in the Transmission Control
	Protocol/Internet Protocol (TCP/IP) properties of the RAS server. Reregister the
	PDC in WINS.
	
	MORE INFORMATION
	================
	
	By default, dial-up clients use the WINS and Domain Name Service (DNS) servers
	defined in the TCP/IP configuration of the RAS server.
	
	To reregister the PDC in WINS, make sure the correct IP addresses of the WINS
	servers are specified in the TCP/IP properties on the PDC computer. Then, stop
	and restart the Netlogon service on the PDC computer.
	
	NOTE: This reregisters the 1bh (domain master browser) and 1ch (domain
	controller) entries for the PDC in WINS.
	
	You can also statically register the PDC in WINS by including the 1bh and 1ch
	entries in an Lmhosts file and importing the Lmhosts file into WINS.
	
	For additional information using an Lmhosts file, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q180094 How to Write an LMHOSTS File for Domain Validation
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinMEsearch kbWin95search kbWin98search kbZNotKeyword3 kbWin98 kbWinME
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
