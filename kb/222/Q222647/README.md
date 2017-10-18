---
layout: page
title: "Q222647: XADM: Extended Characters Cause Directory Replication to Break"
permalink: kb/222/Q222647/
---

## Q222647: XADM: Extended Characters Cause Directory Replication to Break

	Article: Q222647
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Lightweight Directory Access Protocol (LDAP) commands by means of
	an LDAP client to add mailboxes into Exchange Server, if any attributes of the
	object being added use extended characters (for example, in the Distinguished
	Name and Relative Distinguished Name), intersite replication will stop working.
	
	This will be logged as follows in the event logs at the time the knowledge
	consistency check (KCC) runs:
	
	  Event ID: 1171
	  Description: Exception e0010002 has occurred with parameters 9 and 2 (Internal
	  ID 3190039). Contact Microsoft Technical Support for assistance.
	
	The other noted effect is that this added object cannot be deleted from the
	directory using the Exchange Server Administrator program, the error message
	being:
	
	  The object cannot be found in the directory.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Directory
	
	+--------------------------+
	| File name   | Version    | 
	+--------------------------+
	| Dsamain.exe | 5.5.2530.0 | 
	+--------------------------+
	
	
	To remove the bad data, delete the offending objects, then set the Exchange
	Server Garbage Collection Interval to "Every 6 hours," and Tombstone Lifetime to
	"2 days," which is the minimum time you can set it for. Then wait two days.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: LDAP EXTENDED INTERSITE REPLICATION
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
