---
layout: page
title: "Q160347: WD97: Document Opened as Text Only If Already Open"
permalink: /kb/160/Q160347/
---

## Q160347: WD97: Document Opened as Text Only If Already Open

{% raw %}

	Article: Q160347
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:6.0,6.0a,6.0c,7.0,7.0a,97
	Operating System(s): 
	Keyword(s): kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word for Windows, versions 6.0, 6.0a, 6.0c 
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Word 97 document in Word 6.0 or 7.0 and the Word 97 document is
	currently open, the document opens as text only. The problem occurs even when
	the Word 97 converter is installed correctly.
	
	Note that when you open a document that is currently open, Word prompts you to
	make a copy of the document. If you choose OK, when either of the following
	conditions is true, the document contains garbled characters:
	
	- The Confirm Conversions option is not selected.
	
	  -or-
	
	- The Confirm Conversions option is selected, and you open the document using
	  the default (Text Only) converter in the Confirm Conversions dialog box.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the appropriate method:
	
	Method 1: Use the Word 97 Converter
	-----------------------------------
	
	1. On the Tools menu, click Options, and then click the General tab.
	
	2. Click to select the Confirm Conversion At Open check box, and then click OK.
	
	3. On the File menu, click Open, and then select the file you want. Click OK.
	
	4. In the Confirm Conversions dialog box, select the Word 97 converter, and then
	  click OK.
	
	Method 2: Close the Document in Word 97
	---------------------------------------
	
	Close the document in Word 97 before you open it in Word 6.0 or 7.0.
	
	For additional information about installing the Microsoft Word 97 converter,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q157091 WD97: How to Import Documents into an Earlier Version of Word
	
	
	MORE INFORMATION
	================
	
	When you attempt to open a document that is already open, Word displays the
	following message:
	
	  <document name> is being used by <user name>. Do you want to make
	  a copy?
	
	When you click OK, Word 6.0 or 7.0 incorrectly selects the Text Only converter
	instead of the Word 97 converter.
	
	Additional query words: 8.0 network
	
	======================================================================
	Keywords          : kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord700Search kbZNotKeyword2 kbWord600 kbWord600a kbWord600c kbWord700 kbWord700a
	Version           : WINDOWS:6.0,6.0a,6.0c,7.0,7.0a,97
	
	=============================================================================
	

{% endraw %}
