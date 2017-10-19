---
layout: page
title: "Q59927: Mac Hyp: Accessing Resources or Data in Nonstandard Fields"
permalink: /kb/059/Q59927/
---

## Q59927: Mac Hyp: Accessing Resources or Data in Nonstandard Fields

	Article: Q59927
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
	
	To access information stored in nonstandard message types in Microsoft Mail
	version 2.0, use the following syntax:
	
	     msmail(GetField, messageRef, ident [, index]) => data
	
	For normal message types, the simpler commands, such as getSubject and getBody,
	can be used instead.
	
	getField returns the contents of the nth occurrence of the field, as specified by
	"index," with the given ident. For fields that are only allowed to occur once in
	a given message, no index needs to be passed. The first field in a message has
	index 0 (zero) in Mail 2.0 and index 1 in Mail 3.0 (see "Note" below for
	details). This allows for multiple resources of the same type ("ident") to be
	sent with one message. For more information, see the documentation on addField.
	
	"ident" is a 4-character type identification for that handle, such as "ICON",
	"CODE", and "snd ", or a 4-character field name identification for the field,
	such as "PHON" (the phone number on the phone form) or "T001" on a custom form.
	
	"index" is a number that directs the command to access a particular occurrence of
	the specified field or resource.
	
	To find out which idents are assigned to nonstandard objects on custom forms, use
	the following syntax:
	
	  show background field idmap
	
	Type this in the message box on the Send screen or Read screen of the form's
	stack. A field will display the mapping between HyperCard field names and Mail
	idents. There is also a list of the standard idents.
	
	Note: getField is not completely compatible between versions; the "index" default
	for the first field in Mail 2.0 is 0 (zero), while the default for the first
	field in Mail 3.0 is 1 (one). For additional arguments, see getField in the
	documentation for Mail 3.0.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
