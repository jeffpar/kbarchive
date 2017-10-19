---
layout: page
title: "Q153573: If Data Loader Loses Its Link to SQL, Good MIFs May Be Rejected"
permalink: /kb/153/Q153573/
---

## Q153573: If Data Loader Loses Its Link to SQL, Good MIFs May Be Rejected

	Article: Q153573
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If the Inventory Data Loader process loses its connection to SQL, it is possible
	that the MIF that the Inventory Data Loader was processing might be treated as a
	BADMIF and consequently not be processed; the MIF will instead be placed in the
	BADMIF subdirectory. Once the SQL connection is re- established, the affected
	MIF can be moved back to the Deltamif.col directory and subsequently be
	processed.
	
	The following is a sample from the Inventory Data Loader log file:
	
	  Waiting for a MIF...
	  finished processing current machine.
	  Cannot process MIF 00000000.MIF, moving it to BADMIFS
	  finished processing current machine.
	  SQL problem detected, terminating the thread.
	  SQL problem detected, terminating UMF processing thread.
	  Processing a machine...
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	Additional query words: prodsms 1.20 mif inventory data loader
	
	======================================================================
	Keywords          : smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
