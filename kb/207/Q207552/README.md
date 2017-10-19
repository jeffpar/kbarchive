---
layout: page
title: "Q207552: Windows NT 4.0 Domain Controllers Across RAS or Slow Links"
permalink: /kb/207/Q207552/
---

## Q207552: Windows NT 4.0 Domain Controllers Across RAS or Slow Links

	Article: Q207552
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Windows NT 4.0 domain controllers that are members of the same domain can be
	configured across a slow link that is not continually connected, such as Remote
	Access Service (RAS) or slow WAN links. Although this configuration is possible,
	it is not recommended.
	
	There are several problems with this type of network configuration:
	
	- Domain controllers attempt to communicate at regular intervals. When the link
	  between domain controllers is not available, error messages are logged in
	  Event Viewer.
	
	- If users attempt to change their password, they must be able to locate the
	  primary domain controller (PDC). When the slow link is not available or the
	  PDC is unreachable, users are unable to change their password.
	
	- When a backup domain controller (BDC) is not able to communicate with the
	  PDC, the BDC's domain membership may be in jeopardy. This is because the
	  secure channel password is maintained with the PDC. By default, this password
	  is updated approximately every seven days and this operation may occur at a
	  time when the link is unavailable.
	
	- A RAS or slow link that is continually unavailable may affect domain
	  browsing. Browsing may not work as intended or individual computers may be
	  missing from the browse list.
	
	MORE INFORMATION
	================
	
	If you want to configure domain controllers that are members of the same domain
	across a slow link, it is recommended that you use Routing and Remote Access
	Service (RRAS).
	
	RRAS provides Dial on Demand routing capability, so domain controllers can
	connect as needed. If you choose to use RRAS and slow WAN links (for example,
	56-Kbps links), use the following information to tune your systems for better
	performance.
	
	Before you make changes to your system:
	
	- Document any error messages in the event log (System and Application error
	  messages).
	
	- Determine if synchronization works. If it is not working now, find out what
	  changes have been made (for example, find out if routers were added, and so
	  on).
	
	- Determine whether or not optimization improves the synchronizations.
	
	You may also want to use Network Monitor to discover the amount of network
	bandwidth available over the link. For additional information about Network
	Monitor, please see the following article in the Microsoft Knowledge Base:
	
	  Q148942 How to Capture Network Traffic with Network Monitor
	
	Performance Tuning Domain Synchronization Over Slow WAN Links
	-------------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The ReplicationGovernor Parameter:
	
	You may need to reduce the value of the ReplicationGovernor parameter. This
	parameter defines both the size of the data transferred on each call to the PDC,
	and the frequency of those calls. For example, setting the ReplicationGovernor
	parameter to 50% uses a 64-KB buffer rather than a 128-KB buffer, and has a
	replication call outstanding on the network only a maximum of 50 percent of the
	time.
	
	This entry should be changed only if replication occurs across a slow WAN.
	Adjusting the ReplicationGovernor parameter does two things:
	
	- Reduces the size of the buffer used on each call from the BDC to the PDC,
	  which ensures that a single call does not occupy the WAN link for too long.
	
	- Causes Netlogon essentially to "sleep" between calls, which allows other
	  programs to gain access to the WAN link between calls to the PDC.
	
	You can add the ReplicationGovernor parameter to a BDC using the following
	registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Netlogon\Parameters
	  ReplicationGovernor: REG_DWORD
	  Range: 0-100 percent
	  Default: 100
	
	NOTE: This parameter must be set individually on each BDC.
	
	Do not set the ReplicationGovernor parameter too low, or replication may never
	complete. A value of 0 causes Netlogon to never replicate, and the Security
	Accounts Manager (SAM)/Local Security Authority (LSA) database become completely
	out of synchronization.
	
	It is also possible to configure different replication rates that are dependent
	on the time of day using a script file with the AT command (for example, NET
	STOP NETLOGON, REGINI SCRIPTFILE, NET START NETLOGON). The script file should
	contain the path to the ReplicationGovernor parameter and the new registry
	entries. Regini.exe is part of the Windows NT Resource Kit.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q142692 Minimizing WAN Traffic
	
	  Q140422 Domain Synchronization Over a Slow WAN Link
	
	  Q140552 How to Optimize Windows NT to Run Over Slow WAN Links w/TCP/IP
	
	The Pulse Parameter:
	
	All SAM/LSA changes made within this time are bundled together. After this time
	period has elapsed, a pulse is sent to each BDC that needs changes. No pulse is
	sent to a BDC that is up to date.
	
	Increasing the Pulse parameter on the PDC reduces the number of replications
	between the PDC and the BDCs, and SAM changes are propagated less quickly. It is
	important to maintain a balance. For example, infrequent replication increases
	the number of connections to a PDC to validate changed passwords, while frequent
	replication results in up-to-date BDCs, but may generate excessive WAN traffic.
	
	  Key: HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\NetLogon\Parameters
	  Value: Pulse
	  Data Type: REG_DWORD
	  Range: 60-172,800 seconds (48 hours)
	  Default: 300 (5 minutes)
	
	The following example illustrates the potential problems with slow link
	connections and setting the Pulse parameter too low.
	
	One PDC with a significant number of BDCs connects to one PDC through 56-Kbps
	link. Each time a network frame is exchanged between a BDC and the PDC, it costs
	one ISDN connection.
	
	  PDC parameters
	  Pulse: 3,600 seconds (1 hour)
	  PulseConcurrency: 1-10
	
	In this case, the PDC may handle many user account transactions so that SAM
	changes are common and occur often. Each time the PDC detects a SAM change, it
	contacts all of the BDCs. If you have 56-Kbps links, you may not want to have
	the BDCs' SAMs updated every hour. Because of the cost of synchronization, you
	may want to update the BDCs as little as once every 24-48 hours.
	
	Currently, if the Pulse parameter is set to its maximum value, the cost for
	transaction updates is the number of BDC connections every hour. For example, if
	there are 50 BDCs, there are 50 connections per hour.
	
	Looking at this on a monthly basis, the cost of connections is even more
	apparent: 120 connections x 24 hours a day x 30 days a month = 86,400
	connections/month.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q150350 NetLogon Maximum Value of Pulse Should Exceed 3600
	
	The PulseMaximum Parameter:
	
	  Key:
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NetLogon\Parameters
	  Value: PulseMaximum
	  Data Type: REG_DWORD
	  Range: 60-172,800 seconds (48 hours)
	
	The PulseMaximum parameter defines the maximum pulse frequency (in seconds).
	Every BDC is sent at least one pulse at this frequency, whether or not its
	database is current.
	
	NOTE: Replication takes place immediately if a change is made in LSA secrets, for
	example, when you add a workstation to the domain or change trust relationships.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q130914 Number of Users and Groups Affects SAM Size of Domain
	
	  Q159211 Diagnoses and Treatment of Black Hole Routers
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
