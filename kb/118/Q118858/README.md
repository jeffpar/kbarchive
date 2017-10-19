---
layout: page
title: "Q118858: X400: Domain Defined Attribute Value to Reach SMTP"
permalink: /kb/118/Q118858/
---

## Q118858: X400: Domain Defined Attribute Value to Reach SMTP

	Article: Q118858
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The domain-defined attribute value (DDA value) should be used when a mail system
	requires address mapping to some component of the X.400 originator/recipient
	(O/R) name. In SMTP mail systems, the DDA value usually contains the SMTP
	address of the recipient. Since the @ character is illegal for X.400 O/R name
	values, you should enter the SMTP address this way:
	
	  DDA.Value=recipient(a)domain.com
	
	where the (a) character takes the place of the @ character.
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320 kbMailGatex400210
	Version           : MS-DOS:2.1,3.0,3.2
	
	=============================================================================
	
