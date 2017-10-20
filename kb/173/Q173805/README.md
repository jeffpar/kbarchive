---
layout: page
title: "Q173805: XADM: Unable to Administer 5.5 IMS from 5.0 Admin Program"
permalink: /kb/173/Q173805/
---

## Q173805: XADM: Unable to Administer 5.5 IMS from 5.0 Admin Program

{% raw %}

	Article: Q173805
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The version 5.0 Microsoft Exchange Administrator program cannot administer the
	Internet Mail Service (IMS) on version 5.5 Exchange Servers. The following
	dialog box will appear:
	
	  Extension 'SMTP' could not be loaded.
	  A problem occurred with the extension .DLL file, possibly due to memory
	  shortage. Close some applications or windows, and try again.
	  Microsoft Exchange Administrator.
	  ID no: c10312c6
	
	MORE INFORMATION
	================
	
	This behavior will be only seen when a version 5.5 Exchange Server is added to
	an existing version 5.0 Site.
	
	WORKAROUND
	==========
	
	Use the Administrator program that ships with Exchange Server, version 5.5 to
	administer this IMS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
