---
layout: page
title: "Q158858: Cannot Rename Users and Groups in Personal Web Server"
permalink: /kb/158/Q158858/
---

## Q158858: Cannot Rename Users and Groups in Personal Web Server

	Article: Q158858
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): mspwsw95
	Last Modified: 05-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot rename users and groups, or you may be unable to create groups, using
	Microsoft Personal Web Server version 1.0 for Windows 95.
	
	CAUSE
	=====
	
	Personal Web Server does not support the renaming of users and groups, or the
	nesting of groups (the creation of one group inside of another).
	
	RESOLUTION
	==========
	
	To resolve this issue, create a new user or group account and then delete the
	old one.
	
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
