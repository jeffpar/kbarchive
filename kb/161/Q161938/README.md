---
layout: page
title: "Q161938: Slow Exchange Client Logons Due to Resource Deadlock"
permalink: /kb/161/Q161938/
---

## Q161938: Slow Exchange Client Logons Due to Resource Deadlock

	Article: Q161938
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT, versions 3.51, 4.0 
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Exchange clients experience slow logons or the inability to log on during peak
	logon hours due to a deadlock in LSASS. The following errors occur in the event
	log:
	
	  Event ID 7200 - MSExchangeIS Private
	  Background thread FDoMaintenance halted due to error code 4015.
	
	-or-
	
	  Background thread FDoQuotaCheck halted due to error code 4015.
	
	Additionally, the thread counts for Dsamain.exe on the Exchange Server computer
	and Lsass.exe on the resource domain controllers increase rapidly. If the
	Exchange Server computer is a domain controller, then thread counts for both
	DSAMAIN and LSASS will increase on the Exchange Server computer. Normally the
	thread counts for DSAMAIN and LSASS are under 30 for most servers. Thread counts
	for LSASS and DSAMAIN will rapidly climb to over 70 threads during the time when
	clients are experiencing the slow logons associated with this problem.
	
	CAUSE
	=====
	
	This problem only occurs when Exchange Server computers are located in a
	resource domain and the Windows NT user accounts exist in a trusted domain.
	
	Every Exchange client logon causes the Exchange Server computer to look up the
	account security identifier (SID) in the user accounts domain. When an Exchange
	client logs on, it sends a NspiBind request to the Exchange Server computer.
	This results in a LookupAccountSid() call within LSASS on the domain controller
	in the resource domain being sent to one of the trusted domain controllers in
	the user accounts domain. When this occurs, one thread enters a critical
	section, giving it exclusive access to the code that allows it to acquire a lock
	to a protected resource. The resource in this case is a particular work queue of
	LookupAccountSid() operations to be performed.
	
	After acquiring the lock, Windows NT performs a calculation to determine whether
	it needs to spawn more LookupWorker threads. If Windows NT needs more threads,
	it does more calculations, releases the lock, creates threads, and does the
	lookups. If not, Windows NT performs the LookupAccountSid within this thread
	itself. The only problem is that Windows NT continues to hold the lock
	unnecessarily. The deadlock occurs because the other threads are waiting to
	acquire the lock to access the work queue. The fix is to release the lock after
	the initial calculation, when Windows NT determines additional LookupWorker
	threads are not needed.
	
	The fix has to be applied to all resource domain controllers when the user
	accounts exist in a trusted domain.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51.
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This fix
	is now available in the latest U.S. Service Pack for Windows NT version 4.0. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base:
	
	  SERVPACK
	
	
	MORE INFORMATION
	----------------
	
	Windows NT only runs into the problem when the user accounts for Exchange exist
	in a trusted domain. In this case, there is a call to look up the SID in a
	trusted domain, which is the only code path to the bug that caused the deadlock
	situation. The search premise is based on pass-through authentication. To
	understand it better, follow this simplified version of what happens with
	respect to an Exchange Server computer being in a resource domain. There are two
	possible scenarios, both similar. The first scenario occurs when the Exchange
	Server computer is not a domain controller. The second scenario occurs when the
	Exchange Server computer is a domain controller.
	
	- Scenario 1: Exchange Server computer is not a domain controller:
	
	  The Exchange Server computer first attempts to look up the account SID in its
	  local accounts database. It does not find the SID, so it sends the request to
	  a domain controller in its primary domain (the domain it is a member of). The
	  domain controller in the primary domain attempts to locate the SID in its SAM
	  by calling a routine to look up the SID in the local domain. If it still
	  cannot find the SID, which will be the case when the user accounts are in a
	  trusted domain, then it sends the request to a trusted domain controller in
	  the user accounts domain. The domain controller calls a routine to look up
	  the SID in a trusted domain, which results in the bug. The congestion is on
	  the resource domain controller.
	
	- Scenario 2: Exchange Server computer is a domain controller:
	
	  The Exchange Server computer is a domain controller, so it attempts to find
	  the SID in its copy of the SAM by calling a routine to look up the SID in the
	  local domain. If it still cannot find the SID, which will be the case when
	  the user accounts are in a trusted domain, it sends the request to a trusted
	  domain controller in the user accounts domain. The resource domain
	  controller/Exchange Server computer calls a routine to look up the SID in a
	  trusted domain, which results in the bug. The congestion is at the Exchange
	  Server computer, because it is a domain controller.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbOSWinNT400 kbOSWinNT351 kbExchangeSearch kbExchange400 kbZNotKeyword2 kbOSWinNTSearch
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
