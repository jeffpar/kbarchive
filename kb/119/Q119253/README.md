---
layout: page
title: "Q119253: ATT: ADPROC.EXE Allows AT&amp;Tand SMTP Gateways to Coexist"
permalink: kb/119/Q119253/
---

## Q119253: ATT: ADPROC.EXE Allows AT&amp;Tand SMTP Gateways to Coexist

	Article: Q119253
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to AT T, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	Version 1.0 of the Microsoft Mail Gateway to AT&T Mail cannot operate if
	the Microsoft Mail Gateway to SMTP is installed on the same postoffice.
	
	Version 1.1 of the Microsoft Mail Gateway to AT&T Mail, however, can
	coexist with the Microsoft Mail Gateway to SMTP on the same physical
	Microsoft Mail shared file system postoffice, if you use ADPROC.EXE--the
	SMTP address preprocessor executable provided by AT&T. This takes the
	place of SMTPGET.EXE for both the AT&T and the SMTP gateways.
	
	AT&T supports ADPROC.EXE. Their support center number is 1-800-624-5672.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateATT110 kbMailGateATT100
	Version           : :1.0,1.1
	
	=============================================================================
	
