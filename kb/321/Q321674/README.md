---
layout: page
title: "Q321674: HOW TO: Configure IISReset to Wait Longer than the Default Time"
permalink: /kb/321/Q321674/
---

## Q321674: HOW TO: Configure IISReset to Wait Longer than the Default Time

	Article: Q321674
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Change the IISReset Timeout Value
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to change the IISReset timeout value to
	wait longer than the default time to reset Internet Information Services (IIS).
	
	Change the IISReset Timeout Value
	---------------------------------
	
	1. On the Web server, open a command prompt. To do this, click Start, click Run,
	  type "CMD" (without the quotation marks), and then click OK.
	
	2. At the command prompt, type "IISRESET /TIMEOUT:<val>" (without the
	  quotation marks), where <val> is a numeric value that is measured in
	  seconds.
	
	The following screen shot from the command prompt provides more information:
	
	  /TIMEOUT:val        Specify the timeout value (in seconds) to wait for
	                      a successful stop of Internet services. On expiration
	                      of this timeout the computer can be rebooted if
	                      the /REBOOTONERROR parameter is specified.
	                      The default value is 20s for restart, 60s for stop,
	                      and 0s for reboot.
	
	An example of what you can expect to see in the command prompt window is as
	follows:
	
	  C:\>iisreset /timeout:45
	
	  Attempting stop...
	  Internet services successfully stopped
	  Attempting start...
	  Internet services successfully restarted
	
	  C:\>
	
	NOTE: To view a complete listing of the parameters that can be used with
	IISReset, type "IISRESET /?" (without the quotation marks) at the command
	prompt.
	
	3. Type "Exit" (without the quotation marks) to close the command prompt window.
	
	REFERENCES
	==========
	
	For more information, see the IIS Help files and online documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis510
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
