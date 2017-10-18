---
layout: page
title: "Q215117: SMS: Long File Names Foil Packages Sent to NetWare Points"
permalink: kb/215/Q215117/
---

## Q215117: SMS: Long File Names Foil Packages Sent to NetWare Points

	Article: Q215117
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Packages containing long file names fail to be distributed to Novell NetWare
	distribution points that have not been enabled to handle long file names. The
	status message from Systems Management Server Distribution Manager displays the
	description of status message 2328 and the following hint:
	
	  "Solution: In the SMS Administrator console, verify that SMS Distribution
	  Manager has the necessary rights to copy the package to the distribution
	  point. Also, verify that there is enough free disk space for the destination
	  distribution point to store the package."
	
	The Distmgr.log file shows the error (Win32 error 123) generated when an attempt
	is made to distribute the package containing a long file name. This log is found
	on the site server in the <SMS installation drive>\Sms\Logs directory if
	the SMS_Distribution_Manager thread was enabled to log activities.
	
	NOTE: The entire package can fail to be distributed because of even one too long
	file name.
	
	CAUSE
	=====
	
	The NetWare volume configured to be a distribution point for Systems Management
	Server was not set up to support long file names. Additional name space support
	must be added to the NetWare volume.
	
	WORKAROUND
	==========
	
	Before installing a NetWare server as a Systems Management Server 2.0
	distribution point, ensure that long file name support has been enabled for the
	volume designated as a distribution point.
	
	For information about how to add the long file name space for NetWare 4.11
	servers, see Novell Technical Information Document 2934097: Adding Long Filename
	Space to Netware 4.11.
	
	For information on adding the OS2 name space for 3.x servers, see Novell
	Technical Information Document 2929574: Long Filename Support on NW 3.x, 4.x,
	& 5.x.
	
	Novell technical documents are available at the following Web site:
	http:\\support.novell.com.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodsms netware nw distribution server dist swdist32
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
