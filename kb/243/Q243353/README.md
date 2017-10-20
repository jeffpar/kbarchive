---
layout: page
title: "Q243353: Custom Certificate Mappings Are Not Recognized"
permalink: /kb/243/Q243353/
---

## Q243353: Custom Certificate Mappings Are Not Recognized

{% raw %}

	Article: Q243353
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Internet Information Services (IIS) 5.0, when you use client certificate
	mapping, custom mappings may not be recognized. For example, the Web site stops
	responding (hangs).
	
	CAUSE
	=====
	
	If you are not using Windows 2000 Active Directory Mapping (for example, client
	certificates are not mapped to their user accounts in the Windows 2000 active
	directory), you may have turned on the Windows Directory Service Mapper in
	error.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Click Start, click Administrative Tools, and then click Internet Services
	  Manager.
	
	2. Right-click the computer name (should be just above the listing of Web and
	  FTP sites), and then click Properties.
	
	3. Click Edit (next to WWW Service).
	
	4. Click the Directory Security tab.
	
	5. Click to uncheck the Enable the Windows Directory Service Mapper check box.
	  (This option is available only at the Master properties level, and only if
	  the server is a member of a Windows 2000 domain.)
	
	6. Click OK, and then click OK again to return to the Internet Services Manager.
	
	7. Right-click the computer name, and then click Restart IIS.
	
	MORE INFORMATION
	================
	
	If you are using the Windows Directory Service Mapper, you cannot use IIS to
	create custom certificate mappings for each Web site through the IIS Mapper (for
	example, enable Client Certificate Mapping on the Directory Security tab). You
	can only use one or the other.
	
	In general, if you want to do one-to-one mappings, and the accounts reside in
	your domain (or forest), the Windows Mapper can save you time. If you are using
	many-to-one mappings, or the accounts reside outside your network, the IIS
	Mapper is the best solution.
	
	For more details on the types of certificate mapping available, see the Internet
	Information Services 5.0 documentation.
	
	Additional query words: iis iis5 certsrv 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
