---
layout: page
title: "Q58595: Mac Hyp: GetDate Gets the Time and Date a Message Was Sent"
permalink: kb/058/Q58595/
---

## Q58595: Mac Hyp: GetDate Gets the Time and Date a Message Was Sent

	Article: Q58595
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
	
	To return the time and date that a message was sent, use the following syntax:
	
	  msmail (getDate, messageRef)=>date
	
	The time is returned in standard Macintosh format (that is, in seconds since
	midnight, January 1, 1904). Use the HyperCard command "convert" to change this
	number into words. For example, use the following syntax:
	
	  put msmail(getDate, messageRef) into sentDate
	  convert sentDate to long date
	
	"messageRef" is a reference to a selected message returned by GetMessage.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
