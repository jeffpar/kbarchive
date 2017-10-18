---
layout: page
title: "Q164181: XCLN: How to Send a Form as a Text Only Message"
permalink: kb/164/Q164181/
---

## Q164181: XCLN: How to Send a Form as a Text Only Message

	Article: Q164181
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; Win95:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There may be a few cases where you would like to send the information in a
	Microsoft Exchange form to another user without having the graphics of the form
	displayed when reading the form. For these cases you can create a textized
	Microsoft Exchange form that will only send the text of the form, this may be
	useful if you were sending the form to a user on a Macintosh that cannot read
	the graphical form.
	
	MORE INFORMATION
	================
	
	So, how can I create a custom form with EFD and tell the form that the message
	to be transferred should be in a plain text format? This can be done by sending
	the form as an IPM.Note message class. Following these steps will achieve that
	functionality:
	
	1. While creating the form in the Microsoft Exchange Electronic Forms Designer
	  (EFD), open the View menu and select Window Properties.
	
	2. Click the Menus tab.
	
	3. Click File in the Menu drop down.
	
	4. Click Send in the Commands window.
	
	5. A button for Submit Option will now be available. Click this button to get a
	  dialog box for Submit options.
	
	6. Select Other in the Submit By dialog and choose IPM.Note.
	
	7. Check the checkbox Show Fields as Text in the Message.
	
	The following is an example of a textized donation form sent as IPM.Note message
	class:
	
	  To: John Doe
	  Cc:
	  Subject: Donation sent as text
	
	  Charity: Main Street Theatre
	  Amount: $100.00
	  [ ] Matching Contribution
	  [X] Annual Payroll Deduction
	  Special Considerations:
	  This is the text entered into the Special Consideration text box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0; Win95:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
