---
layout: page
title: "Q128614: SMS: INVDOS Fails with Large PKG_16.CFG File"
permalink: /kb/128/Q128614/
---

## Q128614: SMS: INVDOS Fails with Large PKG_16.CFG File

	Article: Q128614
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbAudit kbInventory kbMaintMan smsinv smsaudit smsmaintman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create too many inventory packages in the Microsoft Systems Management
	Administrator and you run SMSLS.BAT from a Windows for Workgroups 3.11 computer
	the following error message appears:
	
	  The inventory output file has not been created.
	  Run INVDOS /v to determine why.
	
	When you run INVDOS /V you will see something similar to the following:
	
	  Keyboard
	  Dma
	  Disks
	  DriveA
	  DriveB
	  DriveC
	  Volume
	  DriveD
	  Volume
	  ConventionalMemory
	  CMOSMemory
	  ExtendedMemory
	  XMSMemory
	  DPMIMemory
	  EMMMemory
	  MouseInfo
	  Video
	  Video Skipped
	  A hardware test failed
	
	  The inventory output file has not been created.
	  Run INVDOS /V to determine why.
	
	  Done.
	
	CAUSE
	=====
	
	This happens when the PKG_16.CFG file becomes to large.
	
	
	WORKAROUND
	==========
	
	Use the Audit utility to inventory software instead of creating packages solely
	for inventory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbenv kbnetwork kbAudit kbInventory kbMaintMan smsinv smsaudit smsmaintman 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
