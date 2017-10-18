---
layout: page
title: "Q325113: SMS: SMS 2.0 SP4 Fixes That May Require Manual Intervention"
permalink: kb/325/Q325113/
---

## Q325113: SMS: SMS 2.0 SP4 Fixes That May Require Manual Intervention

	Article: Q325113
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 02-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article list fixes that are included with Systems Management Server (SMS)
	2.0 Service Pack 4 (SP4) that may require that you complete additional steps
	after you install SP4.
	
	For additional information about how to install SP4, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q311457 SMS: How to Obtain and Install Systems Management Server 2.0 Service
	  Pack 4
	
	MORE INFORMATION
	================
	
	- With the following fix, you must make a registry modification to increase the
	  time-out:
	
	  Q271724 SMS May Time Out Attempting a PDC/BDC Resynchronization in a Large
	  Windows 2000 Active Directory Environment
	
	- With the following fix, you must manually assign user permissions:
	
	  Q278345 Competing Changes to SMSCliToknAcct& During Clisvc Startup
	
	- With the following fix, you must make a registry modification:
	
	  Q281107 SMS: Travel-Mode Clients May Lose Inventory or Not Run Advertisements
	  When Roaming
	
	- With the following fix, the problem is prevented in SP4, but you must make a
	  registry modification to recover clients:
	
	  Q289552 SMS: Hardware Inventory Agent Verification Cycle Causes SMS Client
	  Components to Hang
	
	- With the following fix, you must make a registry modification to turn on
	  logging:
	
	  Q293844 SMS: Troubleshooting "Outstanding Devices In Our Presence" When You
	  Run Network Discovery
	
	- With the following fix, the problem is prevented in SP4, but you must make a
	  registry modification to recover clients:
	
	  Q294939 SMS: Advertisement Does Not Run and Generates a "No More Local
	  Devices" Error Message
	
	- With the following fix, the problem is prevented in SP4, but you must make a
	  registry modification to recover clients:
	
	  Q315715 SMS: Cannot Reinstall Inventory Components on Windows XP
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200SP4
	Version           : :2.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
