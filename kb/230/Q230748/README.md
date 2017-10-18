---
layout: page
title: "Q230748: XCON: NDR Because Exchange Site Directories Not Fully Replicated"
permalink: kb/230/Q230748/
---

## Q230748: XCON: NDR Because Exchange Site Directories Not Fully Replicated

	Article: Q230748
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In complex Exchange Server organizations, it is possible that site directories
	may not stay fully replicated with the most current directory information. The
	directory changes are caused by adding or deleting recipients, any objects in
	the directory, servers, and even Exchange Server sites themselves. Changing
	configurations on the server itself and any directory object also changes
	directory information. If directories in any Exchange Server organization are
	not up-to-date, it may cause unnecessary non-delivery reports (NDRs) to be
	generated and logged in the application log.
	
	MORE INFORMATION
	================
	
	The application event log may show a lot of Event IDs 290 with the similar
	description:
	
	  Event ID: 290
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X400 service
	
	  A non-delivery report (reason code unable-to-transfer and diagnostic code
	  unrecognized-OR-name) is being generated for message C=US;A=
	  ;P=ORG;L=MessageOriginatingServer. It was originally destined for
	  DN:/o=ORG/ou=SITE/ cn=RECIPIENTS/cn=Recepient (recipient number 1), and was
	  to be redirected to . [MTA DISP:RESULT 21 136] (12)
	
	To get rid of these unnecessary NDRs, run a complete directory replication cycle
	across all sites within the Exchange Server organization. To force replication
	with other sites:
	
	1. In the Configuration container, click Directory Replication. Go into the
	  properties of the Directory Replication Connector.
	
	2. Click the Sites tab.
	
	3. Select each of the other sites and click Request Now after each.
	
	To force replication from within the site:
	
	1. Go to the Site level, then select a server within the site.
	
	2. Open the properties of the Directory Service, and click Update Now.
	
	  NOTE: You may need to click "Refresh all items in the directory" when doing a
	  Request Now depending on how much the directories actually are out of sync.
	
	  CAUTION: Make sure NOT to run the directory update cycles in the middle of
	  your regular business hours as doing so can generate a lot of network traffic
	  depending on the size of the directories and the organization itself, and may
	  consume the available network bandwidth.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
