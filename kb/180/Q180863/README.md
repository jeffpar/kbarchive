---
layout: page
title: "Q180863: Print Server May Experience Occasional Performance Degradation"
permalink: /kb/180/Q180863/
---

## Q180863: Print Server May Experience Occasional Performance Degradation

	Article: Q180863
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When a print job is sent to a printer attached to a workstation that has been
	unplugged from the network or has encountered a blue screen STOP screen, all SNA
	Server printer sessions start printing very slowly (for example, five minutes
	per page) until the workstation has recovered.
	
	CAUSE
	=====
	
	SNA Server Print Server is not optimizing the use of threads for the number of
	print sessions that are running.
	
	WORKAROUND
	==========
	
	If the print job that caused the problem (that is, the print job on the
	workstation that had previously encountered a blue screen STOP message) is
	deleted on the host side, printing for the other print sessions will resume
	normally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The SNA print service threading architecture has been changed. The print service
	now runs with a maximum of 32 threads:
	
	- A new thread is created for each new device until there are 32 threads
	  running.
	
	- After this, each device will be assigned to the thread with the fewest
	  devices on it.
	
	The maximum number of supported devices is 1024 (32 threads multiplied by 32
	sessions per thread). This design helps ensure that a separate thread is
	handling the first 32 active sessions. If a Windows NT printer becomes
	unavailable, this new design helps to minimize the impact on any unaffected
	sessions that may happen to share a thread with the affected printer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
