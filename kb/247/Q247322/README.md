---
layout: page
title: "Q247322: &quot;Error Reading Configuration File&quot; When Using the 3270 Applet"
permalink: /kb/247/Q247322/
---

## Q247322: &quot;Error Reading Configuration File&quot; When Using the 3270 Applet

	Article: Q247322
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A workstation running the SNA client software may receive the following error
	when trying to make a connection to a host through SNA Server using the 3270
	Applet:
	
	  Error Reading Configuration File.
	
	In addition, an Event 705 may be logged on the SNA Server in the Application
	Event log with the following description:
	
	  Logon Failed.
	  EXPLANATION Connection request failed due to data security.
	
	CAUSE
	=====
	
	The user who is logged onto the client computer is not logged onto the Windows
	NT domain that the SNA Server is a member of, or the user has not been given
	access to any logical units (LUs) on the SNA Server.
	
	RESOLUTION
	==========
	
	To resolve the error, use any of the following methods:
	
	- Create a trust between the Windows NT domain that the client user is logged
	  onto and the one in which the SNA Server resides. Assign the user (or group
	  that the user is a member of) appropriate LUs in the Configured Users folder
	  in SNA Manager.
	
	- Create a user ID and password in the Windows NT domain in which the SNA
	  Server resides that is identical to the user account and password that the
	  user uses to log onto his or her Windows NT domain. Assign the user (or group
	  that the user is a member of) appropriate LUs in the Configured Users folder
	  in SNA Manager.
	
	- Enable the Windows NT guest account on the SNA Server. Assign this account
	  appropriate LUs on the SNA Server. The client users must log on as "guest" in
	  the Windows NT domain in which the SNA Server resides in order to obtain
	  access to the LUs assigned to the guest user.
	
	Please refer to SNA Server Help for more information on assigning LUs to users
	and groups and enabling the Windows NT guest account.
	
	MORE INFORMATION
	================
	
	The following article in the Microsoft Knowledge Base describe other scenarios
	that could cause the "Error Reading Configuration File" and Event 705 messages:
	
	  Q168096 Windows 95 SNA Server Client and Encryption Requirements
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
