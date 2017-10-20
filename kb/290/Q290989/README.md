---
layout: page
title: "Q290989: XCLN: OWA &quot;HTTP 403 - Forbidden&quot; Err. Mssg. w/o Exchfilt.dll"
permalink: /kb/290/Q290989/
---

## Q290989: XCLN: OWA &quot;HTTP 403 - Forbidden&quot; Err. Mssg. w/o Exchfilt.dll

{% raw %}

	Article: Q290989
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbfile exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to gain access to a Microsoft Outlook Web Access (OWA) Web
	page, you may receive an error message that is similar to:
	
	  You are not authorized to view this page.
	
	  You might not have permission to view this directory or page using the
	  credentials you supplied.
	
	  If you believe you should be able to view this directory or page, please try
	  to contact the Web site by using any e-mail address or phone number that may
	  be listed on the <server_name> home page.
	
	  Click Search to look for information on the Internet.
	
	  HTTP Error 403 - Forbidden
	  Internet Explorer
	
	This error message may occur even though the permissions are set correctly. For
	additional information about how to set permissions correctly, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q175892 XWEB: Permissions Required for Outlook Web Access
	
	The permissions are set to "Execute (including script)" on the Exchange Server
	virtual directory.
	
	CAUSE
	=====
	
	Although the error message indicates that there is an incorrect default Web
	site, this issue occurs because the Internet Server Application Programming
	Interface (ISAPI) filter for Exchfilt.dll either is not loaded or is not working
	properly.
	
	RESOLUTION
	==========
	
	To resolve this issue, replace the existing Exchfilt.dll file in the
	<drive>:\Exchsrvr\Server\Setup\I386 folder with the Exchfilt.dll file from
	either the Exchange Server 5.5 CD-ROM or the Winnt\System32 folder. If you are
	running Microsoft Small Business Server (SBS) version 4.5, you can obtain the
	Exchfilt.dll file from either CD-ROM 3 of the SBS 4.5 CD-ROMs or the
	Winnt.sbs\System32 folder.
	
	Additional query words: smallbiz missing red arrow down exchfilt.dll
	
	======================================================================
	Keywords          : kbfile exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
