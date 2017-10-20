---
layout: page
title: "Q176351: BUG: Referenced Project Causes &quot;Failed to Reload the Project&quot;"
permalink: /kb/176/Q176351/
---

## Q176351: BUG: Referenced Project Causes &quot;Failed to Reload the Project&quot;

{% raw %}

	Article: Q176351
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500bug kbSSafe600bug
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have more than one project in a Visual Basic group (vbg) file and one
	of the projects references another, performing a get on the referenced project
	in Visual SourceSafe will cause the following error to occur:
	
	  Failed to Reload the Project. Please close the project from the file menu and
	  re-open it to get the correct versions of all the files loaded into memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard Visual Basic project and add it to Visual SourceSafe.
	
	2. Add an ActiveX DLL or ActiveX .exe project to the group and add it to Visual
	  SourceSafe.
	
	3. In Visual Basic, select the first project in the Visual Basic Project List.
	
	4. From the Visual Basic Project menu, click References and then add a reference
	  to the second project in the group. Click OK.
	
	5. In Visual SourceSafe, go to the SourceSafe menu and click "Get Latest
	  Version" to try to perform a get on the second project. The error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500bug kbSSafe600bug 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbZNotKeyword3 kbSSafe600 kbSSafe500
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
