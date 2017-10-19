---
layout: page
title: "Q198563: XFOR: Replies to Some Internet Mail Messages Fail"
permalink: /kb/198/Q198563/
---

## Q198563: XFOR: Replies to Some Internet Mail Messages Fail

	Article: Q198563
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Exchange Server recipient replies to some Internet messages, he or she
	may receive a non-delivery report (NDR) indicating an invalid domain name. The
	original in-bound message the recipient received from the Internet contains a
	sender with an address similar to the following:
	
	  <user@correct.domain.com>@incorrect.domain.com
	
	In this example, "@incorrect.domain.com" is a non-existent domain name that has
	been appended to the correct address, "user@correct.domain.com." The domain
	"@correct.domain.com" is the valid domain name.
	
	These additional domain name or names cause the message not be delivered. The
	additional domain names may be added to the sender's address as a result of some
	foreign mail configurations.
	
	CAUSE
	=====
	
	In Internet Mail Service outbound mail, the domain name is found by looking for
	the last @ sign in the address. In this case this is "@incorrect.domain.com."
	
	
	The Internet Mail Service tries to resolve "incorrect.domain.com," which does not
	exist, and fails. Thus, the message gets returned to the Exchange Server sender
	as an NDR.
	
	Now, on the way into the information store from the Internet Mail Service, the
	address is checked to make sure it is usable. The check looks for the < and
	> symbols, and clears out everything else except what is inside these
	symbols. As a result, the message is cleaned up, and resent.
	
	WORKAROUND
	==========
	
	The Exchange Server sender should resend the message from the NDR; it will
	work.
	
	
	Additional query words: reply double dual domains smtp mail fail duplicate
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
