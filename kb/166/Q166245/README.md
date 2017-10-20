---
layout: page
title: "Q166245: SMS: Package Command Line with Spaces Requires Quotes"
permalink: /kb/166/Q166245/
---

## Q166245: SMS: Package Command Line with Spaces Requires Quotes

{% raw %}

	Article: Q166245
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbusage kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a package is run on a Macintosh client using PCMMAC and the command line
	contains a space character, error 43 occurs. The following are some examples of
	this error message:
	
	- Error -43 in file CPACKAGE.CPP line 531 FNFERR. File not found. Invalid
	  package command line.
	
	- Error -43 in file CTABLE.CPP line 198 FNFERR. File not found.
	
	- Error -43 in file CPACKAGE.CPP line 526 FNFERR. File not found. Invalid
	  package command line.
	
	WORKAROUND
	==========
	
	To work around this problem, enclose the command line in quotation marks in the
	package properties. For example, if the command line is
	
	     SMS Installer
	
	Replace it with:
	
	     "SMS Installer"
	
	Additional query words: prodsms mac
	
	======================================================================
	Keywords          : kbusage kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
