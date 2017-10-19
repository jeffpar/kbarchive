---
layout: page
title: "Q168717: SNA Server Performance Degrades If Domain Controller Down"
permalink: /kb/168/Q168717/
---

## Q168717: SNA Server Performance Degrades If Domain Controller Down

	Article: Q168717
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Users with active 3270 or LU6.2 sessions through SNA Server may unexpectedly
	observe degraded host or AS/400 response time. This problem can occur when new
	users attempt to open sessions to SNA Server and a domain controller (or trusted
	domain controller) from the user's domain is unavailable to process user logon
	requests.
	
	CAUSE
	=====
	
	When a new user connects to SNA Server, the SNA Server logs the user on to
	Windows NT, causing Windows NT to perform user logon validation against a domain
	controller in the user's domain. If the domain controller cannot be reached (for
	example, due to a transient network problem), currently connected clients can
	experience intermittent response time delays.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Identify and correct the underlying cause of the slow or failed access to the
	  trusted domain controllers.
	
	  -OR-
	
	- Break the Windows NT trust relationship with these trusted user domains, and
	  configure the SNA Server clients to connect to the SNA Server computers using
	  the Windows NT Guest account. This is only an option if all SNA clients have
	  the same access requirements. For example, if all users are accessing the
	  same 3270 LU pooled resources, or there is no defaulting of APPC LU's to
	  users or groups. If this workaround is used, note that the Guest account is
	  disabled by default within Windows NT User Manager, and must be manually
	  enabled. Even though the Guest account is enabled, access to any Windows NT
	  resources can still be prevented for guests, to allow access for SNA Server
	  client use only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11 (all service
	packs), 3.0 and 3.0 Service Pack 1 (SP1).
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	A fix to SNA Server 3.0 (post Service Pack 1) is available to correct this
	problem. With this fix applied, the SNA Server no longer handles client logon
	requests within an SNA Server DMOD critical section, and now processes logons
	asynchronously via other process threads.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
