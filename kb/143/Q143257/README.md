---
layout: page
title: "Q143257: Microsoft Plus! Requires Minimal Space on Windows 95 Drive"
permalink: /kb/143/Q143257/
---

## Q143257: Microsoft Plus! Requires Minimal Space on Windows 95 Drive

{% raw %}

	Article: Q143257
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 19-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Microsoft Plus! on a hard disk other than the hard disk
	on which Windows 95 is installed, you may receive the following error message:
	
	  There is not enough disk space to complete installation. You can change your
	  installation options, continue installation, or exit Setup.
	
	You may receive this message even if there is enough room on the hard disk to
	install Microsoft Plus!.
	
	CAUSE
	=====
	
	When you install Microsoft Plus! on a hard disk other than the hard disk on
	which Windows 95 is installed, Microsoft Plus! Setup uses approximately 18
	megabytes (MB) of space on the hard disk on which Windows 95 is installed. This
	space is used for temporary files that are removed when Setup is finished, and
	for additional files that remain on the hard disk after Setup is finished. These
	additional files can include .dll, .vxd, .inf, .exe, .cur, .ani, .scr, .hlp, and
	.cnt files.
	
	RESOLUTION
	==========
	
	To work around this behavior, remove files from the hard disk on which Windows
	95 is installed so that there is at least 18 MB of free space on the hard disk.
	If you cannot remove enough files to create 18 MB of free hard disk space, you
	may be able to reduce the size or change the location of the Windows swap file.
	For information about modifying swap file settings, view the "Reserving disk
	space for extra memory" topic in Windows 95 Help, or see the following article
	in the Microsoft Knowledge Base:
	
	  Q128327 How Windows 95/98 Manages Virtual Memory
	
	======================================================================
	Keywords          : win95 
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
