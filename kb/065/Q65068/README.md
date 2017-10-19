---
layout: page
title: "Q65068: Mac Hyp: Error in Documentation for getMessageList"
permalink: /kb/065/Q65068/
---

## Q65068: Mac Hyp: Error in Documentation for getMessageList

	Article: Q65068
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
	
	In the "Microsoft Mail HyperCard Interface Documentation" stack on the
	getMessageList card, the documentation incorrectly reads as follows:
	
	  msmail(getMessageList, [typefilter] [subjectfilter]
	  [enclosurefilter])
	
	It should read as follows:
	
	  msmail(getMessageList [,typefilter] [,subjectfilter]
	  [,enclosurefilter])
	
	All arguments in a msmail function must be separated with a comma. To skip or
	omit an argument but use a later argument, a placeholder of "" is required.
	
	MORE INFORMATION
	================
	
	The following is an example of omitting an argument:
	
	  get msmail(getMessageList, "", "", "TEXT")
	
	For more information on external functions in HyperCard, see pages 521-566 of
	"The Waite Group's Tricks of the HyperTalk Masters" (Hayden Books, 1989).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200
	Version           : :2.0
	
	=============================================================================
	
