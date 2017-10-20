---
layout: page
title: "Q133182: CD-ROM Access Slows During Windows NT SDK Setup"
permalink: /kb/133/Q133182/
---

## Q133182: CD-ROM Access Slows During Windows NT SDK Setup

{% raw %}

	Article: Q133182
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Windows NT SDK installation reaches 50 percent, the CD-ROM read access
	becomes extremely slow.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Using a text editor, open the SETUP.LOG file in the %SYSTEMROOT%\REPAIR
	  directory and remove the entries added by Windows NT SDK Setup.
	
	  -OR-
	
	- Upgrade to Windows NT 3.51 and install the Windows NT SDK.
	
	Additional query words: prodnt cd
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
