---
layout: page
title: "Q176725: XCLN: Microsoft Exchange MS-DOS Client Fails with Memory Error"
permalink: /kb/176/Q176725/
---

## Q176725: XCLN: Microsoft Exchange MS-DOS Client Fails with Memory Error

{% raw %}

	Article: Q176725
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You can read messages in the Microsoft Exchange MS-DOS Client, but when you
	attempt to send, forward, or reply, the following error message might be
	displayed:
	
	  The message could not be sent.
	
	  You need more memory to perform this operation.
	  Close some windows and try again.
	
	  Microsoft Exchange for MS-DOS
	
	  ID No: 5803 - 5001
	
	CAUSE
	=====
	
	This message can occur when the Microsoft Exchange Server fails to return
	required addressing information. In a very large organization with many address
	types, the address type information can exceed the RPC buffer space. The failure
	is returned to the Exchange MS-DOS Client as a lack of memory and results in the
	message shown above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange MS-DOS
	client, versions 4.0 and 5.0. A supported fix is now available, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	The corrected MS-DOS Client has a larger RPC buffer and is able to retrieve all
	of the information needed to complete the send, forward, or reply.
	
	Additional query words: spooler store
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword3 kbExchange400DOS kbExchange500DOS
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
