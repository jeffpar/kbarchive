---
layout: page
title: "Q168908: How to Authenticate a User Against All Trusting Domains"
permalink: /kb/168/Q168908/
---

## Q168908: How to Authenticate a User Against All Trusting Domains

{% raw %}

	Article: Q168908
	Product(s): Internet Information Server
	Version(s): 2.0,3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbiis300 kbiis400 kbiis500
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	By default, Internet Information Server (IIS) validates an unqualified user
	logon ID against either the local computer's user database or the domain which
	the server is a member of. This article describes how to configure IIS to
	validate the unqualified user logon against all trusting domains and the user
	accounts database.
	
	MORE INFORMATION
	================
	
	To configure IIS to validate the unqualified user logon against all trusting
	domains and the user accounts database, use the appropriate method:
	
	IIS 4.0 and IIS 5.0
	-------------------
	
	Method 1
	
	1. Start the IIS Microsoft Management Console (MMC).
	
	2. Right-click the desired Web site, and then click Properties.
	
	3. On the Directory Security tab, in the "Anonymous Access and Authentication
	  Control" section, cclick Edit.
	
	4. Click Edit for Default domain for basic authentication.
	
	5. In the Domain Name text box, type a single backslash "\" (without the
	  quotation marks).
	
	6. Click OK three times to return to the Internet Service Manager MMC.
	
	Method 2:
	
	You can also set the DefaultLogonDomain parameter for IIS 4.0. This parameter has
	been moved to the metabase for IIS version 4.0. To do this, run Adsutil.vbs from
	a command prompt, using the appropriate syntax below (depending on whether you
	want to set DefaultLogonDomain for all FTP sites, only the default FTP site, or
	other sites):
	
	- To set DefaultLogonDomain for all FTP sites, run the following command:
	
	  adsutil set msftpsvc/DefaultLogonDomain "DomainName
	
	- To set DefaultLogonDomain for only the default FTP site, run the following
	  command:
	
	  adsutil set msftpsvc/1/DefaultLogonDomain "DomainName
	
	- To set DefaultLogonDomain for any other site, use the same syntax as the
	  default FTP site above, but change the "1" parameter to the appropriate
	  service number.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q184319 FTP Service's DefaultLogonDomain Not Available in MMC
	
	IIS 2.0 and 3.0
	---------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<ServiceName>\Parameters
	
	where <ServiceName> is:
	
	     MSFTPSVCFTP Service
	     GOPHERSVCgopher Service
	     W3SVC        WWW Service
	
	3. On the Edit menu, click Add Value, and then use the following entry:
	
	     Value Name: DefaultLogonDomain
	     Data Type:  REG_SZ
	     Value:      Domain Name
	
	4. Quit Registry Editor, and then restart the computer for the change to take
	  effect.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbiis300 kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300 kbiis200
	Version           : :2.0,3.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
