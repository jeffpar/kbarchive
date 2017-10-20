---
layout: page
title: "Q241404: Dr. Watson Error in Userinit.exe When a User Logs On"
permalink: /kb/241/Q241404/
---

## Q241404: Dr. Watson Error in Userinit.exe When a User Logs On

{% raw %}

	Article: Q241404
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user logs on to a Terminal Server session, a Dr. Watson error in
	Userinit.exe may be generated. The stack trace may look something like this:
	
	FramePtr ReturnAd Param#1  Param#2  Param#3  Param#4  Function Name
	0012f8f8 02e21dc2 00000000 00140d60 7ffdf000 006f0074 ntdll!wcscat
	0012ff2c 02e2244b 02e20000 00000000 00140d60 0000000a userinit! <nosymbols>
	0012ffc0 77f11397 00000000 00000000 7ffdf000 c0000005 userinit! <nosymbols>
	
	The wcscat function should not have zero as the first parameter.
	
	CAUSE
	=====
	
	This behavior can occur when the following conditions exist:
	
	- A file date in the following registry key key is newer than the date of the
	  file in the <Userprofile>\Windows folder:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Terminal
	  Server\Install\IniFile Times
	
	- The CITRIX_COMPAT_INISYNC (0x40) and CITRIX_COMPAT_WIN16 (0x04) .ini file
	  synchronization flags are both set in the following registry key
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Terminal
	  Server\Compatibility\Applications\<name>
	
	where <name> is the module name (typically, the .ini file name with the
	.ini extension removed).
	
	- The file has no period (.) in its name.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
