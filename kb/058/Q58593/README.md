---
layout: page
title: "Q58593: Mac Hyp: AddHandle Attaches a Macintosh Resource to a Message"
permalink: /kb/058/Q58593/
---

## Q58593: Mac Hyp: AddHandle Attaches a Macintosh Resource to a Message

	Article: Q58593
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
	
	To add the data pointed to by a Macintosh handle to a mail message, use the
	following syntax:
	
	  msmail (addHandle, messageRef, handle, ident [, onlyOne] [, type])
	
	This routine is similar to addField, except that instead of including the data
	itself in the message, it includes the data pointed to by a handle. Together
	with getMacResource, this call makes it possible to send resources through
	Microsoft Mail.
	
	"messageRef" is a reference to a selected message returned by making a call to
	the msmail function using a parameter that returns a message reference.
	
	"handle" is a Macintosh handle to a resource. This value is returned by a call to
	getMacResource.
	
	"ident" is a 4-character type identification for that handle, such as "ICON",
	"CODE", "snd ", etc. These are Macintosh resource types.
	
	"onlyOne" is a Boolean (true or false) parameter that can be passed to limit the
	number of fields with the given ident. If "onlyOne" has the value "true",
	addHandle removes from the message any fields with the specified ident before
	adding the data pointed to by "handle". If no value is passed for "onlyOne," it
	defaults to "true".
	
	The "type" parameter lets advanced users specify the type of the field to be
	added. This only needs to be passed if you are creating nontext fields that do
	not occur on the send screen for this message type. In all other cases, the type
	is filled in automatically.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
