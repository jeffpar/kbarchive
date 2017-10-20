---
layout: page
title: "Q142670: WD97: ConvertNumberToText Method Fails"
permalink: /kb/142/Q142670/
---

## Q142670: WD97: ConvertNumberToText Method Fails

{% raw %}

	Article: Q142670
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97 for Windows, when you use the Visual Basic for Applications
	ConvertNumberToText method to convert a numbered list to text, you may receive
	the following error message:
	
	  Runtime error 7: out of memory
	
	CAUSE
	=====
	
	This error occurs if some of the Listnum fields have a large number of digits.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Office 97 Service Release 2 (SR-2). For
	additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	This problem was corrected in Microsoft Word 2000.
	
	Additional query words: numbering converting text
	
	======================================================================
	Keywords          : kbdta kbconversion kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
