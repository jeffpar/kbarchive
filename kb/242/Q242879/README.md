---
layout: page
title: "Q242879: TP_Start Fails and Logs Event ID 705 if Installed in MTS Package"
permalink: kb/242/Q242879/
---

## Q242879: TP_Start Fails and Logs Event ID 705 if Installed in MTS Package

	Article: Q242879
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,3.0 U.S. SP1,3.0 U.S. SP2,4.0,4.0 SP1,4.0 S
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 3.0 U.S. SP1, 3.0 U.S. SP2, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 U.S. SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A COM component has been designed to implement SNA communications through the
	Advanced Program-to-Program Communications (APPC) API. If the component is used
	independent of Microsoft Transaction Server it successfully executes. If this
	component is installed in a Microsoft Transaction Server package a security
	error may be posted in the Windows NT Application Event Log and display the
	following error message:
	
	  9/24/99 11:34:55 AM SNA APPC Application Warning None 705
	  Logon Failed.
	
	  EXPLANATION Connection request failed due to data security.
	  Access denied --- Error Code : 43
	  ACTION Contact your network support personnel.
	
	A resulting SNA Server APPC API Trace, such as the following, can appear.
	
	  TP_Started Response, result = COMMS_SUBSYTEM_ABENDED
	
	CAUSE
	=====
	
	The Microsoft Transaction Server package Identity may be set to that of
	Interactive User - the currently logged on user.
	
	RESOLUTION
	==========
	
	Use the Microsoft Transaction Server Explorer to change the package identity to
	that of a user allowed access to SNA Server.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q183789 Host Fails To Allocate Session to A CONNECT:Direct Client On NT
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,3.0 U.S. SP1,3.0 U.S. SP2,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 U.S. SP1
	
	=============================================================================
	
