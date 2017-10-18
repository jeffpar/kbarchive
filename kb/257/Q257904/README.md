---
layout: page
title: "Q257904: Unable to Remotely Administer a MSCS Server After Applying SP4"
permalink: kb/257/Q257904/
---

## Q257904: Unable to Remotely Administer a MSCS Server After Applying SP4

	Article: Q257904
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 4 (SP4) to a Windows NT 4.0-based computer that you
	use to remotely administer a Microsoft Cluster Server (MSCS) server that is
	running Service Pack 3 (SP3), you may experience intermittent issues. For
	example, when you try to create a file share, you may receive the following
	error message:
	
	  The parameter is incorrect
	
	RESOLUTION
	==========
	
	To work around this issue, replace the SP4 versions of the Cluadmin.exe and the
	Cluadmex.dll files on your Windows NT 4.0-based computer with the SP3 versions
	of the files.
	
	MORE INFORMATION
	================
	
	Creating other resources on the MSCS server very rarely generate error messages,
	and the resources function as expected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
