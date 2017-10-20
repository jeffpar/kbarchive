---
layout: page
title: "Q186809: Err Msg: HTTP Error 405, 405 Method Not Allowed"
permalink: /kb/186/Q186809/
---

## Q186809: Err Msg: HTTP Error 405, 405 Method Not Allowed

{% raw %}

	Article: Q186809
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to search the product documentation that ships with the
	Microsoft Windows NT Option Pack version 4.0, the following error message may
	occur:
	
	  HTTP Error 405
	  405 Method Not Allowed
	
	  The method specified in the Request Line is not allowed for the resource
	  identified by the request. Please ensure that you have the proper MIME type
	  set up for the resource you are requesting.
	
	  Please contact the server's administrator if this problem persists.
	
	Alternative Error May Occur In Internet Explorer 5.0
	----------------------------------------------------
	
	Under certain circumstances in Internet Explorer 5.0, the following error message
	may be displayed instead:
	
	  The page cannot be displayed
	  There is a problem with the page you are trying to reach and it cannot be
	  displayed.
	
	  Please try the following:
	
	  * Open the localhost home page, and then look for links to the information you
	  want.
	  * Click the Refresh button, or try again later.
	  * Click Search to look for information on the Internet.
	  * You can also see a list of related sites.
	
	  HTTP 500 - Internal server error Internet Explorer
	
	CAUSE
	=====
	
	The product documentation uses the Internet Data Query file (Idq.dll) to perform
	searches. Either the Idq.dll file has not been installed, or it is missing from
	the properties of the IISHELP application directory.
	
	WORKAROUND
	==========
	
	To resolve this issue, perform one of the following workarounds:
	
	Idq.dll Does Not Exist
	----------------------
	
	If the %SystemRoot$\System32 folder does not contain the Idq.dll file, perform
	the following to install it:
	
	1. Run the Windows NT Option Pack 4.0 Setup program, and then click Add/Remove.
	
	2. From the list box of Components, select Microsoft Index Server, and then
	  click the Show Subcomponents button.
	
	3. At a minimum, from the Subcomponents of Microsoft Index Server list box,
	  click the Index Server System Files checkbox to select it, and then click OK.
	
	4. Finish running the Setup program.
	
	Idq.dll Already Exists
	----------------------
	
	If the Idq.dll file already exists in the %SystemRoot$\System32 folder, perform
	the following to create a script mapping for the IISHELP application for
	Idq.dll:
	
	1. Click Start, point to Programs, and point to Windows NT 4.0 Option Pack.
	
	2. Point to Microsoft Internet Information Server and click Internet Service
	  Manager.
	
	  NOTE: Be sure to click Internet Service Manager and not Internet Service
	  Manager (HTML).
	
	3. Expand the Internet Information Server object, expand your server object, and
	  then expand the Default Web Site object.
	
	4. Right-click the IISHELP application directory and click Properties.
	
	5. Click the Configuration button in the Application Settings section of the
	  Virtual Directory tab.
	
	6. Click Add and use the following information to create a new script mapping:
	
	  Executable: C:\Winnt\system32\idq.dll
	  Extension: idq
	
	  NOTE: C:\Winnt is the default Windows NT installation directory; yours may be
	  different.
	
	7. Click OK three times.
	
	NOTE: You do not need to restart IIS for this to take effect.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
