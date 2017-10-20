---
layout: page
title: "Q111807: &quot;API Library Not Found&quot; w/ MS-DOS .PLB in FoxPro for Mac"
permalink: /kb/111/Q111807/
---

## Q111807: &quot;API Library Not Found&quot; w/ MS-DOS .PLB in FoxPro for Mac

{% raw %}

	Article: Q111807
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro for MS-DOS allows the user to place libraries into a project as as an
	INCLUDE file, but FoxPro for Macintosh automatically excludes libraries that are
	added. However, FoxPro for MS-DOS projects will typically build without error in
	FoxPro for Macintosh.
	
	MORE INFORMATION
	================
	
	If a project containing an included library is brought from MS-DOS to the
	Macintosh, the project will build without error if the library filename includes
	a .PLB extension. If the default extension was not used, an "API Library not
	found" error message will result. In Visual FoxPro, the error is "API Library is
	not found."
	
	Additional query words: vFoxMac FoxMac errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
