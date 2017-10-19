---
layout: page
title: "Q255233: Windows NT 4.0 Enterprise Edition Domain Controllers May Hang"
permalink: /kb/255/Q255233/
---

## Q255233: Windows NT 4.0 Enterprise Edition Domain Controllers May Hang

	Article: Q255233
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Microsoft Windows NT 4.0 Enterprise Edition-based domain controllers may
	stop responding (hang) intermittently.
	
	CAUSE
	=====
	
	This behavior can occur when you upgrade from a beta version of the operating
	system but the beta versions of Mfc42.dll and Ntlgdsca.exe still remain in the
	Smslogon\I386 folder.
	
	RESOLUTION
	==========
	
	To resolve this behavior, replace Mfc42.dll and Ntlgdsca.exe with the final
	version of those files, from the Windows NT Server 4.0 Enterprise Edition
	CD-ROM. Then either disable and re-enable Logon Discovery to replicate the
	changes out to all Logon Points, or manually copy the files to each Logon Point
	(which requires manually stopping the service on each Logon Point).
	
	MORE INFORMATION
	================
	
	The Smslogon\I386 folder appears only when Logon Discovery is enabled. The
	folder does not appear if the Windows NT 4.0 client installation option is
	enabled.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
