---
layout: page
title: "Q172682: SNA Server Online Support URL Is Incorrect in SNA Manager"
permalink: /kb/172/Q172682/
---

## Q172682: SNA Server Online Support URL Is Incorrect in SNA Manager

	Article: Q172682
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You cannot connect to SNA Server Online Support from SNA Server Manager. In SNA
	Server Manager, when you click "Microsoft on the Web" on the Help menu, and then
	click "SNA Server Online Support," you cannot connect.
	
	CAUSE
	=====
	
	The URL for SNA Server Online Support is incorrect in SNA Server Manager. SNA
	Server Manager attempts to connect to http://microsoft.com/sna/techsupp.htm.
	This is an incorrect address. The address for SNA Server Online Support has been
	changed.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Go to the correct URL for SNA Server Online Support:
	  http://microsoft.com/snasupport
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, SNA Server Manager points to the correct URL, which is
	http://microsoft.com/snasupport.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
