---
layout: page
title: "Q177900: AS/400 Prompts for Sign-on When SNA Server Is Enabled for SSO"
permalink: /kb/177/Q177900/
---

## Q177900: AS/400 Prompts for Sign-on When SNA Server Is Enabled for SSO

	Article: Q177900
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you configure SNA Server to support single sign-on (SSO) to an AS/400, you
	may be prompted with an AS/400 sign-on screen when you try to log on. In many
	environments, this is unacceptable and defeats the purpose of SSO. This can be
	avoided by modifying a system value on the AS/400.
	
	The QRMTSIGN system value specifies whether automatic sign-on from a remote
	system is allowed. If this value is set to *FRCSIGNON, the passthrough session
	begins with the normal sign-on screen and the user cannot achieve the benefits
	of full SSO. If the QRMTSIGN system value is set to *SAMEPRF or *VERIFY,
	passthrough sessions will bypass the normal sign-on procedure.
	
	WORKAROUND
	==========
	
	1. To use the operating system command to update or verify the system value,
	  enter
	
	  command WRKSYSVAL QRMTSIGN
	
	  at a command line and press F4.
	
	  NOTE: The user must have appropriate privileges (security officer or
	  administrator) to change system values on the AS/400.
	
	Display QRMTSIGN value
	----------------------
	
	1. Select Option 5 to display the current settings for QRMTSIGN. If the remote
	  sign-on control is *FRCSIGNON, press F3 to return to the Work with System
	  Values menu.
	
	Change QRMTSIGN value
	---------------------
	
	1. Select Option 2 to go to the Change System Value menu. In the Remote sign-on
	  control field, type in *SAMEPRF or *VERIFY . See Figure 1 below.
	
	------------------------------------------------------
	  |                Change System Value                   |
	  |                                                      |
	  | System value . . . . . :   QRMTSIGN                  |
	  | Description  . . . . . :   Remote sign-on control    |
	  |                                                      |
	  | Type choice, press Enter.                            |
	  |Remote sign-on control   *VERIFY       *FRCSIGNON     |
	  |                                       *SAMEPRF       |
	  |                                       *REJECT        |
	  |                                       *VERIFY        |
	  | - OR -                                               |
	  |                                                      |
	  |Remote session program                  Name          |
	  |  Library  . . . . . .                  Name          |
	  |                                                      |
	  |F3=Exit   F5=Refresh   F12=Cancel                     |
	------------------------------------------------------
	
	  Figure 1.
	
	MORE INFORMATION
	================
	
	For more information about SNA Server and host security, please see the
	following Microsoft Knowledge Base article:
	
	  Q175063 "Host Security Integration Setup and Architectural Overview"
	
	Additional query words: prodsna snahostsec
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbprb
	
	=============================================================================
	
