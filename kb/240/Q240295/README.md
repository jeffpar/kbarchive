---
layout: page
title: "Q240295: CGI Scripts on Multi Processor System Cause ERROR_PIPE_BUSY"
permalink: /kb/240/Q240295/
---

## Q240295: CGI Scripts on Multi Processor System Cause ERROR_PIPE_BUSY

	Article: Q240295
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbIIS kbiis300 kbiis400 kbiis500 kbWinNT400PreSP7Fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Internet Information Server (IIS) is running on a Multi Processor system
	and multiple CGI Scripts are executed, the error Server Error 500 - All pipe
	instances that are busy may be returned to the browser.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	09/23/1999  08:55p             375,056 kernel32.dll     I386
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbIIS kbiis300 kbiis400 kbiis500 kbWinNT400PreSP7Fix 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : winnt:3.0,4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
