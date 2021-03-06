---
layout: page
title: "Q227888: Importing a Key Backup File to Use in IIS 5.0"
permalink: /kb/227/Q227888/
---

## Q227888: Importing a Key Backup File to Use in IIS 5.0

{% raw %}

	Article: Q227888
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Internet Information Services (IIS) 5.0, you may want to
	import a backup key file from an older version of IIS. This allows you to use
	the SSL capabilities on your new server (and replace the old one).
	
	Note: If you are upgrading the server to IIS 5.0, this should be done for you
	automatically. You will not need to export or import the private or public key
	pair from the older server. It is always recommended, however, that you keep a
	backup for emergency purposes. For more information about backing up your key
	pairs, see the following article in the Microsoft Knowledge Base:
	
	  Q185195 How to Use Key and Certificate Backup/Restore Utility
	
	Before you go through this process, be sure that the common name (CN) of the
	computers is the same. In other words, if your user will be typing in
	https://www.widgets.microsoft.com (as an example), the common name on the
	certificate needs to reflect this (in other words, it would be
	www.widgets.microsoft.com). Typically, this should be the same name that the DNS
	server resolves as you server.
	
	MORE INFORMATION
	================
	
	To import a key file from another server, follow these steps:
	
	1. Open the Internet Services Manager.
	
	2. Select the Web site that you want to enable SSL on.
	
	3. Open the properties of that Web site and click the Directory Security tab.
	
	4. Under the Secure Communications section, click Server Certificate to open the
	  new Web Site Certificate Wizard.
	
	5. Click Next, and then choose the Import a certificate from a key manager
	  backup file option.
	
	6. Click Next.
	
	7. Input the location of your backup *.key file.
	
	8. Click Next.
	
	9. Enter the password that you set when you made the backup and click Next.
	
	10. Double-check the summary data to be sure this is the proper key you want to
	  import.
	
	11. Click Next.
	
	You can now use SSL on the new Web server using the key pairs that you backed up
	from the old server. Be sure to secure the old key file so no one has access.
	
	Additional query words: key manager ssl iis export
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
