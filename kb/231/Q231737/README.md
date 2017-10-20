---
layout: page
title: "Q231737: XIMS: Internet Mail Service Doesn't Start; Logs 4070 and 4131"
permalink: /kb/231/Q231737/
---

## Q231737: XIMS: Internet Mail Service Doesn't Start; Logs 4070 and 4131

{% raw %}

	Article: Q231737
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Service does not start and causes inbound mail to stop
	flowing. You may find that there is plenty of disk space. Restarting the
	Internet Mail Service temporarily resolves the issue until the mail stops
	flowing again. The application event log may report the following error messages
	from the MSExchangeIMC service:
	
	  4070: An error occurred while opening a temporary message file. Verify that
	  the message spool directories are configured correctly and are readable by
	  the Internet Mail Service.
	
	  4131: An unexpected error occurred in the Internet Mail Service. Information
	  about this error is stored in the data portion of this event.
	
	CAUSE
	=====
	
	An application or a user may have deleted the Exchsrvr\Imcdata\In directory.
	When permissions on the C:\Exchsrvr\Imcdata\In directory are not set to Read
	Only, the directory may be deleted or renamed by any outside agent during
	Internet Mail Service operation.
	
	RESOLUTION
	==========
	
	1. Verify that the C:\Exchsrvr\Imcdata\In directory exists before restarting the
	  Internet Mail Service.
	
	2. Recreate the directory if necessary.
	
	3. Set the Everyone group's access level to the Imcdata directory to Read Only,
	  and restart the Internet Mail Service.
	
	MORE INFORMATION
	================
	
	If you notice that the directory is being deleted, you may want to enable
	auditing to determine the source of the activity. For additional information,
	see the following article in the Microsoft Knowledge Base:
	
	  Q146791 XFOR: IMC Cannot Receive Message with Missing Folder
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
