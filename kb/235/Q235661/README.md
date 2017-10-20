---
layout: page
title: "Q235661: WD97: Error Msg: &quot;Word cannot edit the Microsoft Excel Chart&quot;"
permalink: /kb/235/Q235661/
---

## Q235661: WD97: Error Msg: &quot;Word cannot edit the Microsoft Excel Chart&quot;

{% raw %}

	Article: Q235661
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbdtacode KbVBA
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you insert a Microsoft Excel Chart object into a Word 97 document and
	group it with an object such as a text box, the following error messages appear
	when you run a Visual Basic for Applications macro that uses the DoVerb method
	to open the Excel chart:
	
	  Word cannot edit the Microsoft Excel Chart
	
	  Run-time error "16389" Internal Error
	
	WORKAROUND
	==========
	
	Use the Open method instead of the DoVerb method to open the Excel object. For
	example, change the following code:
	
	  ActiveDocument.Shapes(1).GroupItems(1).OleFormat.DoVerb 2
	
	to
	
	  ActiveDocument.Shapes(1).GroupItems(1).OleFormat.Open
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	
	Additional query words: vba word97 wd97 oleformat doverb open object excel97 xl97
	
	======================================================================
	Keywords          : kbdta kbdtacode KbVBA 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
