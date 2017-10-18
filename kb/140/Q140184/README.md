---
layout: page
title: "Q140184: XFOR: How to Get the IMC to Use an Internet Provider"
permalink: kb/140/Q140184/
---

## Q140184: XFOR: How to Get the IMC to Use an Internet Provider

	Article: Q140184
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server version 4.0 Internet Mail Connector (IMC) cannot
	dial-up and send or receive mail itself. The IMC expects to be able to connect
	to other SMTP hosts already available. However, there is a way to accomplish the
	same thing using the AT command in Windows NT.
	
	MORE INFORMATION
	================
	
	You will need to make arrangements with the Internet Provider to hold mail
	delivery until pre-defined times. At these pre- defined times, you will want to
	have a batch file that is called by the AT command that initiates a RAS session
	using RASDIAL, and then starts the IMC. Because the IMC can accept multiple
	simultaneous connections, it can send mail and receive mail from the Internet
	Provider at the same time. Lastly, you would also want to have a batch file
	scheduled to stop the IMC and disconnect the RAS session.
	
	The following are some sample batch files:
	
	IMCSTART.BAT
	------------
	
	  rasdial <name of Internet Provider's phone book entry>
	  net start msexchangeimc
	
	IMCSTOP.BAT
	-----------
	
	  net stop msexchangeimc
	  rasdial /disconnect
	
	
	Additional query words: isp simulataneous dial exfaqcon
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
