---
layout: page
title: "Q58557: Mac Hyp: GetHandle Gets a Handle to a Resource from a Message"
permalink: /kb/058/Q58557/
---

## Q58557: Mac Hyp: GetHandle Gets a Handle to a Resource from a Message

{% raw %}

	Article: Q58557
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
	
	The command used to access information stored in nonstandard message types is as
	follows:
	
	  msmail (getHandle, messageRef, ident [, index]) => handle
	
	It is similar to getField, except that it returns the field data in a handle. The
	data can then be stored in the stack's resource fork with an addMacResource
	call.
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the msmail function using a parameter that returns a message reference.
	
	"ident" is a four-character type identification for that handle, such as "ICON",
	"CODE", "snd ", etc.
	
	"index" is a number that directs the command to access a particular occurrence of
	the specified field.
	
	When the handle is not going to be used again, it should be disposed of with the
	disposeHandle function.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
