---
layout: page
title: "Q295368: Windows Service Packs May Use Shared Folder Drive For Temp Files"
permalink: /kb/295/Q295368/
---

## Q295368: Windows Service Packs May Use Shared Folder Drive For Temp Files

	Article: Q295368
	Product(s): Microsoft SNA Server
	Version(s): 2000,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 4.0 or Windows 2000 service pack installation may appear to stop
	responding (hang) when the service pack is installed on an SNA Server or Host
	Integration Server 2000 system that is configured with an AS/400 Shared Folders
	drive. This only occurs if the AS/400 Shared Folder is configured as a permanent
	drive in SNA Manager.
	
	CAUSE
	=====
	
	The service pack installation copies its temporary files to the last drive that
	is recognized by Windows Explorer. If the AS/400 Shared Folder is marked as a
	permanent drive and is the last drive in Windows Explorer, the service pack may
	try to copy its temporary files to the AS/400 Shared Folder.
	
	
	WORKAROUND
	==========
	
	Stop the Shared Folders Gateway service (Sfgw.exe) prior to installing a Windows
	NT 4.0 or Windows 2000 service pack. This prevents the service pack installation
	from using the AS/400 Shared Folders drive, because it will not be available
	when the Shared Folders Gateway service is stopped.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbAudDeveloper kbSNAServSearch kbWinAdvServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :2000,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
