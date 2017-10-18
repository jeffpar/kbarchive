---
layout: page
title: "Q140396: SMS Sender Manager Tool"
permalink: kb/140/Q140396/
---

## Q140396: SMS Sender Manager Tool

	Article: Q140396
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbtool smssenders kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Systems Management Server 1.1 release includes additional sender and address
	based bandwidth control which can be configured in the registry. This feature
	allows a site to limit the link bandwidth consumed in sending packages to
	another site. This article describes the way the bandwidth control feature
	operates.
	
	MORE INFORMATION
	================
	
	There are three basic steps to configure this:
	
	1. The SNDRMGR.EXE tool should be copied from the PSSTOOLS directory on the SMS
	  CD-ROM into the SITE.SRV directory's platform specific directory. An icon can
	  also be created to point to this tool. Then, just run the tool, and specify
	  the machine name of the site server you which to configure.
	
	2. Enter the Address dialog by double-clicking the appropriate address listed in
	  the tool. There are several items to configure such as the estimated link
	  speed, and the percentage of the link to utilize. You do not have to use
	  address based controls, you may use a sender based control, but you should
	  still specify the estimated link speed at an address basis. The registry
	  location for this information is:
	
	     SOFTWARE\Microsoft\SMS\Sites\<site>\Addresses\<site>\<instance>\ 
	
	3. Enter the Sender dialog by double-clicking the appropriate sender listed in
	  the tool. If you wish to have the controls apply to the previously configured
	  address, indicate this under the "Rate Limits" settings, otherwise, select
	  "Use Sender Limits" and specify the rate on a per-hour basis. The registry
	  location for this information is:
	
	     SOFTWARE\Microsoft\SMS\Components\<sender>\ 
	
	The settings you have chosen are written into the sender and address portions of
	the registry to be used by the sender. You should begin to see bandwidth control
	messages appear in the sender log files to verify that the control is in effect.
	The sender will then only use as much of the estimated link speed as the rate
	percentage you have specified.
	
	Each time the sender sends a buffer of the package to the remote site, it
	recomputes a delay factor and indicates in the log file how long it will delay
	before sending the next buffer. In this way, the total average utilization of
	the link will be controlled, even though while sending a single buffer of the
	package will be sent at full speed.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbtool smssenders kbSMSSender 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
