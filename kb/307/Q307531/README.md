---
layout: page
title: "Q307531: SMS: SMS 2.0 English-Language Client Support on Non-English OS"
permalink: /kb/307/Q307531/
---

## Q307531: SMS: SMS 2.0 English-Language Client Support on Non-English OS

{% raw %}

	Article: Q307531
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 31-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft supports for a System Management Server (SMS) 2.0 English-language
	client that runs on a non-English operating system. You can have this
	combination if the following conditions are met:
	
	- The SQL Server code page is ANSI 1252 for the SMS site database.
	
	- The AutomaticAnsiToOEM option is turned off.
	
	MORE INFORMATION
	================
	
	The non-English SMS 2.0 server languages include both the localized language
	client and the U.S. English-language client. For example, an SMS 2.0 Japanese
	site server can install either Japanese or English-language SMS clients. If the
	client's language is not recognized when it is installed, the English-language
	client is installed. Microsoft supports this configuration.
	
	For example, if a Chinese operating system tries to install an SMS client from a
	Japanese SMS site server, the English-language client is installed and supported
	on the Chinese computer.
	
	If you use SQL Server 7.0 Japanese for the SMS site database, you must install
	the SQL Server with following settings:
	
	  Character Set : 1252/ISO changed from 932 (Japanese SQL Server default
	  setting)
	  Sort Order : Dictionary order, case-insensitive
	  Unicode Collation - Locale Identifier : General Unicode
	
	After the SQL server installs, turn off the AutomaticAnsiToOEM option.
	
	For more information about the SQL Server and the other versions, please see the
	SQL Server manual or contact Microsoft Product Support Services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
