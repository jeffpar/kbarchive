---
layout: page
title: "Q162576: FPNW Clients Do Not Receive Printing Notification"
permalink: kb/162/Q162576/
---

## Q162576: FPNW Clients Do Not Receive Printing Notification

	Article: Q162576
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft File and Print Services for NetWare version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A NetWare-compatible client receives no notification that its print job has
	printed, even though the /NOTIFY option has been specified with the CAPTURE
	utility. Print job notification may be sent to a Microsoft- compatible client of
	the same name that is attached to the Windows NT Server.
	
	CAUSE
	=====
	
	The printer defined on the File and Print Services for NetWare (FPNW) server is
	not configured through FPNW's print server option or else is a locally attached
	printer. FPNW will only notify users of printed jobs if the printer is defined
	as a NetWare-compatible print server.
	
	WORKAROUND
	==========
	
	Configure the printer to operate as a NetWare-compatible print server, if
	possible. For more information on configuring FPNW print servers, see the FPNW
	Administrator's Guide.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q140467
	  TITLE : How to Set Up Printers on FPNW to Service Pserver.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sfnw
	
	======================================================================
	Keywords          : kbnetwork kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbServicesNetwareSearch kbFPNW400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
