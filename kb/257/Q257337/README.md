---
layout: page
title: "Q257337: Supported Transfer Mode in IIS"
permalink: kb/257/Q257337/
---

## Q257337: Supported Transfer Mode in IIS

	Article: Q257337
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to RFC 959, there are three transfer modes in the File Transfer
	Protocol. The following codes are assigned for toggling the transfer modes:
	
	  S - Stream
	  B - Block
	  C - Compressed
	
	The default transfer mode is Stream. IIS only supports Stream mode transfers in
	its current (IIS 5.0) and previous implementations.
	
	MORE INFORMATION
	================
	
	For more information on RFC 959, please see the following Web page:
	
	  http://www.rfc-editor.org/rfc/rfc959.txt
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200 kbiis100
	Version           : winnt:1.0,2.0,3.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
