---
layout: page
title: "Q145583: Err Msg: Insufficient System Resources Exist to Complete..."
permalink: kb/145/Q145583/
---

## Q145583: Err Msg: Insufficient System Resources Exist to Complete...

	Article: Q145583
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run User Manager for Domains or Server Manager, the following error
	message appears:
	
	  Insufficient system resources exist to complete the requested service. Do you
	  want to select another domain to administer?"
	
	
	CAUSE
	=====
	
	This problem occurs if the number of simultaneous active contexts to the SAM
	database in a domain has reached the maximum limit. The maximum number of
	simultaneous active contexts is 256. This is hard-coded and is not
	configurable.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest U.S. Service Pack for Windows NT
	Server version 3.51. For information on obtaining this update, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
