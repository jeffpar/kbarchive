---
layout: page
title: "Q201359: Synchronizing Windows NT to AS/400 Passwords Using HSI"
permalink: kb/201/Q201359/
---

## Q201359: Synchronizing Windows NT to AS/400 Passwords Using HSI

	Article: Q201359
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Host Security Integration (HSI) and select the Password
	is Replicated option from the Host Security Domain properties, you can change a
	Windows NT user password, while synchronizing the password change to the AS/400
	user database at the same time .
	
	The initial password change request can come from anyone of the following
	sources:
	
	- Windows NT Server by using User Manager for Domains
	
	- Windows NT Workstation by using the CTRL-ALT-DELETE key combination, and then
	  selecting Change Password
	
	- Windows 95/98 computer by clicking the Passwords icon in Control Panel
	
	When a password change request is completed from one of the above sources, the
	end user can log off, and then log back on to Windows NT using the "new"
	password. However, if a password change request fails to complete in the AS/400
	user database, the end user has no way of knowing until the next time they
	request a session. If you use the 5250 applet that ships with SNA Server, the
	following error message occurs when you use the "new" password:
	
	  The host system rejected the connection due to a security validation error.
	  Please check your session configuration.
	
	  [0003] [080F6051]
	
	The following is the Primary and Secondary return code information:
	
	  PRC = [0003] AP_ALLOCATION ERROR
	  APPC has failed to allocate a conversation. The conversation state is set to
	  RESET.
	
	  SRC = [080F6051] AP_SECURITY_NOT_VALID
	  The user ID or password specified in the allocation request was not accepted
	  by the partner LU.
	
	Note: Other third-party emulators may report a different error message.
	
	CAUSE
	=====
	
	In most cases, the cause for this problem is due to a set of rules or "System
	Values" on the AS/400 user database, which is similar to the "Account Policies"
	in Windows NT User Manager for Domains.
	
	Additional Information:
	
	Viewing the application log in the Event Viewer may help in resolving why a "new"
	password was rejected from the AS/400. Every time the password is rejected, it
	records various logs, normally four entries total. The following two are always
	recorded:
	
	  Event 6005 - Source: AS400 MDSI
	  Event 1506 - Source: SNA Host Security
	
	You then receive two additional events, which may provide more detail. In the
	following example, a password of 10 characters is used, which the AS/400 does
	not allow:
	
	  Event 6012 - Source: AS400 MDSI
	
	  The AS/400 in domain <HS_Domain_Name> reports that the new password for
	  <User_Id> is invalid for the following reason:
	
	  Password longer than 8 characters.
	
	  Event 1513 - Source: SNA Host Security
	
	  New host password supplied is longer than maximum allowed.
	
	The events from this next example occur as a result of the password being the
	same as the AS/400 User ID, which the AS/400 does not allow:
	
	  Event 6012 - Source: AS400 MDSI
	
	  The AS/400 in domain <HS_Domain_Name> reports that the new password for
	  <User_Id> is invalid for the following reason:
	
	  Password cannot be same as user ID.
	
	  Event 1511 - Source: SNA Host Security
	
	  Invalid new password for the host user was specified.
	
	RESOLUTION
	==========
	
	Correct the restriction for the user's password as indicated by the event
	message. If the message does not include the actual problem description, view
	the System Operator Messages on the AS/400 for more information.
	
	MORE INFORMATION
	================
	
	With Host Security Integration, you can change and synchronize passwords from a
	Windows NT user database to an AS/400 user database running V3R1 or later
	without any additional host (AS/400) code being needed. This unidirectional
	password change is made possible by the Sec400.dll file that is installed when
	your Host Security Domain is configured.
	
	For bi-directional password changes (AS/400 to Windows NT), third-party software
	is required. Please see the Companion Products Catalog on the SNA Server compact
	disc for references.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q175063 Host Security Integration Setup and Architectural Overview
	
	Additional query words: sync
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbhowto kbprb
	
	=============================================================================
	
