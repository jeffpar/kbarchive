---
layout: page
title: "Q190049: BUG: Compile Error When Using Document.Write in DHTML App"
permalink: /kb/190/Q190049/
---

## Q190049: BUG: Compile Error When Using Document.Write in DHTML App

{% raw %}

	Article: Q190049
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0;
	Operating System(s): 
	Keyword(s): kbInternet kbPageDesigner kbVBp600bug
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Document.Write in a DHTML application you receive the
	following error:
	
	  Compile error: Function or interface marked as restricted, or the function
	  uses an Automation type not supported in Visual Basic.
	
	RESOLUTION
	==========
	
	Change the value of the innerText property of a tag instead of using the
	Document.Write.
	
	For example, HTML for the element:
	
	     <H3 ID=Subhead1></H3>
	
	Replacement code in Page Designer:
	
	     Subhead1.innerText="Heading One"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	On the MSDN site at the following location there is more detailed information
	about innerText.
	
	Visual Basic Documentation\Using Visual Basic\Component Tools Guide\ Building
	Internet Applications\Developing DHTML applications\Writing code using Dynamic
	HTML\Handling Text in the page designer
	
	Please see the following Microsoft Knowledge Base article for more information on
	the DHTML Page Designer:
	
	  Q190249 INFO: VB 6.0 Readme Part 9: DHTML Page Designer Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbInternet kbPageDesigner kbVBp600bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0;
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
