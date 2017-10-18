---
layout: page
title: "Q233217: WD97: Error Saving Document with Subdocuments in Word 6.0/95"
permalink: kb/233/Q233217/
---

## Q233217: WD97: Error Saving Document with Subdocuments in Word 6.0/95

	Article: Q233217
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you save a Word 97 document that contains subdocuments in Word 6.0/95
	format to a mapped Windows NT network drive, the following error message
	appears:
	
	  Invalid Page Fault in WRD6ex32.cnv
	
	WORKAROUND
	==========
	
	Use one of the following methods to work around this problem:
	
	Method 1
	--------
	
	Save the master document in either of the following formats:
	
	- Rich Text Format (RTF)
	
	-or-
	
	- Word 97 & 6.0/95 - RTF
	
	For round-trip conversions (from Word 97 to Word 6.0/95 and back to Word 97), it
	is recommended that you use the Word 97 & 6.0/95 RTF format, because more
	features are retained in this format.
	
	Method 2
	--------
	
	Save the master document to the mapped Windows NT network drive in Word 97 format
	and use the Word 97-2000 Import Converter to open the document.
	
	The Microsoft Word 97-2000 Import Converter is a free converter for importing
	Word 97 and 2000 documents into Microsoft Word for Windows 95, Microsoft Word
	6.0 for Windows, and Microsoft Word 6.0 for Windows NT.
	
	For information about obtaining the Microsoft Word 97-2000 Import Converter,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q162214 WD: How to Obtain the Word 97-2000 Import Converter
	
	Method 3
	--------
	
	Save the file to your hard disk and then copy the file to the mapped Windows NT
	network drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
