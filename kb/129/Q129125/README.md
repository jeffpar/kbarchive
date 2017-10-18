---
layout: page
title: "Q129125: Macintosh Clients Generate Event ID 180 and MIF Files"
permalink: kb/129/Q129125/
---

## Q129125: Macintosh Clients Generate Event ID 180 and MIF Files

	Article: Q129125
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbInventory smsinv smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	At a Systems Management Server Site which contains Macintosh clients, Event ID
	180 may be frequently written to the system log and several .MIF files may be
	created, along with corresponding events in the Windows NT and Systems
	Management Server Event Viewers. The Windows NT Event Viewer application Log and
	SMS Event Viewer messages have the following syntax:
	
	     Information from module: SMS_INVENTORY_DATA_LOADER.
	
	  Operation:   Validation
	  Object:      MIF
	  Object name: SMS
	
	A new machine is being entered into the database. Some of the identification
	attributes for the machine being added overlap with another machine in the
	database.
	
	  Current Machine:
	  <SMSID = LAM00002, SMSLocation = LAM|LAMWORLD|, NetCardID =
	  08:00:07:B4:AD:65>
	
	  Overlapping Machine:
	  <SMSID = LAM0000L, SMSLocation = LAM|LAMWORLD|, NetCardID =
	  08:00:07:B4:AD:90>
	
	  MachineName = LAMJAM
	  SiteCode = LAM
	  Component = SMS_INVENTORY_DATA_LOADER
	
	CAUSE
	=====
	
	Microsoft Systems Management Server checks the inventory .MIF files from each
	Macintosh client for a unique SMSLocation attribute (no other client in the
	Systems Management Server Database has the same SMSLocation). The SMSLocation
	attribute is a concatenation of the client's Systems Management Server Site
	code, Domain, and Name attributes. If Systems Management Server determines that
	an inventory .MIF file contains an SMSLocation attribute that is not unique,
	Systems Management Server generates a Windows NT Event and a Systems Management
	Server Event .MIF file for each machine in the Systems Management Server
	database that has the same SMSLocation.
	
	When the Systems Management Server Macintosh Inventory Agent determines that a
	Macintosh client does not have a Macintosh Name defined in the Macintosh Sharing
	Setup, the inventory leaves the Systems Management Server Name attribute blank.
	Therefore, when multiple Macintosh machines reside in the same site/domain
	combination have no Macintosh names, their SMSLocation is not unique. This
	generates Event Viewer messages and Event MIF files.
	
	RESOLUTION
	==========
	
	To workaround this problem, define a unique Macintosh name for each Macintosh
	client. The Macintosh computer name is created by running the Sharing Setup
	application in the Macintosh System Folder's Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbInventory smsinv smsdatabase 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
