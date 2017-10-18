---
layout: page
title: "Q177807: XADM: Online Backup of the Store or Directory May Stop"
permalink: kb/177/Q177807/
---

## Q177807: XADM: Online Backup of the Store or Directory May Stop

	Article: Q177807
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP1
	Operating System(s): 
	Keyword(s): exc5sp1
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Any backup program that uses the Microsoft Exchange Backup Extensions to perform
	an online backup of the information store or the directory may stop responding
	with an Access Violation into Dr. Watson.
	
	CAUSE
	=====
	
	The Exchange Backup Extensions are looking for available TCP/IP Socket addresses
	to perform the backup. This seems to only happen on a local backup. Remote
	backups of the information store or the directory are successful.
	
	WORKAROUND
	==========
	
	To work around this problem, back up the information store and the directory
	from a remote location.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the Post-SP2 fix for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	If you have the proper Windows NT and Exchange debug symbols installed, you will
	see the follow information in a DRWTSN32.LOG that is created by the Dr. Watson
	Application Debugger:
	
	  FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	  00000010 00000000 00000000 00000000 00000000 00000000
	  edbbcli!HrClnSockAddrFromSocket
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange500SP1
	Version           : winnt:5.0 SP1
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
