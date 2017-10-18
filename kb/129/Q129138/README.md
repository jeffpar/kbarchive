---
layout: page
title: "Q129138: XCLN: Making Fields Required and Locked or Hidden"
permalink: kb/129/Q129138/
---

## Q129138: XCLN: Making Fields Required and Locked or Hidden

	Article: Q129138
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Microsoft Exchange Forms Designer to create a form, you can set the
	properties of a field to be Required, Locked, or Hidden. Take caution not to set
	a field to be Required and then also set it to be Locked or Hidden. This could
	result in problems when the form is run. (The user is required to enter data in
	a field but cannot because the field is locked or hidden.) Only one of these
	combinations should be used when you plan to add code to the form using
	Microsoft Visual Basic to properly fill in the Required field.
	
	MORE INFORMATION
	================
	
	When you design a form, you can write Microsoft Visual Basic version 4.0 code
	that correctly fills in a field set as Required. For example, this could include
	a calculation of other fields or data retrieved from another source. Therefore,
	the field could be locked or hidden, which would limit the user's ability to
	modify the calculated field.
	
	The Required, Locked, and Hidden properties are set within the Field Properties
	dialog box in Microsoft Exchange Forms Designer.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
