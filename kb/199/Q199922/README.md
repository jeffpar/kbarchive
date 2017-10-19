---
layout: page
title: "Q199922: SMS: Disabling Remote Control Security Munger on NT Clients"
permalink: /kb/199/Q199922/
---

## Q199922: SMS: Disabling Remote Control Security Munger on NT Clients

	Article: Q199922
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtshoot kbsms200 smsremtshoot kbRemoteProg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to disable the Remote Control Security Munger on
	computers running Windows NT that have been added as Systems Management Server
	clients. You can add a value to the client's registry that enables you to
	disable the Security Munger.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The Remote Control Security Munger determines the remote control security
	settings for a Systems Management Server client that belongs to more than one
	Systems Management Server site. In some situations, you might want to disable
	this feature on a computer running Windows NT.
	
	To disable the Security Munger, add the following value to the Systems Management
	Server client's registry:
	
	  HKLM/Software/Microsoft/SMS/Client/Client Components/Remote Control
	
	  Value: "UpdateEnabled" Type: REG_SZ Data: "NO" (this is not case sensitive)
	
	If this value is set to "NO", the Security Munger will exit without doing
	anything but will make an entry in the Remctrl.log noting that it was disabled.
	Note that as a result, the client will no longer respond to any changes in the
	administrator or client user interface. If this is the case, the user or
	administrator will have to alter the client registry to make any changes. If
	this registry entry is not present or the value is anything other than "NO", the
	Security Munger will operate as normal.
	
	The UpdateEnabled value is removed when the Remote Control component is
	uninstalled from the client, but not during Component Verify or Repair cycles or
	reinstallation of the client component.
	
	For systems that are locked down, the combined sites registry entry and the
	Remote Control registry entries must match. If they do not, the combined site
	entries take precedence over the Remote Control entries. This issue does not
	occur if you use the Remote Control tool in Control Panel to make the change.
	This information applies to the following registry key:
	
	  HKLM/Software/Microsoft/SMS/Client/Client Components/Remote Control/Combined
	  Site
	
	Additional query words: munge RC security values settings
	
	======================================================================
	Keywords          : kbtshoot kbsms200 smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
