---
layout: page
title: "Q198072: WD97: IPF Opening Word 97 File with Text Box, Square Wrap"
permalink: /kb/198/Q198072/
---

## Q198072: WD97: IPF Opening Word 97 File with Text Box, Square Wrap

{% raw %}

	Article: Q198072
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a Word 97 document in Word version 6.x or 7.x, the following error
	message appears:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click the Details button, the following error message appears:
	
	  Winword caused an invalid page fault in module <unknown> at
	  0000:<address>.
	
	CAUSE
	=====
	
	This problem occurs with documents that contain a text box or AutoShape that
	holds text and uses the square wrapping style.
	
	NOTE: In Word 97, to locate the square wrapping style, select the text box or
	AutoShape, click Text Box on the Format menu, and then click the Wrapping tab.
	
	RESOLUTION
	==========
	
	To resolve this problem, update to the most recent version of the Microsoft Word
	97-2000 Import Converter.
	
	For more information about obtaining the Word 97-2000 Import Converter, please
	see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q162214 WD: How to Obtain the Word 97-2000 Import Converter
	
	WORKAROUND
	==========
	
	To work around this problem, save the document from Word 97 using one of the
	following converters, and then open the document in Word 6.0 or 7.0:
	
	- Rich Text Format (*.rtf)
	
	- Word 6.0/95 (*.doc)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	
	MORE INFORMATION
	================
	
	When you import documents from Word 97 to earlier versions of Word using the
	import converters (Msword832.cnv for 32-bit Word and Msword8.cnv for 16-bit
	Word), a text box or shape that contains text and has had the square wrapping
	style applied is not converted correctly.
	
	Additional query words: SR1 release 8.0 8.00 corrupt gpf ipf ip fault hang crash halt abrupt quit hangs crashes halts abruptly quits
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
