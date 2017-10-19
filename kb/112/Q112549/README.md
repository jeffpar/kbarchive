---
layout: page
title: "Q112549: Two PDCs in One Domain"
permalink: /kb/112/Q112549/
---

## Q112549: Two PDCs in One Domain

	Article: Q112549
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, versions 3.1, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When two different Windows NT Advanced Servers or Windows NT Servers in a domain
	think they are the Primary Domain Controller (PDC), the following error message
	may appear in the Event Log:
	
	  A domain controller is already running in this domain.
	
	MORE INFORMATION
	================
	
	It may be necessary to promote a Backup Domain Controller (BDC) to PDC when the
	original PDC fails. In the event that the original PDC is unavailable during
	this process, it is necessary to promote the BDC without having the PDC on-line.
	This should only be done when the PDC is expected to be down for a long period
	of time because demotion of the original PDC to BDC will not occur. The
	following message occurs in Server Manager during promotion of a BDC to PDC when
	the original PDC is unavailable:
	
	Cannot find the Primary DC for Domain xxxxxx.
	
	You can administer this domain, but certain domain-wide operations are disabled.
	Promoting the BDC to PDC should work properly at this point. When the original
	PDC is restarted, it attempts to also become the PDC, and two Windows NT
	Advanced Server computers will both think they are PDCs for the same domain. As
	a result, the NetLogon service fails on the original PDC because a PDC already
	exists in the domain. Server Manager shows two PDCs for the domain. The original
	PDC has a transparent icon representing a domain controller while the current
	PDC has the correct colored domain controller icon.
	
	To demote one of the PDCs:
	
	1. Stop the NetLogon service on the current PDC by typing "Net Stop NetLogon"
	  (without the quotation marks).
	
	2. Highlight the machine name of the original PDC and then on the Computer menu,
	  select Demote To Server. This changes the role of the original PDC to BDC.
	
	3. Restart the NetLogon server by typing "Net Stop NetLogon" (without the
	  quotation marks).
	
	The original PDC can be promoted to PDC in step 2, if you want. The current PDC
	needs to be demoted to a server immediately after this step.
	
	For additional information on Windows NT 3.51 and 4.0, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q167248 How to Demote to BDC When Two PDCs Present
	
	
	
	
	Additional query words: demote duplicate
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ400 kbWinNTAdvServ310 kbWinNTS350search kbWinNT310Search
	Version           : :3.1,3.5,4.0
	
	=============================================================================
	
