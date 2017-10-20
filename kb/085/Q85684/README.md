---
layout: page
title: "Q85684: Compressed QBASIC.EXE Gives &quot;Out of Memory&quot; Error with Editor"
permalink: /kb/085/Q85684/
---

## Q85684: Compressed QBASIC.EXE Gives &quot;Out of Memory&quot; Error with Editor

{% raw %}

	Article: Q85684
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you rename or copy the compressed QBASIC.EX_ file to QBASIC.EXE without using
	the MS-DOS 5.0 EXPAND utility, any attempt to start MS-DOS 5.0 Editor will give
	an "Out of memory" message.
	
	MORE INFORMATION
	================
	
	Editor uses of the QBasic interpretive editor. When QBASIC.EXE is compressed or
	is corrupt, Editor will give an "Out of memory" error when loading.
	
	RESOLUTION
	==========
	
	To correct this problem, expand QBASIC.EX_ to QBASIC.EXE by typing the following
	from the MS-DOS directory
	
	  " expand [drive:]qbasic.ex_ c:\dos\qbasic.exe" (without the quotation marks)
	
	where [drive:] is the floppy drive location of the compressed file.
	
	
	Additional query words: 5.00 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	

{% endraw %}
