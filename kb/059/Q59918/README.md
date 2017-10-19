---
layout: page
title: "Q59918: Mac Hyp: Add Multiple Recipients with One msmail Function Call"
permalink: /kb/059/Q59918/
---

## Q59918: Mac Hyp: Add Multiple Recipients with One msmail Function Call

	Article: Q59918
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the "addRecipients" parameter to the msmail function call, it is
	possible to add a list of recipients with one call.
	
	To do this, place all the recipients in a HyperCard container, such as a field or
	a variable, then pass the name of that container in the function call. The
	recipients' names must be separated by return characters or each recipient must
	be on a separate line.
	
	For example, if the HyperCard container "mailUsers" contains the following names
	
	  Jane Doe
	  John Doe
	  Jill Smith
	  Jack Smith
	
	then the function call would be as follows:
	
	     get msmail(addRecipients,messageRef,mailUsers)
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the msmail function using a parameter that returns a message reference.
	
	For more information, see "addRecipients" in the "Microsoft Mail HyperCard
	Interface Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
