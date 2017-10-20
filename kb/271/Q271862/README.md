---
layout: page
title: "Q271862: Password Filter Excludes the Slash Character"
permalink: /kb/271/Q271862/
---

## Q271862: Password Filter Excludes the Slash Character

{% raw %}

	Article: Q271862
	Product(s): Microsoft Windows NT
	Version(s): 2000 SP1,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6a 
	- Microsoft Windows NT Server version 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows 2000 SP1 Advanced Server 
	- Microsoft Windows 2000 SP1 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The slash character (/) is not accepted as a valid special character when you
	use Passfilt.dll to enable strong passwords.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
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
	
	  Date        Time    Version        Size    File name     Platform
	  -----------------------------------------------------------------
	  09/08/2000  02:51p  4.0.1381.7086   7,952  Passfilt.dll  Intel
	  09/08/2000  02:49p  4.0.1381.7086  13,072  Passfilt.dll  Alpha
	
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version        Size   File name
	  ------------------------------------------------------
	  09/28/2000  09:50p  5.0.2195.2380  4,880  Passfilt.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: forward
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000SP2Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400sp6 kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbNTTermServ400sp6 kbNTTermServSearch kbWinAdvServSearch kbWin2000AdvServSP1 kbwin2000ServSP1 kbWinNTSEnt400SP6a
	Version           : :2000 SP1,4.0 SP6,4.0 SP6a
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
