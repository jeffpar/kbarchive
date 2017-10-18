---
layout: page
title: "Q171137: Need to Remove MS Transaction Server After Remove IIS 4.0"
permalink: kb/171/Q171137/
---

## Q171137: Need to Remove MS Transaction Server After Remove IIS 4.0

	Article: Q171137
	Product(s): Internet Information Server
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remove Internet Information Server (IIS) from a computer, it may be
	necessary to remove Microsoft Transaction Server (MTS).
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95 or Windows NT. Microsoft cannot guarantee
	those problems resulting from the incorrect use of Registry Editor can be
	solved. Use Registry Editor at your own risk. Make a backup of your registry
	before attempting to make registry changes
	
	Steps to remove Microsoft Transaction Server:
	
	1. Ensure that no MTS server processes are running when you remove MTS by typing
	  MTXSTOP at a command prompt.
	
	2. Make sure that MSDTC is not running by running the following at a command
	  prompt:
	
	     net stop msdtc
	
	3. Delete your entire MTX directory, and remove it from the Recycle Bin.
	
	4. Delete the HKLM\SOFTWARE\Microsoft\Transaction Server key.
	
	5. Delete the HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\ Setup\OC
	  Manager\Subcomponents\MTS* key.
	
	6. Delete the HKLM\SOFTWARE\Microsoft\MMC\SnapIns\MTS key.
	
	7. Go to the Control Panel, System, Environment, and remove :\mtx from the
	  System Variables path.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
