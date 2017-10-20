---
layout: page
title: "Q109508: &quot;Bad File Mode&quot; Error When Running MS-DOS Help"
permalink: /kb/109/Q109508/
---

## Q109508: &quot;Bad File Mode&quot; Error When Running MS-DOS Help

{% raw %}

	Article: Q109508
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
	
	Starting MS-DOS Help results in the following error message:
	
	  Bad File Mode
	
	CAUSE
	=====
	
	"Bad File Mode" is a QBasic error message that can be generated under several
	different circumstances. Typically, this error occurs when HELP.COM, HELP.HLP,
	QBASIC.HLP, or QBASIC.EXE is corrupted.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Copy QBASIC.EXE and HELP.COM from your original MS-DOS 6.x Upgrade disks to
	  the directory that contains your MS-DOS files (typically C:\DOS).
	
	2. Expand HELP.HL_ to HELP.HLP. For example, if the directory that contains your
	  MS-DOS files is C:\DOS, and your original MS-DOS disk is in drive A, type
	  "expand a:\help.hl_ c:\dos\help.hlp" (without the quotation marks) at the
	  MS-DOS command prompt and then press ENTER.
	
	3. Expand QBASIC.HL_ to QBASIC.HLP. For example, if the directory that contains
	  your MS-DOS files is C:\DOS, and your original MS-DOS disk is in drive A,
	  type "expand a:\qbasic.hl_ c:\dos\qbasic.hlp" (without the quotation marks)
	  at the MS-DOS command prompt and then press ENTER.
	
	MORE INFORMATION
	================
	
	For a more detailed explanation of this error message, query on the following
	words in the Microsoft Knowledge Base:
	
	  " Bad File Mode " (without the quotation marks)
	
	
	Additional query words: err msg 6.22 6.00 6.20 QBASIC On-Line Help
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
