---
layout: page
title: "Q168000: WD97: Dialog Box Text Truncated"
permalink: /kb/168/Q168000/
---

## Q168000: WD97: Dialog Box Text Truncated

{% raw %}

	Article: Q168000
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdisplay kbtshoot word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you access certain Word dialog boxes, descriptive text may be truncated.
	
	For example, the Set Language dialog box (on the Tools menu, point to Language,
	and click Set Language) may display the following text:
	
	  The speller and other proofing tools automatically use dictionaries of the
	  selected language, if
	
	The correct text should resemble the following:
	
	  The speller and other proofing tools automatically use dictionaries of the
	  selected language, if available.
	
	CAUSE
	=====
	
	This problem occurs if the Microsoft Windows Font Size display property is set
	to Large Fonts.
	
	RESOLUTION
	==========
	
	Use the following steps to change the Font Size display property to Small
	Fonts:
	
	1. Right-click the Microsoft Windows desktop.
	
	2. On the shortcut menu, click Properties.
	
	3. In the Display Properties dialog box, click the Settings tab.
	
	4. In the Font Size box, select Small Fonts.
	
	5. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following dialog boxes exhibit this behavior.
	
	About Microsoft Word
	--------------------
	
	On the Help menu, when you click About Microsoft Word, the About Microsoft Word
	copyright notice displays the following:
	
	  Warning: This computer program is protected by copyright law and
	  international treaties. Unauthorized reproduction or distribution of this
	  program, or any portion it, may result in severe civil and criminal
	  penalties, and will be prosecuted to the maximum
	
	The correct text should read
	
	  Warning: This computer program is protected by copyright law and
	  international treaties. Unauthorized reproduction or distribution of this
	  program, or any portion it, may result in severe civil and criminal
	  penalties, and will be prosecuted to the maximum extent possible under the
	  law.
	
	Set Language
	------------
	
	The Set Language dialog box (on the Tools menu, point to Language, and click Set
	Language) may display the following text:
	
	  The speller and other proofing tools automatically use dictionaries of the
	  selected language, if
	
	The correct text should resemble the following:
	
	  The speller and other proofing tools automatically use dictionaries of the
	  selected language, if available.
	
	Print
	-----
	
	The Print dialog box (on the File menu, click Print) displays the following:
	
	  Enter page numbers and/or page ranges separated by commas. For example,
	
	The correct text should read:
	
	  Enter page numbers and/or page ranges separated by commas. For example,
	  1,3,5-12
	
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbdisplay kbtshoot word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
