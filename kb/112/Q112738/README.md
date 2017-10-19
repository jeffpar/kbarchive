---
layout: page
title: "Q112738: After Logging Off Shared Installation of WFWG, GP Faults Occur"
permalink: /kb/112/Q112738/
---

## Q112738: After Logging Off Shared Installation of WFWG, GP Faults Occur

	Article: Q112738
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running a shared network installation of Windows for Workgroups from
	a Windows NT or Windows for Workgroups server and you log off from the network
	(either through Control Panel or by running LOGONOFF.EXE), you receive a series
	of general protection (GP) faults. As a result, Windows for Workgroups stops
	responding (hangs). This problem does not occur if you are running a shared
	network installation of Windows for Workgroups from a Novell server.
	
	CAUSE
	=====
	
	Windows for Workgroups encounters these problems because logging off closes the
	redirector; as a result, you no longer have access to the network and the files
	required to run Windows for Workgroups.
	
	Additional query words: 3.11 logoff loggingoff setup /n wfwnet.drv
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
