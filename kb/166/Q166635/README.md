---
layout: page
title: "Q166635: XWEB: Setting the Default Logon Domain for IIS"
permalink: /kb/166/Q166635/
---

## Q166635: XWEB: Setting the Default Logon Domain for IIS

{% raw %}

	Article: Q166635
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use a Web browser to access a Microsoft Exchange Server using basic
	(clear text) password authentication, you must enter the user name and password
	manually.
	
	If you have multiple Windows NT domains and the user account resides in a domain
	different from that of the Microsoft Internet Information Server (IIS) computer,
	you must enter DOMAIN\USERNAME for the user name.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can work around this issue by adding the following information into the
	registry on the IIS computer with the Active Server Components. This will allow
	users to enter only the user name and password and not the domain name also.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe as appropriate for your
	  version of Windows NT).
	
	2. Go to the
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W3SVC\Parameters key in
	  the registry.
	
	3. On the Edit menu, click "New Value", and then click "String Value".
	
	4. Enter a new string value called DefaultLogonDomain with data of the
	  DomainName (where DomainName is the name of the domain where the user account
	  resides).
	
	5. Quit Registry Editor. Restart all of the IIS services for the changes to take
	  effect.
	
	NOTE: There have been a few problems with this if your IIS computer is not a
	Primary Domain Controller or a Backup Domain Controller, or if you arerunning
	IIS 4.0.
	
	If you are running IIS 4.0, follow these steps using the IIS Server Manager for
	IIS 4.0:
	
	1. Right click the "Default Web Site" and then click Properties.
	
	2. Click the "Directory Security" Tab.
	
	3. In the "Anonymous Access and Authentication Control" Section, click the Edit
	  button.
	
	4. Click to check the "Basic Authentication (Password is sent in Clear Text)"
	  checkbox.
	
	5. Click the Edit button.
	
	6. Enter the Default Domain.
	
	Additional query words: owa
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : :5.5
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
