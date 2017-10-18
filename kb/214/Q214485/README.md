---
layout: page
title: "Q214485: SMS: How Senders Interact w/ Inactive or Congested Sites"
permalink: kb/214/Q214485/
---

## Q214485: SMS: How Senders Interact w/ Inactive or Congested Sites

	Article: Q214485
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbSender kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In situations where bandwidth is on a normal basis completely consumed by
	Systems Management Server (SMS) Sender activity:
	
	If one or more Sites that a Sender is targeted to becomes inactive or unreachable
	for any reason, other Sites that are functional that are also targeted by the
	same Sender can be severely impacted causing their Jobs to Fail or go into
	Retrying. Typically, Senders configured to use RAS over a slow modem or using a
	congested WAN link is where this problem occurs. The reason for this behavior is
	when Jobs are targeted at Sites that are inactive or down, more bandwidth is
	consumed by these attempts at 'Retrying' the down Site. The Job, Scheduler, and
	Sender 'Retry' attempts to the inactive Site consume more time (bandwidth)
	retrying than if the original Job had completed successfully (assuming the
	original job was fairly small). This problem can be exaggerated by limiting the
	(schedule) availability of a senders outbox.
	
	MORE INFORMATION
	================
	
	Several aspects of this problem are detailed here:
	
	1. The RAS and SNA Senders will retry a specific scheduled Send request five
	  times and two times for the LAN Sender. The number of retries cannot be set
	  to zero.
	
	2. The Sender's RAS or LAN will retry for these five times at the interval
	  specified in the following registry location:
	
	  HKey_Local_Machine\Software\Microsoft\SMS\Components\SMS_Async_RAS_Sender... 
	
	  "Number of Retries" and "Retry Delay in Minutes"
	  Or also set in the Sender Manager as
	  Retry # Times every # Minutes
	
	  This is set by default to five Times for every one Minute.
	
	  NOTE: Setting this to a higher interval like every 20 Minutes may help in some
	  situations)
	
	3. Scheduler continues to "reschedule" Send Requests for a period of 7 days at
	  as often an interval as the sender calculates for it to be.
	
	4. Sender calculates this next Schedule time by using the following formula:
	
	  current time + the connection heartbeat timeout( 15 min default for RAS) +
	  the retry delay(1 min default)* the number of retries( 5 default) * 2.  = 
	  current time + 55 min<BR/>
	
	5. Scheduler processes this send request over again from the beginning, scanning
	  all outboxes for a sender that has the earliest chance to get the package
	  sent. If you are using just one address to each site services by only one
	  sender, the same sender gets the request resubmitted to it for sending to
	  begin sometime after 55 minutes from the current time.
	
	Additional query words: prodsms smssvr
	
	======================================================================
	Keywords          : kbsms120 kbSender kbSMSSender 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
