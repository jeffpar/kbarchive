---
layout: page
title: "Q169137: XADM: Exchange Mailbox Template Cannot Be Changed"
permalink: /kb/169/Q169137/
---

## Q169137: XADM: Exchange Mailbox Template Cannot Be Changed

{% raw %}

	Article: Q169137
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default template information as appears within the Exchange Administrator
	when creating a new mailbox cannot be modified.
	
	For example, the general property page of the mailbox cannot be modified to
	replace the words Zip Code with the words Postal Code.
	
	MORE INFORMATION
	================
	
	The Custom Attributes property page of the mailbox object contains 10 unique
	fields. Use the Custom Attributes property page on the mailbox object or while
	creating a new mailbox to track any information about the recipients in your
	site.
	
	You can also define site wide custom attribute fields using the DS Site
	Configuration object Custom Attributes property page. The fields you define on
	the DS Site Configuration object Custom Attributes property page appear on the
	Custom Attributes property page for all recipients in your site.
	
	For example, suppose your company uses an employee ID numbering system. You can
	create a custom attribute field called "Employee ID#" on the DS Site
	Configuration object Custom Attributes property page. The Employee ID# field
	then appears on the Custom Attributes property page of every recipient.
	
	Additional Information
	----------------------
	
	Use details templates to customize Microsoft Exchange Server dialog boxes as seen
	within the Exchange Client.
	
	You can use the Templates property page to view all the fields and controls that
	make up an existing Microsoft Exchange Server dialog box.
	
	You can modify existing controls, add new controls, or remove controls. You can
	also test the appearance of the dialog box before accepting your changes. To do
	this, perform the following steps:
	
	1. Start the Exchange Server Administrator program.
	
	2. In the left pane, double-click on the following container objects:
	
	  a. Site
	
	  b. Configuration
	
	  c. Addressing
	
	  d. Details Templates
	
	3. Also in the left pane, double-click one of the template objects.
	
	4. In the right pane, double-click Mailbox.
	
	5. Click the Templates tab. On this properties page, you can modify, add, or
	  delete items from the template. It also allows you to preview the template
	  before accepting it.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
