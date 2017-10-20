---
layout: page
title: "Q167039: XWEB: Access Forbidden Error from Browser"
permalink: /kb/167/Q167039/
---

## Q167039: XWEB: Access Forbidden Error from Browser

{% raw %}

	Article: Q167039
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a Microsoft Exchange Server mailbox from a browser
	via the Web Connector (Active Server Pages), the following occurs:
	
	1. The graphics on the logon page do not load.
	
	2. If you enter a mailbox name and validation details, you receive the following
	  error message:
	
	  HTTP/1.0 403 Access Forbidden (Execute Access Denied - This
	  Virtual Directory does not allow objects to be executed.)
	
	CAUSE
	=====
	
	This problem occurs because the default document set from Internet Server
	Manager on IIS has been changed to something other than Default.htm.
	
	NOTE: This message results if Logon.asp is named as the default document.
	
	RESOLUTION
	==========
	
	This problem can be resolved by renaming Default.htm in the IIS Home directory
	to Default.xxx.
	
	If you are unsure of the current setting for the Home directory, start Microsoft
	Internet Server Manager and select properties for the WWW service. The
	Directories tab shows a path for the Home directory.
	
	To create a new default.htm in the Home directory, perform the following steps:
	
	1. Open a new file and enter the following tags:
	
	       <HTML>
	       <HEAD>
	       <META HTTP-EQUIV="refresh" CONTENT="0;URL=http://x_server_name/exchange">
	       </HEAD>
	       <BODY>
	   
	
	  For x_server_name, enter your Microsoft Exchange Server computer name as it
	  appears in Control Panel Networks.
	
	2. Save the new file.
	
	3. Exit and restart the browser and type exchange_server_name as the URL. The
	  logon should appear automatically.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbExchangeActiveServComp500
	Version           : :5.0
	
	=============================================================================
	

{% endraw %}
