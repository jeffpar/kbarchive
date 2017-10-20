---
layout: page
title: "Q168182: XCLN: Wizard Doesn't Migrate Schedule+ Info to Outlook Calendar"
permalink: /kb/168/Q168182/
---

## Q168182: XCLN: Wizard Doesn't Migrate Schedule+ Info to Outlook Calendar

{% raw %}

	Article: Q168182
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5, 0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange Server Migration Wizard allows administrators to migrate accounts,
	mail messages and Personal Address Books to Outlook. However, the Migration
	Wizard does not allow for the direct import of Schedule+ 1.0 Schedule
	information into Outlook Calendar information. Currently, mass migration of
	Schedule + 1.0 directly to Outlook Calendar files is not supported. Microsoft is
	aware of this issue and will be offering a workaround as soon as it is
	available.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Directly import the original Schedule + 1.0 CAL file into Outlook.
	
	  NOTE: There can be problems attempting to perform this direct conversion
	
	  For additional information on the direct conversion, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q165873 Sam Translator Error Importing Schedule Plus File
	
	
	  -OR-
	
	- Install Schedule + 7.x, convert the migrated schedule information into
	  Schedule + 7.x file format, export the calendar from Schedule + 7.x, and then
	  import this information into Outlook.
	
	MORE INFORMATION
	================
	
	Microsoft supports the mass migration of Schedule+ 1.0 to Schedule+ 7.0. For
	users migrating from Schedule+ 1.0 to Schedule+ 7.0, the Exchange Migration
	Wizard migrates the Schedule+ 1.0 data by attaching your data to a message,
	which is migrated to your Exchange Inbox. This message is then recognized as a
	Schedule+ 1.0 file and is upgraded to the Schedule+ 7.0 format. Outlook does not
	have the ability to recognize this migrated schedule information and therefore
	cannot convert it to Outlook Calendar information.
	
	
	Additional query words: OL97 OL98
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
