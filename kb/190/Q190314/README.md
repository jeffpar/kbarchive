---
layout: page
title: "Q190314: Phone Book Entries Blank in the Spanish Version of CMAK"
permalink: kb/190/Q190314/
---

## Q190314: Phone Book Entries Blank in the Spanish Version of CMAK

	Article: Q190314
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Connection Manager Administration Kit (CMAK) included with the
	Spanish version of the Windows NT 4.0 Option Pack, if a phone book is published
	and used by CMAK, the phone book entries do not display. When you go to Settings
	and click the Phone Book button, all entries are blank.
	
	NOTE: This problem does not appear when the English (US) version of the Windows
	NT 4.0 Option Pack is used.
	
	CAUSE
	=====
	
	The Cmpbk32.dll file was converted to the localized version by mistake.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix by contacting Microsoft
	Technical Support or wait for the next Windows NT 4.0 service pack.
	
	This fix should have the following time stamp:
	
	     10/29/97  01:57p               28,848 cmpbk32.dll (Intel)
	     10/29/97  01:57p               50,448 cmpbk32.dll (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Connection Manager
	Administration Kit included with the Spanish version of the Windows NT 4.0
	Option Pack.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: sp hot fix qfe Espanol
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
