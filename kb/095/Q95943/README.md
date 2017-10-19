---
layout: page
title: "Q95943: PC Win: Offline Symbol Appears in Status Bar"
permalink: /kb/095/Q95943/
---

## Q95943: PC Win: Offline Symbol Appears in Status Bar

	Article: Q95943
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0a, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The offline (or net disconnect) symbol appears in the status bar of Microsoft
	Mail versions 3.0, 3.0a, and 3.0b for Windows; however, Mail appears to function
	as usual.
	
	CAUSE
	=====
	
	An ownerless mail message file (*.MMF) on the Microsoft Mail postoffice on a
	Novell NetWare server may cause this symbol to appear.
	
	RESOLUTION
	==========
	
	To assign ownership, the supervisor must run Filer (select the root of the
	postoffice when all users are off Mail) and change the entire directory tree to
	supervisor ownership.
	
	MORE INFORMATION
	================
	
	In the Novell NetWare operating system, a file on a server receives ownership
	when it is created or copied within the server, with ownership assigned to the
	user who last effected the file. If a user is removed from the bindery (the
	Novell server database of users and resources), all files under ownership of the
	user at the time become ownerless. The files will remain ownerless--even if the
	user is added back to the bindery--until a user (or users) affect the files.
	
	To check for ownerless files, type "NDIR" (without the quotation marks) at the
	command prompt from the directory in question. An excerpt from a sample NDIR
	listing follows:
	
	LECTOR/SYS:PUBLIC
	
	  Files        Size        Last Updated         Flags       Owner
	
	-------------------------------------------------------------------
	
	IBM$RUN OVL     2,400     7-13-89   9:30a     [RoS---DR]     LECTOR
	IBM4201 PDF       368     9-21-88  10:02a     [RoS---DR]     LECTOR
	IBMPRO2 PDF       369     9-21-88  10:02a     [RoS---DR]     LECTOR
	OWNRLES TXT        35     1-21-93   4:11p     [Rw-A----]     N/A
	LISTDIR EXE    26,235     1-23-91   2:45p     [RoS---DR]     LECTOR
	
	Any ownerless files will show up in the NDIR listing under "Owner" as N/A (see
	above).
	
	Additional query words: 3.00 3.00a 3.00b icon
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0a,3.0b
	
	=============================================================================
	
