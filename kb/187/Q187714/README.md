---
layout: page
title: "Q187714: Domain Controllers Being Replaced in 1C List"
permalink: /kb/187/Q187714/
---

## Q187714: Domain Controllers Being Replaced in 1C List

	Article: Q187714
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A condition can exist where the domain controller name can be replaced, or an
	invalid entry can be added to the 1C list in your Windows Internet Name Service
	(WINS) database. This can cause problems for clients authenticating to the
	domain.
	
	CAUSE
	=====
	
	This condition happens when a Remote Access Service (RAS) user connects to the
	network with a domain controller with the same name as the corporate domain. The
	RAS-connected domain controller then registers in WINS. If the primary domain
	controller (PDC) is down or off the network, you can replace the PDC's 1C entry,
	and the 1B entry can be replaced on the corporate WINS servers.
	
	RESOLUTION
	==========
	
	Microsoft recommends that RAS users resolve their names and register with an
	isolated WINS server, to which the rest of the WINS infrastructure pushes its
	registrations. This will allow the RAS users to resolve the names of the
	computers on the corporate network but will not allow internal users to resolve
	the external RAS user's name. Stopping the registrations of the RAS users being
	propagated to the internal solves the problem.
	
	Additional query words: hijack dun pull
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
