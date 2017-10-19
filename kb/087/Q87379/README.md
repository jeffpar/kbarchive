---
layout: page
title: "Q87379: PC DB: Description of an .ATT File"
permalink: /kb/087/Q87379/
---

## Q87379: PC DB: Description of an .ATT File

	Article: Q87379
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An .ATT file is the method by which the Microsoft Mail system stores attachment
	files. The .ATT files are accessed by using pointers previously stored in an
	.MAI file. An attachment file can be any valid MS-DOS file of any size.
	
	A single .MAI file can reference several attachments; however, a single
	attachment file cannot be referenced more than once. Attachment files are fully
	encrypted.
	
	MORE INFORMATION
	================
	
	Below is a brief description of the mail message fields.
	
	A mail file is composed of fields. Each field is composed of a field type, field
	length, and data. Fields can be either as specified in FIPS PUB 98 or
	vendor-defined fields. A vendor-defined field is a field that can be defined for
	your own purposes. The Mail system uses several vendor-defined fields.
	
	The following table specifies the fields that a mail message is composed of and
	the order that these fields generally appear in a mail message.
	
	  Field Name        Field Type
	  ---------------------------------
	  Message format    Vendor-defined
	  From              Vendor-defined
	  To                Standard
	  Cc                Standard
	  Date              Standard
	  Priority          Standard
	  Subject           Standard
	  Attachments       Vendor-defined
	  Text              Standard
	
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	
