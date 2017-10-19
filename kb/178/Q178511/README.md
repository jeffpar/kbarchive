---
layout: page
title: "Q178511: XWEB: Err Msg: Failed to Connect to Microsoft Exchange Server"
permalink: /kb/178/Q178511/
---

## Q178511: XWEB: Err Msg: Failed to Connect to Microsoft Exchange Server

	Article: Q178511
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to log on to a Microsoft Exchange Server computer using
	Microsoft Outlook Web Access (OWA), you may receive the following error
	message:
	
	  Failed to connect to the Microsoft Exchange Server, <servername>.
	
	CAUSE
	=====
	
	This error can be caused by incorrect permissions being set on the Winnt
	directory or all of its sub-directories or both. Additionally, incorrect
	permissions on the Exchsrvr\Webdata directory and all of its sub- directories,
	or incorrect permissions on the Exchsrvr\Webtemp directory and all of its
	sub-directories may cause the error to occur.
	
	WORKAROUND
	==========
	
	If you are using Exchange Server version 5.0, the Winnt directory and all of its
	subdirectories must have Change permissions set on them for the Domain Users
	group. The Winnt\System32 directory must have at least Read permissions set for
	the Domain Users group.
	
	When you use Microsoft Exchange Active Server Components to access information on
	a computer running Microsoft Exchange Server, files with an .mmp extension are
	created in your Winnt directory by default.
	
	The .mmp file is a temporary file used by Active Messaging to store certain
	profile information during the active session. This file should be deleted after
	the user logs off and the session is closed.
	
	Because these files must be created dynamically, the Microsoft Internet
	Information Server (IIS) Anonymous Logon account (IUSR_Server by default) needs
	to have Change permissions on the Winnt directory. Refer to Microsoft Knowledge
	Base article Q166599, "XWEB: .MMP File Created by MS Exchange Active Server,"
	for an optional workaround to having Change permissions on the Winnt directory.
	
	If you are using Exchange Server version 5.0 Service Pack 1 or later, verify that
	the Winnt directory and all of its sub-directories have at least Read
	permissions set on them for the Domain Users group. Verify that the
	Winnt\System32 directory has at least Read permissions set for the Domain User
	group.
	
	If you are using Exchange Server version 5.5 or later, no special permissions
	have to be set on the Winnt directory.
	
	You may need to change the permissions on the Exchsrvr\Webdata directory and all
	of its sub-directories to Read. Verify also that the Exchsrvr\Webtemp directory
	and all of its sub-directories are set to Change.
	
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
