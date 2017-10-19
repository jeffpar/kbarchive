---
layout: page
title: "Q142721: Cannot Run Microsoft Access Using MSNDS"
permalink: /kb/142/Q142721/
---

## Q142721: Cannot Run Microsoft Access Using MSNDS

	Article: Q142721
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork 3rdpartynet win95 kb3rdPartyNetClientkbfixlist
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Access from a network installation on a NetWare 4.1
	server using the Microsoft Service for NetWare Directory Services (MSNDS), you
	may receive the following error message:
	
	  A system error occurred, or there isn't enough free memory to start Microsoft
	  Access. Close unneeded programs and try again.
	
	CAUSE
	=====
	
	You are running the Microsoft Access executable file (Msaccess.exe) from a
	mapped NetWare Directory Services drive.
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated file for Windows 95 and OSR2, as
	well as later versions of this file:
	
	  NWNP32.DLL  version 4.00.969  dated 12/20/95 10:09am  138,752 bytes
	
	NOTE: This file is named Nwnp32.nw4 before it is installed.
	
	This file is included in Windows 95 Service Pack 1. For more information on
	obtaining Windows 95 Service Pack 1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	To work around this problem, use any of the following methods:
	
	- Edit the target for the Msaccess.exe shortcut. Use Universal Naming
	  Convention (UNC) syntax instead of a mapped drive letter. For example:
	
	  \\$nds\.server_volume.organization\access\Msaccess.exe
	
	- Use Network Neighborhood to browse the container that contains the
	  Msaccess.exe file. Drag a shortcut to your desktop.
	
	STATUS
	======
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 3rdpartynet win95 kb3rdPartyNetClient kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
