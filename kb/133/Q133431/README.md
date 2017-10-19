---
layout: page
title: "Q133431: PC NTMMTA: Service Drive Letters Not User Selectable"
permalink: /kb/133/Q133431/
---

## Q133431: PC NTMMTA: Service Drive Letters Not User Selectable

	Article: Q133431
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use version 3.5 of the Microsoft Mail Multitasking MTA for Windows NT
	(NT MMTA) as a service under Microsoft Windows NT, you will not have control
	over drive letter selection.
	
	MORE INFORMATION
	================
	
	Each instance of the NT MMTA uses three drive letters, one for the home
	postoffice and another two for inbound and outbound message transfer. When you
	run the NT MMTA as a service, these drive letters are selected automatically by
	the service. As a result, you will see up to three additional drive letters in
	File Manager for each service instance.
	
	NOTE: The NT MMTA service may use drive B, normally used for a floppy drive, if
	that drive is not installed.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
