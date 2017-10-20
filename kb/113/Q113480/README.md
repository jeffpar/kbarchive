---
layout: page
title: "Q113480: WFWG AWFAX Err Msg: General Failure in EFAXPUMP"
permalink: /kb/113/Q113480/
---

## Q113480: WFWG AWFAX Err Msg: General Failure in EFAXPUMP

{% raw %}

	Article: Q113480
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a facsimile from a Class 2 modem, you receive the following
	error message:
	
	  General Failure in EFAXPUMP
	
	NOTE: This error can also occur before the modem begins to dial.
	
	CAUSE
	=====
	
	The fax fails when illegal responses to the key modem commands AT+FDIS=? and
	AT+FDCC=? are given. The
	
	  General Failure in EFAXPUMP
	
	error occurs if the command responds with "OK" instead of providing a string of
	numbers to specify the modem's current bit rate, page size, and so forth.
	
	RESOLUTION
	==========
	
	Although some fax software may work with fax modems that produce illegal modem
	responses, Microsoft At Work PC Fax does not. These key modem commands are
	issued when the fax modem is used, and they cannot be modified or corrected.
	
	Please contact the manufacturer of your fax modem for a possible ROM upgrade.
	
	MORE INFORMATION
	================
	
	If you are experiencing this problem with a Class 2 modem, you can test these
	commands with the following steps:
	
	1. Exit and sign out of Mail.
	
	2. Start Terminal and configure it for the port.
	
	3. Type "at+fclass=2" (without the quotation marks). This command sets the fax
	  modem to Class 2 fax mode.
	
	4. Type "at+fdis=?" (without the quotation marks). The following are examples of
	  possible values for this command:
	
	  (0-1),(0-3),(0-4),(0-2),(0),(0),(0),(0-7)
	
	5. Type "at+fdcc=?" (without the quotation marks). The following are examples of
	  possible values for this command:
	
	  (0-1),(0-3),(0-4),(0-2),(0),(0),(0),(0-7)
	
	NOTE: If you do not receive a response in steps 4 and 5, the test was not
	performed correctly, or the fax modem is not a Class 2 modem. Typing
	"at+fclass=?" (without the quotation marks) in Terminal displays which classes
	your modem supports. If you receive a response in steps 4 and 5 that does not
	contain numeric digits, please refer to the resolution above.
	
	Additional query words: 3.11 efax message err: msg EFAXPUMP.INI
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
