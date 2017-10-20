---
layout: page
title: "Q150845: Windows NT 3.51 Setup on AST Manhattan w/Sanyo CD-ROM"
permalink: /kb/150/Q150845/
---

## Q150845: Windows NT 3.51 Setup on AST Manhattan w/Sanyo CD-ROM

{% raw %}

	Article: Q150845
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During setup of Windows NT 3.51 on an AST Manhattan with an integrated NCR SCSI
	controller and Sanyo CDR254S CD-ROM drive, file corruption may occur during the
	NT Setup file copy process.
	
	CAUSE
	=====
	
	The version of the NCR driver that ships with Windows NT 3.51 does not work
	properly with the Sanyo CD-ROM drive.
	
	RESOLUTION
	==========
	
	Obtain the latest driver file NT351DRV.ZIP from the SymBios Logic BBS at
	719-573-3562 or FTP at ftp.symbios.com in the
	/pub/ncrchips/scsi/drivers/Win_Drivers/NT_351 directory.
	
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: prodnt 53c8xx 53c810
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
