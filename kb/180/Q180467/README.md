---
layout: page
title: "Q180467: SNA Client Does Not Retry Other Sponsors After Error Response"
permalink: /kb/180/Q180467/
---

## Q180467: SNA Client Does Not Retry Other Sponsors After Error Response

	Article: Q180467
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When the SNA client attempts to get its sponsor connection from a specific SNA
	Server computer and it receives an error, the SNA client never tries to connect
	to another sponsor server listed in its sponsor server list. Instead, the SNA
	client repeatedly tries to connect to the first SNA Server computer that it
	attempted to connect to.
	
	WORKAROUND
	==========
	
	For SNA Server clients using Windows NT or Windows 95, a registry entry must be
	added in order for users to specify a SponsorRetryDelay time in case
	TerminateIfNoSponsors is disabled. This registry entry gives slow wide area
	networks or SNA Server computers time to recover from failure.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To work around the problem, add the following registry entry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\SnaBase\Parameters:
	  SponsorRetryDelay:REG_DWORD:<retry delay in seconds>
	
	NOTE: The default retry delay is 15 seconds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sponsor client
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
