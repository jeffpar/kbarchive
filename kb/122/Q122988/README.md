---
layout: page
title: "Q122988: SMS Installation Incomplete with Missing Admin Drive Share"
permalink: /kb/122/Q122988/
---

## Q122988: SMS Installation Incomplete with Missing Admin Drive Share

	Article: Q122988
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Microsoft Systems Management Server on a drive that has the
	Administrator share deleted, Systems Management Server installs a site that has
	most subdirectories missing, and Setup does not report any errors. This results
	in an unusable Systems Management Server site.
	
	CAUSE
	=====
	
	Systems Management Server Setup and the Systems Management Server services
	require that the Administrative drive shares (such as C$) exist on a server
	before Systems Management Server is installed. These shares are installed by
	default by LAN Manager and Windows NT.
	
	Systems Management Server Setup begins installation and creates part of the
	directory structure on the target drive. Systems Management Server then starts
	the SMS_SITE_CONFIG_MANAGER service which completes the installation. The
	service attempts to look for the UNC name \\<server name>\<drive>$
	to complete the installation. If this share doesn't exist, an error will be
	reported in the SCMAN.LOG file but the site does not complete the installation.
	
	WORKAROUND
	==========
	
	The drive administrative shares will be recreated the next time you reboot of
	the system or you can manually recreate the shares. In order to recover from the
	damaged Systems Management Server installation, use Systems Management Server
	Setup to remove the site and then reinstall it from the beginning.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
