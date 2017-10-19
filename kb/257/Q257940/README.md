---
layout: page
title: "Q257940: Digital Cluster Server Loses Drive Letter Assignment"
permalink: /kb/257/Q257940/
---

## Q257940: Digital Cluster Server Loses Drive Letter Assignment

	Article: Q257940
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you reboot a node on a Digital (Compaq) cluster server with an HSZ array
	controller connected to a Storage Works external shared array, the shared drive
	may appear to lose the drive letter assignment.
	
	CAUSE
	=====
	
	This behavior can occur when the Storage Works array reports back a smaller
	partition size than what was originally available on the logical disk. You can
	identify this by comparing the partition size to the logical disk size.
	
	RESOLUTION
	==========
	
	To resolve this behavior, re-initialize the logical disk from within the
	configuration utility for the HSZ array controller.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	For information about how to contact Compaq Computer Corporation, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
