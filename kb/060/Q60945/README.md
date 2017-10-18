---
layout: page
title: "Q60945: Mac Form: RETURN Key Does Not Work in Scrolling Text Field"
permalink: kb/060/Q60945/
---

## Q60945: Mac Form: RETURN Key Does Not Work in Scrolling Text Field

	Article: Q60945
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information applies to custom forms created with the HyperCard
	Form Designer for Microsoft Mail:
	
	  Pressing RETURN while in a scrolling field that has the AutoTab attribute
	  enabled will not move the cursor to the next line.
	
	When AutoTab is enabled, pressing RETURN with the insertion point in the last
	line of a scrolling field moves the insertion point to the next field on that
	card by sending the "tabKey" message to the current card. Consequently, this
	disables RETURN for anything but the last line of the scrolling field.
	
	To enable or disable the AutoTab attribute, select the field in question, choose
	Field Info from the Objects menu, and select the AutoTab option.
	
	NOTE: Any changes made to a custom form take effect only if the card is
	recompiled and then reinstalled on the Mail server.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
