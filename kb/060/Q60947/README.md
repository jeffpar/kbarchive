---
layout: page
title: "Q60947: Mac Form: Text Fields Are Resized When Compiling Custom Form"
permalink: kb/060/Q60947/
---

## Q60947: Mac Form: Text Fields Are Resized When Compiling Custom Form

	Article: Q60947
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
	
	Text fields in a Microsoft Mail custom form may be resized upon compiling if the
	Lock Text attribute for that field is not set to ON. The Form Designer compiler
	has a preset line height to which all editable text fields must conform. If they
	do not, the compiler will resize them automatically.
	
	Please note that this information applies only to those text fields that are
	"editable" (that is, fields that have the Lock Text attribute OFF). To lock the
	text in any field, select the field, choose Field Info from the Objects menu,
	and set the Lock Text attribute to ON by clicking the check box. Fields that are
	locked will not be resized.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
