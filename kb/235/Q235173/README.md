---
layout: page
title: "Q235173: SMS: Unable to Specify Drive Where Logon Points Are Installed"
permalink: /kb/235/Q235173/
---

## Q235173: SMS: Unable to Specify Drive Where Logon Points Are Installed

{% raw %}

	Article: Q235173
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200 kbsms200bug
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you install Systems Management Server (SMS) as a new site, or add a domain
	to your existing site while Microsoft Windows NT Networking Logon Discovery or
	Windows Networking client installation is enabled, SMS may have selected the
	NTFS partitions with the most amount of space as the location for the SMSLOGON
	folder and share on all domain controllers (DCs).
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Before you install SMS in a domain or add a domain to your existing site, you can
	control where the SMSLOGON folders are created by:
	
	1. On the DCs, make sure the drive where you want the SMSLOGON folder to be
	  created on is an NTFS volume.
	
	2. Create an SMSLOGON folder in the root folder of the NTFS volume.
	
	3. Share the folder with the following properties:
	
	   - Share name: SMSLOGON.
	
	   - Share Comments: SMS NT logon service.
	
	   - Administrators: Full Control permissions.
	
	   - Everyone: Read permissions.
	
	4. To specify logon points, open Discovery Methods in the SMS Administrator
	  console.
	
	5. Right-click Windows Networking Logon Discovery, and then click Properties. On
	  the General tab, click New.
	
	6. In the New Logon Point dialog box, specify the identity of the domain.
	
	NOTE: If your logon points already exist, use the following steps to move them:
	
	1. On the logon point, make a note of the permissions that are assigned to the
	  SMSLogon share.
	
	2. Stop all SMS services.
	
	3. Move the SMSLogon folder to an unshared drive, and then share the folder. To
	  share the folder, right-click the folder in Windows Explorer, and then click
	  Properties. On the Sharing tab, click Share this folder. In the Share name
	  box, type "SMSLogon" (without the quotation marks). In the Comments box, type
	  "SMS NT logon service" (without the quotation marks). Note that you must type
	  both the share name and comment exactly as they appear here.
	
	4. Manually reset the permissions on the new share to match the permissions of
	  the original share.
	
	   - Disable "inherit permissions" (do not copy-REMOVE) from the parent on the
	     smslogon folder (Properties, Security tab, Advanced)
	
	   - the smslogon Share NTFS perms: (only the following)
	
	   - (domain)\Administrators = Full control -to this folder and sub folders
	
	   - Everyone=read and execute -- to this folder and subfolders
	
	   - NTFS (Security tab) permissions on subfolders
	
	+-----------------------------------------------------------------------------+
	| Directory | Admins  | Everyone      | Inherit permissions(copy from parent) | 
	+-----------------------------------------------------------------------------+
	| Alpha     | Default | Remove        | Remove                                | 
	+-----------------------------------------------------------------------------+
	| Alpha.bin | Default | Default       |                                       | 
	+-----------------------------------------------------------------------------+
	| Config    | Default | Default       |                                       | 
	+-----------------------------------------------------------------------------+
	| DDR.box   | Default | Default+Write |                                       | 
	+-----------------------------------------------------------------------------+
	| Logs      | Default | Removed       | Removed                               | 
	+-----------------------------------------------------------------------------+
	| Sites     | Default | Default       |                                       | 
	+-----------------------------------------------------------------------------+
	| SitesCFG  | Default | Removed       | Removed                               | 
	+-----------------------------------------------------------------------------+
	| x86.bin   | Default | Default       |                                       | 
	+-----------------------------------------------------------------------------+
	
	5. If Logon Discovery is enabled, set the correct path to the new share in the
	  Registry by changing the drive letter in the ImagePath key to the new drive:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\
	  SMS_NT_Logon_Discovery_Agent
	
	6. Restart the SMS services
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you specify a Windows NT domain, SMS installs all DCs in the domain as
	logon points.
	
	If you specify domains that are not trusted by the site server's domain, the
	non-trusted domains must have a SMS Service account so that SMS will have
	access. This account must have the same name and password as the SMS Service
	account in the site server's domain.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
