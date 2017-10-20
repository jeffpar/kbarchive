---
layout: page
title: "Q217921: SBS FAX: Unsent Fax Does Not Stay in Queue for Days Specified"
permalink: /kb/217/Q217921/
---

## Q217921: SBS FAX: Unsent Fax Does Not Stay in Queue for Days Specified

{% raw %}

	Article: Q217921
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a fax job using the Small Business Server (SBS) Fax service and the
	fax job is not sent successfully, the job remains in the fax queue indefinitely
	or until you manually remove the fax job.
	
	CAUSE
	=====
	
	This behavior is caused by the Windows NT 4.0 print spooler code, which
	specifies that print jobs be deleted only after they finish successfully or when
	a user with sufficient permission manually deletes them. Because of this design,
	the spooler does not recognize delete commands from the SBS Fax service.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To reproduce this problem:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Fax Server.
	
	3. Type "1" (without the quotation marks) in the "Days to Keep Unsent Faxes"
	  box.
	
	4. Restart the Fax service.
	
	5. Send a fax to an invalid number.
	
	6. Allow the fax job to remain in the queue for at least one full day.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
