---
layout: page
title: "Q86160: PROFS: How to Increase Virtual Storage and Disk Space"
permalink: /kb/086/Q86160/
---

## Q86160: PROFS: How to Increase Virtual Storage and Disk Space

	Article: Q86160
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.2 
	-------------------------------------------------------------------------------
	
	The amount of virtual storage and disk space allocated to the Microsoft
	Mail gateway VM ID may have to be increased to handle larger messages and
	files. This is usually something that is handled by the VM administrator
	in charge of the gateway.
	
	Microsoft recommends at least 2 MB of virtual storage for the gateway VM
	ID. This can be increased to 3 MB, for example, by typing the following
	at the CMS prompt, then pressing ENTER:
	
	  " CP DEF STOR 3M" (without the quotation marks)
	
	
	After the command has completed, you must re-IPL CMS to have the change
	take effect.
	
	
	Only the VM administrator should increase disk space for the gateway
	disks.
	
	
	Additional query words: 3.20 pcmail profsvm virtual storage disk space
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320
	Version           : :3.2
	
	=============================================================================
	
