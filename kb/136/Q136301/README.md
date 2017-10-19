---
layout: page
title: "Q136301: FindFile Utility from Office 4.3 Produces Inaccurate Results"
permalink: /kb/136/Q136301/
---

## Q136301: FindFile Utility from Office 4.3 Produces Inaccurate Results

	Article: Q136301
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOM
	-------
	
	On your computer running Windows NT, when you run the FindFile utility that
	is included with Office for Windows, version 4.3, the search results are
	incomplete without information regarding the cause.
	
	This symptom occurs sporadically.
	
	To check whether the FindFile utility search results are incomplete,
	compare the results with the search results from File Manager.
	
	However, if you run this utility under Windows or Windows for Workgroups,
	the following error appears:
	
	  The path you specified contains too many subdirectories. Delete one
	  or more directories or clear the Include Subdirectories check box."
	
	CAUSE
	=====
	
	The FindFile utility that is included with Office for Windows, version 4.3, has
	a limitation of searching up to 15 subdirectory levels deep or 200 directories
	total.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT version 3.51.
	
	To work around this problem, use File Manager to search for the file(s):
	
	1. Run File Manager.
	
	2. From the File menu, choose Search.
	
	3. Type the filename or filename pattern to search for and choose OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
