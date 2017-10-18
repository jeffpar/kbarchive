---
layout: page
title: "Q252778: SNA Win9x Host Account Manager Unable to Locate MDB Domain"
permalink: kb/252/Q252778/
---

## Q252778: SNA Win9x Host Account Manager Unable to Locate MDB Domain

	Article: Q252778
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If Host Account Manager (UDConfig.exe) was installed using the SNA Windows 95 or
	Windows 98 client on either a Windows NT Workstation or computer running Windows
	95 or Windows 98, the following error may appear after running this
	configuration tool.
	
	  Unable to locate Windows NT Account Synchronization Service in the target
	  Windows NT domain. To browse other domains, use the "Select Domain" option of
	  the "File" menu.
	
	CAUSE
	=====
	
	When Host Account Manager is initially installed, you are asked for the Windows
	NT Domain Name that contains the master database (MDB) where the Host Account
	Cache (HAC) resides. If the domain name was inadvertently misspelled or the
	wrong domain name was used (where no HAC is installed), end users would receive
	this message after running Host Account Manager.
	
	RESOLUTION
	==========
	
	The MdbDomain Registry value must be edited to indicate the correct Windows NT
	domain name. This value allows the client to find where the MDB cache is
	stored.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To edit the Registry value:
	
	1. Start Registry Editor (Regedit.exe).
	
	2. Locate the MdbDomain value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SNA Server\CurrentVersion\HostSecurity\STI\Client
	
	  NOTE: This Registry key is one path; it may appear wrapped for readability.
	
	3. On the Edit menu, click modify. In the Value data field, type the correct
	  Windows NT domain name and click ok.
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	Host Account Manager is a configuration tool that gives an end user the ability
	to add or change his or her own cached entries (user ID and/or password) in a
	host security domain.
	
	The problem described in this article only occurs where the Microsoft SNA Windows
	95 or Windows 98 Host Account Manager client is installed on a Windows NT
	Workstation or computer running Windows 95 or Windows 98.
	
	If you install the Microsoft SNA Windows NT Host Account Manager client on a
	Windows NT Workstation, you are never prompted for the dialog box asking for the
	location of the Windows NT domain name where the MDB resides. Instead, the SNA
	Windows NT client knows where to get the MDB just by knowing what Windows NT
	domain you are logged on to. In addition to this, there will be no Registry
	entry if the SNA Windows NT Host Account Manager client is installed on a
	Windows NT Workstation computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
