---
layout: page
title: "Q198673: XADM: Single Instance Storage Ratio is Low"
permalink: /kb/198/Q198673/
---

## Q198673: XADM: Single Instance Storage Ratio is Low

{% raw %}

	Article: Q198673
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After an Exchange Server computer has been in service for a few months, you may
	notice that the Single Instance Storage Ratio is declining. The lower this
	number is, the less storage benefit you are receiving from single instance
	storage. If this number reaches 1, there is effectively no storage benefit being
	obtained from single instance storage.
	
	This is normal behavior and should be expected to occur. The longer a database
	has been in service, the lower you should expect the ratio to be. The factors
	discussed in this article apply not only to Exchange Server but to any messaging
	system that implements single instance storage.
	
	MORE INFORMATION
	================
	
	Single instance storage means that if the same message is sent to two users on
	the same server, that only one copy of the message is inserted in the database.
	Both users access the single instance of the message to read it. If this were
	the only message in the database, the single instance storage ratio for this
	database would be 2.
	
	If the message were sent to four people, two on your own server and two on
	another, only a single copy of the message would have to travel to the other
	server to deliver the message to both users.
	
	Thus, single instance storage ensures that only one copy of a message is needed
	on any given server, no matter how many users receive the message.
	
	You may monitor your storage ratio in Performance Monitor using the MSExchangeIS
	Private and MSExchangeIS Public objects Single Instance Ratio counter.
	
	There is a common misconception that the primary benefit of single instance
	storage is that it greatly reduces the storage space requirements for user data
	on a mail server. The truth is that its primary benefit is to greatly enhance
	delivery efficiency of messages sent to large distribution lists. Disk space
	savings from single instance storage are transient and drop off very quickly
	over time.
	
	For Example: Suppose a message is sent to 500 mailboxes on a single server. This
	gives you a huge initial ratio of 500. Within a day or so, 80 percent of the
	recipients are likely to have deleted the message, plunging your ratio to 100.
	Over the next week, probably 98 percent will delete it, cutting your ratio to
	10. Making the drop-off curve even steeper is the general rule that the larger
	the distribution list, the shorter the life of the message.
	
	The most important benefit of single instance storage in sending this message was
	that it got delivered with approximately one-five hundredth of the work that
	would otherwise have been necessary--one copy was generated instead of 500.
	Between servers, single instance storage greatly reduces the network bandwidth
	required to transmit a message with a large distribution list.
	
	Even a "mature" server is likely to have a storage ratio slightly greater than 1,
	but you should not count on single instance storage at all when doing capacity
	planning. In some cases, the ratio may even drop slightly below 1 because of
	miscellaneous database overhead.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
