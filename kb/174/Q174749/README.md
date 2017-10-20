---
layout: page
title: "Q174749: XFOR: cc:Mail Migration Does Not Create PST File"
permalink: /kb/174/Q174749/
---

## Q174749: XFOR: cc:Mail Migration Does Not Create PST File

{% raw %}

	Article: Q174749
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Exchange Server Migration Wizard for Lotus
	cc:Mail to migrate users from a Lotus cc:Mail version 8 post office to a PST
	file, the Migration Wizard will not create a PST file if the cc:Mail users have
	no messages in their cc:Mail account.
	
	CAUSE
	=====
	
	A PST file is created from a User.pri file, not from a Primary.pri file. If
	there is no mail in the cc:Mail account to extract, a User.pri file is not
	created, thus no PST is created.
	
	MORE INFORMATION
	================
	
	Migration from a cc:Mail version 6 post office will create a PST file regardless
	of whether the user has mail or not. Lotus cc:Mail version 6 uses a different
	source extractor logic.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	

{% endraw %}
