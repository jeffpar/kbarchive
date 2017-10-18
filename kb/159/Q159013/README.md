---
layout: page
title: "Q159013: Saving File to Windows NT 3.51 Server Loses Long File Name"
permalink: kb/159/Q159013/
---

## Q159013: Saving File to Windows NT 3.51 Server Loses Long File Name

	Article: Q159013
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork msnets appscomp kbAppCompatibility
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you open a file in Microsoft Excel version 5.0c or Microsoft Word version 6.0
	using the short file name on a Windows NT 3.51 server, if the file has a long
	file name the long file name is lost when you save the file.
	
	MORE INFORMATION
	================
	
	This behavior occurs only when you save a file to a Windows NT 3.51 server.
	
	Microsoft Excel and Word save the file in a temporary file, delete the original
	file, and rename the temporary file to the original name. Because Microsoft
	Excel 5.0c and Word 6.0 are not aware of the long file names, they use short
	names in this process. Therefore, the original long file name is lost after the
	delete and rename sequence.
	
	Additional query words: lfn lfns sfn xls prodnt
	
	======================================================================
	Keywords          : kbinterop kbnetwork msnets appscomp kbAppCompatibility 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
