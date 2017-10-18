---
layout: page
title: "Q230515: COMTI Method Invocation Fails With Runtime Error 1426"
permalink: kb/230/Q230515/
---

## Q230515: COMTI Method Invocation Fails With Runtime Error 1426

	Article: Q230515
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2,4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 4.0 SP2 
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A COM Transaction Integrator (COMTI) method may fail to invoke properly when all
	of the following conditions are true:
	
	- The "Authenticate with User Credentials" check box is enabled in the Remote
	  Environment (RE).
	
	- The Windows NT domain name derived from the invoking user/process is 15
	  characters in length.
	
	- The application is not using explicit security credentials (application
	  override feature).
	
	The following error message may be posted to the Windows NT application event log
	if this problem occurs:
	
	  (102) COM Transaction Integrator reported the following exception to the
	  client:
	
	  Component: <COMTI Component Name>
	  Method: <COMTI Method>
	
	  Exception description: (1426) Could not derive object creator's domain and
	  user name from MTS context SID. System error 8004ff05.
	
	  EXPLANATION: An Automation exception representing an error condition was
	  returned to a COM Transaction Integrator client. The description shown above
	  contains more information about the exception that was reported.
	
	  ACTION: The exception may be caused by communication problems or errors in
	  your host application. See the exception description for corrective actions
	
	NOTE: This problem does not occur when the "Authenticate with Package
	Credentials" check box is enabled in the RE for the COMTI component.
	
	CAUSE
	=====
	
	COMTI fails to allocate a memory buffer large enough to handle Windows NT domain
	names that are 15 characters in length.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server version
	4.0 SP2. This problem was first corrected in SNA Server version 4.0 Service Pack
	3.
	
	MORE INFORMATION
	================
	
	When user-level security is enabled in the RE and the end-user application is
	not taking advantage of explicit security callbacks, COMTI must extract the
	domain and user account name of the base client that initiated the MTS activity
	and (indirectly) forward this along to the host account cache. If, for example,
	the COMTI component uses an RE configured for LU6.2 transport, the domain and
	user name extracted from the calling process are passed in the MC_ALLOCATE verb
	along with a flag indicating "privileged proxy" is specified for the account. If
	the RE is configured to use TCP/IP, COMTI will pass the extracted information
	directly to host account cache. If everything is configured correctly, the
	appropriate mainframe credentials are sent to the host.
	
	When this particular problem occurs, COMTI is unable to properly build the domain
	name, which results in a failed method invocation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI400SP2 kbComSearch
	Version           : WINDOWS:4.0 SP2,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
