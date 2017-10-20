---
layout: page
title: "Q142919: Error Message: ID Number DRVSPACE125"
permalink: /kb/142/Q142919/
---

## Q142919: Error Message: ID Number DRVSPACE125

{% raw %}

	Article: Q142919
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to compress drive C with DriveSpace 3, you may receive the
	following error message when the compression process is 25 percent finished:
	
	  Windows cannot create the C:\Msdossys.tmp file. There might not be enough
	  free space on the drive C, the root directory of drive C may be full, or the
	  disk may be write-protected.
	
	  ID Number DRVSPACE125
	
	CAUSE
	=====
	
	This error can occur if the root folder on drive C contains the maximum
	allowable number of files (512). When this occurs, DriveSpace 3 cannot create
	the temporary files it needs to finish the compression process.
	
	RESOLUTION
	==========
	
	Move or delete unnecessary files in the root folder on drive C, and then
	continue the compression process.
	
	MORE INFORMATION
	================
	
	The root folder on a hard disk can contain no more than 512 directory entries.
	Directory entries can contain short file names and the extra entries required to
	hold long file names.
	
	Note that the error may also occur when the compression process is 100 percent
	finished if you are compressing a drive that is not the boot drive. The actual
	file referenced in the error message will vary. The error message "Cannot create
	the file Drvspace.000" is generated when the root folder of the drive being
	compressed is full.
	
	The error message stated above can also occur if there is a file named
	Failsafe.drv in the root folder of drive C (or the host for drive C). If this
	occurs, remove the Failsafe.drv file and then continue the compression
	operation.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
