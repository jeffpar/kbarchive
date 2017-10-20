---
layout: page
title: "Q173996: Explorer Caused an Invalid Page Fault in Comctl32.dll"
permalink: /kb/173/Q173996/
---

## Q173996: Explorer Caused an Invalid Page Fault in Comctl32.dll

{% raw %}

	Article: Q173996
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, or start Microsoft
	Internet Explorer, you may receive the following error message:
	
	  Explorer caused an invalid page fault in module Comctl32.dll.
	
	CAUSE
	=====
	
	The Windows Address Book file may be damaged.
	
	This error can also occur if a program called W3XNetwork is loading in the
	background.
	
	RESOLUTION
	==========
	
	To resolve this issue by deleting and rebuilding the WAB file (try this solution
	first)
	
	1. Click Start, select Find, and then click Files Or Folders.
	
	2. In the Named box, type "*.wab" (without quotation marks), and then click Find
	  Now.
	
	3. In the list of found files, right-click the following file
	
	  "<MSN Member ID>.wab" (without the quotation marks)
	
	  and then click Delete.
	
	4. Close the Find: Files named *.wab dialog box.
	
	5. Restart the computer.
	
	6. Connect to MSN, and then start the MSN E-mail service.
	
	7. On the Tools menu, click Address Book to re-create the Windows Address Book
	  file.
	
	Note: If the above steps resolve your problem (you no longer get the error
	message) DO NOT go on to the steps below.
	
	To resolve this issue by removing W3XNetwork from the registry
	
	IMPORTANT: This article contains information about modifying the registry. Before
	you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Select the W3xNetwork value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run
	
	3. On the Edit menu, click Delet, and then click OK.
	
	4. Quit Registry Editor and restart your computer.
	
	Additional query words: 2.50. kbimu
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN250
	Version           : WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
