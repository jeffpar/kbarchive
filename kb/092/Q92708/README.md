---
layout: page
title: "Q92708: WFWG Err Msg: &quot;Extended Error 65&quot; or &quot;File Manager Cannot...&quot;"
permalink: /kb/092/Q92708/
---

## Q92708: WFWG Err Msg: &quot;Extended Error 65&quot; or &quot;File Manager Cannot...&quot;

	Article: Q92708
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to rename a file, copy a file to another filename, or otherwise alter
	a file shared from a Windows for Workgroups server from within the MS- DOS
	Prompt of another Windows for Workgroups machine, you may receive the following
	error message:
	
	  Extended Error 65
	
	If you attempt to alter a file shared from a Windows for Workgroups server from
	File Manager on another Windows for Workgroups machine, you may receive the
	following error message:
	
	  File Manager cannot create or replace <Filename>: Access Denied. Make
	  sure the disk is not full or write-protected.
	
	CAUSE
	=====
	
	These errors occur because the share is designated as having read-only access
	from the server machine.
	
	RESOLUTION
	==========
	
	To resolve the problem, assign full-access permission for the share on the
	Windows for Workgroups server, as follows:
	
	1. In the File Manager application, choose Share As from the Disk menu.
	
	2. From the Access Type list, select Full.
	
	Additional query words: 3.10 FM access password properties
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
