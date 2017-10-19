---
layout: page
title: "Q65447: NetWare/286 (and Earlier) Trustee Rights with Windows"
permalink: /kb/065/Q65447/
---

## Q65447: NetWare/286 (and Earlier) Trustee Rights with Windows

	Article: Q65447
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many options exist to control access to resources in the NetWare environment.
	The part of NetWare security used most often is trustee rights. A trustee
	assignment is created by giving certain rights to a user in a file server
	directory. It is through these trustee assignments that users are granted access
	to programs and data on the file server.
	
	Trustee rights consist of both rights assigned to individuals at the user level
	and rights assigned to groups as a whole. For instance, Read, Open, and Search
	rights may be assigned at the group level for a certain directory. However, it
	may be appropriate to grant only one individual in the group Write privileges,
	which can be assigned at the user level. The only rights that need to be
	assigned at the user level are any that are in addition to those rights assigned
	at the group level.
	
	NOTE: Once a trustee assignment is granted, it includes all subdirectories
	beneath the subject directory. For instance, if the Read privilege is granted in
	the SYS:PUBLIC directory, that Read privilege is automatically granted in the
	SYS:PUBLIC\UTILS directory.
	
	Various combinations of the basic NetWare/286 (and earlier) rights -- Read,
	Write, Open, Create, Delete, Parental, Search, and Modify, which are shown as
	[RWOCDPSM] -- provide a flexible means of defining the security of a LAN.
	
	Windows requires certain rights for setup to complete Setup /N.
	
	For more information about these requirements and explanation of symptoms, query
	on the following words:
	
	  Novell and 286 and Rights
	
	MORE INFORMATION
	================
	
	Assignment of rights can take two approaches, as follows:
	
	The Trustee Approach
	--------------------
	
	With the trustee approach, rights are granted to users at the user or group
	level, using the SYSCON utility (or MAKEUSER).
	
	The Directory Approach
	----------------------
	
	With the directory approach, trustees are assigned on a directory-by-directory
	basis, using the FILER utility.
	
	The trustee privileges are stored in a hidden system file called DIRSTAMP.SYS.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
