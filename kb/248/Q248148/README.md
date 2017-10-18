---
layout: page
title: "Q248148: XCLN: The Signature &lt;Name.sig&gt; Could Not Be Located"
permalink: kb/248/Q248148/
---

## Q248148: XCLN: The Signature &lt;Name.sig&gt; Could Not Be Located

	Article: Q248148
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you compose a new message in Outlook, you may encounter the following error
	message:
	
	  The signature "(name.sig)" could not be located. This signature may have been
	  removed.
	
	CAUSE
	=====
	
	This error can occur for several reasons:
	
	- You have manually deleted the signature file or it is located on a network
	  drive that is currently inaccessible.
	
	- You have edited the signature file using Word or Excel and have not quit the
	  Office application.
	
	- You have uninstalled Outlook 2000 and attempted to use Outlook 97 or 98
	  without rebooting and reinstalling the Outlook client.
	
	WORKAROUND
	==========
	
	Workarounds for the possible causes are as follows:
	
	- Recreate the deleted signature file, and then retry creating a new message,
	  or remap the network drive that is currently unavailable.
	
	- Quit the Office application that is locking the file open, and then compose a
	  new message.
	
	- Reboot the computer and reinstall the Outlook client. Outlook 2000, 98, and
	  97 use a different registry key location to specify where to store the
	  signature file, so you may want to copy the .sig file to another location for
	  later use.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
