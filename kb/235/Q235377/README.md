---
layout: page
title: "Q235377: SMS: APM Cannot Run a Command Line That Contains a Space"
permalink: /kb/235/Q235377/
---

## Q235377: SMS: APM Cannot Run a Command Line That Contains a Space

{% raw %}

	Article: Q235377
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the command line for a program contains a space, the advertisement does not
	work. You receive the following error message after clients attempts to run the
	advertisement:
	
	  10003
	  An error occurred while preparing to run the program for advertisement
	  <Advertisement_ID ><Advertisement_Name>.The operating system
	  reported error 2: The system cannot find the file specified
	
	  Additional program properties:
	  Command line: <Command Line>
	  Working directory: <Working Directory>
	  Drive letter (? = any):
	  Possible cause: This message most commonly occurs when the program's
	  command-line executable file could not be found, when a required drive letter
	  connection to a distribution point could not be established, or when the
	  program is configured to use the Windows NT Client Software Installation
	  Account but the account is not specified, could not be found, or does not
	  have the appropriate permissions. Solution: Check each of the items listed
	  above.
	
	CAUSE
	=====
	
	When APM attempts to run the command line, it looks for only the string value
	that precedes the space. For example, if you rename Notepad.exe to "Run
	Notepad.exe", APM looks only for the "Run" string to start.
	
	WORKAROUND
	==========
	
	Rename the program file to one contiguous name without any spaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
