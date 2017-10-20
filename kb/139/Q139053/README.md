---
layout: page
title: "Q139053: BUG: Can't Set Some Background/Foreground Colors in InfoViewer"
permalink: /kb/139/Q139053/
---

## Q139053: BUG: Can't Set Some Background/Foreground Colors in InfoViewer

{% raw %}

	Article: Q139053
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbui kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.0, 4.1, 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.0, 4.1, 4.2 
	- Microsoft Visual C++, 32-bit Learning Edition, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is not possible to change the Jumps background, the Popup background, or the
	Query Highlight foreground colors for the Infoviewer Topic Window.
	
	To view this behavior for the Jumps background color, click Options on the Tools
	menu, and then click the Format tab. In the Category list, click the InfoViewer
	Topic Window, and in the Colors list, click Jumps. If you change the Background
	color to anything other than Automatic, you will see that the InfoViewer jump's
	background color does not change. If you reopen the Options dialog box and again
	click InfoViewer Topic Window and Jumps, you will see that the Background list
	box still says automatic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, please see the following article here in the
	Microsoft Knowledge Base:
	
	  Q168846 FIX: Text In InfoViewer Topic Window Disappears
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
