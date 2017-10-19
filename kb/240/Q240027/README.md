---
layout: page
title: "Q240027: W3SVC and IIS Log File Names Are Listed with NCSA Format"
permalink: /kb/240/Q240027/
---

## Q240027: W3SVC and IIS Log File Names Are Listed with NCSA Format

	Article: Q240027
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
	
	In the Internet Information Services (IIS) 5.0 HTML Administration pages, an
	incorrect format name is listed for the W3C Extended Log File Format and the
	Microsoft IIS Log File Format.
	
	The W3C Extended Log File Format and Microsoft IIS Log File Format are both
	listed with the NCSA format name.
	
	The NCSA format has an "nc" prefix, for example, ncyymmdd.log. The W3C format
	name should have an "ex" prefix, as in exyymmdd.log, and the Microsoft IIS
	format should have an "in" prefix, as in inyymmdd.log.
	
	However, all the log files are created with the correct name when written.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
