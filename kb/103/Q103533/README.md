---
layout: page
title: "Q103533: DoubleSpace Err Msg Mounting CVF: There Is a Disk Error on..."
permalink: /kb/103/Q103533/
---

## Q103533: DoubleSpace Err Msg Mounting CVF: There Is a Disk Error on...

{% raw %}

	Article: Q103533
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If you copy a compressed volume file (CVF) to a DoubleSpace-compressed drive and
	attempt to mount the file, you receive the following messages:
	
	  DoubleSpace is mounting drive <letter>.
	  DoubleSpace cannot mount drive <letter>.
	  There is a disk error on drive <letter>. To fix it, type SCANDISK
	  <letter> at the command prompt.
	
	For example, you receive this error if you copy DBLSPACE.001 to your compressed
	drive C and type "dblspace /mount=1 c:" (without the quotation marks) at the
	MS-DOS command prompt. In addition, your drive C is unmounted.
	
	CAUSE
	=====
	
	DoubleSpace is not designed to support mounting CVFs from CVFs.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Restart your computer to gain access to your compressed drive.
	
	2. Copy the CVF from your compressed drive to an uncompressed drive.
	
	3. Mount the CVF from the uncompressed drive.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
