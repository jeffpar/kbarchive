---
layout: page
title: "Q184695: Readme Notes for Certificate Server Update"
permalink: /kb/184/Q184695/
---

## Q184695: Readme Notes for Certificate Server Update

{% raw %}

	Article: Q184695
	Product(s): Internet Information Server
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	Readme Notes for Certificate Server Update
	
	Highlights
	----------
	
	This update to Microsoft Certificate Server applies to version 1.0 as
	shipped with the Microsoft Windows NT Option Pack. The highlights of this
	update are as follows:
	
	- Teletex Encoding. Data encoded as teletex in a certificate request will be
	  encoded as teletex data in the certificate issued. Formerly, this data would
	  have been encoded as unicode in the certificate issued.
	
	- Serial Number. Serial numbers generated during certificate issuance will
	  always be positive. Formerly, these serial numbers were allowed to be
	  negative. While this was consistent with X.509, it caused problems for
	  certain restrictive mail clients.
	
	- Backup/Restore. Specific backup requests are now supported, specifically for
	  backing up keys and certificates. A Microsoft Knowledge Base article is
	  available describing the procedural aspects of using this capability.
	
	Be sure you are familiar with the release notes for the Certificate Server
	originally distributed with the Windows NT Option Pack. Also, be sure you
	get the following Microsoft Knowledge Base article on backup/restore of
	keys and certificates.
	
	  Q185195 : How to Use Key and Certificate Backup/Restore Utility
	
	You can also get additional information on the installation of certificate
	hierarchies for use with Microsoft Exchange Server from a white paper titled
	"Creating Certificate Hierarchies with Microsoft Certificate Server
	Version 1.0" that is available as a self-extracting .exe file (Hier3.exe)
	on the following Microsoft Web site:
	
	  http://support.microsoft.com/support/downloads/LNP279.asp
	
	Install Update
	--------------
	
	When you install or uninstall the Certificate Server, be sure to first
	stop all services with the potential to cause file-locking conflicts. With
	administrator privileges, you can enter the following commands at an MS-
	DOS prompt:
	
	  net stop iisadmin
	  net stop certsvc
	
	Follow the instructions displayed until both commands complete. You may
	then install the updated Certificate Server.
	
	If you are installing this update as an upgrade to a previously installed
	version 1.0 Certificate Server, applying this update requires an
	uninstall/reinstall of the Certificate Server. Values in the Certificate
	Server registry and database will not preserved. An option is available to
	preserve the keys of an existing certificate authority on reinstall.
	
	To Uninstall Certificate Server
	-------------------------------
	
	1. Change directory to the directory containing the files downloaded from the
	  Microsoft FTP site.
	
	2. Start the uninstall process by typing the following:
	
	   sysocmgr /i:certmast.inf /n
	
	3. Select Uninstall by clearing the Certificate Server option and clicking Next.
	
	To Reinstall Certificate Server (or install Certificate Server for the
	first time)
	----------------------------------------------------------------------------------
	
	1. Use the same directory and type the following:
	
	  sysocmgr /i:cermast.inf /n
	
	2. Select install by clicking the Certificate Server option and clicking Next.
	
	3. If you want to preserve the keys of your previous certificate authority,
	  click the Show Advanced Configuration box before you click Next.
	
	4. On the Advanced Configuration page, click the Use Existing Keys box and
	  highlight the name of the certificate authority to be preserved.
	
	5. Click Next and proceed with install.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : winnt:1.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
