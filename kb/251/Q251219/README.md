---
layout: page
title: "Q251219: IIS Reserves the &quot;.map&quot; File Extension for Image Maps"
permalink: /kb/251/Q251219/
---

## Q251219: IIS Reserves the &quot;.map&quot; File Extension for Image Maps

	Article: Q251219
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis400 kbiis500
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ".map" extension is reserved and intended for association with server-side
	image maps in Internet Information Server (IIS). Altering the mime type is not
	recommended by Microsoft and is ignored in Internet Information Server 4.0.
	
	If a file is larger than 128 KB in size, has the .map extension, and is not an
	image map, then you may receive one or more of the following error messages in
	the browser:
	
	  HTTP 500 - Internal server error
	
	  -or-
	
	  HTTP/1.1 500 Server Error
	
	  -or-
	
	  Network request is not supported
	
	CAUSE
	=====
	
	Internet Information Server assumes all files that have a file extension of .map
	are image maps.
	
	RESOLUTION
	==========
	
	This is by design.
	
	WORKAROUND
	==========
	
	Use a file type other than ".map".
	
	MORE INFORMATION
	================
	
	Other ASCII files that are over 128 KB in size are not effected. If you have a
	file with another extension, such as "a01", that is larger than 128 KB, you will
	not have problems changing the mime type or viewing it in the browser.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
