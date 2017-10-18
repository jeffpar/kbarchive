---
layout: page
title: "Q266759: SMS: The Package Source Is Removed from Package Properties"
permalink: kb/266/Q266759/
---

## Q266759: SMS: The Package Source Is Removed from Package Properties

	Article: Q266759
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Systems Management Server (SMS) version 1.2, the package
	source for your packages may disappear which can prevent you from distributing
	packages. If you retype the package source data, your computer system
	periodically removes it.
	
	CAUSE
	=====
	
	This behavior is caused by Application Manager.
	
	WORKAROUND
	==========
	
	To work around this behavior, quit the SMS Executive service, and then rename
	the Appmgr.dll file to the Appmgr.old file. Then restart the SMS Executive
	service. While Application Manager is disabled, it cannot blank out the package
	source entry and you can investigate which address is causing the problem.
	
	To locate the problem address, perform either of the following two methods:
	
	- In SMS Administrator, view the site properties of the site that has the
	  problem, and then click Addresses. Examine the list of addresses and locate
	  the address of a child site which contains the primary site's server name.
	
	-or-
	
	- Open the Sitectrl.ct0 file from \Sms\Site.srv\Sitecfg.box, in Microsoft
	  Windows Notepad, and examine the list of addresses and locate the address of
	  a child site which contains the primary site's server name. For example:
	
	  Primary site: Smsprimary Sitecode: SCF
	  Secondary site: Smssecondary Sitecode: PJF
	
	The problem occurs when the address for the PJF site at the primary site is
	defined as '\\Smsprimary\SMS_SITE', instead of the correct setting of
	'\\Smssecondary\SMS_SITE'.
	When the problem address (or addresses) are corrected, you can quit the SMS
	Executive service, rename the Appmgr.old file to the Appmgr.dll file, and then
	restart the SMS Executive service.
	
	MORE INFORMATION
	================
	
	Application Manager replicates the package properties data from parent to
	child.
	
	A normal process for the packages created at the parent site involves Application
	Manager blanking the package source on a child site, and then replacing it with
	"Use Compressed Copy". The source is located on the parent, not the child. If an
	address is incorrectly configured, for example, the address to a child site
	lists the server name of the parent, Application Manager activates, causing it
	to blank the property on itself.
	
	Additional query words: prodsms blank disappear
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : :1.2,2.0
	Issue type        : kbprb
	
	=============================================================================
	
