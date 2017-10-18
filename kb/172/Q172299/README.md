---
layout: page
title: "Q172299: Snacfg.exe &quot;USER /INSERT&quot; Fails Adding Additional LU"
permalink: kb/172/Q172299/
---

## Q172299: Snacfg.exe &quot;USER /INSERT&quot; Fails Adding Additional LU

	Article: Q172299
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Snacfg.exe to assign an LU to a username, the first attempt
	completes successfully. When you try to add and assign additional LUs to a user
	through Snacfg.exe, the command fails with the error message:
	
	  User <username> Not Found.
	
	If you attempt to assign the username and LU again using Snacfg.exe it completes
	successfully, and in both Snacfg.exe and SNA Manager the user shows up twice
	with DOMAINNAME\<username> with one configured LU for each.
	
	
	CAUSE
	=====
	
	Snacfg.exe does not parse the username entry correctly and only allows a single
	LU to be assigned to a user.
	
	RESOLUTION
	==========
	
	Snacfg.exe has been fixed and now requires that you either prefix the username
	to be assigned an LU with the DOMAINNAME or use the /DOMAIN option. You can now
	successfully assign additional LUs to the same username without creating a new
	account.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: snacfg snaconfig
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
