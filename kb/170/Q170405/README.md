---
layout: page
title: "Q170405: WD97: Changes to Compatibility Options Not Saved in Normal.dot"
permalink: /kb/170/Q170405/
---

## Q170405: WD97: Changes to Compatibility Options Not Saved in Normal.dot

{% raw %}

	Article: Q170405
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbusage winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you modify the compatibility options in Microsoft Word 97 and then click
	Default to save the changes to the Normal.dot template, those changes are not
	applied to new documents based on the Normal.dot template.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, follow these steps:
	
	1. On the File menu, click Open.
	
	2. In the Files Of Type list, click Document Templates.
	
	3. Navigate to the User Template directory or to the directory where the
	  Normal.dot file is located. The default location is:
	
	  C:\Program Files\Microsoft Office\Templates
	
	4. Click the Normal.dot icon, and then click Open.
	
	5. On the Tools menu, click Options.
	
	6. On the Compatibility tab, make the necessary changes under Options and then
	  click OK.
	
	7. Save and close the Normal.dot template.
	
	The changes will be applied to new documents created with the Normal.dot
	template.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	The compatibility options allow you to customize the way Word converts certain
	types of formatting from other word processors.
	
	REFERENCES
	==========
	
	For more information about the compatibility options, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q166016 WD97: Word Compatibility Options Described
	
	For more information about the compatibility options, click the Office Assistant,
	type "compatibility options" (without the quotation marks), click Search, and
	then click the "Customize Word to work with converted documents" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: sr1 release1 8.0 8.00 wordperfect perfect
	
	======================================================================
	Keywords          : kbinterop kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
