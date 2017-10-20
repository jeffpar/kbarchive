---
layout: page
title: "Q169475: SMS: Command Line Parameters Are Not Passed with Long File Names"
permalink: /kb/169/Q169475/
---

## Q169475: SMS: Command Line Parameters Are Not Passed with Long File Names

{% raw %}

	Article: Q169475
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Program Group Control (PGC) does not pass command-line parameters (specified on
	the command line of the share package details) if the following conditions are
	true:
	
	- The command is a long file name (for example, longfilename.exe).
	
	-and-
	
	- The client computer is running either Windows NT 4.0 or Windows 95.
	
	WORKAROUND
	==========
	
	To work around this problem, specify a command on the command line with a file
	name in the 8.3 format. Doing this ensures that the parameters are passed
	successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
