---
layout: page
title: "Q262392: SMS: Network Discovery Returns FQDNs Instead of NetBIOS Names"
permalink: kb/262/Q262392/
---

## Q262392: SMS: Network Discovery Returns FQDNs Instead of NetBIOS Names

	Article: Q262392
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an environment with a Microsoft Windows 2000-based Dynamic Host Configuration
	Protocol (DHCP) server, Network Discovery may return fully qualified domain
	names (FQDNs) instead of NetBIOS names for the resources it discovers through
	DHCP. This could cause duplication of resources in the Systems Management Server
	(SMS) Administrator console.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version        Size   File name   Platform
	  ------------------------------------------------------------
	  05/12/00  3:42pm  2.0.1380.1161  112KB  Ad_adm.dll  Intel
	  05/12/00  3:42pm  2.0.1380.1161  190KB  Ad_adm.dll  Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	NOTE: Before you apply this hotfix, you must delete all resources that are
	reported as FQDNs. To do this, create a collection that is based on a query that
	lists all computers with FQDN NetBIOS names. For example, create a query similar
	to:
	
	  select NetbiosName from SMS_R_System where NetbiosName like
	  "%<domain.com>%"
	
	If you use this sample query, replace <domain.com> with your actual domain
	name.
	
	After you build the collection, use the Delete Special command to delete all of
	the resources.
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	How to Install the Hotfix
	-------------------------
	
	Using the Hotfix Installer:
	
	NOTE: This method is only for Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q262392.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q262392.exe and follow the directions in the wizard.
	
	Manual Installation:
	
	1. Log on to your site server using an account with administrative privileges.
	
	2. Quit the SMS Administrator console and stop all SMS services, including the
	  Windows Management service.
	
	3. Replace the Ad_adm.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version you
	  obtained from the hotfix.
	
	4. Restart all SMS services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
