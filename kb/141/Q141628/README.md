---
layout: page
title: "Q141628: FIX: Pageframe.Addobject() to a New Page Disables Mouse"
permalink: /kb/141/Q141628/
---

## Q141628: FIX: Pageframe.Addobject() to a New Page Disables Mouse

{% raw %}

	Article: Q141628
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mouse cannot be used to select Textbox objects on a PageFrame's Page if the
	page and text box were added to the pageframe programatically at run time.
	
	WORKAROUND
	==========
	
	Add the following command to the command button's Click event after the text box
	has been added:
	
	     THISFORM.PAGEFRAME<#>.PAGE<#>.REFRESH
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form, and place a Pageframe on it.
	
	2. Add a command button to the form, and place the following code in its Click
	  event:
	
	     THISFORM.Pageframe1.Pagecount=3
	     WITH THISFORM.Pageframe1.Page3
	      .Addobject('TEXT1','TEXTBOX')
	      .Addobject('TEXT2','TEXTBOX')
	     ENDWITH
	
	     WITH Thisform.Pageframe1.Page3.text1
	      .top=5
	      .width=80
	      .left=5
	      .height=20
	      .visible=.t.
	      .Controlsource='lctext1'
	     ENDWITH
	
	     WITH Thisform.Pageframe1.Page3.text2
	      .top=30
	      .width=80
	      .left=5
	      .height=20
	      .visible=.t.
	      .Controlsource='lctext2'
	     ENDWITH
	
	     * THISFORM.PAGEFRAME1.PAGE3.REFRESH  && add this line and mouse will
	     * work properly
	
	3. Run the form, and select Page 3. Note that you cannot use the mouse to select
	  the text box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
