---
layout: page
title: "Q189809: SMS: Logon Server Default Permissions"
permalink: /kb/189/Q189809/
---

## Q189809: SMS: Logon Server Default Permissions

	Article: Q189809
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup kbAudit kbInventory smssetup smsinv smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the default permissions for Systems Management Server logon
	servers.
	
	MORE INFORMATION
	================
	
	The following table lists the Systems Management Server logon server default
	permissions.
	
	Share/Volume   Directory                  Permissions
	--------------------------------------------------------------------------
	
	SMS_SHRx                                  Administrator's local group
	                                         has Full Control; Everyone
	                                         has Read capabilities.
	
	              SMSroot                    Administrator's local group
	                                         has Full Control; Everyone
	                                         has Read capabilities.
	
	              Helper.srv and             Administrator's local group
	              all subdirectories         has Full Control.
	
	              LOGS                       Inherits permissions from
	                                         the drive where SMS is
	                                         installed. Defaults to
	                                         Everyone having Full Control.
	
	NetWare volume                            No change from existing.
	
	             SMS\Logon.srv(netware)      No change from existing.
	
	SMS_SHR                                   Administrator's local group
	                                         and Everyone have Full Control.
	
	             (Windows NT and LAN         Administrator's local group
	              Manager)                   has Full Control; Everyone
	                                         has Read capabilities.
	
	              Ccr.box                    Administrator's local group
	              Despooler.box              has Full Control; Everyone
	              Inventry.box               has Change capabilities.
	              Isvmif.box
	              Pcmpkg.src
	              Smsid\*.uid(file)
	
	              <platform>.bin             Administrator's local group
	              <platform>.bin\language    has full control; Everyone
	              Mstest                     has Read capabilities.
	              Pcmins.box
	              Invencfg.box
	              Appctl.src and all
	              subdirectories
	
	              Pcmpkg.src                 Administrator's local group
	                                         has Full Control; Everyone
	                                         has Change capabilities.
	                                         (Read and Write permissions
	                                         for Users and Guests can be
	                                         modified through the user
	                                         interface. By default, Users
	                                         and Guests have Read and
	                                         Write permissions.)
	
	Changing permissions on the SMS_SHR share or the directories that exist below the
	share is not recommended. Systems Management Server clients need the ability to
	create and rename files in most of these directories. If permissions are
	changed, Systems Management Server functionality may be adversely affected.
	
	REFERENCES
	==========
	
	For more information, refer to Chapter 1 of the Microsoft Systems Management
	Server Resource Guide.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbAudit kbInventory smssetup smsinv smsaudit 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
