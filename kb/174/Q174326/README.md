---
layout: page
title: "Q174326: WD97: Error Expanding Subdocuments If Network Connection Lost"
permalink: /kb/174/Q174326/
---

## Q174326: WD97: Error Expanding Subdocuments If Network Connection Lost

	Article: Q174326
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you lose your network connection, Microsoft Word 97 cannot find or expand any
	subdocuments until you restart the Expand Subdocuments command (by clicking the
	Expand Subdocuments button on the Master Document toolbar). If a master document
	and its subdocuments are located on a network drive and you lose your network
	connection, when you reestablish the connection, Word displays the following
	message for each subdocument to be expanded:
	
	  The subdocument \\<path name>\<file name> is missing. Do you want
	  to expand the master document without this document?
	
	If you click No, the Expand Subdocuments command stops running. If you click Yes,
	Word attempts to expand the next collapsed subdocument, and displays the same
	error message again.
	
	WORKAROUND
	==========
	
	To prevent this error message after losing your network connection, end the
	Expand Subdocuments command to prevent expanding the remaining collapsed
	subdocuments. To do this, click No in the error message described earlier.
	
	NOTE: The Expand Subdocuments command will also end after the last collapsed
	subdocument in the master document receives the error.
	
	After ending the Expand Subdocuments command, you must reestablish your network
	connection before restarting the Expand Subdocuments command. The remaining
	collapsed subdocuments should now expand correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
