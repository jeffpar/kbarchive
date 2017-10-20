---
layout: page
title: "Q59920: Mac Hyp: Getting a Message Reference"
permalink: /kb/059/Q59920/
---

## Q59920: Mac Hyp: Getting a Message Reference

{% raw %}

	Article: Q59920
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	GetMessage reads from the Microsoft Mail server the contents of the message
	specified by the "type" and "ID" arguments. The syntax for GetMessage in Mail
	2.00 is as follows:
	
	     msmail(GetMessage, type, ID) => messageRef
	
	The syntax for GetMessage in Microsoft Mail version 3.00 has the additional,
	optional argument of "FolderRef":
	
	     msmail(GetMessage, type, ID[, FolderRef]) => messageRef
	
	"type" is a 4-character message type, such as "Mess" for Note, or "Mesp" for
	Phone message types.
	
	"ID" is a specific message number returned by the getMessageListField command.
	
	"FolderRef" is a reference to the folder the message is contained in. If this
	argument is omitted, then the current folder is used. This argument applies only
	in Mail 3.00.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
