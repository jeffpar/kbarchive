---
layout: page
title: "Q173944: Err Msg: Windows Cannot Find the File Program.exe. This..."
permalink: /kb/173/Q173944/
---

## Q173944: Err Msg: Windows Cannot Find the File Program.exe. This...

{% raw %}

	Article: Q173944
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,2.5,95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.5 
	- Microsoft Internet Mail and News version 1.0 for Windows 95 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open an Internet newsgroup in MSN, The Microsoft Network,
	you may receive the following error message:
	
	  Windows cannot find the file Program.exe. This program is needed to open
	  files of the type URL: News Protocol.
	
	You are then prompted to provide the path to the Program.exe file.
	
	CAUSE
	=====
	
	This behavior can occur if the file association for the News protocol is still
	associated with your previous news reader program, which you have removed from
	the computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, you need to configure Microsoft Internet News to be your
	default news reader program. To do so, use the following steps:
	
	1. Click Start, point to Programs, and then click Internet News. Close any
	  dialog boxes or error messages that may appear.
	
	2. On the News menu, click Options.
	
	3. Click the Read tab.
	
	4. Click the Make Microsoft Internet News your default news reader check box to
	  select it, and then click OK.
	
	5. Close Internet News, and then restart the computer.
	
	Additional query words: 2.50 msnet msnetwork microsoft-net m.s.n. inetnewsw95
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbIMNSearch kbMSN250 kbIMN100Win95
	Version           : WINDOWS:1.0,2.5,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
