---
layout: page
title: "Q255495: Terminal Server Settings Not Recognized From Trusted Domain"
permalink: kb/255/Q255495/
---

## Q255495: Terminal Server Settings Not Recognized From Trusted Domain

	Article: Q255495
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a computer running Microsoft Windows NT 4.0, Terminal Server
	Edition as a member server of a domain and a user with Terminal Server user
	settings on a trusted domain attempts to log on, the user does not receive the
	settings.
	
	Terminal Server settings, such as initial program and Terminal Server Profile
	path are not obtained at logon although the logon succeeds.
	
	CAUSE
	=====
	
	This issue occurs because Windows NT 4.0 Terminal Server is unable to resolve a
	domain controller for the trusted domain.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time    Size    File name     Platform
	  ------------------------------------------------
	2/28/2000  6:45pm   221KB   Winlogon.exe  i386
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
