---
layout: page
title: "Q184766: XADM: Command-Line Export Fails on Custom Recipients"
permalink: /kb/184/Q184766/
---

## Q184766: XADM: Command-Line Export Fails on Custom Recipients

	Article: Q184766
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using the command-line export utility and an export options file to
	export custom recipients, you may get a CSV file that contains only header
	information, or a CSV file that contains unwanted mailbox information instead of
	or in addition to the custom recipient information.
	
	WORKAROUND
	==========
	
	This problem usually results from over-configuring the export options file. If
	you want only to export custom recipients from Exchange, then start by using the
	following format in the export options file:
	
	     [Export]
	     Basepoint=/o=<Org Name>/ou=<Site Name>/cn=Recipients
	     Container=<Recipients, or the subcontainer of Recipients that has the
	     Custom Recipients>
	     ExportObject=Remote <Remote exports Custom Recipients only>
	
	NOTE: note there should be no spaces between the object parameters
	
	Do not put an entry for HomeServer, because this will result in a CSV file that
	contains only headers and no other information. For more information about this,
	see Microsoft Knowledge Base article Q147854, "XADM: Custom Recipients DIR
	Export Creates Headers-Only CSV".
	
	For more information about command-line export and the export options file, see
	the online Help (Admin /?) and pages 476-482 in the Microsoft Exchange Server
	Administrator's Guide.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
