---
layout: page
title: "Q308170: IIS Property Sheet Incorrect in IIS 5.1"
permalink: /kb/308/Q308170/
---

## Q308170: IIS Property Sheet Incorrect in IIS 5.1

{% raw %}

	Article: Q308170
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 22-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services, version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation that is included with Internet Information Services (IIS) 5.1
	contains an incorrect reference to the Bandwidth Throttling feature. Bandwidth
	Throttling is not available in IIS 5.1
	
	MORE INFORMATION
	================
	
	On the computer running IIS 5.1, open a browser, and then type the following in
	the address bar:
	
	  "http://localhost/iishelp/iis/htm/core/iipx.htm" (without the quotation
	  marks)
	
	The following information is displayed in the browser:
	
	  
	
	  Internet Information Services Property Sheet:
	
	  Use this property sheet to set the bandwidth used by all services and to
	  configure MIME types. These default values can be changed on an individual
	  basis for each site if desired.
	
	  Enable Bandwidth Throttling
	
	  Select this option to limit the bandwidth used by Web and FTP services on your
	  computer.
	
	  Limiting the bandwidth is especially useful if your network card has multiple
	  purposes, such as e-mail and remote logons. Bandwidth throttling limits only
	  the bandwidth used by static HTML files.
	
	  MIME Map
	
	  Select the File Types button to configure Multipurpose Internet Mail
	  Extensions (MIME) mappings. These mappings set the various file types that
	  the Web service returns to browsers.
	
	This information is relevant to IIS 4.0 and IIS 5.0, but not to IIS 5.1.
	
	To change the MIME mappings in IIS 5.1, complete the following steps:
	
	1. Open the Internet Information Services snap-in.
	
	2. Expand the Internet Information Services snap-in, right-click the Web Sites
	  node, and then click Properties.
	
	3. Click the HTTP Headers tab, and then click File Types under the MIME Types
	  section. In this section, you can create and edit the MIME file types on the
	  IIS server. For each site, you can configure the MIME settings on an
	  individual basis.
	
	REFERENCES
	==========
	
	  Q238145 How to Monitor Bandwidth Throttling
	
	  Q186800 How Bandwidth Throttling Works in IIS 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbiisSearch kbiis510
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
