---
layout: page
title: "Q62123: Mac Hyp: Adding a Message Body to a Message"
permalink: /kb/062/Q62123/
---

## Q62123: Mac Hyp: Adding a Message Body to a Message

{% raw %}

	Article: Q62123
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following command sets the message body of message "messageRef" to the
	contents of the text string or HyperCard container (variable or field)
	referenced by "data":
	
	     msmail(AddBody, messageRef, data)
	
	The main message text field is limited in length to 32K.
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the msmail function using a parameter that returns a message reference, such as
	getMessageListField.
	
	MORE INFORMATION
	================
	
	The following are two examples of how AddBody can be used:
	
	  put "This is a test message." into theBody
	  put msmail(createMessage) into messRef
	  get msmail(AddBody, messRef, theBody)
	
	  put card field 2 & return & card field 3 into bdy
	  put msmail(CreateMessage) into mref
	  get msmail(AddBody, mref, "Hello, read this" & bdy)
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
