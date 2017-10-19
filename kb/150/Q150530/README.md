---
layout: page
title: "Q150530: Event ID 529 Unknown User Name Or Bad Password"
permalink: /kb/150/Q150530/
---

## Q150530: Event ID 529 Unknown User Name Or Bad Password

	Article: Q150530
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you add newly created user accounts to a domain, you may notice that
	Windows 95 clients cannot log on to the domain with any of the newly created
	accounts. The Windows 95 clients will report the following error:
	
	  User name cannot be found
	
	The same Windows 95 clients can log on to the domain with previously existing
	user accounts. You will also notice that Windows NT workstations can log on to
	the domain with these newly created accounts.
	
	Check the primary domain controllers (PDCs) Event Viewer Security Log for the
	following:
	
	Event ID 529
	Description:
	Logon Failure:
	
	  Reason:     Unknown user name or bad password
	  User Name:  GUEST
	  Domain:     NameOfYourDomain
	  Logon Type: 3
	  Logon Process: NCPSrv
	  Authentication Package:
	  Workstation Name:
	
	NOTE: Your entries may vary, that is, the user name will not always be GUEST.
	
	MORE INFORMATION
	================
	
	The above scenario has been linked to other domain controllers in the domain
	running out of resources. At this point, you will need to check all of the
	servers in the domain that validate user accounts.
	
	Check all the servers in the domain that validate user accounts for:
	
	- servers that are running out of disk space.
	
	- servers that have stopped responding (this may mean actually visiting the
	  server).
	
	- servers that report Event IDs stating they have not been able to synchronize
	  with the PDC. The server will report that insufficient system resources exist
	  to complete the requested service.
	
	After you find the domain controller with insufficient system resources, you may
	either take that server offline, so that it is not involved in the validation
	process, or fix the resource problem and re-synchronize the domain controller
	with its PDC. If the problem persists, you may need to take a trace of the
	Windows 95 computer while it is trying to log on to the domain to help further
	identify problem areas.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : :3.5,3.51
	
	=============================================================================
	
