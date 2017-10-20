---
layout: page
title: "Q168089: NTMMTA Locks Session.log When Run As a Service on Windows NT 4.0"
permalink: /kb/168/Q168089/
---

## Q168089: NTMMTA Locks Session.log When Run As a Service on Windows NT 4.0

{% raw %}

	Article: Q168089
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the NTMMTA is configured to run as a service on Windows NT 4.0, the
	Session.log (assuming that the LogSession parameter is set) is locked open even
	after the service is stopped.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with version 3.5 of Xtsrv32.exe.
	This problem was corrected in version v3.05.0028 or later of Xtsrv32.exe.
	
	To obtain this updated file, please contact Microsoft Technical Support.
	
	
	Additional query words: nt4 lock
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : WINDOWS:3.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
