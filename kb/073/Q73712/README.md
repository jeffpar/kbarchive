---
layout: page
title: "Q73712: Running Solomon III Accounting Software with MS-DOS 5.0"
permalink: /kb/073/Q73712/
---

## Q73712: Running Solomon III Accounting Software with MS-DOS 5.0

{% raw %}

	Article: Q73712
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Solomon III version 7.0 is an accounting program by TLB. When you run the
	start-up file SOLOMON.INI at the command prompt, your computer may stop
	responding (hang).
	
	Editing the SOLOMON.INI file should make Solomon III compatible with MS-DOS
	version 5.0.
	
	MORE INFORMATION
	================
	
	To use Solomon III with MS-DOS 5.0, you must delete two lines in the SOLOMON.INI
	file. The following procedure uses MS-DOS Editor to modify the SOLOMON.INI file.
	Editor is an MS-DOS 5.0 feature; with earlier versions of MS-DOS, use the Edlin
	editor.
	
	1. Change to the \ACCT\PROG directory;
	
	2. From the command prompt, type the following and press ENTER:
	
	  " EDIT SOLOMON.INI" (without the quotation marks)
	
	3. Delete line #6, which starts with "COMPVERS", and delete line #7, which
	  starts with "IF ERROR LEVEL...". Save the edited file, and exit MS-DOS
	  Editor. Retry executing the SOLOMON.INI file.
	
	NOTE: Solomon III version 7.1 is compatible with MS-DOS 5.0.
	
	The product included here, Solomon III, is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
