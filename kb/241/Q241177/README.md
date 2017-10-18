---
layout: page
title: "Q241177: XCLN: An Error Occurred Publishing Your Internet Free/Busy Data"
permalink: kb/241/Q241177/
---

## Q241177: XCLN: An Error Occurred Publishing Your Internet Free/Busy Data

	Article: Q241177
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to publish Internet free and busy information by using Outlook, you
	may receive the following error message:
	
	  An Error Occurred Publishing Your Internet Free/Busy Data. The URL Was
	  Bad/Not Found:
	  FILE://\\<computername>\<sharename>\/O=<organizationname>/OU=<sitename>/CN=RECIPIENT...
	
	CAUSE
	=====
	
	This problem may occur if a "File:" protocol that contains a variable is
	specified in the Publish at this URL box that is displayed when you click
	Options on the Tools menu, click Calendar Options, and then click Free Busy
	Options.
	
	The following is an example of a "File:" protocol that contains a variable:
	
	  file://\\<computername>\<sharename>\%name%.vfb
	
	Variables are not supported if you specify the publishing location by using a
	"File:" protocol.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Do not use a variable when you use a "File:" protocol.
	
	- Use other protocols, such as Hypertext Transfer Protocol (HTTP).
	
	Additional query words: f/b, free/busy, OMI OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
