---
layout: page
title: "Q159745: CWBSY1000 Communication Error w/ Client Access for Windows 95/NT"
permalink: /kb/159/Q159745/
---

## Q159745: CWBSY1000 Communication Error w/ Client Access for Windows 95/NT

{% raw %}

	Article: Q159745
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbui
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using an SNA Server as the communications provider for IBM Client
	Access for Windows 95 or Windows NT, the Local APPC LU alias must be defaulted
	in the SNA Server because Client Access does not specify the Local APPC LU alias
	when opening a conversation to the AS/400. Without this configuration, Client
	Access for Windows 95 and Windows NT will not be able to connect to any AS/400
	systems. The following error message will be displayed on the client computer:
	
	  CWBSY1000 - Communication error while validating security information on
	  system <AS400_System_Name>
	
	RESOLUTION
	==========
	
	There are two methods you can use to configure the local LU name. Both methods
	are in the SNA Server Administrator program and not on the clients.
	
	- Select the "Member of Default Outgoing Local APPC LU Pool" check box on the
	  Local APPC LU Properties dialog box for at least one of the local LUs. This
	  allows workstations that do not specify a local LU to connect to an AS/400
	  system using one of the LUs configured in this manner.
	
	  -or-
	
	- Assign each user or group a specific local LU. In the Properties dialog box
	  for each user or group listed in the Users and Groups window, select the
	  "Default Local APPC LU" check box..
	
	For additional information please see the README file included with IBM Client
	Access for Windows 95 and Windows NT.
	
	MORE INFORMATION
	================
	
	This error will also be documented in the History.hst file located in the
	Program Files\ibm\Client Access\Service directory, and in the application log of
	the Event Viewer as stated below (note that the LU alias is blank).
	
	  
	
	  Event Id 93
	
	  APPC local conversation start failed:
	
	  Primary_rc   = F004
	  Secondary_rc = 020000F0
	  TP_ID        = 0100000098265200
	  Dest TP name = 06F3F0F1
	  LU alias     =
	  PLU alias    = <AS400_System_Name>
	  Mode name    = D8D7C3E2E4D7D740
	
	  EXPLANATION
	  An attempt to start an APPC conversation locally using the verb
	  [MC_]ALLOCATE failed.
	
	  ACTION
	  Refer to the "Microsoft SNA Server APPC Programmer's Guide" for
	  information
	  about the displayed primary_rc and secondary_rc values.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: AS/400 CA/400
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbui 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	
	=============================================================================
	

{% endraw %}
