---
layout: page
title: "Q281835: XFOR: Setting &quot;Message Text Word Wrap&quot; to &quot;Never&quot; Does Not Work"
permalink: kb/281/Q281835/
---

## Q281835: XFOR: Setting &quot;Message Text Word Wrap&quot; to &quot;Never&quot; Does Not Work

	Article: Q281835
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 10-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the Internet Mail tab of the Internet Mail Service properties, if you click
	to select the MIME and Plain Text check boxes under Message Content and
	"Attachments (outbound)", click Advanced Options, and then set Message Text Word
	Wrap to Never, the Internet Mail Service may still wrap text for URLs at 76
	characters.
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	1. Open the Internet Mail Service properties, click the Internet Mail tab, and
	  then click Advanced Options. Change the Message Text Word Wrap setting from
	  Never to At Column with a value of 300, and then click OK twice to accept the
	  change.
	
	2. Restart the Internet Mail Service.
	
	3. Open the Internet Mail Service properties, click the Internet Mail tab, and
	  then click Advanced Options. Change the Message Text Word Wrap setting back
	  to Never. Click OK twice to accept the change.
	
	4. Restart the Internet Mail Service.
	
	After you perform these steps, the Internet Mail Service does not wrap text.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
