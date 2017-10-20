---
layout: page
title: "Q214685: XFOR: CDONTS Not Thread-Safe, Crashes Under Stress"
permalink: /kb/214/Q214685/
---

## Q214685: XFOR: CDONTS Not Thread-Safe, Crashes Under Stress

{% raw %}

	Article: Q214685
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Collaboration Data Objects for Windows NT Server (CDONTS) Send Mail function
	is not thread-safe.
	
	CAUSE
	=====
	
	CDONTS initializes the RTF/HTML converter each time it is used. This
	initialization is not thread-safe, and is not protected with a critical section.
	This permits a race condition where one thread can shut down the converter while
	another thread is still using it, causing memory corruption, asserts, and
	failures (crashes).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Windows NT version 4.0 Service
	Pack 5.
	
	Additional query words: crash hang GPF
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
