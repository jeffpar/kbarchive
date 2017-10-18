---
layout: page
title: "Q238174: Profile Quota Error Message Is Not Reset in German Windows NT"
permalink: kb/238/Q238174/
---

## Q238174: Profile Quota Error Message Is Not Reset in German Windows NT

	Article: Q238174
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Beginning with Windows NT 4.0 Service Pack 4, you can limit the amount of disk
	space a user profile can consume by using Profile Quotas. In the German version
	of Windows NT, the error message that states you have exceeded your limit does
	not disappear even after you have reduced your profile.
	
	CAUSE
	=====
	
	This problem occurs because a localized string is too long.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The German version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  07/22/99  03:23p                46,864 Proquota.exe  x86
	  07/22/99  03:21p                75,536 Proquota.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about profile quotas, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q185561 How to Enable Profile Quotas in Windows NT 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
