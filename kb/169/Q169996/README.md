---
layout: page
title: "Q169996: To Run an ISAPI DLL with #exec, Use the CGI Statement"
permalink: kb/169/Q169996/
---

## Q169996: To Run an ISAPI DLL with #exec, Use the CGI Statement

	Article: Q169996
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an ISAPI DLL as an #exec server-side include, the ISAPI DLL does
	not run.
	
	CAUSE
	=====
	
	The following line in the HTML document has been written with an ISA statement:
	
	     <!--#exec isa ="/scripts/w3test.dll?SimulatePendingIO"-->
	
	The above is the stated method in the documentation. However, this is incorrect.
	
	WORKAROUND
	==========
	
	Write the #exec line with a CGI statement as stated in the sample below:
	
	     <!--#exec cgi ="/scripts/w3test.dll?SimulatePendingIO"-->
	
	Additional query words: iis
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis300
	Version           : winnt:3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
