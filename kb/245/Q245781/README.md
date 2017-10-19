---
layout: page
title: "Q245781: BUG: DEFINE WINDOW in Load Event Does Not Appear"
permalink: /kb/245/Q245781/
---

## Q245781: BUG: DEFINE WINDOW in Load Event Does Not Appear

	Article: Q245781
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbOOP kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupp
	Last Modified: 01-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A form or a formset contains a DEFINE WINDOW command in the Load event. However,
	the window does not appear when the form runs. The window is in Visual FoxPro's
	memory.
	
	RESOLUTION
	==========
	
	Move the DEFINE WINDOW command from the Load event to the Init event or the
	Activate event of the form or formset. The behavior of the DEFINE WINDOW command
	varies depending on which event you choose. The "More Information" section
	discusses the differences.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior can occur when transporting FoxPro 2.x screens into Visual FoxPro
	using the Transport utility. A functional conversion can place a DEFINE WINDOW
	in the Load event under some circumstances. The following steps also apply if
	you are using a formset:
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add a command button that has a Caption of "Exit" and that contains the
	  following in the Click event:
	
	  CLEAR WINDOW test
	  ThisForm.Release
	
	3. Place the following code in the Load event of the form:
	
	  DEFINE WINDOW Test ;
	     AT  0.000, 0.000 ;
	     SIZE 28, 80  ;
	     TITLE "This is a test window." ;
	     FONT "MS Sans Serif", 8 ;
	     FLOAT ;
	     MINIMIZE ;
	     SYSTEM
	  MOVE WINDOW Test CENTER 
	     ACTIVATE WINDOW Test
	  @ 1,1 SAY "This is text in the test window." ;
	     SIZE 1,80 ;
	     PICTURE "@I" ;
	     FONT "MS Sans Serif", 8 ;
	     STYLE "T"    
	
	4. Save and run the form. Note that only the form appears. Press the EXIT
	  button.
	
	5. Copy the code from the Load event and then comment it out.
	
	6. Place the code in the Init event and run the form. Note that the window
	  created with the DEFINE WINDOW appears behind the form. Press the EXIT
	  button.
	
	7. Copy the code from the Init event and then comment it out.
	
	8. Place the code in the Activate event and run the form. Note that the window
	  created with the DEFINE WINDOW appears in front the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbOOP kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
