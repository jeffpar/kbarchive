---
layout: page
title: "Q174380: XADM: Setup Marks Mapi32.dll and Exchmem.dll as System"
permalink: /kb/174/Q174380/
---

## Q174380: XADM: Setup Marks Mapi32.dll and Exchmem.dll as System

	Article: Q174380
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you try to install or upgrade Microsoft Exchange Server while another service
	(such as a FAX server) is using core MAPI services, then Microsoft Exchange
	Server setup cannot complete successfully. You will receive "File in use" errors
	regarding the Mapi32.dll and Exchmem.dll files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
