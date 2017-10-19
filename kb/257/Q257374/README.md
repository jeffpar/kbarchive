---
layout: page
title: "Q257374: NetUserEnum() May Return Error 2140"
permalink: /kb/257/Q257374/
---

## Q257374: NetUserEnum() May Return Error 2140

	Article: Q257374
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the NetUserEnum function, error 2140 may be returned. You may also
	receive error messages from programs that use the NetUserEnum or NetGroupEnum
	function. For example, Addusers.exe may generate the following error message:
	
	  Error saving user account: (Error: 203)
	
	  -or-
	
	  Error saving global group (Error: 203)
	
	CAUSE
	=====
	
	This problem is most likely to occur when a user or a group has a long string as
	part of its information (such as the description).
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name     Platform
	  ---------------------------------------------------
	  29/03/2000  02:35   228,112  Netapi32.dll  Intel
	  29/03/2000  02:34   368,912  Netapi32.dll  Alpha
	
	
	
	WORKAROUND
	==========
	
	You can work around the problem by deleting the long entry from the user or
	group.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
