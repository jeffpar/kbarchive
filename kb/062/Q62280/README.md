---
layout: page
title: "Q62280: Mac Hyp: Removing or Clearing a Message Field"
permalink: kb/062/Q62280/
---

## Q62280: Mac Hyp: Removing or Clearing a Message Field

	Article: Q62280
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
	
	The msmail call "RemoveField" removes the occurrence of the field indicated by
	"index" with the given "ident", as follows:
	
	  msmail(RemoveField, messageRef, ident [, index])
	
	"ident" is a 4-character identification for that field.
	
	If no "index" is specified, the first field with the specified "ident" will be
	removed. An "index" of negative one (-1) removes all fields with the specified
	ident.
	
	Note: In Microsoft Mail version 2.00, the "index" parameter should occur in the
	range between 0 and n-1, where "n" is the number of fields. In Mail version
	3.00, the parameter should occur in the range from 1 to n.
	
	MORE INFORMATION
	================
	
	The AddField command can add text to a pre-existing field or create a new
	(unseen) field to hold the text. RemoveField clears fields that are defined as
	part of the form, and removes fields that were created with AddField. This
	function works only on messages that have not been sent.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
