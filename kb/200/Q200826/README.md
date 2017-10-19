---
layout: page
title: "Q200826: SMS: How to Temporarily Stop the Advertisement of Software"
permalink: /kb/200/Q200826/
---

## Q200826: SMS: How to Temporarily Stop the Advertisement of Software

	Article: Q200826
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbAdvertisement
	Last Modified: 22-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Systems Management Server 2.0, you can temporarily halt an advertisement
	from running or being run on the clients. To do this, perform the following
	steps:
	
	1. Open the Systems Management Server Administrator console.
	
	2. Go to the Packages folder and expand the package that contains the program
	  that was advertised to clients.
	
	3. Select the Programs folder and double-click the program you want to stop (on
	  the right pane). Then click the Advanced tab.
	
	4. Click to select the Disable This Program On Computers Where It Is Advertised
	  check box, which is located at the bottom of the Advanced tab.
	
	The program(s) that have been disabled on the server will not be displayed on the
	client by the Application Program Manager (APM) and will not be run.
	
	MORE INFORMATION
	================
	
	APM on the client, during its polling cycle, will check and update its list of
	advertisements from the server. If the "disable" switch is enabled for the
	program, APM will detect this at the next polling interval and remove that
	program from the advertised list.
	
	If you decide at a later time to re-enable the program, simply clear the Disable
	This Program On Computers Where It Is Advertised check box to cause APM to add
	the program back to the advertised list at the next polling interval.
	
	The option to disable the program only affects the list of advertised programs
	that are available to be run or are being run by APM. This includes shared
	applications. It does not affect programs that have already been installed on
	the client.
	
	Additional query words: prodsms swdist32 sw execute executing executed
	
	======================================================================
	Keywords          : kbAdvertisement 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
