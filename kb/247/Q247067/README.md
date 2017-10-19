---
layout: page
title: "Q247067: Cluster Server Is Not Configured Properly After Unattended Setup"
permalink: /kb/247/Q247067/
---

## Q247067: Cluster Server Is Not Configured Properly After Unattended Setup

	Article: Q247067
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, used with:
	   - Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform an unattended setup of Cluster Server with multiple network
	connections declared for client access, Setup may not automatically choose the
	optimum network connection for the "Cluster IP address" resource. Instead, Setup
	may use the first network connection that is declared available for client
	access.
	
	CAUSE
	=====
	
	This problem can occur if you have declared more than one network connection as
	available for client access.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Declare only one network connection as available for client access.
	
	2. Declare all other network connections as "For internal communications only".
	
	3. After Setup has finished, use the command-line tool Cluster.exe to declare
	  any additional network connections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about declaring network connections, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q174794 How to Change Network Priority in a Cluster
	
	  Q174945 How to Prevent MSCS from Using Specific Networks
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
