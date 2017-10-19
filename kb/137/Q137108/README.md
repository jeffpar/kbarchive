---
layout: page
title: "Q137108: PC NTMMTA: Running NT MMTA on PC-NFS Client"
permalink: /kb/137/Q137108/
---

## Q137108: PC NTMMTA: Running NT MMTA on PC-NFS Client

	Article: Q137108
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the PC Network File System (NFS) Client from Intergraph Corporation
	on Microsoft Windows NT, and you connect to a Microsoft Mail for PC Networks
	postoffices residing on UNIX servers, and then run the Windows NT Multitasking
	MTA (NT MMTA) against these postoffices, the following error may occur:
	
	  Could not find mail system data files on Drive x:.
	
	RESOLUTION
	==========
	
	This has been verified to be a problem with Intergraphs PC-NFS v02.01.06.00
	(2.1.6) of that software. The latest version is 02.01.07.00 (2.1.7) which,
	contrary to this version, allows the NT MMTA to operate properly. Contact
	Intergraph Corporation for more information and technical assistance at (800)
	633- 7248.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
