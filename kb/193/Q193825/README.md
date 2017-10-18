---
layout: page
title: "Q193825: NET TIME /Domain Will Not Sync Time w/ Domain Time Source Srv"
permalink: kb/193/Q193825/
---

## Q193825: NET TIME /Domain Will Not Sync Time w/ Domain Time Source Srv

	Article: Q193825
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NET TIME /DOMAIN:<domainname> command does not attempt to obtain a
	list of domain time source (TS) servers in the target domain. Instead, the
	computer sending the command will synchronize its time directly with the primary
	domain controller (PDC), not the time source (TS) server of the domain specified
	by the /DOMAIN switch.
	
	CAUSE
	=====
	
	When the /DOMAIN switch is used with the NET TIME command, the computer sending
	the command does a NetGetDcName to determine the PDC of the domain. After the
	PDC is known, a call is made to synchronize the time with the PDC.
	
	RESOLUTION
	==========
	
	To force a computer to synchronize its time with a specific computer, send the
	following command:
	
	NET TIME \\<MACHINENAME> /SET /Y
	
	-or-
	
	NET TIME \\<IP Address> /SET /Y
	
	On computers running Windows NT 4.0 with Service Pack 3 installed, an environment
	variable called LogonServer is set to the validating domain controller. The
	LogonServer variable can be used to load balance the time source responsibility
	by sending the following command:
	
	NET TIME %LOGONSERVER% /SET /Y
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When using NET TIME /DOMAIN:<DomainName>, a browse list is never requested
	from the domain listed to obtain a list of time source (TS) servers. This may
	cause problems if the PDC is not the domain time source server because some
	applications may be highly time sensitive.
	
	For example, all servers in a resource domain may be required to synchronize
	their time with the master account domain's time source server or servers.
	Rather than synchronizing the time with the account domain's time source server,
	the client computer will synchronize time with the account domain's PDC.
	
	A time source server advertises itself through the browser announcement. A
	Windows NT client or Windows 95 client should use the browse list to determine
	the time source server or servers available with which to synchronize time (this
	works as expected using NET TIME without the /DOMAIN switch).
	
	A computer can be configured to be a domain time source server by adding the
	TIMESOURCE value (Reg_DWord) under the following registry key and setting the
	value to 1:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LANManServer\Parameters
	
	When NET TIME /SET is sent without the /DOMAIN switch, the computer will obtain a
	browse list for the domain in which it is a member, select a time source server
	from the list, and then send a NetrRemoteTOD call to synchronize the time.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q135646 Err Msg: Could Not Locate a Time-Server
	
	  Q131715 How to Set UP and Synchronize with Domain Time Source Servers
	
	  Q174557 Time Sources Defined for the Windows NT Time Service
	
	Additional query words: timesource net time sync domain timeserve
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
