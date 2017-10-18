---
layout: page
title: "Q157257: XCLN: How to Change a Send Form to a Post Form"
permalink: kb/157/Q157257/
---

## Q157257: XCLN: How to Change a Send Form to a Post Form

	Article: Q157257
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange for Windows 95, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To change a Microsoft Exchange Server Electronic Forms Designer form from a Post
	Form to a Send Form:
	
	1. On the View menu, click Window Properties.
	
	2. In the Window Properties dialog box, click the Menu tab.
	
	3. Click the Submit Options button.
	
	4. Change the "Submit by" option to the desired method.
	
	  There are two "Submit by" options:
	
	   - Submit by Sending: this option sends an item to a recipient, distribution
	     list or folder.
	
	   - Submit by Posting: this option posts an item to the current folder.
	
	MORE INFORMATION
	================
	
	If you change the "Submit by" option for the form, you must also change the File
	menu caption of the command to either Send or Post. In addition, you must also
	change the Menu Help options in both the Compose and Read windows. To do this,
	choose Menu Help in the Submit Options dialog box and update the Status Bar text
	and ToolTip text.
	
	If you change a Send form to a Post form, you must also remove the To, Cc, and
	header fields in the form. If you change a Post form to a Send form, you must
	add the To and optionally the Cc field to let the user address the form before
	sending.
	
	REFERENCES
	==========
	
	Application Designers Guide, page 242.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword8 kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
