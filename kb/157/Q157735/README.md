---
layout: page
title: "Q157735: XFOR: Character Set Not Supported"
permalink: /kb/157/Q157735/
---

## Q157735: XFOR: Character Set Not Supported

	Article: Q157735
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Exchange Server, you may receive messages in your Inbox
	that are similar to the following:
	
	  This message was sent using a character set not supported on the Internet
	  Mail Connector. The message text has been placed into the attachment:
	  ATT00001.txt. To view, double-click on the attachment. If the text isn't
	  displayed correctly, save the attachment to disk, and then use a viewer that
	  can display the original character set.
	
	WORKAROUND
	==========
	
	To work around this problem, set the sending system to use a supported character
	set, for example, ISO-8859 or US-ASCII, or something found on the Internet Mail
	tab for the Internet Mail Connector (IMC).
	
	MORE INFORMATION
	================
	
	To see which character set was used to send the message, open the properties of
	the message and click the Headers tab. Scroll down to the bottom and find the
	line that is similar to the following:
	
	  Content-Type: text/plain; charset="us-ascii"
	
	If the character set that was used to send the message to Exchange Server is
	anything other than US-ASCII, the behavior in the "Symptoms" section of this
	article may occur. In compliance with RFC-1521, the character set that Exchange
	Server supports is US-ASCII.
	
	A character set of X-roman8 or X-anything is not supported by the IMC.
	
	Excerpt from RFC-1521:
	
	  No other character set name may be used in Internet mail without the
	  publication of a formal specification and its registration with IANA, or by
	  private agreement, in which case the character set name must begin with
	  "X-".
	
	  Implementors are discouraged from defining new character sets for mail use
	  unless absolutely necessary.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
