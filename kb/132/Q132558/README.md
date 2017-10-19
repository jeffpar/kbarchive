---
layout: page
title: "Q132558: PC Win: GAL and External Address Lists Are Missing"
permalink: /kb/132/Q132558/
---

## Q132558: PC Win: GAL and External Address Lists Are Missing

	Article: Q132558
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Global Address List (GAL) and External Mail program postoffice definitions
	may be missing when you search the address book of Microsoft Mail for Windows.
	If this occurs, the only entry visible is the Personal Address Book (PAB).
	
	NOTE: The Windows client can receive messages and can send mail to addresses in
	the PAB. The Microsoft Mail for PC Networks, MS-DOS workstation is able to view
	all addresses and does not experience problems.
	
	CAUSE
	=====
	
	The addressing files are locked and unavailable to the Windows client. The files
	are commonly the NETWORK.GLB or any numbered XTN file located in the XTN
	sub-directory.
	
	RESOLUTION
	==========
	
	The lock should be released and the address lists will become available once the
	clients Exit and Sign Out and sign back into the Windows client.
	
	MORE INFORMATION
	================
	
	The GAL will not be available to the address book if the GAL.NME file is locked.
	This will not affect the External postoffice definitions. The Admin, Import, and
	External programs update these files and are commonly the process that can be
	causing the file to be unavailable.
	
	If the network operating system is unable to locate a lock on any of these files,
	attempt to make a copy of the file local, and edit the files with an editor,
	such as Write, that will lock the file. If the file is locked by another
	process, it will fail to open.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
