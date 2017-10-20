---
layout: page
title: "Q78722: DOSKEY Error Message: &quot;Cannot Change BUFSIZE&quot;"
permalink: /kb/078/Q78722/
---

## Q78722: DOSKEY Error Message: &quot;Cannot Change BUFSIZE&quot;

{% raw %}

	Article: Q78722
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you try to change the buffer size of the MS-DOS 5.0 or later DOSKEY.COM
	utility and DOSKEY is currently active, the following error message is
	displayed:
	
	  Cannot change BUFSIZE.
	
	If this error is displayed, you must run a new copy of DOSKEY to increase or
	decrease buffer size.
	
	MORE INFORMATION
	================
	
	DOSKEY.COM, included with MS-DOS 5 or later Upgrade, allows MS-DOS commands to
	be recalled and edited. DOSKEY may also be used to create command macros (DOSKEY
	macros).
	
	You can change the size of the buffer in which DOSKEY stores commands and DOSKEY
	macros with the /BUFSIZE= switch. This switch may only be used when starting the
	DOSKEY program. The default buffer size for the DOSKEY utility is 512 bytes, and
	the minimum setting for the buffer is 256 bytes.
	
	To start the DOSKEY utility with a buffer size larger or smaller than the
	default, use the following command:
	
	  doskey /bufsize=<size>
	
	(Where <size> is the desired DOSKEY buffer size in bytes.)
	
	If a copy of the MS-DOS DOSKEY utility has already been installed, you must
	reinstall it to increase the buffer size with the /BUFSIZE= switch.
	
	For example, to reinstall DOSKEY with a buffer size of 1024 bytes, type the
	following at the MS-DOS prompt:
	
	  " doskey /reinstall /bufsize=1024 " (without the quotation marks)
	
	Note: When DOSKEY is reinstalled, all DOSKEY macros and the DOSKEY command
	history will be erased.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 dos key
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
