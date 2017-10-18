---
layout: page
title: "Q161313: Msbatch.inf Parameters: Setting Up the Paging File"
permalink: kb/161/Q161313/
---

## Q161313: Msbatch.inf Parameters: Setting Up the Paging File

	Article: Q161313
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to insert paging file information using the
	Msbatch.inf file for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	Modify the [Install] section of the Msbatch.inf file to include the following
	line:
	
	  UpdateInis=Set.Pagefile
	
	Also, add the following section and parameters:
	
	  [Set.Pagefile]
	  %10%\system.ini,386Enh,,"PagingDrive=C:"
	  %10%\system.ini,386Enh,,"MinPagingFileSize=20480"
	  %10%\system.ini,386Enh,,"MaxPagingFileSize-20480"
	
	Modify the parameters as necessary if you want to use a different drive or size
	for the paging file.
	
	NOTE: We recommend letting Windows95 decide the size of the paging file for
	optimal performance.
	
	Additional query words: automate swapfile netsetup
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
