---
layout: page
title: "Q229293: User Manager crashes when users are members of many global group"
permalink: kb/229/Q229293/
---

## Q229293: User Manager crashes when users are members of many global group

	Article: Q229293
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the properties of users that belong to 1,000 or more global groups
	in a Windows NT domain, User Manager may generate an Access Violation error
	message. An Access Violation error message may also be generated for users that
	were members of less than 1,000 global groups.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
