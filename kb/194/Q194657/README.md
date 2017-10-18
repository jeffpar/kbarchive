---
layout: page
title: "Q194657: XADM: Unable to Post a Reply to Exchange 5.5 Newsgroup Folder"
permalink: kb/194/Q194657/
---

## Q194657: XADM: Unable to Post a Reply to Exchange 5.5 Newsgroup Folder

	Article: Q194657
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp2fix exc55 exc55sp1
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some Internet News readers may be unable to post a reply to a newsgroup folder
	hosted on an Exchange Server 5.5 computer if the server has been configured to
	not allow anonymous access.
	
	
	CAUSE
	=====
	
	When anonymous access has been disabled on an Exchange Server 5.5 computer, the
	server responds to a client connection with a 201 banner (no posting allowed).
	
	Here is an example of the banner received by the client:
	
	  201 Microsoft Exchange Internet News Service Version 5.5.1960.6 (no
	  posting)
	
	Because posting is allowed (as long as the client authenticates), the banner
	returned should be a 200 (posting allowed):
	
	  200 Microsoft Exchange Internet News Service Version 5.5.1960.6 (posting
	  allowed)
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Information Store
	
	  File Name     Version
	  -----------------------
	  STORE.EXE     5.5.2405.0
	  MDBMSG.DLL    5.5.2405.0
	  GAPI32.DLL    5.5.2405.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5 for Windows
	NT.
	
	Additional query words: Reply to Group Post Grayed Out Disabled
	
	======================================================================
	Keywords          : exc55sp2fix exc55 exc55sp1 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5,5.5 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
