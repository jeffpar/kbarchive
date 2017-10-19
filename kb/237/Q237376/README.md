---
layout: page
title: "Q237376: Extra Restart Required after Installing SNA 4.0 SP2 with HSI"
permalink: /kb/237/Q237376/
---

## Q237376: Extra Restart Required after Installing SNA 4.0 SP2 with HSI

	Article: Q237376
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp2kbfaq
	Last Modified: 05-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	Note: This article only applies to first time installs of SNA Server running 4.0 Service Pack 2 with Host Security Integration (HSI). Details are listed in the MORE INFORMATION section below.
	
	SYMPTOMS
	========
	
	Immediately after you install and configure SNA Server and populate the Host
	Account Cache (HAC), Host Security Integration will work correctly; however, the
	next time you restart the computer, the HAC is corrupted. When this occurs, any
	applications that use cached entries will fail, and the following application
	events are logged in the Event Viewer:
	
	  Event 1247 - Unable to decrypt data supplied code 0x80090005
	
	  Event 1283 - Databases has been corrupted - contact system support supplied
	  code 0x1
	
	CAUSE
	=====
	
	The SnaDatabase registry key where the HAC database file is stored is being
	reset when you restart the server after populating the HAC. The reset causes the
	HAC database file (Dbase.dbs) to become corrupted.
	
	WORKAROUND
	==========
	
	Perform an "extra restart" after you install Host Security, but before
	populating the HAC (as indicated in the MORE INFORMATION section below).
	
	Note: There is no workaround for this problem once the HAC becomes corrupted. In
	order to recover, the cached entries must be repopulated again by using the Host
	Account Manager (UDConfig.exe) or by using the command-line utility SNACFG.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0 Service Pack 2
	(refresh). The refresh version is defined as SNA 4.0, which includes Service
	Pack 2.
	
	MORE INFORMATION
	================
	
	The following is a list of steps where this problem can occur:
	
	1. Install SNA 4.0 SP2 (refresh) along with the Host Security Integration
	  functions, and then restart the computer as directed.
	
	2. Populate the Host Account Cache using Host Account Manager (UDConfig.exe),
	  and then verify that the HAC is functioning properly.
	
	3. Restart the computer.
	
	4. Try using an HAC entry again. This time it will fail and log the events 1247
	  and 1243.
	
	The following is a list of steps where this problem can be avoided:
	
	1. Install SNA 4.0 SP2 (refresh) along with the Host Security Integration
	  functions, and then restart the computer as directed.
	
	2. Restart the server again. This is the second (extra) restart. You will not be
	  prompted for this restart.
	
	3. Populate the Host Account Cache using Host Account Manager (UDConfig.exe),
	  and then verify that the HAC is functioning properly.
	
	4. Restart the computer.
	
	5. This time when you use an HAC entry, the process will continue to work.
	
	Note: This problem has not been seen with existing SNA 4.0 SP1 users who have
	been using HSI and have upgraded to SP2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 kbfaq
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
