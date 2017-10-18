---
layout: page
title: "Q190006: &quot;ODBC Drivers Error 80004005&quot; When Browsing ASP Pages"
permalink: kb/190/Q190006/
---

## Q190006: &quot;ODBC Drivers Error 80004005&quot; When Browsing ASP Pages

	Article: Q190006
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When browsing an ASP page, the following error may occur:
	
	  OLE DB Provider error for ODBC Drivers error 80004005
	  [Microsoft] [ODBC Driver Manager] Data Source Name not found and no default
	  driver specified.
	
	CAUSE
	=====
	
	The Global.asa file is not located in the root directory of the application.
	
	WORKAROUND
	==========
	
	To determine if a directory is designated as an application root and verify that
	it also contains the Global.asa file, perform the following steps:
	
	1. In the Internet Service Manager (ISM), verify that the node is configured as
	  an application.
	
	  To do this, verify that the node displays the package icon in the ISM. To
	  further verify, view the property sheet for that node. On the Virtual
	  Directory tab, under Application Settings, an active name should be listed
	  for the application. If the name is "Default Application" and it appears
	  dimmed, the node is NOT an application.
	
	2. Verify that the Global.asa file is located in the root directory of the
	  application.
	
	  To determine the root directory of the application, view the property sheet
	  for the application. Check the Local Path setting on the Virtual Directory
	  tab.
	
	MORE INFORMATION
	================
	
	This error is known to occur after you have used Visual InterDev to create a
	sample ASP page, which works. However, when you try to incorporate that sample
	ASP code in your application, the error occurs.
	
	For more information about the Global.asa file, see the Windows NT Option Pack
	Product Documentation. On the Index tab, type "GLOBAL.ASA" (without the
	quotation marks), and then select the "Global.asa File Reference (IIS)" topic.
	
	For more information about creating applications, open the following topic in the
	Product Documentation:
	
	- Microsoft Internet Information
	
	- Server Administration
	
	- Configuring Applications
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: mmc vid akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
