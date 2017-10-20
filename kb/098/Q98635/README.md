---
layout: page
title: "Q98635: Interlnk Client Cannot Access Drives on Server"
permalink: /kb/098/Q98635/
---

## Q98635: Interlnk Client Cannot Access Drives on Server

{% raw %}

	Article: Q98635
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SYMPTOMS
	========
	
	An Interlnk client computer running MS-DOS version 3.3 or earlier cannot access
	a partition on a server machine if either of the following are true:
	
	- The partition is larger than 32 megabytes (MB)
	
	- The partition is compressed with DoubleSpace
	
	From the client computer, you can change to the drive letter assigned to the
	server's drive; however, after you do, you receive the following error message:
	
	  Non-DOS disk error reading drive G:
	  Abort, Retry, Fail?
	
	For example, if the letter G is assigned to the server's compressed drive (for
	example, drive C), you can change to the "G:\>" prompt, but when you try to
	access the drive with an MS-DOS command (DIR, MD, CD, and so on), you receive
	the error noted above.
	
	CAUSE
	=====
	
	This problem occurs because Interlnk functions as a redirector. The client's
	version of MS-DOS is allowed to access drives on the server as if they were
	local drives. MS-DOS 3.x simply doesn't know how to access these drives.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	- Upgrade the client to MS-DOS version 4.01 or later.
	
	-or-
	
	- Reverse the Interlnk client/server configuration (that is, make the MS-DOS 6
	  or 6.2 machine the client and the MS-DOS 3.x machine the server).
	
	Additional query words: 6.00 interlink inter link intersvr ignore 6.20 dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
