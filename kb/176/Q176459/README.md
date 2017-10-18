---
layout: page
title: "Q176459: XADM: DirRep Bridgehead Errors Modifying Site Naming Contexts"
permalink: kb/176/Q176459/
---

## Q176459: XADM: DirRep Bridgehead Errors Modifying Site Naming Contexts

	Article: Q176459
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Microsoft Exchange Directory Replication Bridgehead Server may fail to update
	existing, or replicate in new, Microsoft Exchange Site naming contexts. For the
	Windows NT Server Event Viewer Application log signature of this problem, please
	see the MORE INFORMATION section of this article.
	
	CAUSE
	=====
	
	A jet database transaction was not backed out when a value needed to be moved to
	the long value table. Subsequently, when a new jet transaction was attempted,
	the jet error, -1109, would be returned, failing the new transaction attempt.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the following Microsoft Exchange Directory Service diagnostic logging
	enabled:
	
	    Replication = MAX
	    Internal Processing = Min
	
	the following 3 symptoms were noted:
	
	1. The Directory Replication Bridgehead server fails to add new replicas of
	  remote Sites, logging the following events:
	
	    1063
	    Internal event: The directory replication agent (DRA) was asked to
	    replicate naming context <site naming context> from directory
	
	    <EX:/o=<orgname>/ou=<sitename>/cn=Configuration/cn=Servers/cn=
	    <servername>/cn=Microsoft DSA with options <xxxxx> to another site.
	
	    1171***  <<<< these exception *specifics* indicate "THE" problem
	    Exception e0010004 has occured with parameters -1109 and 0 
	    (Internal ID 20a00f8). Please contact Microsoft Product Support 
	    Services for assistance.
	
	    1059
	    Internal error: The directory replication agent (DRA) call returned
	    error 22.
	
	    1117
	    The consistency checker failed to add a missing replica of naming
	    <site naming context> from directory
	
	    EX:/o=<orgname>/ou=<sitename>/cn=Configuration/cn=Servers/cn=<servername
	    >/cn=Microsoft DSA to directory <servername> with error 22. Run the
	    consistency checker on directories
	
	    EX:/o=<orgname>/ou=<sitename>/cn=Configuration/cn=Servers/cn=<servername
	    >/cn=Microsoft DSA and <servername>.
	
	2. Other Microsoft Exchange Servers within the Site may have stranded replicas
	  of one or more of these Sites, thus they request updates for these contexts
	  from the Bridgehead, which doesn't have copies of the object, resulting in
	  the following event log warnings on the Bridgehead server:
	
	    1070
	    Internal event: Directory <dsa-signature> <servername> asked the
	    directory replication agent (DRA) to get changes from naming context
	    <site naming context> starting at update sequence number (USN)
	    <xxxxxxx> with flags 360 and sensitivity 100.
	
	    1059
	    Internal error: The directory replication agent (DRA) call returned
	    error 6.
	
	3. The Microsoft Exchange Server Knowledge Consistency Checker (KCC) fails with
	  the generic KCC failure:
	
	  The knowledge consistency check did not correct directory inconsistencies. Be
	  sure the directory service is running, and then try again. If the error
	  recurs, try stopping the directory service and Administrator program and then
	  restarting them. To view details of the error, see the application event log
	  in the Windows NT Event Viewer on the Microsoft Exchange computer on which
	  you checked knowledge consistency.
	
	  Microsoft Exchange Administrator ID no: c1030b1e
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
