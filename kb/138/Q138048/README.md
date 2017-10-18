---
layout: page
title: "Q138048: Server Name Not Displayed in Login Dialog Box"
permalink: kb/138/Q138048/
---

## Q138048: Server Name Not Displayed in Login Dialog Box

	Article: Q138048
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Service for NetWare Directory Services (NDS),
	if you log in to a bindery server using the Advanced button in the Login dialog
	box, and then click "Close all programs and log on as a different user" in the
	Shut Down dialog box, the Login dialog box states:
	
	  You are logging into the server named. You will not have access to
	  your directory tree.
	
	The server name in the dialog box is blank. If you enter your password and click
	Continue, you receive the following error message:
	
	  You are not logged in to the server. The server name you specified is not
	  valid or the server is not available.
	
	CAUSE
	=====
	
	This area of the Login dialog box is based on the Preferred Server entry in the
	properties for the Microsoft Client for NetWare Networks. If this entry is
	blank, the problem described above occurs.
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the following methods:
	
	- In the Login dialog box, click Advanced, click "Log in to a bindery server,"
	  and enter the name of the correct server.
	
	- Add a preferred server on the General tab in the properties for the Microsoft
	  Client for NetWare Networks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
