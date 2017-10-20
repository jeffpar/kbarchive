---
layout: page
title: "Q104778: DblSpace Err Msg: An Unrecognized Error Has Occurred During..."
permalink: /kb/104/Q104778/
---

## Q104778: DblSpace Err Msg: An Unrecognized Error Has Occurred During...

{% raw %}

	Article: Q104778
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you try to compress disk, you may receive the following error message:
	
	  An unrecognized error has occurred during compression. Your files are still
	  intact, but might be located on a different drive than before you ran
	  DoubleSpace Setup.
	
	CAUSE
	=====
	
	This error occurs if:
	
	- You try to compress a write-protected removable media disk.
	
	-or-
	
	- The root directory of the drive being compressed is full.
	
	RESOLUTION
	==========
	
	To work around this problem, make sure the media you are trying to compress is
	not write protected and the root directory is not full.
	
	For more information on root directory file limits, query on the following words
	in the Microsoft Knowledge Base:
	
	  root and subdirectory and ms-dos and file limit
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
