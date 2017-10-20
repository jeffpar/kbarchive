---
layout: page
title: "Q325927: Unknown Comp Filter Priority When You Turn On HTTP Compression"
permalink: /kb/325/Q325927/
---

## Q325927: Unknown Comp Filter Priority When You Turn On HTTP Compression

{% raw %}

	Article: Q325927
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you turn on compression for dynamic or static content, the compression
	filter priority shows the following status:
	
	  **Unknown**
	
	No Event Viewer error messages provide any more details about why the priority is
	unknown or indicate whether the filter is currently working.
	
	CAUSE
	=====
	
	A minor error occurs in the priority status that causes the Internet Services
	Manager (ISM) user interface to show a status of "Unknown".
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Services
	5.0.
	
	MORE INFORMATION
	================
	
	After conclusive testing, Microsoft has determined that the compression filter
	is working as designed, even if the priority is reported as "Unknown". If you
	have turned on compression, you can verify that compression is working on the
	Internet Information Services (IIS) computer:
	
	NOTE: The test in this example uses a page named Postinfo.html. This page comes
	with default installation of IIS and exists in the root of the Web site (if the
	page and the Web site exist). To reach the page, use the following URL, where
	localhost assumes that the test is being performed on the Web server:
	
	  http://localhost/postinfo.html
	
	1. Click Start, point to Programs, click Administrative Tools, and then open the
	  Internet Services Manager.
	
	2. Right-click the server name, and then click Properties.
	
	3. In the Master Properties drop-down list, click to select WWW Services, and
	  then click Edit.
	
	4. Click the Service tab. Under HTTP Compression, locate and confirm the
	  temporary folder location (the default is %windir%\IIS Temporary Compressed
	  Files).
	
	NOTE: If the priority is "Unknown", you cannot move the compression filter up or
	down in the order of filters.
	
	5. Open Microsoft Internet Explorer, and then type
	  "http://localhost/postinfo.html" (without the quotation marks) in the address
	  bar to access the Postinfo.html page.
	
	6. Open Windows Explorer. To do this, click Start, point to Programs, click
	  Accessories, and then click Windows Explorer.
	
	7. Locate and open the folder that you accessed in step 4.
	
	8. Locate a file that has a name such as $^~_gzip_d__inetpub_wwwroot_postinfo.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Turn on compression. For more information about how to do this, visit the
	  following Microsoft Web site:
	
	  Enabling HTTP Compression
	  http://www.microsoft.com/windows2000/en/server/iis/htm/core/iihttpc.htm
	
	2. Restart IIS.
	
	3. Open the WWW Services Master Properties in the ISM, and then view the filter
	  priority under ISAPI Filters.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
