---
layout: page
title: "Q201836: SMS: SMSAPM32 Network Speed Detection on SMS2.0 NetWare Clients"
permalink: kb/201/Q201836/
---

## Q201836: SMS: SMSAPM32 Network Speed Detection on SMS2.0 NetWare Clients

	Article: Q201836
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMSAPM32 on a NetWare client may determine the network speed to be 0 bps as
	shown in the smsapm32.log on the client.
	
	This behavior is by design.
	
	CAUSE
	=====
	
	If Advertisement assignment properties under the Schedule tab are marked as
	"Assignments are not mandatory over slow links," the slow link detection code
	will run after checking for Microsoft RAS with Microsoft networking.
	
	It will interpret a speed of 0 as a failure to determine speed. Because it failed
	to determine the speed, it will then check to see if there are any RAS
	connections active on this client. If there are RAS connections active, the slow
	link detection code will return that this is a slow link and APM will not run
	the program designated by this advertisement.
	
	On NetWare systems it will find that the speed is 0. Because there are no RAS
	connections active on the client, the slow link detection code will return that
	this is a fast link and APM will run the program.
	
	WORKAROUND
	==========
	
	To stop the slow link detection code from running, open the ADMIN UI, and go
	into the properties of the ADVERTISEMENT. Go to the SCHEDULE tab and deselect
	the box for "Assignments are not mandatory over slow links."
	
	Once you have made this change, the Offer Manager will update files
	(.ins,.lkp,.ofr) on the CAP. The Inbox Manager will then update these files on
	the NetWare CAP.
	
	Once these files have been updated, the client should successfully execute the
	offer(s). Therefore, NetWare clients work exactly as do Windows networking
	clients except that on NetWare, the only test you do to determine whether the
	network is fast or slow is to check whether RAS connections are active.
	
	Additional query words: prodsms slwnt32 swdist32
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
