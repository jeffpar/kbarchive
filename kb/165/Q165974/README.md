---
layout: page
title: "Q165974: PRB: Cannot Install CSNW with &quot;Attended=Yes&quot; in Unattend.txt Fil"
permalink: kb/165/Q165974/
---

## Q165974: PRB: Cannot Install CSNW with &quot;Attended=Yes&quot; in Unattend.txt Fil

	Article: Q165974
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbOPK kbSBK
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot install Client Services for NetWare (CSNW) during an unattended Setup
	with "Attended=Yes" in the [Network] section of the Unattend.txt file.
	
	CAUSE
	=====
	
	Installation of CSNW during an unattended Setup requires the InstallServices
	entry in the [Network] section of the Unattend.txt file. When you add the
	"Attended=Yes" line to install network components interactively, Setup ignores
	all entries in the [Network] section. The Setup Wizard for installing the
	network components that is started at this time does not prompt you to install
	additional services.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here In the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Windows NT Workstation 4.0 unattended Setup runs a Typical Setup. Network
	options are available only during a Custom Setup. At this time there are no
	settings to force Setup to perform a Custom Setup.
	
	For additional information, see the following article in the Microsoft Knowledge
	Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	Additional query words: Unattended Setup Install
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
