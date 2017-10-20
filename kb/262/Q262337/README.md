---
layout: page
title: "Q262337: XADM: &quot;Unknown Failure&quot; Error Message when You Run Exmerge"
permalink: /kb/262/Q262337/
---

## Q262337: XADM: &quot;Unknown Failure&quot; Error Message when You Run Exmerge

{% raw %}

	Article: Q262337
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Exmerge utility (Exmerge.exe) to move mailbox information from
	an Exchange Server computer to a Personal Folder (.pst file), an error similar
	to the following error may occur in the Exmerge log file and the Exmerge utility
	cannot continue:
	
	  [21:18:34] Error getting ServerDN - Check current Windows NT account (E_FAIL
	  - Unknown Failure) (CMapiSession::GetOrgSiteServerName) [21:18:34] Errors
	  encountered. Copy process aborted.
	
	MORE INFORMATION
	================
	
	This error may occur if the Exchange Server computer on which you are running
	the Exmerge utility is out of disk space.
	
	Verify that the drive on which you are running the utility has sufficient disk
	space to complete the operation. The utility display the required disk space
	when you select the mailboxes.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
