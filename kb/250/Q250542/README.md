---
layout: page
title: "Q250542: &quot;Msnls.dll Cannot Be Found&quot; Error Message When Browsing with AOL"
permalink: /kb/250/Q250542/
---

## Q250542: &quot;Msnls.dll Cannot Be Found&quot; Error Message When Browsing with AOL

{% raw %}

	Article: Q250542
	Product(s): Microsoft Windows NT
	Version(s): 4.0,5
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg msient
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Internet Explorer versions 4.0, 5 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse the Internet with Internet Explorer on your Windows NT-based
	computer and America Online (AOL) as your Internet Service Provider (ISP), you
	may periodically receive the following error message:
	
	  msnls.dll cannot be found.
	
	Also, the Msnls.dll file cannot be located on your AOL or Windows NT installation
	media.
	
	CAUSE
	=====
	
	This issue can occur if you are using an out of date version of the AOL
	software. Older versions of the AOL software periodically try to use the
	Msnls.dll file included with Internet Explorer version 3.x.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain and install version 5.0 (or later) of the AOL
	software. For information about how to do so, contact AOL.
	
	NOTE: AOL does not support running the AOL software on Windows NT-based
	computers, but the current version of their software does not require use of the
	Msnls.dll file.
	
	
	WORKAROUND
	==========
	
	Another way to resolve this issue is to create a "dummy" file. You can create a
	"dummy" file and add it to the system directory of NT (normally winnt\system).
	To do this, do one of these methods:
	
	1. Create a new file on the system directory of NT:
	
	   - Navigate to and open Notepad on your computer.
	
	   - Add some sample text to the body of the Notepad file.
	
	   - Select File, and save as Msnls.dll.
	
	2. Copy a file to the system directory of NT and rename the file Msnsls.dll.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg msient 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbIEsearch kbZNotKeyword2 kbIENT400Search kbIE500Search kbZNotKeyword3 kbIE400WinNT400 kbIE500WinNT400
	Version           : :4.0,5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
