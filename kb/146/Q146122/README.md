---
layout: page
title: "Q146122: PC NTMMTA: Error 2140 When You Try to Start Instance"
permalink: kb/146/Q146122/
---

## Q146122: PC NTMMTA: Error 2140 When You Try to Start Instance

	Article: Q146122
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start an instance of the Mail Multitasking MTA for Windows NT
	(NT MMTA), you may get an error 2140. When you stop any MMTA instance from the
	Services Manager and Control Panel, the MMTA will not successfully release the
	dynamic drives or the home PO, and eventually it exhausts the free list of
	drives. A complete reboot of the server is required to make drives available to
	the service.
	
	In the above situation, you will usually see the following message:
	
	  Drive is either local, used, or greater than LASTDRIVE. Initializing data
	  structures. Could not connect to drive.
	
	CAUSE
	=====
	
	The dynamic drive mappings are not being freed when the MMTA service is stopped
	because the API call fails on dynamic drives. The drive mapping for the home PO
	is also not released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of the Microsoft
	Mail Multitasking MTA for Windows NT. This problem is fixed in version 3.5.27 of
	the NTMMTA.
	
	Contact Microsoft Product Support Services for more information on the
	availability of this fix.
	
	
	Additional query words: MMTA 3.50 post35fix
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
