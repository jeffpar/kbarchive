---
layout: page
title: "Q247937: XCLN: Error Message Using Outlook with Terminal Server"
permalink: /kb/247/Q247937/
---

## Q247937: XCLN: Error Message Using Outlook with Terminal Server

{% raw %}

	Article: Q247937
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you compose a new mail message or try to open a mail message that has an
	e-mail message as an attachment, you may receive the following error message:
	
	  The object could not be found.
	
	CAUSE
	=====
	
	This error occurs if you are trying to perform one of the following actions
	while running Outlook 98 on a computer running Microsoft Windows NT 4.0 Terminal
	Server Edition:
	
	- While you compose a new mail message, you click Item on the Insert menu, and
	  click a mail message as the object to insert.
	
	- You click multiple e-mail messages, and then click Forward or press the
	  CTRL+F keys.
	
	- With a new mail message open, you drag a mail item from the Inbox and drop it
	  into the open message.
	
	NOTE: For the third action, the full error message is:
	
	  Cannot create attachments. The object could not be found.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This issue has been corrected for
	Microsoft Outlook 2000 running under Windows NT 4.0 Terminal Server Edition.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOSWinSearch kbOSWinNT400 kbOutlook98Search kbZNotKeyword3 kbOSWinNTSearch
	Version           : WINDOWS:; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
