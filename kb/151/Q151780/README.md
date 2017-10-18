---
layout: page
title: "Q151780: XFOR: IMC's Retry Interval Text Box Allows Invalid Values"
permalink: kb/151/Q151780/
---

## Q151780: XFOR: IMC's Retry Interval Text Box Allows Invalid Values

	Article: Q151780
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Retry Interval text box on the Connections tab of the Internet Mail
	Connector (IMC), in the Microsoft Exchange Administrator program, has less
	robust error checking than any other text box. It will allow you to enter
	garbage numerical characters and save them, without generating a warning. The
	IMC Server handles these garbage entries by setting all retry intervals to zero.
	However, the text box will not display this but will continue to display the
	numbers that you entered. The IMC silently ignores numbers greater than 100 when
	it starts.
	
	MORE INFORMATION
	================
	
	To ensure that the retry interval for the IMC is not ignored, enter a value in
	the text box between 0 and 100.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
