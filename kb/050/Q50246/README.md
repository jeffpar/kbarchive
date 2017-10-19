---
layout: page
title: "Q50246: Mac Form: Notifier Window Does Not Appear with Custom Form"
permalink: /kb/050/Q50246/
---

## Q50246: Mac Form: Notifier Window Does Not Appear with Custom Form

	Article: Q50246
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you send a message using a Microsoft Mail custom form from one server to a
	server that does not have that form installed, the notifier screen does not
	appear when that message arrives.
	
	This problem occurs because the alert screen description is stored in the form;
	no alert can be generated because the form is not installed on the receiving
	server. Once the form is installed on the receiving server, notification will
	occur normally.
	
	If the notifier window is not displaying when any message is received, it may be
	that the "Display notifier window" option is not selected in the Preferences
	dialog box. To check this, choose Preferences from the Mail menu and make sure
	that there is a check in the box before the Display Notifier Window option.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
