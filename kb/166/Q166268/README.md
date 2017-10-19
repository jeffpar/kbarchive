---
layout: page
title: "Q166268: Win3x Client Takes 20 Seconds to Display Logon Dialog Box"
permalink: /kb/166/Q166268/
---

## Q166268: Win3x Client Takes 20 Seconds to Display Logon Dialog Box

	Article: Q166268
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Win3x client was installed from the SNA Server 3.0 compact disc, it will
	take 20 seconds to display the logon dialog box.
	
	CAUSE
	=====
	
	The SNA Server 3.0 Win3.x setup places two backslash characters ("\\") in front
	of the remote entry in the Win.ini file if you follow the directions literally
	by pressing CTRL+ENTER after you type each server name. For instance, if
	Server01 and Server02 were entered by the user during setup, the following entry
	would be listed in the Win.ini file:
	
	     [WNAP]
	     Remote=\\Server01 \\Server02
	
	It should be:
	
	     [WNAP]
	     Remote=Server01 Server02
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem. The fix ignores the leading
	backslash characters ("\\").
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
