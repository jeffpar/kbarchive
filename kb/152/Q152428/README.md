---
layout: page
title: "Q152428: Initialization Failure in Rasman.dll When Shutting Down"
permalink: kb/152/Q152428/
---

## Q152428: Initialization Failure in Rasman.dll When Shutting Down

	Article: Q152428
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT may stop responding on shutdown and/or the following message may
	appear:
	
	  Initialization of the dynamic link library
	  c:\winnt35\system32\rasman.dll failed. The process is terminating
	  abnormally.
	
	CAUSE
	=====
	
	The service controller issues an asynchronous TransactNamedPipe and asks it to
	read four bytes to a stack variable. It then waits two minutes for the
	TransactNamedPipe to finish. After two minutes it returns from the function
	without canceling the operation. When the operation finishes it overwrites the
	stack.
	
	
	RESOLUTION
	==========
	
	The I/O operation is canceled before the function returns.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt EMS hung
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
