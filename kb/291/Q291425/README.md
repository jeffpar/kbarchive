---
layout: page
title: "Q291425: Cannot Use Local Profile When Logging Onto the Domain on Windows"
permalink: kb/291/Q291425/
---

## Q291425: Cannot Use Local Profile When Logging Onto the Domain on Windows

	Article: Q291425
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you successfully log on locally to a Windows NT Workstation 4.0-based
	client computer, you may not be able to use that same profile to log on to a
	Windows NT Server 4.0-based domain.
	
	CAUSE
	=====
	
	This behavior can occur because, even though you use the same logon name, the
	local client account and the domain account are associated with different
	profiles, which have separate security identifiers (SID).
	
	RESOLUTION
	==========
	
	To resolve this behavior, configure the local client account to use the domain
	profile:
	
	1. Log on to the computer as an administrator.
	
	2. In Windows Explorer, open the %SystemRoot%\System32\Profiles\ folder, and
	  then identify the two account IDs. For example, the local profile ID may be
	  "JohnS" and the domain profile ID may be "JohnS.000."
	
	3. In Control Panel, double-click System, and then click the User Profiles tab.
	
	4. Click the local profile ID, and then click Copy To.
	
	5. Click Browse, locate the %SystemRoot%\System32\Profiles\ on the local
	  computer, and then click OK.
	
	6. In the Permitted to use area, click Change, and then click the domain name.
	
	7. Click Members, and then click Add to allow the local profile ID to use the
	  domain profile.
	
	8. Click OK to close each dialog box, and then restart the computer.
	
	MORE INFORMATION
	================
	
	When you log on to the domain from the client computer, you actually gain access
	to the local copy of the profile that is in the domain account directory. If you
	update your profile while you are on the local computer, the changes do not
	affect the profile in the domain account directory. You must manually copy the
	profile.
	
	To avoid this problem, use a roaming profile.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q146192 How Windows-NT Chooses Between Roaming and Local Profiles
	
	  Q142682 How to Create and Copy Roaming User Profiles in NT 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
