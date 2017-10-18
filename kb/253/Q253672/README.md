---
layout: page
title: "Q253672: Expected System and Group Policy Behavior in Windows 2000 Client"
permalink: kb/253/Q253672/
---

## Q253672: Expected System and Group Policy Behavior in Windows 2000 Client

	Article: Q253672
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the expected behavior of System Policies in Microsoft
	Windows NT 4.0 and Group Policies in Windows 2000 in a domain. The focus of this
	article is on the default behavior of a Windows 2000 client in different domain
	configurations.
	
	MORE INFORMATION
	================
	
	In general, a Group Policy is dependent on the source location for the machine
	or user account. For example, if you apply a computer Group Policy and the
	machine account resides in an Windows NT 4.0 domain, Windows 2000 uses the
	Ntconfig.pol file for the policy. If the computer is a member of a Windows 2000
	domain, the Group Policy is applied and the Ntconfig.pol file is not processed.
	This scenario is also true when you process user Group Policies.
	
	Below is a matrix of the possible policy scenarios a Windows 2000 client may
	encounter. We use the following acronyms for the objects:
	
	- UAO: User Account Object
	- MAO: Machine Account Object
	- GPO: Group Policy Object (unique to Windows 2000
	- SP: System Policy (Windows NT 4.0 .pol files)
	
	NOTE: Each scenario assumes that the workstation or server client is running
	Windows 2000.
	
	The UAO and MAO Both Reside in a Windows 2000 Domain
	----------------------------------------------------
	
	- UAO applies the GPO.
	- MAO applies the GPO.
	
	The UAO Resides in a Windows 2000 Domain and the MAO Resides in a Windows NT 4.0 Domain
	---------------------------------------------------------------------------------------
	
	- UAO applies the GPO.
	- MAO applies the SP.
	
	The UAO Resides in a Windows NT 4.0 Domain and the MAO Resides in a Windows 2000 Domain
	---------------------------------------------------------------------------------------
	
	- UAO applies the SP.
	- MAO applies the GPO. (Windows 2000 loopback is not available in this
	  scenario.)
	
	The UAO and MAO Both Reside in a Windows NT 4.0 Domain
	------------------------------------------------------
	
	- UAO applies the SP.
	- MAO applies the SP.
	
	REFERENCES
	==========
	
	For additional information about loopback processing, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q231287 Loopback Processing of Group Policy
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch kbWinDataServSearch
	Version           : WINDOWS:2000
	Issue type        : kbinfo
	
	=============================================================================
	
