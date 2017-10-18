---
layout: page
title: "Q185380: &quot;Directory Listing Denied&quot; When Browsing a Web Site"
permalink: kb/185/Q185380/
---

## Q185380: &quot;Directory Listing Denied&quot; When Browsing a Web Site

	Article: Q185380
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to browse a Web site, you may receive the following error
	message:
	
	  Directory Listing Denied
	
	CAUSE
	=====
	
	This problem can be caused by either of the following:
	
	- The Web site's home directory does not contain a default document file, such
	  as Default.htm or Default.asp.
	
	- The Default Document option is not selected.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. In the Internet Service Manager (ISM), right-click the Web site, and then
	  click Properties on the shortcut menu.
	
	2. Click the Documents tab.
	
	3. Verify that your default file is in the list of default documents, and that
	  the Enable Default Document check box is selected.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
