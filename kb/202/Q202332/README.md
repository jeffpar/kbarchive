---
layout: page
title: "Q202332: SMS: How 'Assignments Not Mandatory Over Slow Links' Works"
permalink: /kb/202/Q202332/
---

## Q202332: SMS: How 'Assignments Not Mandatory Over Slow Links' Works

{% raw %}

	Article: Q202332
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200preSP3
	Last Modified: 22-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server (SMS) 2.0 Software Distribution assignments can be
	configured so they do not run when a client has a slow connection, and yet they
	are still mandatory over regular Local Area Network (LAN) connections. This
	article documents how this feature works.
	
	MORE INFORMATION
	================
	
	SMS 2.0 provides a way for clients using a slow connection to skip the running
	of advertisements that would usually run. This is accomplished by way of the
	"Assignments are not mandatory over slow links" advertisement check box.
	
	If the "Assignments are not mandatory over slow links" box is checked for an
	advertisement, the SMS Advertised Program Manager (SMSAPM32) client agent tests
	to see if the client is currently connected over a slow link, and if so, then it
	does not schedule a program to run based on any of the assignments listed in the
	advertisement. The check box only affects scheduling based on the assignments in
	the advertisement with the box checked. If there are other advertisements for
	the same program and the box is not checked in those other advertisements, the
	program will still be scheduled based on assignments in those other
	advertisements. The following example is a sample scenario of this:
	
	  
	
	  Sample Scenario:
	
	  Advert 1 for Program A has an assignment to run at 2:00 P.M. but is not
	  mandatory over slow links. If the client is connected over a slow link when
	  the Offer Data Providers (ODP) run to learn of this advertisement, SMSAPM32
	  will not schedule this program.
	
	  If, in addition to Advert 1, you create Advert 2, also for Program A, that has
	  an assignment to run at 5:00 P.M., and is mandatory over slow links, when the
	  client learns of both Advert 1 and Advert 2, and the client is connected over
	  a slow link, Program A will be scheduled to run at 5:00 P.M.
	
	  Assuming Advert 1 and Advert 2 above, if the client connects over a fast link
	  at 3:00 P.M. and the ODPs run to learn (or relearn) about the advertisements,
	  Program A will be scheduled to run immediately because Advert 1 makes Program
	  A mandatory over a fast link at 2:00 P.M. This is true regardless of whether
	  or not the client previously learned of these advertisements.
	
	  In the reverse case, where Advert 1 contains a 2:00 P.M. assignment that is
	  mandatory over slow links, and Advert 2 contains a 5:00 P.M. assignment that
	  is not mandatory over slow links, SMSAPM32 will effectively ignore the
	  assignments in Advert 2 and schedule Program A to run at 2:00 P.M. without
	  testing to see if the connection is over a slow link.
	
	
	To trigger SMSAPM32 to re-evaluate whether programs should be scheduled based on
	the speed of the network connection, use the refresh option in the Advertised
	Programs Monitor on the client. But you should note that SMSAPM32 caches the
	determination of whether or not the network is fast or slow for one minute. In
	other words, any requests to test the network speed within one minute of the
	last time it was actually tested will result in the same determination. This is
	to avoid extra network traffic when the ODPs find numerous programs that need to
	be scheduled.
	
	
	REFERENCES
	==========
	
	For additional information on slow network speed detection and known issues,
	please refer to the following Microsoft Knowledge Base Articles:
	
	  Q201836 SMSAPM32 Network Speed Detection on SMS2.0 NetWare Clients
	
	  Q235777 SMSAPM32 Perform Slow Link Detect All Mandatory Assignment
	
	  Q246974 Mandatory Assignments May Not Run If CAP Cannot Be Reached
	
	Additional query words: prodsms force run now RAS VPN
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
