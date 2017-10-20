---
layout: page
title: "Q196019: Adding Windows NT 4.0 Computers to Domain Before Sysprep"
permalink: /kb/196/Q196019/
---

## Q196019: Adding Windows NT 4.0 Computers to Domain Before Sysprep

{% raw %}

	Article: Q196019
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the new System Preparation tool, Sysprep, it is now possible to use disk
	image duplication software such as Symantec's Norton Ghost, Altiris's
	RapiDeploy, and Micro House's ImageCast. The Sysprep tool changes the SID of the
	cloned Windows NT Workstation so that it is unique. Questions have come up as to
	whether computers that are to be cloned can be added to a Windows NT domain
	before the Sysprep tool is run.
	
	The focal point of this article is to discuss how SIDs are related to Sysprep and
	what precautions to take when using the Sysprep tool (that is, assigning local
	permissions, adding workstations to the domain, and so on).
	
	MORE INFORMATION
	================
	
	The Sysprep utility is used to change the SID of the cloned workstation so that
	it is unique in the domain. Only local workstation SIDs are affected by this
	tool. For this reason, it is important not to assign any local permissions on
	the workstation before running Sysprep.
	
	If local permissions are set prior to running Sysprep, they will not be valid
	when the local SID is changed after Sysprep is run. This is only true for local
	permissions. Domain permissions can be set for users prior to Sysprep running
	because these SIDs are stored on the domain controllers and will not be affected
	by the local SID that is being changed.
	
	It is also recommended to clone workstations while they are members of a
	workgroup rather than a domain. The reason for this has to do with machine
	account names and not necessarily SIDs. If a Sysprep source computer is created
	with a computer name, that same computer name will be duplicated when the
	computer is cloned. Windows NT domains use the machine account name to establish
	trust relationships between the domain controllers and the workstations. If
	computers are added to the domain prior to being cloned, the computer name will
	need to be changed after the clone procedure is complete for this workstation to
	be able to participate in the domain. For this reason, it is best to prepare the
	computer as a workgroup member and then perform the clone procedure. After the
	installation is verified as successful and Sysprep has been run, the workstation
	can be added to the domain with a unique machine account name.
	
	Sysprep can be combined with Netdom.exe, a powerful command-line utility from the
	Windows NT Server 4.0 Resource Kit, to script joining a domain, manage computer
	accounts for members and BDCs, reset secure channels, establish trust
	relationships, and manage resource domain computer accounts.
	
	For additional information about parameters for the Unattend.txt file, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q180546 Automating Updates to Local Groups on Member Servers
	
	  Q173529 Using Batch Files to Automate Networking Tasks
	
	REFERENCES
	==========
	
	For additional information about System Preparation tools and other deployment
	information, please see:
	
	  http://www.microsoft.com/ntworkstation/
	
	Additional query words: sysprep SID domain workgroup permission NTFS deploy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
