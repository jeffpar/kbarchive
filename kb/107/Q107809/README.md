---
layout: page
title: "Q107809: RAS May Not Function on a Shared Network Installation"
permalink: kb/107/Q107809/
---

## Q107809: RAS May Not Function on a Shared Network Installation

	Article: Q107809
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a shared network installation (SETUP /N) of Microsoft Windows for
	Workgroups version 3.11, starting Remote Access Services (RAS) generates the
	following error:
	
	  Cannot load phone book or RAS manager data. Error 657: the device .INF file
	  could not be opened.
	
	CAUSE
	=====
	
	The above error message is generated when PAD.INF and SWITCH.INF are marked
	read-only.
	
	WORKAROUND
	==========
	
	You may be able to use RAS with a shared Windows for Workgroups installation if
	only one person on the network attempts to use RAS and you remove the read-only
	attribute from PAD.INF and SWITCH.INF. (If the shared directory is located on a
	server, full permissions must also be granted.)
	
	
	STATUS
	======
	
	RAS was not designed to run under a shared Windows for Workgroups installation.
	This functionality was not tested by Microsoft and is not supported.
	
	Additional query words: 3.11 file attribute set
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
