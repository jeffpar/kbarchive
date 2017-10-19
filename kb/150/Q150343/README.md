---
layout: page
title: "Q150343: Error Writing to Port in AutoCAD"
permalink: /kb/150/Q150343/
---

## Q150343: Error Writing to Port in AutoCAD

	Article: Q150343
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to plot a file using AutoCAD R13 under Windows NT, the following
	error message appears:
	
	  Error writing to LPTx the device is not ready
	
	CAUSE
	=====
	
	Autocad defaults to its own AUTOSPOOL feature, which requires the LPT port to be
	free. If you already have a printer defined in Print Manager to print to that
	port, you may get the above error.
	
	RESOLUTION
	==========
	
	You can configure AutoCAD to plot directly to the default printer set in Print
	Manager by configuring AutoCAD for System Printer ADI. The System Printer and
	System Printer Settings can be changed. In the Plot dialog box, open the Device
	and Default selection dialog box and use the Change Device Requirements.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
