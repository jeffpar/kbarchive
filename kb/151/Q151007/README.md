---
layout: page
title: "Q151007: IBM ThinkPad Drives Have Problem w/ Read/Write and Media Change"
permalink: /kb/151/Q151007/
---

## Q151007: IBM ThinkPad Drives Have Problem w/ Read/Write and Media Change

	Article: Q151007
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some models of the IBM ThinkPad use a model 30[ASCII 151]style floppy disk
	drive. The drive may have read, write, and/or media change problems.
	
	CAUSE
	=====
	
	NTDetect.com does not properly detect the Model Byte and Sub-Model Byte of the
	IBM ThinkPad. The following models are affected and require an updated
	NTDetect.com for proper floppy disk drive operation:
	
	  IBM ThinkPad 340C/CSE
	  IBM ThinkPad 370C
	  IBM ThinkPad 345C/CS
	
	ADDITIONIAL INFORMATION
	-----------------------
	
	You can find additional
	(http://support.microsoft.com/download/support/mslfiles/additional) information
	on the IBM ThinkPad and Windows NT at the following URL:
	http://www.pc.ibm.com/support/tps/winnt.html.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
