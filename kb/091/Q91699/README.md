---
layout: page
title: "Q91699: PC Win OS2: Virus Message on Dual-Boot Systems"
permalink: /kb/091/Q91699/
---

## Q91699: PC Win OS2: Virus Message on Dual-Boot Systems

	Article: Q91699
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may see the following incorrect error message when you start the Windows
	client of Microsoft Mail for PC Networks, after you install both it and the
	Presentation Manager client for OS/2 on a system that boots both MS- DOS and
	OS/2:
	
	  Mail will not run because someone has tampered with the program files. Check
	  your machine for viruses and run setup to reinstall Mail.
	
	CAUSE
	=====
	
	The Setup program for both clients stamps MSMAIL.EXE and changes the size of the
	file. This causes the program to think that it has been infected with a virus.
	
	RESOLUTION
	==========
	
	Install the Windows and Presentation Manager clients in two separate
	directories.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
