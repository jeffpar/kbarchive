---
layout: page
title: "Q324322: XSL ISAPI Contains Non-Secure Code that Results in Access to IIS"
permalink: /kb/324/Q324322/
---

## Q324322: XSL ISAPI Contains Non-Secure Code that Results in Access to IIS

	Article: Q324322
	Product(s): Internet Information Server
	Version(s): 2.5,2.6,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft XML, versions 2.5, 2.6, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When certain error conditions are met, IIS files may be exposed to clients who
	browse the Web site if you are using the XSL ISAPI filter.
	
	RESOLUTION
	==========
	
	To resolve this problem, you must download and install a new filter.
	
	1. Determine which version of the XSL ISAPI filter you are currently using, and
	  then download the new filter from one of the following locations:
	
	Note that it is extremely important to note which version is being used in IIS.
	If you are not sure, review the documentation that is located on the download
	page of the filter. The extensible nature of the filter makes it possible to
	apply the wrong update to your version type.
	
	   - If you are running any version from Reference Architecture for Commerce
	     Version 2, download the new filter from the following Microsoft Developer
	     Network (MSDN) Web site:
	
	NOTE: The Reference Architecture for Commerce is an update to a previous release
	named "B2C Reference Architecture". Users of both Reference Architectures must
	download the update from this Web site.
	
	  Reference Architecture for Commerce Version 2
	  http://msdn.microsoft.com/code/default.asp?url=/code/sample.asp?url=/msdn-files/026/002/422/msdncompositedoc.xml
	
	   - If you are running any other version, download the new filter from the
	     following MSDN Web site:
	
	  XSL ISAPI Filter 2.2: Server-side XSL Formatting for Multiple Device Types
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnxslgen/html/xslisapifilter.asp
	
	2. Click Start, click Programs, click Windows NT 4.0 Option Pack, click Internet
	  Information Server, and then click Internet Services Manager.
	
	3. When the ISM opens, right-click the server name, and then click Properties to
	  open the Master Properties dialog box.
	
	4. In the Master Properties dialog box, make sure that WWW is listed in the
	  drop-down list, and then click Edit.
	
	5. On the ISAPI Filters tab, make sure that the XSL ISAPI filter is listed. The
	  filter is installed and updated by the installer.
	
	6. Stop and restart the service to activate the changes.
	
	NOTE: Although no known compatibility issues exist between earlier versions,
	Microsoft recommends that you install and fully test the new XSL ISAPI version
	in a non-production environment before you use it in a production environment.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in IIS versions 4.0 and 5.0 and
	MSXML versions 2.5, 2.6, 3.0.
	
	Additional query words: iis, XSLISAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbAudDeveloper kbMSXMLSearch kbiis500 kbiis400 kbMSXML250 kbMSXML260 kbMSXML300
	Version           : :2.5,2.6,3.0,4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
