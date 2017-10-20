---
layout: page
title: "Q175486: XCLN: Exchange Win 3.x Client Cannot Open XNK Sent from Outlook"
permalink: /kb/175/Q175486/
---

## Q175486: XCLN: Exchange Win 3.x Client Cannot Open XNK Sent from Outlook

{% raw %}

	Article: Q175486
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02
	Operating System(s): 
	Keyword(s): kbBug kbfix kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Exchange Windows 3.x client and attempt to open
	a Public Folder shortcut (XNK) in a message sent from a Microsoft Outlook
	client, you might receive an error message similar to the following:
	
	  The Application associated with this attachment could not be started.
	  Verify the application is installed on your system with a correct
	  directory path. C:\temp\1
	
	WORKAROUND
	==========
	
	The Microsoft Outlook user can create the XNK successfully by saving it to their
	desktop or another folder first and then dragging that copy to the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook, versions 8.0,
	8.01, and 8.02.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	
	MORE INFORMATION
	================
	
	To reproduce this problem, follow these steps:
	
	1. Compose a new message in Microsoft Outlook.
	
	2. Drag and drop a Public Folder into the compose note. This will create a XNK
	  to the Public Folder
	
	3. Send the message to a Microsoft Exchange Windows 3.x client user.
	
	4. Open the message in the Microsoft Exchange Windows 3.x client and double-
	  click the XNK.
	
	Results: The error message listed above will appear.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBug kbfix kbISS 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802
	Version           : :8.0,8.01,8.02
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
