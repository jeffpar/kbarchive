---
layout: page
title: "Q163746: XCLN: Chinese Chars in Attachment File Name Wrong in Outlook"
permalink: /kb/163/Q163746/
---

## Q163746: XCLN: Chinese Chars in Attachment File Name Wrong in Outlook

{% raw %}

	Article: Q163746
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Chinese characters as part of the file name of an attachment, these
	characters do not appear correctly when using Outlook.
	
	WORKAROUND
	==========
	
	To work around this problem, copy the Ole32.dll file from the Japanese version
	of Outlook and overwrite the one from the Chinese version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: double byte character set char double-byte DBCS
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
