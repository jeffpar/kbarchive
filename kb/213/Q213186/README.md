---
layout: page
title: "Q213186: SMS: Cannot Change Site Server Domain Name or Computer Name"
permalink: /kb/213/Q213186/
---

## Q213186: SMS: Cannot Change Site Server Domain Name or Computer Name

{% raw %}

	Article: Q213186
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsetup kbConfig kbServer kbsms200
	Last Modified: 08-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Microsoft Systems Management Server (SMS) site no longer functions after you
	change either the name of the domain or the name of the computer on which the
	site was installed.
	
	After you change the existing domain name to a new domain name, or change the
	site server's computer name to a new computer name, the SMS services do not
	start as expected.
	
	MORE INFORMATION
	================
	
	Microsoft does not support the practice of changing the computer name after a
	site server has been installed. However, you may change the domain to which the
	server is installed.
	
	For additional information about how to move SMS Site Server to a new domain,
	please see the "Moving SMS Servers Between Domains" White Paper. To do so, visit
	the following Microsoft Web site:
	
	  http://www.microsoft.com/smserver/techinfo/administration/20/maintaining/dommov.asp
	
	To work around this issue, use one of the following options:
	
	- Before you change site server domain names or computer names, uninstall the
	  site from all clients, and then uninstall the site servers. After the site
	  has been removed, make any domain name or computer name changes, and then
	  reinstall SMS on the site server on which you have changed the domain or
	  computer name.
	
	  NOTE: This option requires the re-creation of packages, advertisements, custom
	  reports, and any other object that you created within the site that is not a
	  default component of a freshly installed site.
	
	  -or-
	
	- Promote one of the site servers to the role of primary domain controller
	  (PDC) for the domain. On another computer, install Microsoft Windows NT
	  Server 4.0 and create the new domain on it. Leave all SMS site servers in the
	  original domain. Establish a trust between the SMS site domain and the new
	  domain. Ensure that the SMS service account has rights in the new domain.
	
	
	Additional query words: prodsms move domain site
	
	======================================================================
	Keywords          : kbinterop kbsetup kbConfig kbServer kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
