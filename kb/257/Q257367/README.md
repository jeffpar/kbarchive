---
layout: page
title: "Q257367: XCLN: Error Message When You Open a Recurring Appointment"
permalink: /kb/257/Q257367/
---

## Q257367: XCLN: Error Message When You Open a Recurring Appointment

{% raw %}

	Article: Q257367
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view or delete a recurring appointment in the Day/Week/Month
	view, you may receive the following error message:
	
	  Can't open this item. The object could not be found.
	
	CAUSE
	=====
	
	The form may be damaged.
	
	RESOLUTION
	==========
	
	To resolve this problem, run the SwitchForms utility. For additional information
	about how to run the Switch Forms utility, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q179437 OL98: (CW) Switch Forms Utility for Outlook and Exchange
	
	When you run the Switch Forms utility, you may receive the following error
	message:
	
	  Forms could not be found.
	
	If you receive this error message, you must install the Visuals for Form Design
	component. For additional information about Visuals for Form Design, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q143476 OL97: SwitchForms Utility for Outlook and Exchange
	
	The Switch Forms utility requires the form configuration files from the Outlook
	client. The Microsoft Outlook Setup program installs the form configuration
	files automatically. The Switch Forms utility also requires the Outlook form
	configuration files. The Typical Setup option in Microsoft Office Setup or
	Outlook Setup does not provide these form configuration files.
	
	To install the Outlook form configuration files:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Click Microsoft Outlook 98, and then click Add/Remove.
	
	3. Click Add New Components, and then click either Install From CD or Install
	  From Web.
	
	4. Click Development Tools.
	
	5. Follow the instructions in the Installation Wizard to install the
	  configuration files.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
