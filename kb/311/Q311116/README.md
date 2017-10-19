---
layout: page
title: "Q311116: URLScan AllowDotInPath Documentation Contains an Error"
permalink: /kb/311/Q311116/
---

## Q311116: URLScan AllowDotInPath Documentation Contains an Error

	Article: Q311116
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "URLScan" section of the IIS Lockdown Tool 2.0 documentation contains an
	explanation of the AllowDotInPath setting that is incorrect.
	
	The AllowDotInPath documentation contains the following text, which is
	incorrect:
	
	  AllowDotInPath: Allowed values are 0 or 1. Default is 0. If set to 1, UrlScan
	  rejects any requests containing multiple instances of the dot (.) character.
	  If set to 0, UrlScan does not perform this test.
	
	The documentation should read:
	
	  AllowDotInPath: Allowed values are 0 or 1. Default is 0. If set to 0, UrlScan
	  rejects any requests containing multiple instances of the dot (.) character.
	  If set to 1, UrlScan does not perform this test.
	
	MORE INFORMATION
	================
	
	Version 1.0 of the URLScan ISAPI filter contains a problem that causes FrontPage
	Server Extension requests to be rejected. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q307976 FP: Error When Using FrontPage With URLScan
	
	Note that the resolution contained in this Knowledge Base article only applies to
	version 1.0 of the URLScan ISAPI filter and is not required in the latest
	version.
	
	Additional query words: iis lockdown urlscan allowdotinpath
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
