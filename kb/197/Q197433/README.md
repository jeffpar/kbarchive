---
layout: page
title: "Q197433: WD97: Mail Merge Attached Envelope Does Not Create Bar Code"
permalink: /kb/197/Q197433/
---

## Q197433: WD97: Mail Merge Attached Envelope Does Not Create Bar Code

	Article: Q197433
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create mail merge form letter documents and attach envelopes, bar codes
	fail to print on your envelopes, even though you selected the Delivery Point Bar
	Code option.
	
	CAUSE
	=====
	
	By default, envelopes attached to mail merge form letter documents do not
	include POSTNET delivery-point bar codes. When you attach an envelope to an
	existing mail merge form letter, Word has no way to determine which field
	contains bar code information. The steps that allow determination of ZIP Code
	fields are bypassed. Although the Delivery Point Bar Code option is available
	under the Envelope options, Word cannot interpret the MERGEFIELD information
	into bar code information.
	
	WORKAROUND
	==========
	
	To create mail merge envelopes with bar codes, use the Envelopes option, or
	manually insert a BARCODE field above the existing envelope address fields on
	the envelope, as follows:
	
	1. Position the insertion point before the first character of the first line of
	  address fields. Press ENTER to create a blank line above the existing
	  address.
	
	2. Press CTRL+F9 to create field codes. Type the following within the field
	  codes.
	
	  NOTE: You may need to turn on the field codes to complete the entry below. To
	  do this, press ALT+F9. After you complete the entry, press ALT+F9 to turn the
	  field codes off, as in the following example:
	
	  {BARCODE "{Mergefield Address1}<P>
	  {Mergefield PostalCode}" \u \* mergeformat}
	
	  where Address1 is the field containing the street address or postal box
	  information, <P> represents a paragraph mark, and "PostalCode" is the
	  name of the field that contains the ZIP Code information.
	
	  Use the following example:
	
	  {BARCODE \u {mergefield zipcode} }
	
	  where zipcode is the mergefield that contains the postal code.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base.
	
	  Q144608 Error Message in Place of BARCODE Field
	
	Additional query words: FIM-A
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
