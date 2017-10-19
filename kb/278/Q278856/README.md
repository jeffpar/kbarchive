---
layout: page
title: "Q278856: SMS: Issues That Occur if a Site Contains Slow Links"
permalink: /kb/278/Q278856/
---

## Q278856: SMS: Issues That Occur if a Site Contains Slow Links

	Article: Q278856
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig kbServer kbsms200 kbNetTrace kbSender kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes issues that may occur if there are slow links in your
	site hierarchy.
	
	MORE INFORMATION
	================
	
	The following information is from the Microsoft Systems Management Server (SMS)
	Administrator's Guide:
	
	  The subnets you include in your site should be connected with reliable links
	  so that all resources (such as clients and site systems) in the site have a
	  fast connection to all other site resources. As a general rule, if two
	  subnets are separated by a slow link, do not include them both in the same
	  site.
	
	  When you plan your site hierarchy, consider the nature, speed, and capacity of
	  the connections between sites. Consider both the total network bandwidth (the
	  amount of data that can be transmitted across the network) and the available
	  network bandwidth (the amount of bandwidth that SMS can typically use). Make
	  sure that SMS has enough available network bandwidth to perform site
	  maintenance and other administrative functions efficiently.
	
	  Generally, computers that are connected by a slow local area network (LAN) or
	  wide area network (WAN) link should be placed in different sites. If you have
	  computers that are connected by a fast LAN, you can place these resources in
	  a single site or in different sites. Unless there are valid reasons for
	  placing them in different sites (such as capacity or management issues),
	  consider including all LAN-connected servers in the same site.
	
	If you do not follow these design recommendations for your site, your network can
	be negatively affected. The interaction of the site server, remote site systems,
	and client workstations can generate a high volume of network traffic. When
	these components are separated by slow links, this traffic can overwhelm the
	network.
	
	For example, issues can occur if a site server is located across a slow link from
	a client access point (CAP). Because the Inbox Manager thread of SMS_Executive
	is responsible for keeping the CAP up to date, it communicates once an hour (at
	a minimum) to ensure that the contents of the CAP match the current site
	settings. Slow links between the site server and the remote CAP can cause
	Transmission Control Protocol (TCP) data packets to be dropped during the
	transmission. This behavior causes the data to be retransmitted. If the
	connection speed is insufficient for all data destined for the CAP to be
	transmitted successfully, Inbox Manager continually attempts to update the CAP.
	When the scheduled update interval passes again, Inbox Manager attempts to
	update the CAP again until it succeeds. This behavior may generate an
	extraordinary amount of traffic over the network.
	
	To identify TCP retransmits, capture a network trace using the version of Network
	Monitor that is included with SMS. To do this, start Network Monitor and click
	the trace. On the Tools menu, click Experts, and then click TCP Retransmit. The
	network trace is analyzed and the number of retransmits, the original frame
	number and the final, successful frame is reported. If there is more than one
	retransmit instance reported in the capture, the site may have a slow link or a
	connectivity issue.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig kbServer kbsms200 kbNetTrace kbSender kbSMSSender 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
