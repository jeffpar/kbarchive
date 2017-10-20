---
layout: page
title: "Q140775: BBS Messages Marked as Read Appear as Not Read"
permalink: /kb/140/Q140775/
---

## Q140775: BBS Messages Marked as Read Appear as Not Read

{% raw %}

	Article: Q140775
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both of these files are hidden
	in the Windows folder.
	
	SYMPTOMS
	========
	
	Although you mark the messages in a bulletin board (BBS) as read, they appear
	unread when you sign in to MSN, The Microsoft Network, again.
	
	CAUSE
	=====
	
	This behavior can occur if the registry key that tracks read and unread messages
	is damaged.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	Delete the registry key that tracks messages. The next time you sign in to MSN,
	all BBS messages will appear as unread and the key will be rebuilt.
	
	Delete the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\MOS\Articles
	
	Additional query words: 1.2
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3
	
	=============================================================================
	

{% endraw %}
