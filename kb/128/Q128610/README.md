---
layout: page
title: "Q128610: SMS: Doc Err: INVDOS /N Command Line Option is Incorrect"
permalink: /kb/128/Q128610/
---

## Q128610: SMS: Doc Err: INVDOS /N Command Line Option is Incorrect

{% raw %}

	Article: Q128610
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbdocerr kbInventory smsinv smsdocerr
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 532 of the Microsoft Systems Management Server Systems Guide states the
	following for the DOS Inventory Agent (INVDOS) command line options:
	
	  /n Instructs the Inventory Agent to request a unique computer name.
	
	This is incorrect. The /m switch instructs the Inventory Agent to request a
	unique computer name. For a correct list of the DOS Inventory Agent command line
	options, type INVDOS /? at the MS-DOS Command Prompt.
	
	Additional query words: prodsms sms invwin32 invos2
	
	======================================================================
	Keywords          : kbdocerr kbInventory smsinv smsdocerr 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
