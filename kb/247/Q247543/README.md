---
layout: page
title: "Q247543: SMS: Clients Incorrectly Assigned to Multiple Sites"
permalink: /kb/247/Q247543/
---

## Q247543: SMS: Clients Incorrectly Assigned to Multiple Sites

	Article: Q247543
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple sites are configured to share the same logon points, a laptop
	computer that contains a PC Card network adapter and a docking station that
	contains a network adapter may be assigned incorrectly to every site regardless
	of site boundaries. The following entry may be logged by Clie<x>32, where
	<x> represents the index number of the network adapter that is currently
	not being used.
	
	  Noted a transitory problem with card at index <x>. Marking the card as
	  CLIENT_ASSIGNED
	
	In addition, on a client that is experiencing this issue, the Control Panel tool
	lists the client as being assigned to all the sites that share the logon
	point(s).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	A supported bundle of fixes that corrects this problem is now available from
	Microsoft, but has not been fully regression tested and should be applied only
	to systems experiencing this specific problem. If you are not severely affected
	by this specific problem, Microsoft recommends that you wait for the next
	Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain this hotfix bundle.
	
	For additional information about this hotfix bundle, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	Q253151 SMS: Systems Management Server 2.0 Dependency Package Contents
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use hardware profiles so that only one network
	adapter is loaded and initialized at any given time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, please refer to the instructions in Q253151 - Dependency
	Package Contents.
	
	Additional query words: prodsms transitory assign client
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
