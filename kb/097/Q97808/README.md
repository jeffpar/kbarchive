---
layout: page
title: "Q97808: Microsoft Anti-Virus Err Msg: File &lt;Filename&gt; Was Changed"
permalink: /kb/097/Q97808/
---

## Q97808: Microsoft Anti-Virus Err Msg: File &lt;Filename&gt; Was Changed

{% raw %}

	Article: Q97808
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following message when you run Microsoft Anti-Virus:
	
	  File <filename> was changed
	
	CAUSE
	=====
	
	This message occurs if either of the following conditions exist:
	
	- You upgraded from a beta version of MS-DOS Upgrade to a later or final
	  version.
	
	  -or-
	
	- You ran Central Point Anti-Virus before upgrading to MS-DOS 6.x and Microsoft
	  Anti-Virus.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Delete the CHKLIST.MS or CHKLIST.CPS file from the DOS directory.
	
	
	2. Run Microsoft Anti-Virus (MSAV.EXE) or Microsoft Anti-Virus for Windows
	  (MWAV.EXE).
	
	3. Delete all CHECKSUM files. If you are running the MS-DOS-based version, press
	  the F7 key. If you are running the Windows-based version, choose Delete
	  CHKLIST Files from the Scan menu.
	
	4. Scan your drive(s) to create new CHECKSUM files.
	
	Additional query words: 6.22 6.00 6.20 test tester tested testing error err msg errmsg msav
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
