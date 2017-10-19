---
layout: page
title: "Q85615: FAX: How Attachments Are Handled"
permalink: /kb/085/Q85615/
---

## Q85615: FAX: How Attachments Are Handled

	Article: Q85615
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The only file types that can be sent through the Microsoft Mail Gateway to Fax
	are ASCII textfiles, and black and white PCX or DCX files.
	
	If the attachment file is a text file or a PCX file, the MAKEDCX.EXE program is
	spawned and converts it into a DCX file.
	
	Once the attachment file has been converted, the entire mail item is converted
	into a TIFF file by calling DCX2TIF.EXE.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to Fax Administrator's Guide"
	
	
	Additional query words: 3.00 pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
