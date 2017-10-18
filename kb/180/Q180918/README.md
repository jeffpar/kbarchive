---
layout: page
title: "Q180918: SMSINST: Guidelines for Using SMS Installer"
permalink: kb/180/Q180918/
---

## Q180918: SMSINST: Guidelines for Using SMS Installer

	Article: Q180918
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 15-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server Installer is not appropriate for many system upgrades,
	configuration changes, and some application installations. This article provides
	information on tasks that are not appropriate uses for the Systems Management
	Server Installer.
	
	MORE INFORMATION
	================
	
	Microsoft Technical Support provides guidelines for Systems Management Server
	Installer use, repackaging, and installation, but can not provide installation
	scripts testing or installation validation. When using Systems Management Server
	Installer to deploy applications, adequate testing in a lab environment on
	hardware and software client configurations similar to that in your production
	environment is a prerequisite for a successful rollout.
	
	Guidelines
	----------
	
	Do not use Systems Management Server Installer to repackage operating system
	service packs or operating system upgrades.
	
	Do not use Systems Management Server Installer to upgrade or deploy Microsoft
	Internet Explorer 4.0 (IE 4.0). Internet Explorer provides an automated setup
	with custom configuration options instead. Refer to the IE 4.0 documentation for
	more details.
	
	Do not use Systems Management Server Installer to install applications that make
	changes on a computer hardware- or software-specific basis. An example of this
	would be network configuration changes that require bindings to be reviewed and
	re-applied after the desired changes are made. A programmatic method should be
	used instead.
	
	Avoid using Systems Management Server Installer to repackage an application if
	the original setup program makes any modifications to shared or network files.
	
	Do not use Systems Management Server Installer to add printers, change video
	display, or add/change/modify hardware or device drivers.
	
	For additional information about Systems Management Server Installer, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q168776 SMSINST: Using the Repackager Successfully
	
	  Q176990 SMSINST: Installer Does Not Install Printers
	
	For additional information about automating IE 4.0 setup via Systems Management
	Server, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q176323 SMS: How to Install Internet Explorer 4.0 with SMS
	
	  Q185339 SMS: How to Deploy Internet Explorer 4.0 to Windows NT
	
	For more information on automating network and printer configuration tasks, or
	installing or reconfiguring drivers programmatically, see the Microsoft Software
	Development Kit (SDK) and Driver Development Kit (DDK) documentation.
	
	Additional query words: prodsms rules guidelines guideline limits limitations limited extra above beyond boundary policy
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
