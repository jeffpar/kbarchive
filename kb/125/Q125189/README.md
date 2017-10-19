---
layout: page
title: "Q125189: Cannot Browse WGAO 3.11 Computer from WFWG 3.1"
permalink: /kb/125/Q125189/
---

## Q125189: Cannot Browse WGAO 3.11 Computer from WFWG 3.1

	Article: Q125189
	Product(s): Microsoft Disk Operating System
	Version(s): 3.11; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups Add-On for MS-DOS, version 3.11 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to force a browse of a Windows for Workgroups Add-On (WGAO) version
	3.11 for MS-DOS computer from a Windows for Workgroups version 3.1 computer, you
	may receive one of the following error message:
	
	- This request is not supported by the network.
	
	-or-
	
	- This server does not support listing of shared resources.
	
	-or-
	
	- Error 50: This request is not supported by the network.
	
	RESOLUTION
	==========
	
	You can manually connect to the WGAO 3.11 computer by typing the full path to
	the WGAO 3.11 computer in the Network Path dialog box.
	
	Note that this problem occurs only if you are using Windows for Workgroups 3.1 to
	browse a WGAO 3.11 computer. The problem does not occur if you use Windows for
	Workgroups 3.11 instead of version 3.1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You may also receive an error message when you try to connect to a shared WGAO
	3.11 printer. Once you connect to the shared printer, Print Manager reports the
	status of the shared printer as "!ERROR." The following message is displayed in
	the Print Manager status bar:
	
	  This request is not supported by the network.
	
	This error message is misleading; you can print to the shared printer.
	
	Additional query words: 3.10 3.11 WGAO WFWG WFW Addon net view
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbZNotKeyword3 kbWFW311 kbWFW311DOS
	Version           : :3.11; WINDOWS:3.11
	
	=============================================================================
	
