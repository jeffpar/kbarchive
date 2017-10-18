---
layout: page
title: "Q172496: Windows 95 Client Config Utility Incorrectly Updates Check Box"
permalink: kb/172/Q172496/
---

## Q172496: Windows 95 Client Config Utility Incorrectly Updates Check Box

	Article: Q172496
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are running the SNA Windows 95 Client configuration utility. On the Advanced
	tab, you select or clear the "Use Windows NT domain password" check box. If you
	then click a different tab, the change you made to the "Use Windows NT domain
	password" check box disappears. If you look at the Advanced tab again, you will
	see that the "Use Windows NT domain password" check box has reverted to its
	previous state.
	
	CAUSE
	=====
	
	The Advanced page of the Windows 95 SNA Client configuration utility re- reads
	the registry after having been previously initialized. It then drops the change
	to the "Use Windows NT domain password" check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	To reproduce this problem:
	
	1. Start the SNA Windows 95 Client configuration utility and click the Advanced
	  tab.
	
	2. Change the "Use Windows NT domain password" check box to a different status;
	  that is, if it is checked, clear it, and if it is cleared, select it.
	
	3. Click the About tab.
	
	4. Click the Advanced tab again. The "Use Windows NT domain password" check box
	  status will have reverted to the selected state.
	
	With the fix applied, the client configuration utility does not re-read the
	registry for its settings after being initialized the first time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
