---
layout: page
title: "Q182417: OS/400 Version 3 Release 7 Password Synchronization May Fail"
permalink: kb/182/Q182417/
---

## Q182417: OS/400 Version 3 Release 7 Password Synchronization May Fail

	Article: Q182417
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Host Security Integration provides Windows NT Password Synchronization with
	AS/400s and mainframes. If password synchronization is configured for use with
	an AS/400 running OS/400 Version 3 Release 7, this function may fail.
	
	OS/400 may log the following error message:
	
	  Message ID . . . . . . : CPI96C4
	  Date sent . . . . . . : 12/31/97 Time sent . . . . . . :
	  13:32:10
	
	  Message . . . . : Password not correct for user profile.
	
	  Cause . . . . . : The password received by the APPC sign-on transaction
	  program in job 247945/QUSER/QACSOTP for user <AS/400 User Name> was not
	  correct.
	  Recovery . . . : Have the user correct the password and try the request
	  again.
	
	Note: This problem does not happen with OS/400 V3R1, V3R2, V3R6 or V4R1.
	
	WORKAROUND
	==========
	
	A fix is available from IBM that corrects the problem. The APAR (Authorized
	Problem Analysis Report) is SA61192 and PTF (Program Temporary Fix) is SF38334.
	
	STATUS
	======
	
	OS/400 is manufactured by IBM Corporation, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	For information about how to contact IBM, query in the Knowledge Base for one of
	the following articles:
	
	  Q65416 Hardware Software Third-Party Vendor Contact list, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbprb
	
	=============================================================================
	
