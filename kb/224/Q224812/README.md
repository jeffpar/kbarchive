---
layout: page
title: "Q224812: Some Keys May Not Work if Canadian Stnd Keyboard Layout Selected"
permalink: kb/224/Q224812/
---

## Q224812: Some Keys May Not Work if Canadian Stnd Keyboard Layout Selected

	Article: Q224812
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add the French Canadian input locale and select the Canadian Standard
	keyboard layout, the SPACEBAR, BACKSPACE, and ENTER keys do not work. One or
	more of these keys may appear to work intermittently for some programs.
	
	You can add the French Canadian input locale by clicking Add in the Control Panel
	Keyboard tool. You can choose the Canadian Standard keyboard layout by clicking
	Property on the Input Locales tab with the French Canadian input locale
	selected.
	
	CAUSE
	=====
	
	The problem occurs because of a problem in the Kbdcan.dll file.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack 4 that contains this fix.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time     Size     File name   Platform
	  ------------------------------------------------
	  03/31/99  12:39p   10,512   Kbdcan.dll  i386
	  03/31/99  12:32p   15,120   Kbdcan.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
