---
layout: page
title: "Q150017: Multimedia Err Msg: &quot;The File Wing32.dll open...,&quot;"
permalink: /kb/150/Q150017/
---

## Q150017: Multimedia Err Msg: &quot;The File Wing32.dll open...,&quot;

{% raw %}

	Article: Q150017
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft Oceans for Windows, version 1.0 
	- Microsoft World of Flight for Windows, version 1.0 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start or install the products listed at the top of this
	article for the first time, you may receive the following error:
	
	  The file <full path to the Windows System folder>\wing32.dll open,
	  which <product name> needs to modify. Please close all other programs
	  or restart Windows.
	
	Where <full path to the Windows System folder> is the path to your system
	folder and <product name> is the name of the multimedia program you are
	trying to install.
	
	CAUSE
	=====
	
	The file Wing32.dll located in the Windows\System folder is set to Read- only.
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Click the Start button, point to Programs, and then click Windows Explorer.
	
	2. Locate the file Wing32.dll in the Windows\System folder.
	
	3. Select Wing32.Dll.
	
	4. On the File menu, click Properties.
	
	5. On the General tab of the Properties window, clear the check in the Read-only
	  box
	
	6. Click OK.
	
	NOTE: This behavior may occur with other files located in the Windows\System
	folder. Check if the file name mentioned in the error message is set to
	Read-only. If so, substitute that file name and use the steps listed above to
	correct the setting.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the top
	of this article. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: multi media multimedia multi-media mmtitles kbmm HP startup install installation initial
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbOSWin95 kbOSWinSearch kbHomeProdSearch kbZNotKeyword kbKidsSearch kbDogs100 kbWorldofFlight kbOceans
	
	=============================================================================
	

{% endraw %}
