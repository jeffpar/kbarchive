---
layout: page
title: "Q90451: NetWare NCOPY to Local Drive Gives Sharing Violation"
permalink: kb/090/Q90451/
---

## Q90451: NetWare NCOPY to Local Drive Gives Sharing Violation

	Article: Q90451
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Microsoft Windows for Workgroups in 386 enhanced mode or
	standard mode with the MS-DOS SHARE utility loaded, or you are running Windows
	95, and you use the Novell NetWare version 3.11 NCOPY command to copy files to a
	local disk drive, you may receive the following error message
	
	  Sharing violation reading drive <x>:
	
	where <x> is the local target drive issued to the NCOPY command.
	
	CAUSE
	=====
	
	According to the Microsoft Windows 3.1 NETWORKS.WRI file:
	
	  Current versions of the NetWare shell are not fully compatible with SHARE.
	
	Because Windows for Workgroups loads VSHARE.386 (the virtual SHARE device driver)
	when in 386 enhanced mode, the NCOPY anomaly may manifest itself anytime Windows
	for Workgroups is running in 386 enhanced mode, or is running in standard mode
	with the MS-DOS SHARE utility loaded.
	
	RESOLUTION
	==========
	
	Use the Windows for Workgroups File Manager or the MS-DOS COPY or XCOPY command
	instead of the NCOPY command. In Windows 95, use Windows Explorer, My Computer,
	or the MS-DOS COPY or XCOPY command.
	
	The Novell product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	KBCategory: kbnetwork kb3rdparty kberrmsg
	KBSubcategory: wfwg win95
	
	Additional query words: 3.10 95 copy
	
	======================================================================
	Keywords          : win95 
	Technology        : kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW310
	Version           : WINDOWS:3.1,95
	
	=============================================================================
	
