---
layout: page
title: "Q120931: Incorrect Syntax for FTP in Help File"
permalink: kb/120/Q120931/
---

## Q120931: Incorrect Syntax for FTP in Help File

	Article: Q120931
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): ; WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The syntax displayed in the Microsoft TCP/IP-32 FTP utility online Help file,
	MTCPIP32.HLP, is incorrect. According to the Help file, the syntax is:
	
	  ftp [-v] [-n] [-i] [-d] [-g] [host] [-s: filename]
	
	The correct syntax should be:
	
	  ftp [-v] [-n] [-i] [-d] [-g] [-s:filename] [host]
	
	The [host] parameter is at the end of the line after the [-s:filename] parameter,
	and there is no space after "-s:" and before the filename. If the incorrect
	syntax is used with the -s parameter, it pops up the ftp window and closes
	before you can read the error message.
	
	
	Additional query words: prodtcp32 wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbWFWSearch kbWFW311
	Version           : :; WINDOWS:3.11
	
	=============================================================================
	
