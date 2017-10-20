---
layout: page
title: "Q60025: Mac Form: Removing a Custom Form on a Mail Server"
permalink: /kb/060/Q60025/
---

## Q60025: Mac Form: Removing a Custom Form on a Mail Server

{% raw %}

	Article: Q60025
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To remove a custom form in Microsoft Mail, do the following:
	
	1. Sign in as the Network Manager to the Mail server containing the custom form.
	
	2. Open a form stack. It can be an existing stack or a new one. You must have a
	  stack open to run the Form Mover.
	
	3. Click the Form Mover icon.
	
	4. Select the name of the form you want to remove from the list displayed.
	
	5. Click Remove. A message will appear asking you to confirm the removal of the
	  form.
	
	6. Click OK to remove the form and return to the Form Mover screen.
	
	7. Click Done.
	
	The removed form is not copied on top of the form stack that is opened/created.
	The removed form stack is automatically deleted when it is removed. To install a
	copy of the removed form, you must use the original form stack for that form.
	
	If you remove a custom form from your server, users whose mailboxes contain
	messages received with that form will be able to read the header information and
	body text, but radio buttons, check boxes, graphic fields, and other text fields
	won't be displayed.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	

{% endraw %}
