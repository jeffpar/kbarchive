---
layout: page
title: "Q276273: Remote Administration Is Not Supported in Multiple Master Domain"
permalink: /kb/276/Q276273/
---

## Q276273: Remote Administration Is Not Supported in Multiple Master Domain

	Article: Q276273
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run SNA Manager on a client computer, and try to add users from trusted
	domains in a multiple master-domain environment, you only see the users or
	groups of the domains that the SNA client's domain trusts rather than the users
	or groups of the domains that the SNA Server's domain trusts.
	
	CAUSE
	=====
	
	The User Browser dialog box is starting in the client computer context, instead
	of the context of the SNA subdomain that is to be administered.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	(all Service Packs).
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	You may encounter this situation only when your SNA Server client computer is
	not a member of the same Microsoft Windows NT domain as the SNA Server's, and
	more than one account domain exists.
	
	You may see this problem in the following situation:
	
	- The SNA client is a member of domain A.
	
	- The SNA Servers are members of domain B.
	
	The following trust relationships might be established: domain A trusts domain C,
	domain B trusts domain C and domain D, while domain C and D are account
	domains.
	
	The client of domain A logs on, by using a user account of domain C. When SNA
	Manager is started on the client computer, pointing to the SNA subdomain's
	Servers from domain B, and you try to add a user record, you only get a list of
	users/groups from domain A and C.
	
	As a result, users or groups from domain B or D cannot be selected, even though
	the SNA Server's domain trusts domain D.
	
	Additional query words: user sp1 sp2 sp3 snaole
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
