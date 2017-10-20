---
layout: page
title: "Q196843: WD97: Some Fields Update While Other Fields Don't Update"
permalink: /kb/196/Q196843/
---

## Q196843: WD97: Some Fields Update While Other Fields Don't Update

{% raw %}

	Article: Q196843
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Word always updates some fields automatically when a document is printed or
	previewed, even if the Update Fields option is turned off.
	
	The fields that update automatically are:
	
	  AUTONUM
	  AUTONUMLGL
	  AUTONUMOUT
	  BARCODE
	  EQ
	
	The fields that are updated when you print or preview your document are:
	
	  DATE
	  PAGE
	  PAGEREF (This field does not update when in the header or footer)
	  PRINTDATE (This field updates only when you print)
	  REF to a bookmark or any cross-reference
	  SECTIONPAGES
	  STYLEREF (This field can be locked to prevent updating)
	  SEQ
	
	
	CAUSE
	=====
	
	Certain fields are "Display" fields, which means they do not perform a
	calculation. These fields show a result even when you do not update them, and
	appear whether or not you print the document. These "Display" fields include
	AUTONUM, AUTONUMLGL, AUTONUMOUT, BARCODE, and EQ.
	
	Certain other fields are related to pagination and printing and will only update
	when you print or preview your document. These fields include DATE, PAGE,
	PAGEREF, PRINTDATE, REF, and SECTIONPAGES.
	
	MORE INFORMATION
	================
	
	There are other fields you may use in your document that are not updated when
	you print or preview your document unless the Update Fields option is selected
	on the Print tab.
	
	To ensure all fields are updated when you print or preview your document, follow
	these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the Print tab.
	
	3. Click to select the Update Fields check box, and then click OK.
	
	Additional query words: revisions 8.0 8.00
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
