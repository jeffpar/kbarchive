---
layout: page
title: "Q145975: XADM: Knowledge of Other Servers in Site Not Instantaneous"
permalink: kb/145/Q145975/
---

## Q145975: XADM: Knowledge of Other Servers in Site Not Instantaneous

	Article: Q145975
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup exc4 exc5 exc55
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When two or more servers are simultaneously added to a site, Reps-To and
	Reps-From information may not be complete in all servers until after the
	knowledge consistency checker (KCC) runs at least once.
	
	This is because the initial setup does not make all the replica links. This
	functionality is intended by design.
	
	MORE INFORMATION
	================
	
	Reps-To and Reps-from are object attributes for the site that tell a particular
	server about the presence of other servers in the site with which they need to
	exchange information.
	
	The KCC needs to run once or more depending on the number of servers installed on
	the site. The amount of KCC runs needed for all servers on the site to have
	knowledge of all other servers depends on the number of servers in the site.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
