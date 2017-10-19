---
layout: page
title: "Q154102: SFM: Macintosh Client Cannot Connect to Windows NT Server"
permalink: /kb/154/Q154102/
---

## Q154102: SFM: Macintosh Client Cannot Connect to Windows NT Server

	Article: Q154102
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Server has a license logging service (LLS) that maintains a database
	of licensed users. When you exceed the number of available licenses, clients
	receive a warning dialog box. The warning message text is different depending on
	the client attempting to log on to the Windows NT server.
	
	MORE INFORMATION
	================
	
	A client, when using on of the following methods, may receive one of the
	following error messages when attempting to connect to a Windows NT server:
	
	When a Macintosh client connects to Windows NT server using the Apple Standard
	UAMS:
	
	  This file server will not allow any additional users to log on. Try
	  again later.
	
	When a Macintosh client connects to Windows NT server using Microsoft
	Authentication:
	
	  Server was unable to open another session.
	
	Additional licenses must be purchased to bring the server up to compliance with
	the license logging service. When new licenses have been purchased, open Control
	Panel, open Licensing, and increase the number of client licenses to the correct
	number you have purchased. When the Windows NT Server is installed from a
	not-for-resale (NFR) edition of Microsoft BackOffice, there is a limit on the
	total number of clients able to log on to the server. The following message will
	appear if the administrator attempts to go into the Control Panel and open
	Licensing.
	
	  Not Available in NFR (Not For Resale) Edition of BackOffice
	
	The administrator must choose OK in the dialog box that indicates compliance to
	the special agreement with the NFR product before the Licensing Manager will
	close. The NFR version is for demonstration only and is not to be used in
	production environments, and upgrading the NFR product to the full retail
	version is not supported.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	Q149522System Error 71 and License Manager
	
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
