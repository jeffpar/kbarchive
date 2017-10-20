---
layout: page
title: "Q148618: No Load Balancing When You Invoke Many APPC Conversations"
permalink: /kb/148/Q148618/
---

## Q148618: No Load Balancing When You Invoke Many APPC Conversations

{% raw %}

	Article: Q148618
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	LU6.2 load balancing problems have been observed under two conditions:
	
	1. When a single program allocates multiple conversations:
	
	  If an APPC or CPIC program allocates multiple conversations at the same time
	  on an SNA Server client or server and SNA Server is configured to support
	  LU6.2 load balancing, the conversations may not load evenly across more than
	  one SNA Server.
	
	  For example, if a program tries to allocate 16 concurrent conversations across
	  two SNA Servers, which are configured to support 10 sessions each, the
	  program may allocate 10 conversations through the first server and two
	  conversations through the second server. The remaining four conversations are
	  queued against the first server.
	
	2. When multiple APPC or CPIC programs allocate conversations at once:
	
	  For example, if multiple programs are started and each tries to allocate one
	  conversation, where two SNA Servers are available, sessions tend to be
	  allocated from only one SNA Server.
	
	
	CAUSE
	=====
	
	This problem occurs when the LU6.2 sessions are not activated before the
	application attempts to allocate the conversations.
	
	When an APPC or CPIC application allocates a conversation, the SNA Server APPC
	interface attempts to locate an appropriate, available LU6.2 session on any SNA
	Server running in the domain or subdomain. It selects a server that has an
	active LU6.2 session before it tries to select a server that has an inactive
	LU6.2 session.
	
	If multiple conversations are allocated at the same time by a program, the APPC
	interface does not randomly select between servers if they all start LU6.2
	sessions. This can cause multiple conversation startup requests to be queued
	against a single SNA Server rather than load balancing across multiple SNA
	Servers.
	
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Configure the SNA Server and the APPC or CPIC program to support LU6.2 load
	  balancing. Ensure that the configuration is correct. For additional
	  information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q128244 SNA Server Load Balancing and Hot Backup
	
	2. Start the LU6.2 session before the application starts. LU6.2 sessions can
	  start automatically by setting the "autoactivation limit" in the SNA Server
	  APPC Mode entry (on SNA Server Admin) to the number of sessions.
	
	  If automatic LU6.2 session startup is not acceptable, an update to the SNA
	  Server APPC interface is available to improve load balancing (WAPPC32.DLL for
	  Windows NT and Windows 95 clients, and WINAPPC.DLL for Windows 3.x clients).
	
	3. Configure extra LU6.2 sessions on each SNA Server so that the SNA Server APPC
	  random server selection locates a server with an available LU6.2 session.
	
	  For example, if an application allocates 16 concurrent conversations against
	  two SNA Servers, each SNA Server should support at least 10 sessions each. If
	  you configure each server to support only eight sessions, some conversations
	  may still be queued against a server that has all LU6.2 sessions in use.
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11 and SNA Server
	2.11 Service Pack 1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	
	=============================================================================
	

{% endraw %}
