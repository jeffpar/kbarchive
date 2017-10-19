---
layout: page
title: "Q151638: BUG: RECO Is Unrecognized Phrase on VALIDATE DATABASE Command"
permalink: /kb/151/Q151638/
---

## Q151638: BUG: RECO Is Unrecognized Phrase on VALIDATE DATABASE Command

	Article: Q151638
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the VALIDATE DATABASE RECO command is issued, the following error occurs:
	
	  Command contains unrecognized phrase/keyword
	
	WORKAROUND
	==========
	
	Use an extra letter on the RECOVER clause of the VALIDATE DATABASE command or
	spell out the entire command. The following examples will work:
	
	      "VALI DATA RECOV"
	
	  - or -
	
	      "VALIDATE DATABASE RECOVER"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The VALIDATE DATABASE command ensures that the locations of tables and indexes
	in the current database are correct. The RECOVER clause displays a dialog
	allowing the issuer to locate tables and indexes that are not in the locations
	contained in the database.
	
	Many commands in Visual FoxPro can be abbreviated to just four letters. There are
	some exceptions when the first four letters of two or more commands are the
	same. The VALIDATE DATABASE RECOVER command is not an exception to this
	abbreviation feature in Visual FoxPro for Windows.
	
	Steps to Reproduce Problem
	--------------------------
	
	- Issue the following commands in the Command window:
	
	     "OPEN DATABASE HOME()+"samples:data:testdata"
	     VALI DATA RECO"
	
	- Note that you receive the following error message:
	
	  Command contains unrecognized phrase/keyword
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
