---
layout: page
title: "Q153260: Sender Disconnect Results in Sharing Violations"
permalink: /kb/153/Q153260/
---

## Q153260: Sender Disconnect Results in Sharing Violations

{% raw %}

	Article: Q153260
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): smssenders kbSMSSenderkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the sender encounters either a redirector error or a network error, it
	terminates abruptly and may not close the file it was writing to. This causes
	the Windows NT Redirector to give an Error 32 (Sharing Violation).
	
	CAUSE
	=====
	
	When a sender encounters a failure to write a buffer to a remote site, and when
	it terminates due to this error, a single attempt is made to CloseHandle() on
	the file handle it was writing to. If this handle close fails, entries remain in
	the session tables of the Windows NT redirector. Minutes later, SMS dispatches a
	new thread on a retry and the Windows NT redirector returns Error 32 (Sharing
	Violation) because the session table still indicates that file name has a open
	in another thread.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : smssenders kbSMSSender kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
