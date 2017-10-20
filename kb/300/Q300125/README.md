---
layout: page
title: "Q300125: Using Passport Manager Verbose Mode"
permalink: /kb/300/Q300125/
---

## Q300125: Using Passport Manager Verbose Mode

{% raw %}

	Article: Q300125
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Passport Manager object supports a verbose mode, which can be used for
	debugging and troubleshooting.
	
	MORE INFORMATION
	================
	
	When verbose mode is enabled, many of the internal Passport events, methods,
	variables, and properties are written to a text log file. The log can then be
	viewed to retrace the path of success that the object has completed. Check this
	path of success against your code to help you in finding the part of the process
	that is not functioning completely.
	
	You can enable verbose mode by running the Passport Manager Administration
	utility and selecting the Verbose Mode check box. View the Passport Manager
	verbose mode log to trace the methods and properties that are called and set
	during Passport Manager object operations.
	
	Methods of a Passport Manager object log an "enter" event. The logged event
	includes the values that are passed to the method in the log. When the internal
	method finishes, an "exit" event is logged and includes the results of the
	method call in the log as well.
	
	Property calls of a Passport Manager object log the event with the property call
	result.
	
	For more information, see the following Passport SDK Web site:
	
	  Verbose Mode
	  http://www.passport.com/sdkdocuments/sdk14/Reference/Operations/verbosemode.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassportSearch
	Version           : :1.3,1.4
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
