---
layout: page
title: "Q65382: Mac Form: Setting Command Keys for Mail Form Designer Objects"
permalink: kb/065/Q65382/
---

## Q65382: Mac Form: Setting Command Keys for Mail Form Designer Objects

	Article: Q65382
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To set the COMMAND key equivalent of an object in Microsoft Mail Form Designer
	(for example, the COMMAND key equivalent COMMAND+S for the Save button), you can
	use the Form Designer globals: objKeyEquiv, cmdKey, and enterKey. It is
	recommended, however, to use the special utility function setKeyEquiv instead.
	This function was designed solely for setting COMMAND key equivalents and
	guarantees the best results.
	
	For example, the following script sets the key equivalent of the selected object
	to COMMAND+A:
	
	     on compile
	        setKeyEquiv "A" (type the quotation marks)
	     end compile
	
	The following script sets the key equivalent of the selected object to RETURN or
	ENTER. (If the object is a button, it will set that button to be the default
	button.)
	
	     on compile
	        setKeyEquiv return
	     end compile
	
	MORE INFORMATION
	================
	
	In the above examples, the object is assumed to be a button, although the same
	syntax applies to fields. Setting COMMAND key equivalents for fields, however,
	is unconventional and is not recommended.
	
	To edit object scripts in the Form Designer, the userLevel must be changed. For
	more information on this procedure, query on the following words:
	
	  edit and object and script
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
