---
layout: page
title: "Q103531: DoubleSpace Reports ScanDisk Found Disk Errors (Low Memory)"
permalink: /kb/103/Q103531/
---

## Q103531: DoubleSpace Reports ScanDisk Found Disk Errors (Low Memory)

{% raw %}

	Article: Q103531
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	When you try to compress or uncompress a disk with DoubleSpace, you may receive
	the following error message when the actual problem is low memory:
	
	  ScanDisk has detected errors on drive C. Before you can
	  compress this drive, you must quit DoubleSpace and
	  then fix the errors by typing SCANDISK /S C: at the
	  command prompt.
	
	CAUSE
	=====
	
	ScanDisk returns exit code 2 (insufficient memory) when it runs out of memory
	during the system checks. However, when DoubleSpace receives exit code 2 from
	ScanDisk, it returns the error message noted above. When you run ScanDisk with
	the command line from the error message, ScanDisk correctly displays one of the
	following error messages.
	
	If there is not enough space to analyze a Doublespace-compressed drive:
	
	  There is not enough free conventional memory to check a DoubleSpace drive.
	
	  To run optimally, ScanDisk needs at least 400,814 bytes of conventional
	  memory.
	
	If there is not enough memory to analyze a uncompressed or host drive:
	
	  There is not enough free conventional memory to check a drive.
	
	  To run optimally, ScanDisk needs at least 367,022 bytes of conventional
	  memory.
	
	RESOLUTION
	==========
	
	To work around this problem, increase your available conventional memory. For
	more information, see Chapter 6, "Making More Memory Available" in the "User's
	Guide."
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
