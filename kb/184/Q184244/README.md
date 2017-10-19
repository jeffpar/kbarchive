---
layout: page
title: "Q184244: XADM: Inbound Intersite Replication Fails With No Errors Logged"
permalink: /kb/184/Q184244/
---

## Q184244: XADM: Inbound Intersite Replication Fails With No Errors Logged

	Article: Q184244
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Intersite directory replication fails without any errors logged in the event
	log. This problem occurs even if the following recommended Directory Service
	logging levels are enabled on both bridgeheads:
	
	  Replication = MAX Internal Processing = MIN
	
	CAUSE
	=====
	
	An area of memory holding a "USN" value is prematurely freed. Afterwards, that
	area of memory is dereferenced again. If that memory has been overwritten, a
	comparison fails, which results in the replication update message returned from
	the target bridgehead being discarded as invalid.
	
	Under normal operating conditions, the likelihood that the memory address will be
	overwritten before it is dereferenced is miniscule. However, this failure is
	almost guaranteed when Windows NT runs under certain memory diagnostics and
	debugging modes. These modes are enabled by setting specific registry keys, and
	are typically only enabled during server debugging or software performance
	profiling.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	A normal intersite replication sequence involves the repetition of the
	following:
	
	a. The originating site submits (small) messages requesting updates for various
	  naming contexts from a target replication bridgehead.
	
	b. The target site responds with (larger) update messages to those contexts.
	
	c. The originating site receives these messages with updates and processes them.
	
	This sequence is repeated until there are no more updates to return for a given
	context.
	
	This can be traced and observed in the Application Event log by enabling the
	following Directory Service logging levels on both bridgeheads:
	
	  Replication = MAX Internal Processing = MIN
	
	When you make a directed request for an update (new and modified objects) of a
	remote site context from the originating bridgehead server to the target
	bridgehead responsible for providing that site context, the following is
	revealed in the Windows NT Application Event Log:
	
	NOTE: A separate update request message is generated from the originating
	bridgehead for the Site, the Site-configuration, and perhaps the Address Book
	Views contexts that will be updated.
	
	Part A: From the requesting site's log:
	
	Make request for site context.
	
	  2005
	  (...logged when forcing an update request via Admin UI)
	  Calling dra_replica_synchronize: NC = '/o=<orgname>/ou=<target-sitename-
	  of-update-request>', destination DS = '<local servername>', source DS =
	  '<target BH's DSA DN>', flags = 0x00004000.
	
	  1068
	  (...also logged for intrasite replication)
	  Internal event: The directory replication agent (DRA) was asked to
	  synchronize replica of /o=<orgname>/ou=<target-sitename-of-update-
	  request> from directory ID <target BH's DSA DN> with options 4000.
	
	  1100
	  During intersite replication, the directory replication agent (DRA)
	  successfully submitted a message with a length of 120 while requesting
	  updates in naming context /o=<orgname>/ou=<target-sitename- of-update-
	  request> from the directory at <target BH's DSA DN>.
	
	  ("length of xxx" for update requests can vary, but will be small)
	
	  1058
	  (...also logged for intrasite replication)
	  Internal event: The directory replication agent (DRA) call completed
	  successfully.
	
	  2021
	 (...logged when forcing an update request via Admin UI)
	  An update of the replica of naming context '/o=<orgname>/ou=<target-
	 sitename-of-update-request>' was requested on server '<local
	 servername>'.
	
	Make request for site-configuration context (same sequence again).
	
	  2005
	  Calling dra_replica_synchronize: NC = '/o=<orgname>/ou=<target-sitename-
	  of-update-request>/cn=Configuration', destination DS = 'local
	  servername>', source DS = '<target BH's DSA DN>', flags = 0x00004000.
	
	  1068
	  Internal event: The directory replication agent (DRA) was asked to
	  synchronize replica of...
	
	  1100
	  During intersite replication, the directory replication agent (DRA)
	  successfully submitted a message with a length of 144 while requesting
	  updates in naming context /o=<orgname>/ou=<target-sitename- of-update-
	  request>/cn=Configuration from the directory at <target BH's DSA DN>.
	
	  ("length of xxx" for update requests can vary, but will be small)
	
	  1058
	  Internal event: The directory replication agent (DRA) call completed
	  successfully.
	
	  2021
	  An update of the replica of naming context '/o=<orgname>/ou=<target-
	  sitename-of-update-request>/cn=Configuration' was requested on server
	  '<local servername>'.
	
	The MTA moves these request messages between originating and target bridgeheads.
	
	Part B: From the target site's log:
	
	The request is received at the target bridgehead.
	
	  1099
	  During intersite replication, the directory replication agent (DRA)
	  received a message with a length of 120 from the directory at
	  <originating BH's DSA DN>. Received an X.400 MTS Identifier of c=US;a=
	  ;p=Microsoft;l=RICKBOLLT166-980403162551Z-29.
	
	  ("Message length" is the same as what was logged in originator's 1100
	  event. MTS-ID established for possible message tracking.)
	
	  1070
	  Internal event: Directory <an Invocation-ID or servername> asked the
	  directory replication agent (DRA) to get changes from naming context
	  /o=<orgname>/ou=<target-sitename-of-update-request> starting at update
	  sequence number (USN) 97747 with flags a80 and sensitivity 100.
	
	  ("Starting USN" established. Expect objects under the requested context
	  with a "USN-Source" greater than this USN to be returned).
	
	Collect first 512 object changes under requested "site context" and compress
	message (if necessary).
	
	  1071
	  Internal event: The directory replication agent (DRA) got changes
	  returning 512 objects and entries up to update sequence number (USN)
	  <xxxxx>.
	
	  (USN numbers aren't necessarily sequential within a given context, so
	  the USN returned is not necessarily "USNrequested + 512").
	
	  1199
	  The replication message has been compressed from 454758 bytes to 102014
	  bytes.
	
	Submit reply to request for updates for site context.
	
	  1101
	  During intersite replication, the directory replication agent (DRA)
	  successfully submitted a message with a length of 102014 while updating
	  the replica of naming context /o=<orgname>/ou=<target- sitename-of-
	  update-request> on the directory at <originating BH's DSA DN>. Received
	  an X.400 MTS Identifier of c=US;a=
	  ;p=Microsoft;l=RICKBOL66980403113339CK004500.
	
	  ("Message length" will match the originator's 1100 event, below. MTS- ID
	  established for possible message tracking.)
	
	Receive request for updates site-configuration context (same sequence as above).
	
	  1099
	  During intersite replication, the directory replication agent (DRA)
	  received a message with a length of 144 from the directory at
	  <originating BH's DSA DN>. Received an X.400 MTS Identifier of c=US;a=
	  ;p=Microsoft;l=RICKBOLLT166-980403162552Z-30.
	
	  1070
	  Internal event: Directory <an Invocation-ID or servername> asked the
	  directory replication agent (DRA) to get changes from naming context
	  /o=<orgname>/ou=<target-sitename-of-update-request>/cn=Configuration
	  starting at update sequence number (USN) 97794 with flags a80 and
	  sensitivity 100.
	
	  ("Starting USN" established. Expect objects under the requested context
	  with a USN-Source greater than this USN to be returned).
	
	Collect first 512 object changes under requested "site-configuration context" and
	compress message (if necessary).
	
	  1071
	  Internal event: The directory replication agent (DRA) got changes
	  returning 512 objects and entries up to update sequence number (USN)
	  <xxxxx>.
	
	  1199
	  The replication message has been compressed from 580483 bytes to 210486
	  bytes.
	
	Submit reply to request for updates for site context.
	
	  1101
	  During intersite replication, the directory replication agent (DRA)
	  successfully submitted a message with a length of 210486 while updating
	  the replica of naming context /o=<orgname>/ou=<target- sitename-of-
	  update-request>/cn=Configuration on the directory at <originating BH's
	  DSA DN>. Received an X.400 MTS Identifier of c=US;a=
	  ;p=Microsoft;l=RICKBOL66980403113340CL004500.
	
	Larger update response messages returned by the target bridgehead. The MTA moves
	these response messages between target & originating bridgeheads.
	
	Part C: From the requesting site's log (later):
	
	The responses are received by the originating bridgehead.
	
	  1099
	  During intersite replication, the directory replication agent (DRA)
	  received a message with a length of 102014 from the directory at <target
	  BH's DSA DN>.
	
	  ("Message length" will match target site's compressed response message
	  size logged in its' 1100 event from Part B: above).
	
	  1099
	  During intersite replication, the directory replication agent (DRA)
	  received a message with a length of 210486 from the directory at <target
	  BH's DSA DN>.
	
	  ("Message length" will match target site's response message size logged
	  in its' 1100 event from Part B: above).
	
	End log examination.
	
	As mentioned above, this A, B, C sequence is repeated until there are no more
	updates to return regarding a given context. That is, after processing each
	batch of updates that are returned, the originating site will requests more
	updates for that context "starting with USN xxxxxx", but the target has no
	objects above that USN value to return.
	
	In the case of the error documented in this article, the signature behaviors are
	as follows:
	
	- The target site will return a large message to the originating site, but
	  after processing this update, no changes in the Directory appear.
	
	- The A, B, C sequence documented above will not continue.
	
	- The "Reps-From, Replica-Link, USN" value of the target-context (site or
	  site-configuration) will not increase.
	
	To examine the appropriate "Reps-From, Replica-Link, USN," perform the following
	steps:
	
	1. Launch Admin in raw mode against the originating server.
	
	2. Select the "<Orgname>\<Target-sitename>" or
	  "<Orgname>\<Target- sitename>\Configuration" object.
	
	3. From the File menu, select Raw Properties.
	
	4. In the Object Attributes box, highlight the "Reps-From" object attribute.
	
	5. Click the Viewer button, highlight "Replica Link," and then click OK.
	
	6. Note the USN value listed.
	
	Furthermore, if a subsequent request for an update to that same context is
	manually performed, it can be noted that the target site will again log the same
	USN value in the 1070 event (documented above in Part B). This confirms that the
	update response message isn't reaching the originating site, or that the
	originating site is not processing the message that is returned to it. If a 1099
	event is logged in the originating site (Part C, above), thus confirming that
	the update response has been received by the originating DRA, but no updates
	appear, it is likely that the message is being discarded.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
