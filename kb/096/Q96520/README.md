---
layout: page
title: "Q96520: Windows Hangs at Logo Screen with FTP Network and DoubleSpace"
permalink: /kb/096/Q96520/
---

## Q96520: Windows Hangs at Logo Screen with FTP Network and DoubleSpace

{% raw %}

	Article: Q96520
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If you are running FTP Software's PC/TCP network software and Microsoft Windows
	in 386 enhanced mode, Windows may stop responding (hang) at the logo screen
	after you have compressed a drive with DoubleSpace.
	
	CAUSE
	=====
	
	Your SYSTEM.INI file may contain the line DEVICE=C:\PCTCP\VPCTCP.386 in the
	[386Enh] section. If it does, Windows may hang.
	
	The system hangs if the line DEVICE=C:\DOS\DBLSPACE.SYS /MOVE is not present in
	your CONFIG.SYS file before any of the drivers that load the network.
	
	WORKAROUND
	==========
	
	To correct this problem, add or move the line C:\DOS\DBLSPACE.SYS /MOVE before
	the first line that loads the network software. In most cases, the first line
	that starts the network is something similar to C:\PCTCP\PROTMAN.SYS
	/i:C:\PCTCP.
	
	
	Additional query words: 2.04 2.1 6.00 dblspace double space 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
