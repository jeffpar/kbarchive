---
layout: page
title: "Q176809: XADM: EDBUTIL.EXE does not Return Non-zero Error Code"
permalink: /kb/176/Q176809/
---

## Q176809: XADM: EDBUTIL.EXE does not Return Non-zero Error Code

{% raw %}

	Article: Q176809
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Server version 5.5, when you run the EDBUTIL utility
	against the Microsoft Exchange Directory or Information Store, you will receive
	a message indicating that ESEUTIL should be run instead. However, EDBUTIL.EXE
	does not return a non-zero return code in this case. This will present a problem
	if you are using a batch file which calls EDBUTIL and performs error level
	checking based on the return code.
	
	WORKAROUND
	==========
	
	Replace all occurrences of EDBUTIL.EXE with ESEUTIL.EXE in the batch file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
