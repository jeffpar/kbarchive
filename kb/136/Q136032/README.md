---
layout: page
title: "Q136032: Systems Management Server Sender Packet Size Computation"
permalink: kb/136/Q136032/
---

## Q136032: Systems Management Server Sender Packet Size Computation

	Article: Q136032
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smssenders kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Sender is designed to dynamically compute a packet size based on link speed
	when sending packages. It begins with a 1024 byte packet and records the time to
	transmit. Based on this time, the sender increases or decreases the packet size
	as necessary within the range of 1024 to 262144 bytes.
	
	However, there is a range of speeds where the Sender does not adjust packet size
	correctly, forcing the maximum packet size on a link that is too slow.
	
	CAUSE
	=====
	
	The Sender incorrectly computes the packet size.
	
	
	NOTE: In many WAN environments 56k bit to 256k bit links are common. Some WANs
	have links below 38k bits per second, such as when using modems for a RAS Sender
	address.
	
	The following table lists link speed and the corresponding packet size:
	
	  Link Speed   Byte Buffer
	  (bits/sec)   Packet Size
	  ----------   -----------
	  262144       262144
	  6552         245700
	  6112         229200
	  5672         212700
	  5232         196200
	  4792         179700
	  4352         163200
	  3912         146700
	  3472         130200
	  3032         113700
	  2592         97200
	  2152         80700
	  1712         64200
	  1272         47700
	  832          31200
	  424          15900
	  216          8100
	  104          3900
	  48           1800
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smssenders kbSMSSender 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
