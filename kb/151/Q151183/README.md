---
layout: page
title: "Q151183: WWW Clients Using Basic Authentication May Fail with IIS 1.0"
permalink: /kb/151/Q151183/
---

## Q151183: WWW Clients Using Basic Authentication May Fail with IIS 1.0

	Article: Q151183
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	World Wide Web (WWW) clients may fail to authenticate with an Universal Resource
	Locator (URL) that requires Basic Authentication on Microsoft Internet
	Information Server (IIS). In some cases, the WWW client may access violate when
	required to use Basic Authentication.
	
	CAUSE
	=====
	
	IIS does not supply a Realm for Basic Authentication. Some WWW clients require
	that a Realm be returned from the Internet Server to accept the servers Basic
	Authentication challenge. The following WWW clients do not require a Realm:
	
	- Microsoft Internet Explorer 1.5
	
	- Netscape 2.0
	
	The following WWW clients have been reported to require a Realm:
	
	- NCSA Mosaic (any version)
	
	- Microsoft Internet Explorer 1.0
	
	- Netscape 1.0
	
	- Spry Mosaic (any version)
	
	- IBM WebExplorer (any version)
	
	- PCN (any version)
	
	- Lynx (any version)
	
	RESOLUTION
	==========
	
	Microsoft has modified Internet Information Server 1.0 to send a Realm with all
	Basic Authentication challenge messages. By default, the Realm returned is the
	"host" (host header, DNS host name, or IP address), or you can set the Realm in
	the Registry.
	
	To specify the Realm returned, use the following steps to edit the Microsoft
	Windows NT Registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Obtain and apply the Realm fix for IIS version 1.0.
	
	2. Run Windows NT Registry Editor (Regedt32.exe).
	
	3. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     SYSTEM\CurrentControlSet\Services\W3SVC\Parameters
	
	4. Click Add Value on the Edit menu.
	
	5. Use the following values:
	
	     Value Name: Realm
	     Data Type:  REG_SZ
	     String:     <Specify the Realm to return>
	
	6. Close the Registry Editor.
	
	7. Stop the World Wide Web Publishing Service.
	
	8. Start the World Wide Web Publishing Service.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 1.0. This problem was corrected in the latest Internet
	Information Server version 1.0 U.S. Service Pack. This problem was also
	corrected in the latest Windows NT 3.51 U.S. Service Pack. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: prodiis Client/Server security
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
