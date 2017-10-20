---
layout: page
title: "Q126463: Remote Command Service Does Not Install Correctly"
permalink: /kb/126/Q126463/
---

## Q126463: Remote Command Service Does Not Install Correctly

{% raw %}

	Article: Q126463
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to install the Remote Command Server Service (RCMDSVC.EXE),
	included with the Windows NT 3.5 Resource Kit, when you follow the instructions
	in the Resource Kit Tools Help File (RKTOOLS.HLP). The Remote Command Server
	option is not in the list of Network Software (accessed by running Control Panel
	and choosing Network).
	
	CAUSE
	=====
	
	According to the Resource Kit Tools Help File:
	
	  After installation of the Resource Kit, the
	  necessary files will have been copied to the
	  system directory.
	
	However, Windows NT 3.5 Resource Kit Setup fails to copy OEMNSVRC.INF to the
	%SYSTEMROOT%\SYSTEM32 directory.
	
	RESOLUTION
	==========
	
	Copy OEMNSVRC.INF from the Windows NT 3.5 Resource Kit directory (RESKIT35 is
	the default) to the %SYSTEMROOT%\SYSTEM32 directory. The Remote Command Server
	service should then be available in the list of Network Software that can be
	installed when you run Control Panel and choose Network.
	
	This is resolved in the NT 4.0 Resource Kit as the RKTOOL.HLP file offers
	explicit instructions to copy both the RCMDSVC.EXR and OEMNSVRC.INF files to the
	%systemroot%\SYSTEM32 folders.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
