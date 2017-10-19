---
layout: page
title: "Q99305: Mac Tool: Errors Saving Enclosures After Rebuild"
permalink: /kb/099/Q99305/
---

## Q99305: Mac Tool: Errors Saving Enclosures After Rebuild

	Article: Q99305
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to save an enclosure attached to a message with version 3.1 of
	Microsoft Mail for AppleTalk Networks, the following error message may be
	displayed:
	
	  Couldn't write file.
	
	The following error message also may be displayed when you transfer the mail
	message to a local folder:
	
	  Sorry, the server was unable to complete the transfer. Please try again.
	
	CAUSE
	=====
	
	There is a known problem with rebuilding a Microsoft Mail Data file with the
	version 3.1a Mail Tools utility. After a rebuild takes place, the enclosures
	will not be accessible by the clients.
	
	RESOLUTION
	==========
	
	Discard the rebuilt Data file and rebuild the original Data file with the
	version 3.1 Mail Tools utility.
	
	If the original Data file has been discarded, a backup should be used.
	
	It is possible to rebuild the rebuilt file with Mail Tools version 3.1. This
	process may recover some of the enclosures.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.1a of Microsoft Mail
	for AppleTalk Networks. This problem was corrected in version 3.1c.
	
	
	Additional query words: 3.10 3.10a err msg errmsg alert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310a
	Version           : WINDOWS:3.1a
	
	=============================================================================
	
