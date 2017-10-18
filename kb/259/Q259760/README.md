---
layout: page
title: "Q259760: Compression Is Not Enabled on POST Request"
permalink: kb/259/Q259760/
---

## Q259760: Compression Is Not Enabled on POST Request

	Article: Q259760
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbWin2000SP2Fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HTTP compression allows Internet Information Services (IIS) to send compressed
	content to the browser when the following conditions are true:
	
	- The HTTP request is issued by a compression-enabled browser.
	
	- HTTP Compression is enabled on the IIS server for static and/or dynamic
	  content.
	
	- The request is an HTTP GET request.
	
	Even when you enable HTTP Compression, POST responses are not compressed.
	
	CAUSE
	=====
	
	This is a design limitation in IIS 5.0. A fix has been developed to enable HTTP
	Compression on POST requests. See the "Resolution" section for more information.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version       Size    File name     Platform
	  -------------------------------------------------------------
	  04/13/2000  10:16p  5.0.2195.2037 23312   Compfilt.dll  i386<BR/>
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To enable HTTP compression on POST requests, do the following:
	
	1. Enable HTTP Compression (see the IIS documentation for information on how to
	  do this.)
	
	2. Install the fix.
	
	3. Set the EnablePostCmp registry parameter to 1:
	
	  
	
	  EnablePostCmp
	  Key: HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W3Svc\Parameters
	  Value Type: REG_DWORD - Boolean
	  Valid Range: 0,1 (False or True)
	  Default: 0 (False)
	  Description: Setting this parameter to 1 causes compression to be enabled also on POST.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
