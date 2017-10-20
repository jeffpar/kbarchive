---
layout: page
title: "Q158822: PRB: ADDOBJECT Gives &quot;A member object...already exists&quot; Error"
permalink: /kb/158/Q158822/
---

## Q158822: PRB: ADDOBJECT Gives &quot;A member object...already exists&quot; Error

{% raw %}

	Article: Q158822
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding an object to a container after removing that object, may result in the
	following error message:
	
	  A member object with this name already exists
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual FoxPro does not allow the removal of an object if code for that object is
	currently executing. Attempts to remove the object are delayed until the object
	code has completed execution, and Visual FoxPro does not display any warning or
	errors. This leads users to believe that the object has been removed when it has
	not been removed. Trying to add the object back into the container causes the "A
	member object with this name already exists" error because the object was not
	removed and is still a part of the container.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Execute the following code (which instantiates a Form with a CommandButton
	  object):
	
	        PUBLIC oF
	        oF = CreateObject('form')
	        oF.AddObject('oCont','Cont')
	        oF.Show()
	
	        DEFINE CLASS Cont AS Container
	          ADD OBJECT oCmd AS Cmd
	          Visible = .t.
	        ENDDEFINE
	
	        DEFINE CLASS Cmd AS CommandButton
	          Top = 50
	          Visible=.t.
	          PROCEDURE click
	            oF.RemoveObject('ocont')     && No error occurs
	            oF.AddObject('ocont','cont') && Produces error
	          ENDPROC
	        ENDDEFINE
	
	2. When the Form appears, click on the command button. The "A member object with
	  this name already exists" error message appears.
	
	Additional query words: VFoxWin kbdse
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	

{% endraw %}
