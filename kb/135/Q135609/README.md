---
layout: page
title: "Q135609: WINS Fails on RAS Server with Multiport Adapter Installed"
permalink: /kb/135/Q135609/
---

## Q135609: WINS Fails on RAS Server with Multiport Adapter Installed

	Article: Q135609
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Windows Internet Name Service (WINS) service is installed on a Remote
	Access (RAS) server that has a multiport adapter, such as a Digiboard or a
	Chiliports, it usually fails to start.
	
	The event log contains multiple WINS errors. There is no pattern to the errors in
	the event log, but they are usually related to the WINS service failing to
	start. The WINS service may run correctly until a seventh modem is added to the
	server. At this point, the WINS service fail. If six or fewer modems are used,
	the WINS service seems to function normally, but may still fail.
	
	Errors in the system log may include:
	
	  Event ID: 4146
	
	  WINS error 33 processes cannot access file because another process has locked
	  the file
	
	  7023: THE WINDOWS INTERNET NAME SERVICE TERMINATED WITH THE FOLLOWING ERROR:
	  (No error information is given in the message.)
	
	In all cases, the WINS service does not start.
	
	CAUSE
	=====
	
	The failure occurs because WINS does not allocate enough storage while reading
	the registry value for the Export key under Linkage for NetBT.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Use six or fewer modems on the RAS/WINS server.
	
	  -or-
	
	- Separate the RAS and WINS services (move the WINS service to a separate
	  computer).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.50 and
	3.51.
	
	
	A supported fix is now available, but is not fully regression- tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the service pack release containing this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: prodnt Wins Error 0033
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
