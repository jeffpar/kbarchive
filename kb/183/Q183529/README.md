---
layout: page
title: "Q183529: XCLN: Schedule+ Free and Busy Connector Errors 1034 and 1047"
permalink: kb/183/Q183529/
---

## Q183529: XCLN: Schedule+ Free and Busy Connector Errors 1034 and 1047

	Article: Q183529
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error messages may appear in the Event Viewer on a Microsoft
	Windows NT Server computer with a Microsoft Exchange Server computer running the
	Free and Busy Connector service.
	
	  Event ID: 1047
	  Source: MSExchangeFB
	  Category: Error
	  
	  Unable to open the site folder <X.500 DN of site container>.
	  MAPI returns 80070005 due to last error code 0.
	  
	  Event ID: 1034
	  Source: MSExchangeFB
	  Category: Error
	  Unable to open or process <X.500 address to the Schedule+ Free Busy
	  folder>.
	
	CAUSE
	=====
	
	The above errors can be caused when there are multiple Exchange sites in
	untrusted Windows NT domains.
	
	WORKAROUND
	==========
	
	If the Exchange sites are in untrusted domains, you must create replicas for the
	Free and Busy folders in each site.
	
	To do this, do the following:
	
	1. In the Microsoft Exchange Administrator program, select the Exchange Server
	  computer that is producing the error.
	
	2. Select the Public Information Store object.
	
	3. On the File menu, select Properties.
	
	4. Click the Instances tab.
	
	5. Add the appropriate Schedule+ Free and Busy folders from the left list box to
	  the right.
	
	6. Click Apply and then click OK.
	
	After the folders are replicated to the other site, the above errors should no
	longer be seen in the application event log.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
