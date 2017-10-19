---
layout: page
title: "Q253198: Asterisk Before Preferred NetWare Server May Cause Problems"
permalink: /kb/253/Q253198/
---

## Q253198: Asterisk Before Preferred NetWare Server May Cause Problems

	Article: Q253198
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP5,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP5, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you type a preferred NetWare server name that is preceded by a asterisk (*)
	but has no following backslash (\) and path, access violations may occur in
	services.
	
	CAUSE
	=====
	
	When the preferred server is checked, the asterisk typically means that there
	will be a backslash following the name (for example:
	*<server>\<name>). Windows assumes that there will be a backslash
	and some text. Making this assumption causes Windows to access a null pointer.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Windows NT 4.0 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
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
	  06/07/2000  09:20p  163,600  Nwprovau.dll  Intel
	  06/07/2000  09:20p   81,680  Nwwks.dll     Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp5 kbNTTermServSearch kbWinNTW400SP6a
	Version           : :4.0,4.0 SP5,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
