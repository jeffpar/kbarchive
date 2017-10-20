---
layout: page
title: "Q76998: Running Lansmart with MS-DOS 5.0"
permalink: /kb/076/Q76998/
---

## Q76998: Running Lansmart with MS-DOS 5.0

{% raw %}

	Article: Q76998
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Lansmart has confirmed that there are two requirements for compatibility between
	Lansmart and MS-DOS 5.0:
	
	- Lansmart version 3.0
	
	- SHARE.EXE copied from the DOS subdirectory to the Lansmart subdirectory
	
	When installing MS-DOS 5 Upgrade after installing Lansmart, the following error
	message may be displayed:
	
	  Incorrect DOS Version
	
	If you do get this error message, it can be resolved by copying the file
	SHARE.EXE from the MS-DOS 5.0 directory to the Lansmart subdirectory.
	
	Lansmart is a peer-to-peer network made by D-Link Datex Systems Inc.
	
	MORE INFORMATION
	================
	
	If Lansmart is upgraded after the MS-DOS 5 Upgrade installation, the SHARE.EXE
	file will be copied to the Lansmart subdirectory as part of the upgrade
	procedure. The SHARE.EXE file in the Lansmart directory is from the DOS version
	before the the MS-DOS Upgrade was installed.
	
	SHARE.EXE is needed for file sharing in a network environment.
	
	There are two releases of Lansmart 3.0. The first release, with file dates of
	7-12-91 or earlier, is not compatible with MS-DOS 5.0. Lansmart made a silent
	release to resolve the compatibility problem.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Reference(s):
	
	Lansmart: (714) 455-1688
	
	Additional query words: 3.00 5.00 3rdparty phone number phoneref
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
