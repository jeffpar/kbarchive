---
layout: page
title: "Q58558: Mac Hyp: AddField Adds Information to Nonstandard Form Fields"
permalink: kb/058/Q58558/
---

## Q58558: Mac Hyp: AddField Adds Information to Nonstandard Form Fields

	Article: Q58558
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JAN-2000
	
	2.00 3.00
	MACINTOSH
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To add information to a form with nonstandard fields, use the following syntax:
	
	  msmail (addField, messageRef, data, ident [,onlyOne] [,type])
	
	For standard form types, use the simpler commands, such as addSubject and
	addBody.
	
	An application-specific message can use any 4-byte (4 character) value for a
	field identification (ident). Multiple fields can be added with the same
	"ident". A list of standard field idents can be found in the HyperCard SDK
	version 3.00 documentation stack under "Advanced Mail Information."
	
	For more information on field idents, query on the following words:
	
	  getField and idmap
	
	If only one field with a particular "ident" is allowed in a given message, pass a
	value of "true" in "onlyOne" when adding that field to the message. When
	"onlyOne" is set, addField removes from the message any fields with the
	specified ident before adding the contents of data. If no value is passed for
	"onlyOne", it defaults to "true".
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the msmail function using a parameter that returns a message reference.
	
	"data" is the data to be added to the specified field of the specified message.
	
	The "type" parameter lets advanced users specify the type of the field to be
	added. This must be passed only if you are creating nontext fields that do not
	occur on the send screen for this message type. In all other cases, the type is
	filled in automatically.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation." For additional information, see the getField function in the
	documentation stack.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
