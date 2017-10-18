---
layout: page
title: "Q87492: X400: Multiple Icons Sending Files Across X.400 Backbone"
permalink: kb/087/Q87492/
---

## Q87492: X400: Multiple Icons Sending Files Across X.400 Backbone

	Article: Q87492
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you receive multiple icons in version 3.0 of the Microsoft Mail Windows
	interface after sending one file from another Microsoft Mail postoffice across
	an X.400 backbone, you do not have encapsulation working.
	
	When a Microsoft Mail postoffice sends a message to another Microsoft Mail
	postoffice across an X.400 backbone, the message should be encapsulated. This
	will ensure there is no loss of features or functionality in the transportation
	of the message through the X.400 transport mechanism.
	
	Two factors must be checked to ensure encapsulation will work:
	
	- Do not use the "-re" command-line option for the X.400 gateway.
	
	- Ensure that the postoffice across the X.400 network is set up in the Admin
	  program's External Admin menu as being indirect through X.400.
	
	When a postoffice is defined as indirect through X.400 in the External Admin
	portion of the Admin program, the gateway knows the postoffice is a Microsoft
	Mail postoffice and applies encapsulation. If this is not defined in External
	Admin, the postoffice is thought to be another mail package within the X.400
	domain and encapsulation is not applied.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
