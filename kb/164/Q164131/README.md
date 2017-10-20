---
layout: page
title: "Q164131: Policy &quot;Path for Manual Update&quot; Support for %LogonServer%"
permalink: /kb/164/Q164131/
---

## Q164131: Policy &quot;Path for Manual Update&quot; Support for %LogonServer%

{% raw %}

	Article: Q164131
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The "Path for Manual Update" for loading policies from a named server location
	does not support the %LogonServer% environment variable.
	
	CAUSE
	=====
	
	This functionality was not designed into the base release of Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	In a large multiple master domain model, you would ideally use the Automatic
	policy update mode. However, in a large environment, the Policy file may become
	large, and associated performance problems may ensue. Decentralizing the
	policies would overcome the performance issue, but would be unmanageable in a
	large environment.
	
	Switching to Manual policy update mode allows you to create policies specific to
	each resource domain. This works around the potential performance problems but
	introduces a single point of failure, because the Path for Manual Update must be
	a hard-coded UNC name to a single specific server location.
	
	Adding support for %LogonServer% in the Path for Manual Update is a better
	solution, as it removes the single point of failure (assuming the network has
	more than one logon server), and allows policy processing to be distributed
	among the logon servers.
	
	RESOLUTION
	==========
	
	Either accept the single point of failure that choosing Manual policy update
	mode for policies entails in the base release, or upgrade to the latest service
	pack, which enables %LogonServer% to be used within the specified Path for
	Manual Update.
	
	STATUS
	======
	
	This feature is included in the latest Microsoft Windows NT version 4.00 U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
