---
layout: page
title: "Q153529: Underscore in Domain Name Causes Validation Errors"
permalink: kb/153/Q153529/
---

## Q153529: Underscore in Domain Name Causes Validation Errors

	Article: Q153529
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2,3.5,3.51,6.0,6.5
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbDatabase smssetup smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server fails in logging in to SQL Server when you are using
	SQL integrated security and attempt to specify an account from a Windows NT
	domain that contains an underscore character, for example,
	"North_America\bruce."
	
	CAUSE
	=====
	
	An underscore ("_") in a domain name is mapped to a backslash ("\") by SQL
	Server. For example, the domain account "North_America\bruce" would appear to
	SQL Server as "North\America\bruce". For more information, see page 246 in the
	"Microsoft SQL Server Administrator's Guide."
	
	RESOLUTION
	==========
	
	To work around this problem, do either of the following:
	
	- Use standard security. To do this, perform the following steps:
	
	  1. Start SQL Server Setup.
	
	  2. Select Standard security under Set Security Options.
	
	  For more information, see page 242ff in the "Microsoft SQLServer
	  Administrator's Guide."
	
	  -or-
	
	- Set the underscore character to "not used" by performing the following
	  steps:
	
	  1. Start SQL Server Setup.
	
	  2. Under Set Security Options, click Mappings, and set the Set Map_ value to
	     "not used."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2.
	
	Additional query words: prodsms under score back slash
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbDatabase smssetup smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2,3.5,3.51,6.0,6.5
	
	=============================================================================
	
