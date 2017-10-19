---
layout: page
title: "Q154520: XADM: Making Custom Attributes Viewable to Clients"
permalink: /kb/154/Q154520/
---

## Q154520: XADM: Making Custom Attributes Viewable to Clients

	Article: Q154520
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Property pages contain predefined attributes such as the mailbox name, address,
	city, state and postal code. If you want to add more fields to a recipient, you
	can define up to 10 custom attributes.
	
	MORE INFORMATION
	================
	
	For example, if you want to add employee identification number, start the
	Administrator program and follow the steps below:
	
	1. Choose Configuration, DS Site configuration, Custom Attributes.
	
	2. Define the value for Custom Attribute 1 as Employee ID.
	
	Now when you create a recipient, you can add a value for this attribute. Choose
	the Custom Attributes tab and fill in the value, say 1234.
	
	This information can be made available to clients who are viewing properties by
	modifying the template in the ADMIN program.
	
	1. Choose Configuration, Addressing, Details Templates, English/USA,
	  Mailbox,Templates.
	
	2. You have to add a label and an edit field for this custom attribute. The
	  coordinates are determined by trial and error. Alternatively, you can choose
	  a field that you don't want in the template and replace that with Custom
	  Attribute 1. For example, if you do not want the country attribute, you can
	  edit the label and change text to Employee ID.
	
	3. Edit the edit control, and for field, choose Employee ID.
	
	4. Press the test button. Whatever is displayed here is what the client will
	  see.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
