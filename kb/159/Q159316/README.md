---
layout: page
title: "Q159316: FPNW Event ID 2024 Generated When Using JetAdmin"
permalink: kb/159/Q159316/
---

## Q159316: FPNW Event ID 2024 Generated When Using JetAdmin

	Article: Q159316
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File and Print Services for NetWare (FPNW) logs many Event ID 2024s, after which
	no NetWare-compatible clients can access the FPNW server.
	
	  Event ID 2024, Source FPNWSrv:
	
	  The description for Event ID (2024) in Source (FPNWSrv) could not be found. It
	  contains the following insertion string(s): \Device\FPNWSrv,
	  <volumename>.
	
	-or-
	
	  The client at address below was not logged in and attempted to open
	  <volumename>.
	
	where <volumename> is a NetWare-compatible volume defined on the FPNW
	server.
	
	
	CAUSE
	=====
	
	This problem is caused when a computer running Windows 95, Windows NT
	Workstation, or Windows NT Server is also running JetAdmin to monitor the print
	queue on the network. The user who logged on to this station is attached to
	FPNW, but has not logged on.
	
	JetAdmin program periodically checks for a status file on the SYS volume
	(SYS:\LOGIN\HP_PRINT\JETSET.INI). If the client is not logged in to FPNW, NT
	will log the event when the client checks for the file.
	
	RESOLUTION
	==========
	
	Ensure that the user is logged on to the FPNW server or try to disable the HP
	software from checking for the status file.
	
	
	NOTE: JetDirect is no longer supported by HP. SDI (Simple Device Installation) is
	now used to install network printers. For more information on this, see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj05973
	
	  or
	
	  http://www.hp.com/cposupport/networking/support_doc/bpj06765.html
	
	HP recommends a new software admin package (TCP/IP / IPX/SPX based). For further
	information see:
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06723
	
	  or
	
	  http://www.hp.com/cgi-bin/cposupport/ccsearch/getdoc?doc=bpj06724
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch
	Version           : :3.51,4.0
	Issue type        : kbhowto
	Solution Type     : kbfix
	
	=============================================================================
	
