---
layout: page
title: "Q112383: PreferredRedir=Full Default with NetWare 4 Secondary Network"
permalink: kb/112/Q112383/
---

## Q112383: PreferredRedir=Full Default with NetWare 4 Secondary Network

	Article: Q112383
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Novell NetWare version 4.0 is installed as a secondary network, the default
	real mode redirector for Windows for Workgroups version 3.11 is the full
	redirector, not the basic redirector.
	
	MORE INFORMATION
	================
	
	If you use the basic redirector with NetWare 4.0 installed as a secondary
	network, you may experience the following problems after connecting to several
	network drives (using NET USE) and then disconnecting from one of the network
	drives (using NET USE /D):
	
	- The Novell NetWare MAP command no longer functions. You cannot map any drive
	  to a NetWare server.
	
	- The list of redirected drives, viewable by typing NET USE, may not show all
	  drives. For example, if you have three drives redirected, the NET USE command
	  may show only two.
	
	- After you stop the basic redirector and start the full redirector, persistent
	  network connections may not be restored correctly. For example, a connection
	  is not restored, and when you try to manually restore it, you receive an
	  error message informing you that the local device is already in use even
	  though the Novell MAP command and NET USE commands show that the drive letter
	  is not in use.
	
	RESOLUTION
	==========
	
	To correct the above problems:
	
	1. Edit your SYSTEM.INI file and ensure the [Network] section contains the
	  following line:
	
	  PreferredRedir=Full
	
	2. Restart your computer and load the full redirector.
	
	Additional query words: 3.11 4.00 4.x netware4 secondary net
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
