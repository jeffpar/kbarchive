---
layout: page
title: "Q130381: MHS: Err Msg: Inpost General I/O"
permalink: kb/130/Q130381/
---

## Q130381: MHS: Err Msg: Inpost General I/O

	Article: Q130381
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
	
	Occasionally a non-delivery notification will not leave the MHS queue and will
	not be moved to the MHS directories. The following error may also appear in the
	MHSGATE.LOG file:
	
	  INPOST General I/O
	
	CAUSE
	=====
	
	The buffer used to read in the TEXT FIPS field was not large enough.
	
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
	
	  File Name    Version
	  --------------------
	  Inpost.exe   3.0.9
	
	This hotfix has been posted to the following Internet location as Mhsgy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	WORKAROUND
	==========
	
	Change the buffer to allow a maximum address size of 255 characters. For
	example, if it was previously defined as 84, set it to 259.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to MHS
	version 3.0.
	
	Additional query words: 3.00 stuck message
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
