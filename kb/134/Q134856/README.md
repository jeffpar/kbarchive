---
layout: page
title: "Q134856: Failed Install During Domain Name Change Forces Re-Installation"
permalink: kb/134/Q134856/
---

## Q134856: Failed Install During Domain Name Change Forces Re-Installation

	Article: Q134856
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Windows NT as a Backup Domain Controller (BDC), if the Primary
	Domain Controller (PDC) cannot be found, you have 2 options:
	
	- Make your computer a PDC on a different domain
	
	  -or-
	
	- Cancel the installation process
	
	If you cancel the installation process and attempt to run the partially installed
	version of Windows NT, this error message appears:
	
	  Please run SETUP again
	
	When you run Setup again, to upgrade the failed installation, the following
	installation options are unavailable:
	
	- Choice for password entry
	
	- Video option
	
	- Emergency Repair Disk creation option
	
	When you reboot Windows NT, the login screen shows WORKGROUP as the Domain Name.
	When you attempt to log in as Administrator with no password, the following
	error message appears:
	
	  The local policy of this system does not allow you to logon interactively.
	
	You cannot access Windows NT.
	
	RESOLUTION
	==========
	
	You must completely re-install Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
