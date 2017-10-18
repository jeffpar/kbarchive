---
layout: page
title: "Q249820: TP May Start Slowly When Using Dynamic Remote APPC LU Definition"
permalink: kb/249/Q249820/
---

## Q249820: TP May Start Slowly When Using Dynamic Remote APPC LU Definition

	Article: Q249820
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	An APPC application may experience a slow response time when it is configured to
	use an SNA subdomain with multiple SNA Server computers if the Supports Dynamic
	Remote APPC LU Definition option is enabled on several computers.
	
	CAUSE
	=====
	
	If an APPC application specifies a Local LU Alias when calling TP_STARTED, the
	APPC interface incorrectly tries SNA Server computers that are configured to
	support dynamic remote APPC LU definition, even if those computers do not
	support the Local LU Alias being requested. Because additional time is spent
	connecting to those other servers, the opening of the application may be
	delayed.
	
	
	WORKAROUND
	==========
	
	To work around this issue, try one of the following:
	
	If you are not using Supports Dynamic Remote APPC LU Definition, disable it by
	clicking to uncheck the Supports Dynamic Remote APPC LU Definition check box on
	the SNA Server computer(s).
	
	-OR-
	
	Configure the LUWIDSUP=NO registry entry on the computer where the APPC program
	is running.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	On SNA Windows NT clients:
	
	  HKLM\System\CurrentControlSet\Services\SnaBase\Parameters\Client
	  LUWIDSUP:REG_SZ:NO
	
	On SNA Windows 95 clients:
	
	  HKLM\Software\Microsoft\SnaBase\Parameters\Client
	  LUWIDSUP:REG_SZ:NO
	
	Setting this registry entry to NO defers resource allocation until an
	[MC_]ALLOCATE is issued. This causes WAPPC32 to issue the GetServerList with the
	Remote APPC LU alias only, and not the local. Therefore, the resource allocation
	proceeds correctly.
	
	STATUS
	======
	
	A supported feature that modifies the product's default behavior is now
	available from Microsoft, but it is only intended to modify the behavior
	described in this article and should be applied only to systems having a
	specific need for it. This feature may receive additional testing at a later
	time, to further ensure product quality. Therefore, if you are not severely
	affected by the lack of this feature, Microsoft recommends that you wait for the
	next Microsoft SNA server version 4.0 service pack that contains this feature.
	
	To obtain this feature immediately, contact Microsoft Product Support Services.
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this feature should have the following file attributes or
	later:
	
	+---------------------------------+
	| SNABASE.EXE | 01/24/00 | 08:09p | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	NOTE: This hotfix is for the SNA Server. This update does not have to be applied
	to the SNA clients.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
