---
layout: page
title: "Q78209: An Overview of the Netlogon Service and How It Works"
permalink: /kb/078/Q78209/
---

## Q78209: An Overview of the Netlogon Service and How It Works

	Article: Q78209
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The following is a brief overview of the Netlogon service.
	
	MORE INFORMATION
	================
	
	The Netlogon service is executed to replicate the user accounts system (UAS)
	database between a primary domain controller (PDC), a backup domain controller
	(BDC), and member servers, and to validate logons to the logical domain the
	servers are in. Changes to the UAS are allowed only from the primary domain
	controller once the Netlogon service is started. Any attempt to modify the UAS
	on a backup domain controller or member server will result in an error stating
	that the UAS has been replicated and cannot be modified.
	
	When Netlogon is started on a BDC or a member server, a request will be made to
	do a full update of the UAS from the PDC. This can be avoided by using the
	/update:no parameter at Netlogon start-up time. Other switches include:
	
	  /PULSE        (60-3600) seconds         Defaults: 300
	  /RANDOMIZE    (5-120) seconds           Defaults:  30
	  /SCRIPTS      Path of Netlogon share
	
	BDCs and member servers look at the UPDATE parameter and SCRIPTS path, but PDCs
	ignore an /UPDATE switch.
	
	After the PDC has been started successfully, it will maintain a list of changes
	that have been made to the UAS in an internal list. At /PULSE time, the PDC will
	issue a PULSE onto the network in the form of a second class mailslot. This
	message will notify BDCs and members that changes have been made to the UAS.
	This is a second class mailslot; therefore, a BDC or member server may miss this
	call because its delivery is not guaranteed.
	
	When a BDC or member server receives this message, it will request changes from
	the PDC. BDCs and members use the /RANDOMIZE parameter to determine how long
	they should wait before requesting updates from the PDC. This prevents the PDC
	from receiving a flood of update requests from all the replicated systems. If a
	BDC or member has missed a large number of these changes, it may request a
	complete copy of the UAS from the PDC. This will ensure that the replicating
	server has all the changes that have been made. BDCs and members never poll the
	PDC for updates -- they always wait for update notices from the PDC.
	
	Note: Members and backups assume the PDC has crashed if they do not receive a
	pulse from the PDC within one minute of the time they expect a pulse. If this
	failure is confirmed, a message is posted in the error log reporting the PDC
	crash. After 60 minutes, the service will clear a flag and treat the next pulse
	as a new failure.
	
	Additional query words: 2.00 2.10 2.10a 2.20 netlogon
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
