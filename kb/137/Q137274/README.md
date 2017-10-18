---
layout: page
title: "Q137274: 25-Character Maximum for Preferred NetWare File Server"
permalink: kb/137/Q137274/
---

## Q137274: 25-Character Maximum for Preferred NetWare File Server

	Article: Q137274
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Novell NetWare file server's name is longer than 25 characters, the name
	cannot be entered in the Preferred Server box in the properties for the
	Microsoft Client for NetWare Networks.
	
	CAUSE
	=====
	
	Novell allows server names to be from 2 to 47 characters long. However, the
	Preferred Server box in the properties for the Microsoft Client for NetWare
	Networks is designed to allow a maximum of 25 characters.
	
	RESOLUTION
	==========
	
	To work around this limitation, enter the file server name in the Enter Network
	Password dialog box when you log on to a NetWare server. This field allows up to
	47 characters, and the designated server becomes the default NetWare server.
	
	This server name is displayed in the properties for the Microsoft Client for
	NetWare Networks, but is truncated at 25 characters.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
