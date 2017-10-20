---
layout: page
title: "Q282015: &quot;Protected Storage&quot; Error Message with Roaming Profiles"
permalink: /kb/282/Q282015/
---

## Q282015: &quot;Protected Storage&quot; Error Message with Roaming Profiles

{% raw %}

	Article: Q282015
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a computer that is running Windows NT 4.0, and
	then use Microsoft Internet Explorer to complete a form, you may receive the
	following error message:
	
	  Protected Storage
	
	  Protected Storage uses your Windows password to protect your personal data.
	
	  Protected Storage has detected data created with a previous version. To
	  continue to use this data, enter your Windows password below.
	
	CAUSE
	=====
	
	This error message occurs if you are using roaming profiles from a Windows
	2000-based computer and you have logged on to a computer that is running Windows
	NT 4.0 with the Internet Explorer AutoComplete feature enabled.
	
	RESOLUTION
	==========
	
	Windows NT 4.0 Server and Windows NT Workstation 4.0
	----------------------------------------------------
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time        Size     File name     Platform
	  -------------------------------------------------------
	  02/22/2001  02:31:48pm   96,768  Psbase.dll    Intel
	  02/22/2001  02:30:11pm   74,752  Pstorec.dll   Intel
	  02/22/2001  03:13:55pm   44,544  Pstorerc.dll  Intel
	  02/22/2001  02:31:17pm  121,344  Pstores.exe   Intel
	
	
	
	Windows NT 4.0 Terminal Server
	------------------------------
	
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
	
	  Date         Time     Size   File name      Platform
	  ------------------------------------------------------
	  22-FEB-2001  11:31    94.5   Psbase.dll     i386
	  22-FEB-2001  11:30    73.0   Pstorec.dll    i386
	  22-FEB-2001  12:13    43.5   Pstorerc.dll   i386
	  22-FEB-2001  11:31   118.0   Pstores.exe    i386
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a (SP6a).
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	To resolve this issue, install this hotfix on the Windows NT 4.0-based
	computers.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
