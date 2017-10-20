---
layout: page
title: "Q123649: MHS: Err Msg: Outpost: Could Not Create Mail Item"
permalink: /kb/123/Q123649/
---

## Q123649: MHS: Err Msg: Outpost: Could Not Create Mail Item

{% raw %}

	Article: Q123649
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using version 3.x of Microsoft Mail Gateway to MHS, OUTPOST.EXE tries to deliver
	a message containing multiple file attachments sent from NetWare Global MHS
	(NGM) to the MSMail postoffice, the following errors may appear in the log file,
	MHSGATE.LOG:
	
	  Outpost: Could not create Microsoft Mail mail item
	  Outpost: General file I/O error
	
	The incoming file will remain in the \MHS\MAIL\GATES\MSMAIL\OUT directory.
	
	CAUSE
	=====
	
	The user was running VLM drivers on the workstation running GWDEMON.EXE.
	
	RESOLUTION
	==========
	
	Use NETX instead of the VLM drivers. You may also contact Novell about
	updates/fixes with the VLM drivers.
	
	MORE INFORMATION
	================
	
	NETX.EXE interacts with disk and memory differently than the VLM drivers.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
