---
layout: page
title: "Q243963: RPC Client Returns Exception 1783 on Windows NT 4.0 SP5"
permalink: kb/243/Q243963/
---

## Q243963: RPC Client Returns Exception 1783 on Windows NT 4.0 SP5

	Article: Q243963
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5 
	- Microsoft Windows NT Workstation version 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running a program that uses Remote Procedure Call (RPC), a client
	may receive run-time error 1783. This occurs if one of the arguments is a
	conformant array.
	
	CAUSE
	=====
	
	The unmarshalling routine on the server is not calculating the array length
	properly.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size      File name    Platform
	  --------------------------------------------------
	  10/13/99   3:28p   330,000   Rpcrt4.dll   Intel
	  10/13/99   3:27p   579,344   Rpcrt4.dll   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	A conformant array is an array whose upper bounds are determined at run time.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400search
	Version           : winnt:4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
