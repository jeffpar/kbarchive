---
layout: page
title: "Q160144: XADM: You do not have Permission to Access Portions..."
permalink: /kb/160/Q160144/
---

## Q160144: XADM: You do not have Permission to Access Portions...

{% raw %}

	Article: Q160144
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 07-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to restore the Microsoft Exchange Directory or Information
	Store from an online backup, you may receive the following error:
	
	  You do not have permission to access portions of \<directory>. Please
	  see the owner or administrator to get permission. Error writing alternate
	  file data.
	
	This error occurs when Windows NT 3.51 Service Pack 5 (SP5) is applied. SP5
	replaces the Ntbackup.exe that is installed by Microsoft Exchange Server in the
	<system root>\System32 directory.
	
	To resolve this problem, copy Ntbackup.exe from the Microsoft Exchange Server
	compact disc into the <system root>\System32 directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
