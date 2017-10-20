---
layout: page
title: "Q222121: Enhanced Security When Using Persistent Verification"
permalink: /kb/222/Q222121/
---

## Q222121: Enhanced Security When Using Persistent Verification

{% raw %}

	Article: Q222121
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
	
	When an APPC or CPIC application initially allocates a conversation over an
	LU6.2 session (where the remote system supports persistent verification, or
	"PV"), SNA Server stores the user ID in an internal PV signed-on list, sets the
	"PV sign-on requested" bit, and sends the user ID and password in the FMH-5
	Attach request to the host. When the same user attempts to allocate further
	conversations over the PV-enabled session, SNA Server sets the PV "already
	signed on" bit and the user ID in the FMH-5 Attach. But, SNA Server never
	verifies if the user password provided in subsequent conversation attempts
	matches the initial user password.
	
	See the "More Information" section below for a description of SNA Server behavior
	when the update is applied.
	
	CAUSE
	=====
	
	The IBM Persistent Verification specification appears to assume that the
	password provided on subsequent conversation requests for a given user is the
	same as the initial password provided by the user.
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 SP3, 4.0, 4.0 SP1
	and 4.0 SP2. This problem was first corrected in SNA Server version 3.0 Service
	Pack 4 and SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	With this update applied, SNA Server now caches the initial password provided by
	the user when the PV sign-on request occurs. On subsequent conversation requests
	from the same user, SNA Server verifies that the password matches the initially
	supplied password. If the passwords don't match, SNA Server no longer passes the
	user's conversation request over a PV-enabled session. Instead, SNA Server
	passes the user ID and password to the host for validation. In other words, if
	SNA Server suspects that an invalid password was provided, SNA Server does not
	indicate the use of persistent verification, and forces the host to reverify the
	request. When this occurs, SNA Server logs the following event to the Windows NT
	application event log:
	
	  Event ID: 63
	  Source: SNA Server
	  Description: Incorrect password received from client for logged on user
	
	  EXPLANATION
	  An invalid password was specified for a signed-on PV user (user ID: user).
	
	  This password will be forwarded to the host to verify. If the password has
	  changed, then the host wil accept the new password, and the conversation will
	  continue without persistent verification.
	  ACTION
	  If host rejects password, then check password, and try again.
	
	If this event occurs, the user still exists in the SNA Server PV signed-on list
	with the initially supplied password. If the user supplies a password that
	matches the initially supplied password, then the PV-enabled session is used.
	However, if the same user supplies a different password, SNA Server sends the
	user ID and password to the host but does not use PV.
	
	Note that a user is only removed from the SNA Server PV signed-on list if:
	
	- The remote system sends a Sign-Off GDS request to SNA Server.
	
	-or-
	
	- The LU-LU session limits drop to zero.
	
	For more information about persistent verification, see the following IBM
	reference:
	
	  SNA LU6.2 Peer Protocols, Section 1.3.2.3: Persistent Verification
	  IBM Document #SC31-6808
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp4fix kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
