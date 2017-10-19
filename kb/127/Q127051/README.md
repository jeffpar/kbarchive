---
layout: page
title: "Q127051: Troubleshooting Problems Using RAS_SENDER with Remote Control"
permalink: /kb/127/Q127051/
---

## Q127051: Troubleshooting Problems Using RAS_SENDER with Remote Control

	Article: Q127051
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use RAS_SENDER with Remote Control in Microsoft Systems Management
	Server version 1.0, the RAS_SENDER fails.
	
	CAUSE
	=====
	
	The following problems may cause RAS_SENDER to fail:
	
	  
	
	- NetBEUI is not assigned to LANA 0
	
	- Error 642: One of your NetBIOS names is already registered on the remote
	  network. Name: <xxxxxx>
	
	  where <xxxxxx> identifies the duplicate NetBIOS name
	
	  
	
	- Error 629: The port was disconnected by the remote machine
	
	- Cannot find the remote client with Remote Control.
	
	RESOLUTION
	==========
	
	To correct the problems above, do the following:
	
	NetBEUI is not assigned to LANA 0
	---------------------------------
	
	Make sure that the NetBEUI protocol precedes Remote Access WAN Wrapper (NdisWan#)
	for the LANA number and the NetBEUI protocol is assigned to LANA 0. To get more
	information on changing the LANA number, query on the following words here in
	the Microsoft Knowledge Base:
	
	  LANA NUMBER SMS
	
	Error 642
	---------
	
	Verify that these two conditions do not exist:
	
	- A computer with the same computer name as yours is located on the remote LAN.
	
	- You are physically attached to the network that you are attempting to connect
	  to.
	
	Error 629
	---------
	
	Select Network in Control Panel, and remove Remote Access Service (RAS). Restart
	the computer and re-install RAS. This problem occurs when the NetBIOSGateway has
	not been enabled properly.
	
	Cannot Find The Remote Client With Remote Control
	-------------------------------------------------
	
	Select Network in Control Panel, and remove RAS. Restart the computer and
	re-install RAS. If you can not able find the remote client through RAS, you will
	not able to find the remote client with Remote Control. This problem occurs when
	the NetBIOSGateway has not been enabled.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smsconfig 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
