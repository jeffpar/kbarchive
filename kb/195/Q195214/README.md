---
layout: page
title: "Q195214: XADM: 5.5 SP1 Update Fails on 2nd Cluster Node with French PDC"
permalink: kb/195/Q195214/
---

## Q195214: XADM: 5.5 SP1 Update Fails on 2nd Cluster Node with French PDC

	Article: Q195214
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you apply Exchange Server 5.5 Service Pack 1 Update.exe on a secondary
	cluster node (inactive node), you are asked for the Exchange Service account
	password. When you type the correct password the following pop-up error message
	may be displayed:
	
	  The error 317 occurred while formatting windows NT error 2220 -
	  Microsoft Windows NT 0xc00208ac.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Setup and Administrator Programs
	
	  File Name      Version
	  -------------------------
	  Admin.exe      5.5.2438.0
	  Exupdate.exe   5.5.2438.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 1.
	
	MORE INFORMATION
	================
	
	The error above occurs if the Primary Domain Controller is using the French
	language, whatever the language of Exchange Server.
	
	To install this fix, perform the following steps:
	
	1. Perform a copy-and-paste operation for all the Service Pack 1 files to the
	  local hard drive of each cluster node.
	
	2. Perform a copy-and-paste operation for Exupdate.exe to the same directory
	  that contains Udpate.exe (this should be i386 on Intel- platform computers).
	
	3. Go to an MS-DOS command prompt and type the following to run Exupdate.exe on
	  the first (active) node:
	
	  EXUPDATE
	
	4. Run EXUPDATE (Exupdate.exe) on the second node.
	
	5. Replace the Service Pack 1 Admin.exe in <exchsrvr>\BIN with the new
	  fixed Admin.exe.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
