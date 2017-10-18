---
layout: page
title: "Q62051: Mac Hyp: Getting a Message Type or List of Message Types"
permalink: kb/062/Q62051/
---

## Q62051: Mac Hyp: Getting a Message Type or List of Message Types

	Article: Q62051
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
	
	The following syntax returns the four-character message type of the Microsoft
	Mail message with the specified name:
	
	     msmail(getMessageType [, name]) => type
	
	Example
	-------
	
	     put msmail(getMessageType, "Phone") into messType
	
	This puts "Mesp" into the HyperCard variable messType.
	
	If no name is specified, a list of all the types will be returned. All types will
	begin with "Me". The last two characters will be capitalized for all custom
	forms. The standard types are as follows:
	
	  Type        ID
	  ----        --
	
	  Note        Mess
	  Phone       Mesp
	  Image       Mesi
	  80 col.     Megw
	  AppleLink   Meal
	
	Note: The Return Receipt message is a special type and will not appear in this
	list. Its type is Merr and it is not a form that can be sent.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
