---
layout: page
title: "Q192582: XCLN: Cannot Log On with Account Containing Extended Characters"
permalink: kb/192/Q192582/
---

## Q192582: XCLN: Cannot Log On with Account Containing Extended Characters

	Article: Q192582
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:8.03,8.5
	Operating System(s): WINDOWS
	Keyword(s): exc55sp2fix
	Last Modified: 31-DEC-1998
	
	---------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Windows NT client, versions 8.03, 8.5
	- Microsoft Outlook Windows 95/98 client, versions 8.03, 8.5
	---------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user does one of the following:
	
	- Logs on to Exchange with an account from a Windows NT domain that is not
	  trusted by the Windows NT domain of the Exchange Server computer.
	
	-OR-
	
	- Uses the "Use Network Security during Logon" option.
	
	The user is prompted to enter credentials for the target domain.
	
	If the user name contains an extended character (ASCII over 127), such as
	the character <93><F1><94> (Alt 0241), the user cannot log on. The correct
	credentials are rejected with the following error message:
	
	  The logon credentials supplied were incorrect. Make sure your username
	  and domain are correct, then type your password again.
	
	WORKAROUND
	==========
	
	To work around this problem, do not use the "Use Network Security during
	Logon" option, and have the users and the Exchange Server computer in the
	same Windows NT domain.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q191014
	  TITLE     : XGEN: How to Obtain the Latest Exchange Server 5.5 Service
	              Pack
	
	The English version of this fix should have the following file attributes
	or later:
	
	  Component: Outlook
	
	  File Name      Version
	  -------------------------
	  Emsabp32.dll   5.5.2392.0
	  Emsmdb32.dll   5.5.2392.0
	  Emsui32.dll    5.5.2392.0
	  Mspst32.dll    5.5.2392.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Outlook
	clients listed at the beginning of this article.
	======================================================================
	Keywords          : exc55sp2fix
	Version           : WINDOWS:8.03,8.5
	Platform          : WINDOWS
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
