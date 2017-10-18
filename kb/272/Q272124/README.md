---
layout: page
title: "Q272124: Unable to Add Workstation to Domain: 'A Domain Controller for Yo"
permalink: kb/272/Q272124/
---

## Q272124: Unable to Add Workstation to Domain: 'A Domain Controller for Yo

	Article: Q272124
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a workstation to a domain, you may not be able to do so,
	and you may receive the following error message:
	
	  A domain controller for your domain could not be contacted. You have been
	  logged on using cached account information. Changes to your profile since you
	  last logged on may not be available.
	
	If caching is disabled, you may also receive this error message:
	
	  The system cannot log you on now because the domain (DOMAIN_NAME) is not
	  available.
	
	CAUSE
	=====
	
	This behavior can occur when the primary domain controller (PDC) has not
	correctly registered the 1B (domain master browser) and 1C (domain controller)
	NetBIOS names in the Windows Internet Name Service (WINS), or when the 1B and 1C
	entries are not specified correctly in the LMHOSTS file.
	
	RESOLUTION
	==========
	
	To resolve this issue, register the 1B and 1C NetBIOS names in WINS again by
	stopping and then restarting the Netlogon service on the PDC.
	
	If your network does not use a WINS server and the domain controller is located
	on a remote network segment, on the workstation, use an LMHOSTS file with the
	correct 1B and 1C entries for the domain.
	
	MORE INFORMATION
	================
	
	For more information about NetBIOS names registered in WINS and about using an
	LMHOSTS file, refer to the following articles in the Microsoft Knowledge Base:
	
	  Q180094 How to Write an LMHOSTS File for Domain Validation and Other Name
	  Resolution Issues
	
	  Q163409 NetBIOS Suffixes (16th Character of the NetBIOS Name)
	
	  Q119495 List of Names Registered with WINS Service
	
	  Q137423 How to Reregister Services in WINS
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
