---
layout: page
title: "Q182502: XADM: Changes Made to Performance Monitor in Exchange 5.5"
permalink: /kb/182/Q182502/
---

## Q182502: XADM: Changes Made to Performance Monitor in Exchange 5.5

{% raw %}

	Article: Q182502
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage exc55
	Last Modified: 16-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article details the changes that were made to the Performance Monitor
	counters with the release of Exchange Server 5.5. The changes reflect only the
	modifications made since Exchange Server version 5.0.
	
	MORE INFORMATION
	================
	
	A new object was added: MSExchangeES- For Event Services.
	
	The MSExchangeDB object was removed. It was replaced with the Database Object
	which contains similar information (counters) with a few changes.
	
	Besides these two changes, all other modifications were made within the existing
	object's counters.
	
	The following is a list of the existing objects and the changes made to the
	counters list under these objects:
	
	1. MSExchange Internet Protocols
	  Counter Modifications:
	
	  a. Added IMAP4.
	
	2. MSExchangeISPub
	  Counter Modifications:
	
	  a. No NNTP or Newsfeed under this object.
	
	  b. Added Number of Messages Expired from Public Folders.
	
	  c. Added Replication Receive Queue Size.
	
	  d. Added Total Count of Recoverable Items.
	
	  e. Added Total Size of Recoverable Items.
	
	3. MSExchangeISPriv
	  Counter Modifications:
	
	  a. Added Total Count of Recoverable Items.
	
	  b. Added Total Size of Recoverable Items.
	
	  c. Added Local Deliveries.
	
	  d. Added Local Delivery Rate.
	
	  e. No longer has: Messages Sent via POP3, Number of Folders, or POP3 Messages
	     Sent.
	
	4. MSExchangeIS
	  Counter Modifications:
	
	  a. Added IMAP4, Newsfeed, and NNTP items to this object.
	
	  b. Added Number of Article Index Table Rows Expired.
	
	  c. Added POP3 Commands Issued.
	
	  d. Added POP3 Commands Issued Rate.
	
	  e. Added POP3 Messages Send.
	
	  f. Added POP3 Messages Sent.
	
	5. MSExchangeIMC
	  Counter Modifications:
	
	  a. Added Total Failed Conversions.
	
	  b. Added Total Inbound Kilobytes.
	
	  c. Added Total Inbound Recipients.
	
	  d. Added Total Kilobytes Queued.
	
	  e. Added Total Loops Detected.
	
	  f. Added Total Messages Queued.
	
	  g. Added Total Outbound Kilobytes.
	
	  h. Added Total Outbound Recipients.
	
	  i. Added Total Recipients Queued.
	
	  j. Added Total Successful Conversions.
	
	6. MSExchangeMTA
	  Counter Modifications:
	
	  a. Added Deferred Delivery Messages.
	
	  b. Added Inbound Bytes Total.
	
	  c. Added Inbound Messages Total.
	
	  d. Added Outbound Bytes Total.
	
	  e. Added Outbound Messages Total.
	
	  f. Added Total Failed Conversions.
	
	  g. Added Total Loops Detected.
	
	  h. Added Total Recipients Inbound.
	
	  i. Added Total Recipients Outbound.
	
	  j. Added Total Recipients Queued.
	
	  k. Added Total Successful Conversions.
	
	  l. Added Total Work Queue Bytes.
	
	7. MSExchangeMTA Connections
	  Counter Modifications:
	
	  a. Added Connector Index.
	
	  b. Added Cumulative Inbound Associations.
	
	  c. Added Cumulative Outbound Associations.
	
	  d. Added Current Inbound Associations.
	
	  e. Added Current Outbound Associations.
	
	  f. Added Failed Outbound Associations.
	
	  g. Added Inbound Bytes Total.
	
	  h. Added Inbound Messages Total.
	
	  i. Added Inbound Reject Reason.
	
	  j. Added Inbound Rejected Total.
	
	  k. Added Last Inbound Association.
	
	  l. Added Last Outbound Association.
	
	  m. Added Next Association Retry.
	
	  n. Added Oldest Message Queued.
	
	  o. Added Outbound Bytes Total.
	
	  p. Added Outbound Failure Reason.
	
	  q. Added Outbound Messages Total.
	
	Additional query words: perfmon
	
	======================================================================
	Keywords          : kbusage exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
