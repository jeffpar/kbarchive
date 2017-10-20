---
layout: page
title: "Q195152: XCLN: Tasks Clients Should Perform to Complete the Server Move"
permalink: /kb/195/Q195152/
---

## Q195152: XCLN: Tasks Clients Should Perform to Complete the Server Move

{% raw %}

	Article: Q195152
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are additional tasks that Exchange Server client and Schedule+ users must
	perform to complete a server move.
	
	- After the server move and before using your Exchange Server client or
	  Schedule+, delete the .ost and .scd files from your directory.
	
	- Create a new user profile for your Exchange Server client mailbox using the
	  Control Panel Mail tool.
	
	- Create a new .ost file for your Exchange Server client. If you plan to work
	  offline with Exchange Server, you will need an .ost file for your mailbox. In
	  your Exchange Server client, from the Tools menu, click Services, then click
	  Microsoft Exchange Server. Click Properties and on the Advanced tab, click
	  Offline Folder File Settings, and then specify a location for your .ost file.
	
	- Specify the folders to be synchronized with your .ost. For each folder in
	  your Inbox that you want synchronized with your .ost, right-click on the
	  folder and click Properties. On the Synchronization tab, select when you want
	  synchronization to occur.
	
	- Choose to create a new schedule file. The first time you use Schedule+ after
	  the move, you can create a new schedule file. Choose either I want to create
	  a new schedule file, or I do not want a schedule file on this machine. Do not
	  use an old version of a schedule file. Old versions of schedule files might
	  not synchronize properly with the server and can cause synchronization error
	  messages and appointments to be removed from your calendar.
	
	Additional query words: Move Server Wizard Outlook
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
