---
layout: page
title: "Q58452: Mac Hyp: Need ID Number to Access Message Fields Using GetField"
permalink: /kb/058/Q58452/
---

## Q58452: Mac Hyp: Need ID Number to Access Message Fields Using GetField

	Article: Q58452
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
	
	To access fields from nonstandard message types created using the Microsoft Mail
	versions 2.0 or 3.0 Forms Designer, the identification codes for those fields
	are needed. There are no built-in functions for returning the values from these
	custom forms, so to access them, these codes are passed to the Microsoft Mail
	function call using the parameter "getField".
	
	To find these codes, launch HyperCard and open the stack that contains the custom
	form that will be read. In the HyperCard message box on the Send screen or Read
	screen of the form's stack, type the following:
	
	  "show background field idmap" (without the quotation marks)
	
	A field then appears, displaying the mapping between the form's field names and
	the Mail codes. The idmap field holds the 4-character identification code and
	the names of the custom fields and buttons.
	
	Before closing the form, hide the field by typing the following in the message
	box:
	
	  "hide background field idmap" (without the quotation marks)
	
	The same field identification codes can be used with the Microsoft Excel Software
	Development Kit (SDK).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
