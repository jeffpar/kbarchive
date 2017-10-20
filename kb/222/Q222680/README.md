---
layout: page
title: "Q222680: OWA Does Not Work After Upgrading to Japanese Version of SBS 4.5"
permalink: /kb/222/Q222680/
---

## Q222680: OWA Does Not Work After Upgrading to Japanese Version of SBS 4.5

{% raw %}

	Article: Q222680
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to the Japanese version of Microsoft BackOffice Small Business
	Server (SBS) version 4.5, the Outlook Web Access (OWA) client does not work
	after it is installed on the SBS-based server. This problem occurs even though
	no error messages are displayed during installation. When you attempt to gain
	access to your inbox using OWA, the following error message is displayed:
	
	  Microsoft Internet Explorer
	  Fail to access inbox.
	
	RESOLUTION
	==========
	
	To resolve this problem, give each user who uses OWA permission to log on
	locally to the SBS-based computer. To set the permissions:
	
	1. Click Start, point to Programs, point to Administrative Tools (Common), and
	  then click "User Manager for Domains".
	
	2. On the Policies menu, click User Rights..
	
	3. In the Right box, click "Log on locally".
	
	4. Click Add.
	
	5. Add each user or group that uses OWA.
	
	Setting "Log on locally" for the Everyone group can create security concerns. If
	your server is connected to the Internet, make sure to enable the Proxy Server
	firewall features. A simple way to enable the firewall is to use the SBS
	Internet Connection Wizard. You can run this wizard from the Manage Internet
	Access link on the More Tasks tab of the SBS console.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft BackOffice Small
	Business Server 4.5 (Japanese version).
	
	MORE INFORMATION
	================
	
	This problem does not occur when you perform a new installation of the Japanese
	version of SBS 4.5. Also, the problem is not encountered by users created on the
	server after the upgrade to SBS 4.5. However, the problem does occur with any
	user created on the server prior to the upgrade.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
