---
layout: page
title: "Q181099: Some SNACFG Options Fail using a German version of Windows NT"
permalink: kb/181/Q181099/
---

## Q181099: Some SNACFG Options Fail using a German version of Windows NT

	Article: Q181099
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There are multiple problems using the SNACFG command line utility when the SNA
	Server is running on a German version of Windows NT. They include the
	following:
	
	1. SNACFG is not able to insert a user.
	
	2. SNACFG cannot cope with the special group "Jeder" (which corresponds to the
	  "Everyone" group on the US version of Windows NT).
	
	3. SNACFG USER cannot add local groups.
	
	CAUSE
	=====
	
	String comparisons of user names needed to be localized. Instead of using
	stricmp(), set the system locale to OS native and use stricoll() which properly
	compares upper and lower case non-US characters.
	
	The local groups problem results because SnaCfg mishandles the fact that
	LookupAccountSid() returns ERROR_NONE_MAPPED for local group names. The error
	causes no SID to be found for the group, but SnaCfg adds it anyway, leaving the
	userSidBlock in the config record full of zeros and the type set to User, not
	Group.
	
	A solution is to strip off the domain name and retry LookupAccountSid. If it
	works this time, and the returned SID is SidTypeAlias, then the returned
	RefDomain will be "BUILTIN" (or its localized equivalent). In this case, replace
	the RefDomain with the domain name from the command line and continue. If the
	second LookupAccountSid doesn't work either, then fail as before.
	
	Then, if there is a valid SID for the user or group, it is used with
	LookupAccountSid to get the proper case of the user name string.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	SP1, 2.11 SP2, 3.0, 3.0SP1, 3.0SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: snacfg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
