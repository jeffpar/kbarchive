---
layout: page
title: "Q141469: Cannot Use Windows NT 3.51 Service Pack UPDATE.EXE Over Network"
permalink: /kb/141/Q141469/
---

## Q141469: Cannot Use Windows NT 3.51 Service Pack UPDATE.EXE Over Network

{% raw %}

	Article: Q141469
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP1,3.51 SP2,3.51 SP3,3.51 SP4,3.51 SP5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51 SP1, 3.51 SP2, 3.51 SP3, 3.51 SP4, 3.51 SP5 
	- Microsoft Windows NT Workstation versions 3.51 SP1, 3.51 SP2, 3.51 SP3, 3.51 SP4, 3.51 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to install a Windows NT Service Pack over the network using the
	UPDATE.EXE program located on the DISK1 of the Service Pack floppy disk set, the
	installation fails with the following error:
	
	  An error has occurred. Unable to open the file X:\disk1\BROWSER.DLL.
	
	  You may continue (ignoring the error), retry the operation, or exit Setup. If
	  you choose to ignore the error, Setup may not be able to completely and/or
	  correctly install the software. If you exit, you will have to repeat the
	  Setup process from the beginning.
	
	  Ignore Retry Exit Setup
	
	(where "X:" is your redirected drive)
	
	CAUSE
	=====
	
	UPDATE.EXE is not supposed to be used over the network. The UPDATE.EXE program
	uses an UPDATE.INF file which contains Source Media Descriptions to disk
	directory labels. When the program recognizes the install is not from floppy
	disks, it expects all files to be in the same directory. This is expected
	behavior.
	
	WORKAROUND
	==========
	
	To work around this problem, copy all files from the Disk X directories into a
	single directory on a local hard drive or network share. Then run the UPDATE.EXE
	program from that common directory.
	
	Additional query words: prodnt 3.10 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTSsearch kbWinNTS351search kbWinNTS351sp1 kbWinNTS351sp2 kbWinNTS351sp3 kbWinNTS351sp4 kbWinNTS351sp5 kbWinNTW351sp5 kbWinNTW351SP1 kbWinNTW351SP2 kbWinNTW351SP3 kbWinNTW351SP4
	Version           : :3.51 SP1,3.51 SP2,3.51 SP3,3.51 SP4,3.51 SP5
	
	=============================================================================
	

{% endraw %}
