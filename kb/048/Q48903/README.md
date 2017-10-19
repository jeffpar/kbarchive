---
layout: page
title: "Q48903: Mac Form: Custom Forms with Fixed Recipient Users or Groups"
permalink: /kb/048/Q48903/
---

## Q48903: Mac Form: Custom Forms with Fixed Recipient Users or Groups

	Article: Q48903
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
	
	If you cannot send messages to an auto-addressed user/group recipient in
	Microsoft Mail, there may be another user/group from another server with the
	same name on the network.
	
	MORE INFORMATION
	================
	
	If you have been using a form with an auto-addressed recipient (user or group)
	and it suddenly stopped working, it is very likely that a user or group with an
	identical name was added to one of the servers on the network. To find out if
	the form is not working for this reason, you can use one of the following two
	methods:
	
	Method 1
	--------
	
	If the User List box in the custom form is visible (that is, the auto-addressed
	recipient name is displayed), the name disappears once an identical name (user
	or group) is added to one of the Mail servers on the Network.
	
	Method 2
	--------
	
	If the User List box in the custom form is invisible (that is, the auto-addressed
	recipient name is never displayed), the Send button is grayed out. If there is
	more than one fixed recipient, the Send button is not grayed out; however, that
	user or group will not receive a copy of the message.
	
	How to Correct This Problem
	---------------------------
	
	Cases
	-----
	
	1. The recipient is a user and there is another user or group with the same
	  name.
	
	  In this case, you must add the "@" (without the quotation marks) symbol and
	  the name of the server after the auto-addressed recipient's name by using the
	  following syntax:
	
	  User Name@Server Name
	
	  This is a common problem when you create a custom form with the Network
	  Manager as the auto-addressed recipient. If you have more than one Mail
	  server in the network, there are probably several accounts named "Network
	  Manager." The server name and the user name are needed because Mail does not
	  know which Network Manager you are trying to send the message to.
	
	2. The recipient is a group and there is a user with the same name.
	
	  In this case, you must add the "@" (without the quotation marks) symbol and
	  the word "group" (without the quotation marks) after the auto-addressed
	  recipient's group name by using the following syntax:
	
	  Group Name@group
	
	3. The recipient is a group and there is another group with the same name.
	
	  In this case, you must rename one of the groups. You cannot create a Mail
	  custom form with an auto-addressed group recipient name if another group with
	  the same name exists on the network.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
