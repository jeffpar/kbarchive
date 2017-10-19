---
layout: page
title: "Q101305: SETUP /E Err Msg: Setup Cannot Find Your MS-DOS Directory..."
permalink: /kb/101/Q101305/
---

## Q101305: SETUP /E Err Msg: Setup Cannot Find Your MS-DOS Directory...

	Article: Q101305
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive an error message similar to the following if you run SETUP /E to
	install the optional utilities that ship with MS-DOS (Backup, Anti-Virus, and
	Undelete):
	
	  You started Setup with the /E switch, which installs the optional programs
	  that came with MS-DOS 6. However, Setup cannot find your MS-DOS directory...
	
	CAUSE
	=====
	
	This message goes on to say that Setup could not find your MS-DOS directory
	because you have not installed MS-DOS or your MS-DOS directory is not included
	in your path. This error can also occur if Setup cannot find one or more of the
	following files in the MS-DOS directory:
	
	  SYS.COM
	  FORMAT.COM
	  DISKCOPY.COM
	
	WORKAROUND
	==========
	
	To correct this problem, copy or expand these files from the MS-DOS 6 or 6.2
	Setup disks. DISKCOPY.COM is a compressed file on the installation disks and
	must be expanded using the EXPAND command, for example:
	
	  expand a:\diskcopy.co_  c:\dos\diskcopy.com
	
	SYS.COM and FORMAT.COM are not compressed; therefore, you can use the COPY
	command as follows:
	
	  copy a:\sys.com c:\dos\sys.com
	  copy a:\format.com c:\dos\format.com
	
	Additional query words: 6.22 6.00 SETUP/E switch uncompressed decompressed 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
