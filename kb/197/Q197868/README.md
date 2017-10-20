---
layout: page
title: "Q197868: XCLN: Exchange Client Setup Hangs while Updating Your System"
permalink: /kb/197/Q197868/
---

## Q197868: XCLN: Exchange Client Setup Hangs while Updating Your System

{% raw %}

	Article: Q197868
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Microsoft Exchange Client for Windows NT from the Exchange
	Server 5.0 CD, the Microsoft Exchange Setup program may stop responding (hang)
	in the last step. A dialog box will be displayed on the screen with the
	following message:
	
	  Setup is updating your system.
	
	The Busy icon will stay on the screen, and there will be no disk activity. If you
	click Ctrl-Alt-Del, and go to Windows NT Task Manager, the status for Microsoft
	Exchange Setup is "Not Responding." If you attempt to reinstall the Exchange
	Client, you get the same results.
	
	CAUSE
	=====
	
	Setup actually completed but stopped responding in the process of creating the
	Startup menu icon for the Exchange Client.
	
	WORKAROUND
	==========
	
	To work around this problem, create a new short cut to the Exchange Client by
	following these steps:
	
	1. In Windows NT Explorer, search for the file Exchng32.exe.
	
	2. If the file exists on your hard drive, then Setup was completed but stopped
	  before creating the icon in the Startup menu.
	
	3. Right-click on Start and select Open. Select a group of your choice, and
	  right-click inside this group.
	
	4. Select New, then Shortcut. Within the Create Short Cut dialog box, browse to
	  the file you found in step # 1, and give it a name such as "Exchange Client."
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
