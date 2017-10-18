---
layout: page
title: "Q96686: 3Com 3Server &quot;NO OS/2&quot; Error Message"
permalink: kb/096/Q96686/
---

## Q96686: 3Com 3Server &quot;NO OS/2&quot; Error Message

	Article: Q96686
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When booting a 3Com 3Server, the LCD displays "NO OS/2".
	
	CAUSE
	=====
	
	A possible reason for this error is that the settings are not being read
	correctly from CMOS. According to the 3S500 "Technical Reference":
	
	  If the initial SETUP display does not reflect what you believe to be the
	  actual configuration, you can run the program in a way that allows you to
	  change the configuration values.
	
	CAUTION: Do not use SETUP to change configuration values unless you have specific
	information on which to base these values. If you are uncertain about the values
	in the SETUP display, check with your network supplier before altering the
	configuration.
	
	Another possible cause of the error is that the boot sector has an error. The
	procedure to follow in this instance is to repartition and reformat the drive
	with 3FDISK from the 3Server Utility disk.
	
	RESOLUTION
	==========
	
	1. Establish a 3Com connection.
	
	2. Type "setup/f" (without the quotation marks) at the active-console prompt
	  after placing the 3Server Utility disk in drive A, as follows:
	
	        a: setup /f
	
	  You will get a CMOS display. Press Y or N or ENTER at the prompt to verify
	  settings. It may not be necessary to actually change any settings, but you
	  may want to simply verify that the settings are correct.
	
	3. Press ENTER to exit SETUP and restart the server after checking the servers'
	  MODE and BOOT switch settings. If, after running SETUP, the LCD displays a
	  configuration error, check the 3Server "Technical Reference" manual for
	  possible corrective actions.
	
	Additional query words: 2.10 3SERVER 3FDISK
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
