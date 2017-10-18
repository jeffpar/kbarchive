---
layout: page
title: "Q218165: WAPPC32 Ignores User ID Provided By APPC App On Consecutive Allo"
permalink: kb/218/Q218165/
---

## Q218165: WAPPC32 Ignores User ID Provided By APPC App On Consecutive Allo

	Article: Q218165
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna300sp4fix kbsna400sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the host supports LU6.2 persistent verification or already verified security,
	and an APPC application calls TP_STARTED once, followed by multiple
	[MC_]ALLOCATE requests for consecutive conversations, the User ID provided in
	subsequent [MC_]ALLOCATE requests may be ignored, causing the persistent
	verification session to be used.
	
	However, if the APPC application issues a new TP_STARTED for every [MC_]ALLOCATE
	request, this problem does not occur.
	
	CAUSE
	=====
	
	The Wappc32.dll file was failing to clear the user_id field on subsequent
	allocation requests (where security=AP_SAME) made over an LU6.2 session that
	supports persistent verification or already verified security.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 4.0.
	This problem was first corrected in SNA Server version 3.0 Service Pack 4 and
	SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	APPC applications which call TP_STARTED before every [MC_]ALLOCATE will not
	encounter this problem.
	
	This problem occurs in the following conditions:
	
	- The LU6.2 session supports either "persistent verification" or "already
	  verified" security.
	
	- The APPC application must call TP_STARTED once, followed by consecutive
	  [MC_]ALLOCATE requests, with security = AP_SAME and a user_id and password is
	  specified.
	
	The SNA Server APPC API and message traces will reveal the following behavior. In
	this case, the APPC application issues three consecutive MC_ALLOCATE requests
	with security=AP_SAME along with userID and password on a session that supports
	persistent verification. But, the Wappc32.dll file appears to resend the initial
	user ID over and over, ignoring the user ID provided by the application:
	
	1. APPC app issues MC_ALLOCATE, sends userid = WNW039, password = WHYNOT1, FMH-5
	  includes userid = WNW039, password = WHYNOT1
	
	2. APPC app issues MC_ALLOCATE, sends userid = WNWXXX, password = YYYY, FMH-5
	  includes userid = WNW039, password = YYYY
	
	3. APPC app issues MC_ALLOCATE, sends userid = XXXX, password = ZZZZZ, FMH-5
	  includes userid = WNW039, password = ZZZZZ
	
	Note that the APPC DLL always sends the same user ID, ignoring the user ID
	provided in the verb control block by the application.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
