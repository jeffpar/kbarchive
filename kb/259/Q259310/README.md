---
layout: page
title: "Q259310: Error Message &quot;0x80080005&quot; and Logon Problems"
permalink: kb/259/Q259310/
---

## Q259310: Error Message &quot;0x80080005&quot; and Logon Problems

	Article: Q259310
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Dcomcnfg and you specify a domain account
	(<domain>\<username>) in the This User box, the local account is
	granted the "Log on as a batch job" privilege instead of the specified domain
	account if a local account with the same name
	(<workstation>\<username>) exists
	
	When the DCOM server is later activated in the <domain>\<username>
	context, error 0x80080005 (and other logon problems) may be recorded in the
	Event log.
	
	CAUSE
	=====
	
	Dcomcnfg incorrectly strips the domain name from the specified user account
	before assigning the "Log on as a batch job" user right.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT 4.0 service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size      File name    Platform
	  ---------------------------------------------------
	  04/06/2000  07:17p  142,096  Dcomcnfg.exe  Intel
	  04/06/2000  07:16p  212,752  Ccomcnfg.exe  Alpha
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, assign batch logon rights to the domain account
	manually.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
