---
layout: page
title: "Q215442: PRB: InteractiveChange Event of List Box Does Not Execute After"
permalink: /kb/215/Q215442/
---

## Q215442: PRB: InteractiveChange Event of List Box Does Not Execute After

{% raw %}

	Article: Q215442
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp600
	Last Modified: 06-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The InteractiveChange event of a list box does not execute when the mouse button
	is clicked on a list box item, held while the mouse pointer is dragged to
	another item in the list box, and then released.
	
	MORE INFORMATION
	================
	
	Using Visual FoxPro 3.0 or Visual FoxPro 5.0, depressing the left-mouse button
	with the mouse pointer on a list box item, dragging the mouse pointer to another
	item in the list box and then releasing the mouse button causes the
	ListBox.InteractiveChange event to execute. However, the InteractiveChange event
	does not fire in Visual FoxPro 6.0.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file called "List.prg" using the following code:
	
	  PUBLIC ox
	  ox=CREATEOBJECT('listtest')
	  ox.SHOW
	  DEFINE CLASS listtest AS FORM
	     HEIGHT = 168
	     WIDTH = 169
	     DOCREATE = .T.
	     AUTOCENTER = .T.
	     CAPTION = "Form1"
	     NAME = "Form1"
	
	     ADD OBJECT list1 AS LISTBOX WITH ;
	        HEIGHT = 120, ;
	        LEFT = 24, ;
	        TOP = 24, ;
	        WIDTH = 120, ;
	        NAME = "List1"
	
	     PROCEDURE INIT
	        FOR i=1 TO 7
	           THISFORM.list1.ADDITEM(REPLICATE('0', ;
	              4-LEN(ALLTRIM(STR(i))))+ALLTRIM(STR(i)))
	        NEXT
	     ENDPROC
	
	     PROCEDURE list1.INTERACTIVECHANGE
	        =MESSAGEBOX(this.value,64,'InteractiveChange')
	     ENDPROC
	  ENDDEFINE
	
	2. Click the left-mouse button on list box item "0001."
	
	3. While holding the left-mouse button down, move the mouse pointer to list box
	  item "0005."
	
	4. Release the left-mouse button.
	
	5. Note that the code associated with the list1.INTERACTIVECHANGE event is not
	  executed.
	
	  Using Visual FoxPro 3.x and Visual FoxPro 5.x, the list1.INTERACTIVECHANGE
	  event code is executed.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
