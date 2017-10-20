---
layout: page
title: "Q161890: RCMD Strips Quotes from the Command Line"
permalink: /kb/161/Q161890/
---

## Q161890: RCMD Strips Quotes from the Command Line

{% raw %}

	Article: Q161890
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool kbuikbbuglist
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Rcmd.exe from the Windows NT Server 4.0 Resource Kit and Windows NT
	Workstation 4.0 Resource Kit to create a remote command that requires quotation
	marks around its parameter(s), you receive an error.
	
	See the following example:
	
	  C:\> rcmd \\myserver net start "computer browser"
	  Executing on \\myserver: net start computer browser
	
	  The service name is invalid.
	
	  More help is available by typing NET HELPMSG 2185.
	
	  Remote server \\myserver disconnected
	
	CAUSE
	=====
	
	RCMD strips the quotation marks from the command line (note this behavior on the
	second line of the previous example) that results in a single multi- word
	parameter being interpreted as two parameters.
	
	RESOLUTION
	==========
	
	This problem was corrected in the Supplement Three. Supplements are available
	for download from the following Microsoft Press Web site:
	
	  http://mspress.microsoft.com
	
	
	Additional query words: quotes ignore ignoring
	
	======================================================================
	Keywords          : kbtool kbui kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
