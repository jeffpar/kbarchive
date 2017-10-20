---
layout: page
title: "Q190025: XADM: Unable to Create New Mailbox, Error 2037"
permalink: /kb/190/Q190025/
---

## Q190025: XADM: Unable to Create New Mailbox, Error 2037

{% raw %}

	Article: Q190025
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a user in a recipient container of a Microsoft
	Exchange Server computer, which was recovered, you may get one or more of the
	following error messages:
	
	  Extension 'Wireless' could not be loaded.
	  An Error occurred during file replication.
	  Unable to find the extension.dll file with the current version number.
	  Microsoft Exchange Admin ID NO C1030AD1 [Abort], [Retry] [Ignore]
	
	Clicking Ignore then enables access to the Recipient Container Property page, but
	you still cannot create a new recipient.
	
	The following message may be found in the Event Viewer:
	
	  Event ID 2037: The file version of
	  Addins\Wireless\i386\igwadmin.dll installed on the local
	  server is not current. Unable to locate a current version on
	  any server in the site.
	
	CAUSE
	=====
	
	These errors are due, most likely, to the fact that the recovered server does
	not have the full directory structure of the original server. Consequently,
	there may be some absent files for any third-party software.
	
	WORKAROUND
	==========
	
	To work around this behavior, follow these steps:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program
	(admin/r) incorrectly can cause serious problems that may require you to
	reinstall Microsoft Windows NT Server and/or Microsoft Exchange Server.
	Microsoft cannot guarantee that problems resulting from the incorrect use of raw
	mode can be solved. Use raw mode at your own risk.
	
	1. Run the Exchange Server Administrator program in raw mode. At a command
	  prompt type:
	
	  C:\exchsrvr\bin\admin.exe -r
	
	2. Select the recipients container that shows the behavior, and on the File
	  menu, select Raw Properties.
	
	3. Look under Object Attributes for Extension-Name-Inherited.
	
	4. If Extension-Name-Inherited contains a value of WIRELESS, then remove that
	  value.
	
	5. Quit the raw mode, and test the fix by attempting to create a user in the
	  same container again.
	
	Additional query words: wireless gnvuaext extension.dll
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
