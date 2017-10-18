---
layout: page
title: "Q317208: Cannot Download Microsoft Office Documents from IIS Server"
permalink: kb/317/Q317208/
---

## Q317208: Cannot Download Microsoft Office Documents from IIS Server

	Article: Q317208
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Explorer version 6 for Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to download Microsoft Office documents from a server running
	Internet Information Services (IIS) to a client using Microsoft Internet
	Explorer version 6, you may receive the following error messages:
	
	  Internet Explorer cannot download <File.doc> from <ServerName>.
	
	  Internet Explorer was not able to open this Internet Site. The requested site
	  is either unavailable or cannot be found. Please try again later."
	
	Note:This problem is not reproducible with any other known file types.
	
	CAUSE
	=====
	
	This behavior occurs when the Content Expiration option in the Hypertext
	Transfer Protocol (HTTP) Headers, within IIS, is set to Expire Immediately.
	Internet Explorer must save any Microsoft Office file to the local cache
	directory, and then use the associated application to open the file. If you set
	Content Expiration to Expire Immediately, the Office documents are not cached
	locally and the operation fails.
	
	RESOLUTION
	==========
	
	When you configure the HTTP Headers within IIS for the Virtual Directory (or for
	the Directory) that contains Office documents, do not set Content Expiration to
	Expire Immediately.
	
	MORE INFORMATION
	================
	
	This is a known cause of slow performance on a Web server running IIS.
	This is not a best practice.
	
	Additional query words: iis 5 internet explorer 6 content expiration expire immediate immediately
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbOSWin2000 kbiisSearch kbIEsearch kbIE600Search kbiis500 kbIE2000Search kbIE600Win2000 kbiis510
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
