---
layout: page
title: "Q166071: Error Message: Unexpected DOS Error 11"
permalink: /kb/166/Q166071/
---

## Q166071: Error Message: Unexpected DOS Error 11

{% raw %}

	Article: Q166071
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run a program in Windows NT, you may receive the following error
	message:
	
	  Unexpected DOS error 11
	
	CAUSE
	=====
	
	Using the "NET HELPMSG 11" command returns the following information:
	
	  An attempt was made to load a program with an incorrect format.
	
	This type of error message can be caused by trying to install the wrong Service
	Pack for the version of Windows NT running on the computer. (For example, trying
	to install a Service Pack for Windows NT 3.51 on a Windows NT 3.5-based
	computer.)
	
	RESOLUTION
	==========
	
	Check the build or version of Windows NT running on the computer and run the
	correct version of the program for the version of Windows NT you are using.
	
	For additional information, see the following article in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q140642
	  TITLE : Err Msg: Unexpected DOS Error 11 Using Server Tools
	
	Additional query words: remote 4.00
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
