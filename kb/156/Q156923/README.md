---
layout: page
title: "Q156923: PRB: IMPORT FROM Paradox Fails on Numeric Fields on Macintosh"
permalink: kb/156/Q156923/
---

## Q156923: PRB: IMPORT FROM Paradox Fails on Numeric Fields on Macintosh

	Article: Q156923
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The conversion of a Paradox database that contains numeric fields to Visual
	FoxPro for Macintosh 3.0b or FoxPro for Macintosh 2.6a results in a table with
	numeric fields that now contain zeros. The error "Numeric overflow, data was
	lost" may also appear. This behavior does not occur with Visual FoxPro for
	Windows.
	
	WORKAROUND
	==========
	
	Possible workarounds include the following:
	
	- Convert the numeric fields to character fields within Paradox, before
	  importing and then back to numeric fields in FoxPro once the import is
	  complete.
	
	- Save the Paradox table out to a delimited text file and then use the FoxPro
	  command APPEND FROM <filename> TYPE DELIMITED, to import the data into
	  a newly defined table structure in FoxPro.
	
	- Import the Paradox table into Visual FoxPro for Windows and then transport
	  the table over to the Macintosh.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Using a Paradox table, type the following command in FoxPro:
	
	  " IMPORT FROM <Paradox table name> TYPE PDOX " (without the quotation
	  marks)
	
	The numeric fields within the FoxPro table contain zeros and the error "Numeric
	overflow, data was lost" may occur. The Character fields import correctly.
	
	Additional query words: kbdse VFoxMac FoxMac
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	
