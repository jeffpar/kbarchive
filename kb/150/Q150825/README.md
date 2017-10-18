---
layout: page
title: "Q150825: REMOTE_USER Blank w/o BASIC Password Authentication"
permalink: kb/150/Q150825/
---

## Q150825: REMOTE_USER Blank w/o BASIC Password Authentication

	Article: Q150825
	Product(s): Internet Information Server
	Version(s): 1.0 3.5 3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Internet Information Server (IIS) does not return a username for
	the variable REMOTE_USER unless the WWW Service Properties dialog box options
	for BASIC (CLEAR TEXT) Password Authentication is selected and Allow Anonymous
	is cleared.
	
	If you wish to use the REMOTE_USER variable in a CGI script, you will have to use
	BASIC (CLEAR TEXT) Password Authentication. With Anonymous authentication, it
	assumes the user is Anonymous and the variable is not a value assigned.
	
	MORE INFORMATION
	================
	
	The following batch file will display in a browser the environment variables
	used by IIS to include REMOTE_USER:
	
	     @echo off
	     echo Content-Type: text/plain
	     echo.
	     set
	
	Additional query words: prodnt not selected
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0 3.5 3.51
	
	=============================================================================
	
