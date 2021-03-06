---
layout: page
title: "Q173486: SNAVER and SNA Manager Don't Display Service Pack Level"
permalink: /kb/173/Q173486/
---

## Q173486: SNAVER and SNA Manager Don't Display Service Pack Level

{% raw %}

	Article: Q173486
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA service pack level is not displayed when you use either the SNAVER
	utility or you click "About SNA Server Manager" on the Help menu. Only the SNA
	Server version and build numbers are displayed.
	
	CAUSE
	=====
	
	The service pack binaries show build number, but not service pack number.
	
	RESOLUTION
	==========
	
	Changes were made to the SNAVER utility to display the Evaluation, NFR (Not for
	Resale), Workstation, and retail version numbers. Changes were also made to SNA
	Server Manager's Help About dialog to display the SNA version string which is
	located in the following registry subkey:
	
	  HKEY_LOCAL_COMPUTER\Software\Microsoft\SNA Server\ 
	  CurrentVersion\SNAVersion
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
