---
layout: page
title: "Q173107: XCLN: Setup /Q1 in Win3.x Ignores HomeServer, MailboxName"
permalink: /kb/173/Q173107/
---

## Q173107: XCLN: Setup /Q1 in Win3.x Ignores HomeServer, MailboxName

	Article: Q173107
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you try to install the Microsoft Exchange Windows 3.x client using the Setup
	/q1 command (Setup with quiet mode installation), the Exchange client Setup
	program ignores the settings for the HomeServer and MailboxName in the
	Default.prf file.
	
	CAUSE
	=====
	
	When you use the Setup /q1 command to install the Exchange client on Windows
	3.x, the custom changes you have made in the Default.prf file for ServerName and
	MailboxName will not be used. The Exchange Setup program will create a new
	profile but will use the Win.ini entry for the DefName for the MailboxName.
	
	WORKAROUND
	==========
	
	You can work around this problem by doing one of the following:
	
	- Copy the modified Default.prf file to the \Windows directory before running
	  Setup /q1. Then Setup will use the correct ServerName and MailboxName from
	  the Default.prf file.
	
	-or-
	
	- Use the Setup /q command instead of Setup /q1 to install the Exchange client.
	  Then the ServerName and MailboxName will be correct in the profile.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Windows 3.x
	client, version 5.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You can customize some of the settings in a Default.prf file so that your
	Exchange clients will have certain default configurations for their profiles.
	The Exchange client Setup process will also create a new Exchange profile,
	provided it finds a Default.prf file in the \Windows directory. For more
	information about customizing the Default.prf file, see the following Microsoft
	Knowledge Base articles:
	
	  Q147352 XCLN: Creating Default User Profiles
	
	  Q140954 XCLN: Win16 Silent Mode Setup Fails to Create Profiles
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:5.0
	Solution Type     : kbpending
	
	=============================================================================
	
