---
layout: page
title: "Q195847: XFOR: Chat Server Fails to Correctly Interpret an Extension"
permalink: kb/195/Q195847/
---

## Q195847: XFOR: Chat Server Fails to Correctly Interpret an Extension

	Article: Q195847
	Product(s): Microsoft Exchange
	Version(s): winnt:2.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Commercial Internet System version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	According to the Chat Server Specification for Server Extension, if a Server
	Extension fails during the initialization process, it should return a non-zero
	result. This result indicates that the extension initialization has failed and
	the Chat server should ignore the remaining instructions of the extension.
	
	However, the Chat server is not ignoring the remaining instructions of the
	extension. The Chat server continues to process the extension and eventually
	fails when the initialization process is not in place, that is, a log file is
	create for channel transcription.
	
	MORE INFORMATION
	================
	
	There is no detrimental problems resulting from the fact that the Chat server is
	not ignoring the remaining instructions of the extension; this however, spends
	resources in the server extension process that will not complete.
	
	Be sure to fully test your server extension before implementing it into a
	production environment.
	
	WORKAROUND
	==========
	
	The extension writer could possibly maintain a global variable that would be set
	to what is returned from Init. Then, in each callback function, the code could
	be wrapped with an if statement taking the Init return value into account.
	
	For example, assume that "gInitReturnValue" is the global variable. In the Init
	function, set gInitReturnValue equal to the value returned from the Init
	function. Then do this in each callback function:
	
	NOTE: This example is provided as sample code.. it is not written in any language
	in particular.
	
	  Function OnNewUser(...)
	      If 0 = gInitReturnValue Then
	          Do the OnNewUser code in here
	      Else
	          Init must have failed, so don't do this code and just return zero
	  to tell the server that everything worked fine in this function
	      End If
	  End Function
	
	Additional query words: mcischat;xfor
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMCISSearch kbMCIS200
	Version           : winnt:2.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
