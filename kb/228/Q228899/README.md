---
layout: page
title: "Q228899: SMS: How to Use Software Metering in Online Mode"
permalink: /kb/228/Q228899/
---

## Q228899: SMS: How to Use Software Metering in Online Mode

	Article: Q228899
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbServer kbsms200 kbsmsMeter
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Software Metering component of Microsoft Systems Management Server 2.0 (SMS)
	has two different modes of operation, Offline mode and Online mode. Offline mode
	is a passive operation that provides a list of applications that have been
	executed by participating clients. In Online mode, the Administrator configures
	the Software Metering server to restrict clients to specified applications by a
	limited user group, machine, or preset number of allowed licenses throughout all
	participating clients. For clients to work in Online mode, you need to set up
	several specific configurations. Please see the "More Information" section of
	this article to review these configurations.
	
	MORE INFORMATION
	================
	
	For clients to work in Online mode, it is essential to have a functional and
	healthy SMS 2.0 site with Software Metering installed. In addition, you should
	enable the server side of Software Metering prior to configuring the client
	component. For more information on this, refer to Chapter 14, "Metering
	Software" in the SMS Administrator's Guide.
	
	NOTE: Before enabling the "Force real-time license verification" option, the
	client is in an Online mode. This can cause a much higher use of network
	bandwidth, as well as client and server processor use.
	
	To Enable the Software Metering Client Agent and Configure the "Force Real-Time License Verification" Option:
	
	1. In the SMS Administrator Console, navigate to:
	
	  Systems Management Server\Site Database (site code - site name)\Site
	  Hierarchy\site code - site name\Site Settings\Client Agents
	
	2. On the General tab, click to select both of the following options:
	
	  "Enable software metering on clients"
	  "Force real-time license verification"
	
	3. Open the Software Metering Tool by navigating to:
	
	  Systems Management Server\Site Database (site code - site name)\Site
	  Hierarchy\Tools\Software Metering
	
	4. Right-click All Tasks, and then click Start Software Metering.
	
	  This starts the Software Metering configuration tool, which allows you to
	  designate the applications on which you would like to actively force
	  verification.
	
	5. In the Metered Software window, click the New icon.
	
	6. Use Create New, click the browse button (...) at the end of the Program Name
	  line, and then select an application to register.
	
	  This fills in the Product Name, Version, and other relevant fields used to
	  compare against the client-executed program in real time.
	
	7. Change the "Number of licenses" to the number you would like to run
	  simultaneously, and then click to select the "Enforce the license limits for
	  this product" box.
	
	NOTE: Some programs could be renamed from what is stored in the header of their
	executable file, so it may be necessary to add aliases for particular registered
	applications. You can do this after the application is registered by
	double-clicking the application to reopen it in the Licensed software window and
	using the Aliases button to add the other possible file names.
	
	For a more effective method of registering applications, use unlicensed
	information from the Summary->Unlicensed Programs window and simply
	right-click the executable file. Click Register and follow the steps listed
	above for setting and enforcing the number of licenses.
	
	To Set the Polling Interval:
	
	When you first register programs, it takes the amount of time specified in the
	polling intervals before the server updates its local cache. When the server
	updates its local cache, the license verification will then be enforced on the
	client. You can configure the polling intervals by navigating to this location:
	
	  Systems Management Server\Site Database (site code - site name)\Site
	  Hierarchy\site code - site name\Site Settings\Component
	  Configuration\Software Metering
	
	From there, click the Local tab, and then configure the Site management schedule.
	The default is every one hour.
	
	REFERENCES
	==========
	
	For more information, refer to Chapter 14, "Metering Software" in the SMS 2.0
	Administrators Guide and Chapter 22, "Software Metering Flowcharts" in the SMS
	2.0 Resource Guide.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbServer kbsms200 kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
