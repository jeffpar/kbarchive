---
layout: page
title: "Q164821: DHCP Server Service May Stop Responding"
permalink: kb/164/Q164821/
---

## Q164821: DHCP Server Service May Stop Responding

	Article: Q164821
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Dynamic Host Configuration Protocol (DHCP) server service may stop
	responding during administrative operations using the DHCP Manager application.
	
	The specific operations that were found to make the service stop responding were
	adding reservations to active scopes and deleting scopes that had reservations
	defined. In each case, the server had to be extremely busy servicing DHCP client
	requests at the same time for it to stop responding.
	
	CAUSE
	=====
	
	This problem occurs when the DHCP server service deadlocks trying to acquire
	critical sections that guard access to the registry and the DHCP Jet database.
	
	The deadlock occurs because, when a client issues a release request or a renew
	request, the DHCP server acquires the Jet database critical section and holds it
	while attempting to acquire the registry critical section. This causes a problem
	if it occurs at the same time as a DHCP administrative operation adds
	reservations in scopes or deletes entire scopes that contain reservations
	because these administrative operations acquire the registry critical section
	and hold it while attempting to acquire the Jet database critical section.
	Because client release or renew operations hold the Jet database critical
	section, the administrative operation cannot acquire it.
	
	Likewise, because the administrative operation holds the registry critical
	section, the client release or renew operation cannot acquire it. This causes
	deadlock, and the DHCP server service stops responding.
	
	RESOLUTION
	==========
	
	The DHCP server service was modified so that contentions would not occur over
	the registry or Jet database critical sections during administrative
	operations.
	
	To correct this problem, obtain the latest service pack for Windows NT 4.0 or
	obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: hangs hang crash crashes freeze freezes
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	
