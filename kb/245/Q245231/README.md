---
layout: page
title: "Q245231: SNA Server and Mode Session Limit Errors"
permalink: kb/245/Q245231/
---

## Q245231: SNA Server and Mode Session Limit Errors

	Article: Q245231
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article explains possible causes of session limit errors in the application
	event log. When the session limit is exceeded, users cannot start any additional
	LU6.2 sessions. The following error messages may be recorded when the session
	limit has been exceeded:
	
	- Event 26: APPC session activation failure: session limit error
	
	- Event 18: APPC session activation failure: BIND negative response or UNBIND
	  request received
	  Sense data = 0805 0000
	
	WORKAROUND
	==========
	
	These error messages occur most frequently when the SNA Server connection is to
	an AS/400. In addition to the error messages in the event log, users cannot
	start new 5250 sessions and may report a blank screen. If you are trying to
	establish a session to the AS/400, check the following:
	
	- Use the SNA Server Manager APPC Session Viewer utility to check the session
	  limit and number of sessions in use for the local LU-remote LU-mode triplet.
	  It may be necessary to increase the session limits in the mode definition.
	  Note: The maximum session limit for a mode on the AS/400 is 512. If you
	  require more than 512 sessions to an AS/400, create another local LU and
	  enable the Member of Default outgoing Local APPC LU Pool check box.
	
	- 5250 sessions require a unique device name for each session. Verify that the
	  user is not attempting to use a device name that is already in use.
	
	- Verify that the mode QPCSUPP has not been deleted from SNA Server or the
	  AS/400. This mode should exist on both the SNA Server and the AS/400.
	
	- If there is a 5494 controller between the SNA Server and the AS/400, the 5494
	  may be limiting the number of sessions available. By default, the 5494
	  controller is limited to 32 sessions; however, a patch is available from IBM
	  to increase this limit to 128.
	
	For additional information about increasing mode session limits, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q126395 Ways to Increase the Number of AS/400 LU6.2 Sessions
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
