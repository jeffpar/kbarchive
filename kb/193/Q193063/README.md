---
layout: page
title: "Q193063: FP97: Sample JavaScript Code to Redirect Page Based on Browser"
permalink: kb/193/Q193063/
---

## Q193063: FP97: Sample JavaScript Code to Redirect Page Based on Browser

	Article: Q193063
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbhtml
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft  version of this article, see Q193057.
	
	SUMMARY
	=======
	
	This article provides sample JavaScript code that redirects a Web browser to a
	specific page based on which browser you are using.
	
	MORE INFORMATION
	================
	
	NOTE: The following JavaScript has been tested in Microsoft Internet Explorer
	versions 3.0 and 4.0 and Netscape Navigator versions 3.0 and 4.0.
	
	To redirect the browser using a script, follow these steps:
	
	1. Start FrontPage Editor and open the HTML page you want to edit.
	
	2. On the Insert menu, click Script.
	
	3. In the Language section, click JavaScript.
	
	4. In the Script box, type the following script:
	
	        var version = navigator.appVersion;
	
	        // sets variable = browser version
	        if (version.indexOf("MSIE") != -1)
	        // checks to see if using IE
	           {
	           window.location.href="ie.htm"
	           /* If using IE, it shows this page
	           replace ie.htm with page name */ 
	        }else
	        window.open("other.htm", target="_self")
	        /* else open other page
	        replace other.html with page name */ 
	
	5. Click OK.
	
	6. On the File menu, click Save.
	
	7. Open the page in a Web browser that supports client-side scripting.
	
	REFERENCES
	==========
	
	For more information about JavaScript, please see the following Microsoft World
	Wide Web site:
	
	  http://www.microsoft.com/scripting/jscript/default.htm
	
	Additional query words: 97 JavaScript Redirect browser Java Script
	
	======================================================================
	Keywords          : kbusage kbhtml 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
