---
layout: page
title: "Q146137: Schedule+ ErrMsg: There Was a Problem Importing the File"
permalink: /kb/146/Q146137/
---

## Q146137: Schedule+ ErrMsg: There Was a Problem Importing the File

{% raw %}

	Article: Q146137
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.x; Win95:7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Schedule+ 7.0, you may store your Schedule+ data file on a network
	server. If you restore this file and the network connection is broken during the
	restoration process, you may receive one of the following messages:
	
	Windows 3.x
	-----------
	
	  There was a problem importing the file. An unknown error occurred.
	
	Windows 95
	----------
	
	  There was a problem importing the file. The specified network path is not
	  valid.
	
	Windows NT
	----------
	
	  There was a problem importing the file. A problem occurred while connecting
	  to the network. See your administrator.
	
	Additional attempts to restore the file produce the following error:
	
	  There was a problem importing the file. An unknown error occurred.
	
	MORE INFORMATION
	================
	
	This error occurs when the network connection to the client computer is
	terminated unexpectedly. While the file is being restored, the file header and
	information is cached. Terminating the network connection flushes the cached
	information and it is not written to the file. Subsequent attempts to restore
	the file cause the same error because the file header has been flushed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3 kbOSMac7xSearch
	Version           : WINDOWS:7.x; Win95:7.0
	
	=============================================================================
	

{% endraw %}
