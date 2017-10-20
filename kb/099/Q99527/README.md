---
layout: page
title: "Q99527: Backup, MSAV, and Defrag Don't Display Correctly on AST"
permalink: /kb/099/Q99527/
---

## Q99527: Backup, MSAV, and Defrag Don't Display Correctly on AST

{% raw %}

	Article: Q99527
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Backup, Microsoft Anti-Virus, or Microsoft Defragmenter
	(Defrag) on some AST laptop computers, the screen (specifically the borders of
	dialog boxes) do not display correctly. Characters within the dialog boxes are
	readable, but the borders are not.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following switches when you start
	the MS-DOS 6 or 6.2 application:
	
	  Backup      /LCD or /BW or /MDA
	  Defrag      /LCD or /BW
	  Anti-Virus  /LCD or /BW or /MONO or /NF
	
	
	Additional query words: 6.00 6.20 3.0 3.00 3.1 3.10 win30 insufficient 3rdparty msbackup hardware memory machine corrupted
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
