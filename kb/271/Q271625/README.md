---
layout: page
title: "Q271625: Printer Properties Not Correct Printing from Windows NT 4.0"
permalink: /kb/271/Q271625/
---

## Q271625: Printer Properties Not Correct Printing from Windows NT 4.0

{% raw %}

	Article: Q271625
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an administrator sets custom printer properties for a tractor-feed printer on
	a Microsoft Windows 2000-based print server, Windows NT 4.0-based clients that
	connect to that printer do not use the custom settings (they use only the
	default settings). If you have administrator privileges on the Windows NT
	4.0-based client, the default settings are written back to the print server,
	overwriting the custom settings that the administrator previously configured.
	
	RESOLUTION
	==========
	
	Windows NT
	----------
	
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
	
	  Date         Time    Size      File name     Platform
	  -----------------------------------------------------
	  01/12/2000   04:27    75,536   Rasddui.dll   Intel
	  01/12/2000   04:25   142,608   Rasddui.dll   Alpha
	
	
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	   Date        Time     Version    Size       File name
	  ------------------------------------------------------
	   5/31/2001   03:31p   0.3.0.0    156,432    Unidrv.dll
	
	
	STATUS
	======
	
	Windows NT
	----------
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Windows 2000
	------------
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	
	Additional query words: kbPrint
	
	======================================================================
	Keywords          : kbprint kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000sp3fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search
	Version           : :2000,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
