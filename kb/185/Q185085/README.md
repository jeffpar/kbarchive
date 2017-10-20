---
layout: page
title: "Q185085: FIX: Modal Form and Form with Treeview Causes Memory Error"
permalink: /kb/185/Q185085/
---

## Q185085: FIX: Modal Form and Form with Treeview Causes Memory Error

{% raw %}

	Article: Q185085
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding nodes to a Treeview control that resides on an inactive page of a
	pageframe after displaying a modal form, causes Visual FoxPro to generate one of
	the error messages shown below.
	
	In Windows NT 4.0, Dr. Watson for Windows NT reports the following error:
	
	  An application error has occurred and an application log is being generated.
	  VFP.exe
	  Exception access violation(0xc00000050), Address: <memory address>
	
	In Windows 95, the following error appears:
	
	  This program caused and illegal operation and will be shutdown.
	
	Pressing the Details button results in one of the messages below:
	
	  VFP caused an invalid page fault in module <unknown> at
	  <address>.
	
	  -or-
	
	  VFP caused an invalid page fault in module COMCTL32.OCX at <address>.
	
	RESOLUTION
	==========
	
	Change the WindowType of the modal form to Normal. However, this allows users to
	manipulate items that are not on the previously modal form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called Ztest and add a pageframe to the form.
	
	2. Right-click the pageframe and choose Edit. Place a Microsoft TreeView control
	  on each page and name them OLEControl1 and OLEControl2 respectively.
	
	3. Place a command button on the form change the Caption property to Refresh.
	
	4. In the Click event of the command button add the following code:
	
	  
	
	        * Refresh the first page of the pageframe.
	        THISFORM.pageframe1.page1.OLEControl1.nodes.CLEAR
	        FOR i= 1 TO 5
	          THISFORM.pageframe1.page1.OLEControl1.nodes.ADD(,,,STR(RAND()*100))
	          THISFORM.pageframe1.page1.OLEControl1.nodes.ADD(,,,STR(RAND()*100))
	        ENDFOR
	        * Refresh the second page of pageframe.
	        THISFORM.pageframe1.page2.OLEControl2.nodes.CLEAR
	        FOR i= 1 TO 5
	          THISFORM.pageframe1.page2.OLEControl2.nodes.ADD(,,,STR(RAND()*100))
	          THISFORM.pageframe1.page2.OLEControl2.nodes.ADD(,,,STR(RAND()*100))
	        ENDFOR
	        THISFORM.REFRESH
	
	5. Add a second command button and change the Caption to "Do Modal Form."
	  Add the following to the Click event of the command button:
	
	  
	
	        DO FORM modalform
	
	6. Create a form called modalform, and change the Windowtype to 1-Modal. Add a
	  command button to the form that has the following code in the Click event:
	
	  
	
	        ThisForm.Release
	
	  Change the Caption property of the command button to Exit.
	
	7. Save both forms.
	
	8. Run the form using the following command:
	
	  
	
	        Do Ztest.scx
	
	  Press the refresh button, and click the second page of the pageframe. Next,
	  click the first page of the pageframe. Then, press the "Do Modal Form" button
	  to call the modal form. Once the modal form appears, press the Exit button on
	  the modal form. Finally, press the refresh button on Ztest.scx. The error
	  occurs.
	
	Additional query words: crash hang GPF kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
