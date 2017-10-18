---
layout: page
title: "Q191196: XCLN: Frames Do Not Convert Correctly in HTML Form Converter"
permalink: kb/191/Q191196/
---

## Q191196: XCLN: Frames Do Not Convert Correctly in HTML Form Converter

	Article: Q191196
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook HTML Form Converter 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you convert a custom form using the Outlook HTML Form Converter included
	with Exchange Server 5.5 Service Pack 1, some frames and their associated fonts,
	colors, sizes, and captions may not appear, and their information may not be
	displayed when you view the source code.
	
	CAUSE
	=====
	
	This problem can occur if the frame width is equal to a value of 8 or less. The
	HTML Form Converter correctly converts only frames with a value of greater than
	8.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbAudDeveloper kbZNotKeyword6 kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2 kbOutlookHTMLConv
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
