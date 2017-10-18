---
layout: page
title: "Q195201: XFOR: 5.0 and 5.5 Internet Mail Services Do Not Do AUTH NTLM"
permalink: kb/195/Q195201/
---

## Q195201: XFOR: 5.0 and 5.5 Internet Mail Services Do Not Do AUTH NTLM

	Article: Q195201
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Mail Service cannot support an authenticated SMTP connection
	between an Exchange Server 5.0 computer and an Exchange Server 5.5 computer.
	When the Exchange Server 5.0 computer tries to create a secure SMTP connection
	to the Exchange Server 5.5 computer, it will fail with a 502 authentication
	error, and users will get the following non-delivery report (NDR):
	
	  One or more mandatory argument(s) were missing from the recipient
	  MSEXCH:IMS:POF:FDRC:NTS2 3502 (000B0981) 502 Server does not support
	  AUTH.
	
	When the Exchange Server 5.5 computer tries to create a secure SMTP connection to
	the Exchange Server 5.0 computer, the version 5.0 server computer returns a 500
	command not recognized response.
	
	CAUSE
	=====
	
	Exchange Server 5.0 uses the SMTP extension XAUTH to set up NTLM authentication.
	Exchange Server 5.5 uses the SMTP extension AUTH to do this. When going from
	version 5.0 to 5.5, the server computer running Exchange Server 5.0 quits the
	SMTP session when it does not see XAUTH in the list of extensions offered by the
	computer running Exchange Server 5.5. When going from version 5.5 to 5.0, the
	server computer running Exchange Server 5.5 sends an AUTH NTLM command to the
	server computer running Exchange Server 5.0, which returns a 500 command not
	recognized response.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Internet Mail Service
	
	  File Name      Version
	  -------------------------
	  Msexcimc.exe   5.5.2394.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	To resolve this issue, the fix only needs to be applied to the server computer
	running Exchange Server version 5.5, no changes are required on the server
	computer running Exchange Server version 5.0.
	
	To install the hotfix, please perform the following step:
	
	Copy the Msexcimc.exe file included in the hotfix to the following location:
	
	  Exchsrvr\Connect\Msexcimc\Bin
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
