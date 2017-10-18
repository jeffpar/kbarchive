---
layout: page
title: "Q86406: PC MAPI: Excel Call Function Has Incorrect Arguments"
permalink: kb/086/Q86406/
---

## Q86406: PC MAPI: Excel Call Function Has Incorrect Arguments

	Article: Q86406
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 78 of the version 3.0 Microsoft Mail "Technical Reference," the
	type_text parameter for the Call function to MAPISendDocuments is incorrect.
	
	The type_text parameter should be "JJCCCJJ". The example is missing the last "J"
	and will return #VALUE! if this additional parameter is not included.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
