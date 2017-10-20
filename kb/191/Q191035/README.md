---
layout: page
title: "Q191035: BUG: Changes to WebClass Templates Are Not Always Detected"
permalink: /kb/191/Q191035/
---

## Q191035: BUG: Changes to WebClass Templates Are Not Always Detected

{% raw %}

	Article: Q191035
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbhtml kbide kbInternet kbVBp kbVBp600bug kbWebClasses kbDSupport
	Last Modified: 04-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When working on an HTML template in the WebClass designer, changes to the HTML
	file made outside of Visual Basic are normally detected when returning to the
	Visual Basic IDE. If the file is edited by selecting "Edit HTML Template..."
	from the template's context menu (displayed on right-click) then, upon return to
	Visual Basic, you are prompted to refresh the file. However, in some cases, you
	are not prompted to refresh the template after you return to Visual Basic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The most common cause of this problem is setting focus to a window other than
	the WebClass designer in the Visual Basic IDE before switching to the external
	editor. Upon return to Visual Basic, if the focus is not on the designer window,
	then the prompt will not appear.
	
	In certain cases, external changes will not be detected and developers should
	always make certain to reload their changes when returning to the IDE. If the
	prompt does not appear, then this can be done by selecting "Refresh HTML
	Template" from the template's context menu. If the HTML file is not reloaded
	after making external changes and the project is later saved, then those changes
	could be overwritten.
	
	REFERENCES
	==========
	
	Please see the following Microsoft Knowledge Base article for more information
	on WebClasses:
	
	  Q189539 INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhtml kbide kbInternet kbVBp kbVBp600bug kbWebClasses kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
