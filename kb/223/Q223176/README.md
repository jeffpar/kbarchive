---
layout: page
title: "Q223176: Manual Installation of Compression Filter Fails"
permalink: kb/223/Q223176/
---

## Q223176: Manual Installation of Compression Filter Fails

	Article: Q223176
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the compression filter (Compfilt.dll) is removed and later reinstalled
	(through the Internet Services Manager interface), all entries in the metabase
	may not be created.
	
	RESOLUTION
	==========
	
	To resolve this issue, reregister the Compfilt.dll file on the server by running
	"C:\WINNT\SYSTEM32\INETSRV\regsvr32 compfilt.dll."
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
