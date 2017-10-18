---
layout: page
title: "Q164672: IE Does Not Interpret PERL Scripts Correctly as Plain Text"
permalink: kb/164/Q164672/
---

## Q164672: IE Does Not Interpret PERL Scripts Correctly as Plain Text

	Article: Q164672
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using a PERL script with a header that contains the following:
	
	  Content-Type: text/plain\n\n
	
	In addition, HTML tags exists within the file. Microsoft Internet Explorer (IE)
	displays the results as HTML output rather than plain text output. If there are
	no HTML tags, the file is viewed as an unsupportable file type and IE tries to
	download file.
	
	CAUSE
	=====
	
	IE assumes that because the script contains HTML tags that it is an HTML file
	and displays it as such regardless of what content type is stating.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Internet Explorer
	version 3.0 or above. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
