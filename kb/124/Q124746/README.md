---
layout: page
title: "Q124746: MHS: Err Msg: Invalid Address"
permalink: /kb/124/Q124746/
---

## Q124746: MHS: Err Msg: Invalid Address

	Article: Q124746
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may display when a reply is sent to an MHS mail user from
	Microsoft Mail in a non-delivery notice:
	
	  Invalid Address
	
	CAUSE
	=====
	
	This may happen if the original message received by the Microsoft Mail user
	through the MHS gateway includes a comment field in the header, that contains a
	comma. In this case, the comma is seen as an address delimiter. Everything
	before the comma is one address, and everything after the comma is a separate
	address.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name     Version
	  ---------------------
	  Outpost.exe   3.0.7
	
	This hotfix has been posted to the following Internet location as Mhsgy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to MHS
	version 3.0.
	
	MORE INFORMATION
	================
	
	The updated version of the OUTPOST.EXE file resolves this issue by not using
	commas inside comments as address delimiters.
	
	Additional query words: 3.00 3.0.5
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
