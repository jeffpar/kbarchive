---
layout: page
title: "Q141835: FIX: Visual FoxPro Doesn't Save File as Expected"
permalink: /kb/141/Q141835/
---

## Q141835: FIX: Visual FoxPro Doesn't Save File as Expected

{% raw %}

	Article: Q141835
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under some circumstances, Visual FoxPro will allow you to save a form when it
	shouldn't. For example, if you create a form that contains an OLE Container
	object, and then launch an editing session of the contents of that object, you
	should not be allowed to save the form until the editing session is closed.
	
	WORKAROUND
	==========
	
	Close all OLE object editing sessions before saving your form
	
	-or-
	
	Upgrade to Visual FoxPro 3.0b.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in FoxPro version 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open or switch to Microsoft Visual FoxPro.
	
	2. Type MODIFY FORM TEST in the Command window.
	
	3. Place an OLE Container Control on the form, this will invoke the Insert
	  Object dialog box. Click Create New, select Microsoft Word 6.0 Document, and
	  then click OK.
	
	4. When Word is in-place active, on the Insert menu, click Object. This invokes
	  the Object dialog box. Select Microsoft Excel Worksheet, and click OK.
	
	5. After Microsoft Excel comes up, on the File menu, click Open to invoke the
	  Open dialog box.
	
	6. Switch back (ALT+TAB) to Visual FoxPro, and on the File menu, click Save.
	  Note that Visual FoxPro appears to save the form even though there are
	  objects on it that are currently being edited.
	
	When these steps are followed in Microsoft Visual FoxPro 3.0b, the following
	message is displayed:
	
	  This action cannot be completed because the other application is busy. Choose
	  'Switch To' to activate the busy application and correct the problem.
	
	Additional query words: VFoxWin buglist3.00 fixlist3.00b ole object
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
