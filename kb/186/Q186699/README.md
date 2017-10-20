---
layout: page
title: "Q186699: XWEB: MAC: Internet Explorer 4.0 Opens Attachments as ASP Files"
permalink: /kb/186/Q186699/
---

## Q186699: XWEB: MAC: Internet Explorer 4.0 Opens Attachments as ASP Files

{% raw %}

	Article: Q186699
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:4.0; WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Internet Explorer version 4.0 for Macintosh 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When trying to start a binary attachment from Outlook Web Access and Internet
	Explorer 4.0 for the Macintosh, the binary attachment may be incorrectly opened
	in a browser window and displayed as an .asp file.
	
	CAUSE
	=====
	
	Internet Explorer opens a browser window in an attempt to display the
	attachment. When dealing with binary attachments like an executable (for
	example, SimpleText, the browser does not start the file but attempts to display
	it. The display will appear as garbage.
	
	WORKAROUND
	==========
	
	Save the binary attachment to the local file system before attempting to run it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbIEsearch kbOWASearch kbIEMacSearch kbOWA550SP1 kbIE400Mac
	Version           : MACINTOSH:4.0; WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
