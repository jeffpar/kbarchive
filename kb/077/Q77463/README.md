---
layout: page
title: "Q77463: 'INVALID PATH' Message Following 'DISK IS FULL' Message"
permalink: /kb/077/Q77463/
---

## Q77463: 'INVALID PATH' Message Following 'DISK IS FULL' Message

{% raw %}

	Article: Q77463
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the MS-DOS Shell COPY command to copy a file or files to a disk,
	the following message may be displayed:
	
	  DISK IS FULL
	
	This message indicates that the destination disk is full. If you replace the disk
	with a new disk and then continue the COPY operation, the following error
	message is displayed:
	
	  INVALID PATH
	
	This message is located in the Copy File window. This window also gives the
	following options:
	
	- Skip this file or directory and continue.
	
	-or-
	
	- Try this file or directory again.
	
	This message persists if you make any attempt to copy other file(s) to the new
	disk.
	
	WORKAROUND
	==========
	
	1. Record which file(s) was not copied and CANCEL the operation. You can then
	  recopy the recorded file(s) (that is, the file(s) that was not copied
	  previously) onto the new disk.
	
	2. If you want to copy all the files in a certain subdirectory, do the
	  following:
	
	  a. Cancel the operation and return to MS-DOS.
	
	  b. Use the ATTRIB command to add the archive attribute to all the files
	     located in the specific directory. For example:
	
	  attrib +a *.*
	
	  c. Use the XCOPY command (with the /M switch) to copy all the files in the
	     specific subdirectory to the destination disk. For example:
	
	  xcopy *.* /m <destination>
	
	     where <destination> identifies the destination disk.
	
	  The XCOPY /M command copies all of the files with the archive attribute to the
	  destination disk. As the files are copied, archive attributes are removed, so
	  the original and copied file do not have the archive attribute.
	
	  NOTE: The reason this can be an effective workaround is because as XCOPY
	  copies the files from the subdirectory to the destination disk, it removes
	  the archive attribute, so when the destination disk becomes full and the
	  "Disk is Full" message occurs, you simply need to reenter the XCOPY *.* /M
	  <destination> command. This command only copies those files that still
	  have the archive attribute, (that is, those files in the subdirectory that
	  have not yet been copied to the destination disk).
	
	
	Additional query words: 5.00 5.00a 6.00 errmsg err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	

{% endraw %}
