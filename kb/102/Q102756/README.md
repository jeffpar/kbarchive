---
layout: page
title: "Q102756: PC Forms: Deleted Form Does Not Appear in Wastebasket"
permalink: kb/102/Q102756/
---

## Q102756: PC Forms: Deleted Form Does Not Appear in Wastebasket

	Article: Q102756
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 1.0 of Microsoft Electronic Forms Designer, messages created using
	custom forms may not appear in the Wastebasket folder when they are deleted.
	This can occur if you read a message and then delete it by choosing the Delete
	command from File menu of the custom form. However, you can move the message to
	the Wastebasket by selecting it from the list of messages in the Message Center
	Viewer (the main window) and choosing the Delete button from the Toolbar.
	
	CAUSE
	=====
	
	The Delete command on the File menu of a custom form calls the MAPIDelete()
	function. The MAPIDelete function deletes mail; it does not move mail to the
	Wastebasket first.
	
	The Mail client, on the other hand, moves mail to the Wastebasket folder when you
	choose the Delete button. It calls the MAPIDelete() function to remove mail only
	when the Wastebasket is "emptied."
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
