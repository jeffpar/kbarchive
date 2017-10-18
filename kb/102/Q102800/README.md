---
layout: page
title: "Q102800: Cannot Access IBM LAN Server NET.ACC from LAN Man System"
permalink: kb/102/Q102800/
---

## Q102800: Cannot Access IBM LAN Server NET.ACC from LAN Man System

	Article: Q102800
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	If you try to access an IBM LAN Server 1.3 NET.ACC that you have directly copied
	onto a LAN Manager 2.1, 2.1a or 2.2 system, or if you attempt to use the PORTACC
	utility, you receive an error message:
	
	  NET3882 error: The file NET.ACC is not a valid LAN Manager accounts file.
	
	CAUSE
	=====
	
	The NET.ACC from one system is not compatible with the other.
	
	RESOLUTION
	==========
	
	Use the MERGEACC utility, part of the LAN Manager Resource Kit, to transfer the
	user database.
	
	For more information on the IBM LAN Server to Microsoft LAN Manager upgrade, see
	the white paper "Migrating from IBM LAN Server to Microsoft LAN Manager,"
	098-37238, available from Microsoft Inside Sales.
	
	
	Additional query words: 2.10 2.10a 2.20 2.1 2.1a 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
