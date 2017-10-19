---
layout: page
title: "Q62133: Mac Hyp: Getting the Message Name from the Message Type"
permalink: /kb/062/Q62133/
---

## Q62133: Mac Hyp: Getting the Message Name from the Message Type

	Article: Q62133
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following command returns the name of the message form with the given type:
	
	  msmail(getMessageName [, type]) => name
	
	For example:
	
	  put msmail(getMessageName, "Mess") into messageName
	
	This puts "Note" into messageName.
	
	If no type is specified, then a list of all the names is returned.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
