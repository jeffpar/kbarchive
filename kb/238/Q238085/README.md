---
layout: page
title: "Q238085: INFO: Windows 2000 Does Not Install MAPI 1.0 Subsystem"
permalink: /kb/238/Q238085/
---

## Q238085: INFO: Windows 2000 Does Not Install MAPI 1.0 Subsystem

	Article: Q238085
	Product(s): Microsoft Windows NT
	Version(s): 1.0,2000
	Operating System(s): 
	Keyword(s): kbCDO kbMAPI kbOSWin2000 kbDSupport
	Last Modified: 28-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows 2000 installation does not install a Messaging Application
	Interface (MAPI) 1.0-based subsystem. There is also no direct way to install a
	MAPI 1.0 -based subsystem as an optional component using the operating system
	installation CD-ROM.
	
	MORE INFORMATION
	================
	
	Applications written to the MAPI 1.0 specification may work correctly on Windows
	2000 only if the MAPI 1.0 subsystem is completely and correctly installed.
	Currently, there are two supported methods to correctly install the MAPI 1.0
	subsystem produced by Microsoft. You can either:
	
	- Upgrade from Microsoft Windows NT 4.0 (Workstation or Server) with MAPI 1.0
	  already installed.
	
	or
	
	- Install an application that contains a MAPI 1.0-based subsystem, such as
	  Microsoft Exchange Client or Microsoft Outlook.
	
	The following messaging technologies rely on the presence of an e-mail subsystem
	based on the MAPI 1.0 specification:
	
	- Collaboration Data Objects
	
	- Active Messaging
	
	- OLE Messaging
	
	- MAPI
	
	Applications that use these technologies may not work correctly unless one of the
	installation options described previously has been correctly performed.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q254458 Windows 2000 Support for Windows Messaging
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCDO kbMAPI kbOSWin2000 kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :1.0,2000
	Issue type        : kbinfo
	
	=============================================================================
	
