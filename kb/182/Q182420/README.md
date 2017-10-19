---
layout: page
title: "Q182420: SMS: Site Code Should Not Be a WinNT Reserved Word"
permalink: /kb/182/Q182420/
---

## Q182420: SMS: Site Code Should Not Be a WinNT Reserved Word

	Article: Q182420
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2,2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you collect files as part of your inventory configuration and you use a
	Windows NT reserved word for your site code, Microsoft Systems Management Server
	may be unable to create the directory in which collected files will be placed.
	
	Systems Management Server creates a directory called:
	
	  <Sms Root>\Site.srv\Dataload.box\Files.col\xxx
	
	where xxx is the site code of the site where collected files are placed.
	
	If the site code which you are using is a reserved word, such as CON, Windows NT
	does not allow Systems Management Server to create this directory.
	
	CAUSE
	=====
	
	This behavior occurs because the operating system does not allow creation of a
	directory if that directory name is a reserved word.
	
	In File Manager or Windows NT Explorer, if you try to create a directory using a
	reserved word, Windows NT will display the following error message:
	
	  File Manager cannot create directory. The specified name is already used by a
	  file
	
	Windows NT reserved words that cannot be used as a site code include:
	
	  CON
	  PRN
	  AUX
	  NUL
	
	RESOLUTION
	==========
	
	If you need to collect files and are using a reserved word as a site code, you
	must reinstall your site and specify a new site code.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned in the STATUS section
	of this article, or wait for the next Systems Management Server service pack.
	The hotfix should have the following timestamps:
	
	  3/27/98    2:41pm        535,632 Base.dll (Intel)
	  3/27/98    2:39pm        750,352 Base.dll (Alpha)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0 and 1.1.
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2.
	
	
	A supported fix is now available for version 1.2, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	This is also true for the Systems Management Server 2.0 sites. The following
	error message is seen in the NT_LOGON.LOG:
	
	  Create Directory \\A1-PDC\SMSLOGON\Sites\PRN - Fail (5)
	
	The remainder of the SMSLOGON share and directory are created correctly. Only the
	<SiteCode> folder under the Sites folder fails to be created. While a
	hotfix does exist for Systems Management Server 1.2, there is no hotfix
	available at this time for Systems Management Server 2.0 to allow these site
	codes to be used. If this error is encountered, the only remedy is to remove and
	reinstall the site with a different site code.
	
	Additional query words: CON PRN AUX NUL reserved word collect prodsms
	
	======================================================================
	Keywords          : kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120 kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :1.0,1.1,1.2,2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
