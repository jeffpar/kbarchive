---
layout: page
title: "Q152589: Netscape 2.01 Clients Hang While Getting SSL Pages w/ Graphics"
permalink: kb/152/Q152589/
---

## Q152589: Netscape 2.01 Clients Hang While Getting SSL Pages w/ Graphics

	Article: Q152589
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a Netscape Navigator 2.01 client to view a SSL protected web page
	with graphics on Internet Information Server (IIS), the Netscape client may
	appear to hang. However, after 15 minutes of inactivity, the client will
	suddenly display the entire page with all the graphics.
	
	CAUSE
	=====
	
	Netscape Navigator 2.01 clients do not support HTTP Keep-Alives over SSL
	connections.
	
	WORKAROUND
	==========
	
	Disable HTTP Keep Alives on the IIS computer by doing the following:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. With Registry Editor, go to the following registry key
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W3SVC\Parameters
	
	
	2. Click Add Value on the Edit menu. Add the following:
	
	     Value Name: SslNoKeepAlive
	     Data Type:  REG_DWORD
	     Data:    1
	
	
	3. Stop and restart all of the IIS services.
	
	Notes:
	
	- Unfortunately, disabling HTTP Keep Alives has severe performance implications
	  as it disables HTTP Keep Alives completely, even for non-SSL pages.
	
	- Microsoft has changed IIS to only use HHTP Keep Alives over SSL with browsers
	  known to be compliant, currently the only known compliant browser is
	  Microsoft Internet Explorer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 1.0. This problem was corrected in the latest Microsoft Internet
	Information Server U.S. Service Pack.
	
	The service pack for IIS 1.0b systems using 64-bit SSL keys is available from
	Microsoft's World Wide Web at the following location:
	
	  http://www.microsoft.com/Infoserv/iisservpack.htm.
	
	If you require information on obtaining the domestic version of the service pack
	(support for 128-bit keys), consult the Readme.htm file located at
	http://www.microsoft.com/infoserv/readme.htm.
	
	This problem was also corrected in the latest Windows NT 3.51 U.S. Service Pack.
	For information on obtaining the Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: ssl netscape internet browser hang freeze post method form navigator prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : :1.0
	
	=============================================================================
	
