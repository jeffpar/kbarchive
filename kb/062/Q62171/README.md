---
layout: page
title: "Q62171: Mac Hyp: Saving a Message to Disk"
permalink: /kb/062/Q62171/
---

## Q62171: Mac Hyp: Saving a Message to Disk

{% raw %}

	Article: Q62171
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following command displays a standard Save As dialog box that prompts the
	user for a filename in Microsoft Mail version 2.00:
	
	     msmail(saveMessage, type, ID)
	
	If the user enters a filename and clicks OK, a Microsoft Word text file that
	contains the contents of all fields in the message with the given type and ID is
	created.
	
	"type" is a single message type obtained from a call to getMessageListField. For
	example, "Mess" would be for "Note" messages.
	
	"ID" is a number that identifies a particular message obtained from a call to
	getMessageListField.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200
	Version           : :2.0
	
	=============================================================================
	

{% endraw %}
