---
layout: page
title: "Q165768: FIX: Treeview Control ItemTips Fail on Windows NT 4.0"
permalink: /kb/165/Q165768/
---

## Q165768: FIX: Treeview Control ItemTips Fail on Windows NT 4.0

{% raw %}

	Article: Q165768
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbinterop kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Treeview control with Microsoft applications or development
	tools released after January 1, 1997, it does not show ItemTips correctly when
	the control is on a form running on Windows NT 4.0.
	
	CAUSE
	=====
	
	The ItemTips feature of the version of the Treeview control that comes with the
	most recent version of Comctl32.ocx is incompatible with Windows NT version 4.0
	Workstation and 4.0 Server.
	
	The other features of the control operate as expected, and the ItemTips feature
	works when the Visual FoxPro form resides on Windows 95.
	
	NOTE: This behavior does not occur if you use Comctl32.ocx version 1.0.2908 that
	is shipped with Visual FoxPro 5.0.
	
	RESOLUTION
	==========
	
	If the Visual FoxPro for Windows application must have ItemTips the developer
	can remove the version of the control that is on the system and replace it with
	the version that came on the Visual FoxPro version 5.0 CD-ROM.
	
	This probably will be unsatisfactory if you need to distribute the application to
	users running on Windows NT 4.0 who also have installed other applications that
	accompanied the newer version of the Comctl32.ocx. On those systems the Setup
	program will not replace the later version of the control with the one
	distributed with the Visual FoxPro application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual FoxPro 5.0 on a system using Windows NT 4.0.
	
	2. Install Visual Basic 5.0, Visual C++ 5.0, Office 97, or any other Microsoft
	  product that installs the most recent version of Comctll32.ocx.
	
	3. Create a new form in Visual FoxPro 5.0.
	
	4. Place the OLE Container Control on the form.
	
	5. In the Insert Object dialog box, click Insert Control.
	
	6. Select the Microsoft Treeview Control from the list.
	
	7. Add the following to the Init Event method of the form or the Treeview
	  control:
	
	        Thisform.OLEControl1.Nodes.add(,,,"This is a long string of text")
	
	8. Run the form and put the mouse cursor over the item in the Treeview.
	
	When you perform steps 2 through 7 in a Windows 95 system, the text of the string
	appears as an ItemTip. If the string is longer than the space in the Treeview,
	the entire string shows even though it is wider than the control.
	
	Additional query words: winnt tooltip kbvfp600fix
	
	======================================================================
	Keywords          : kbinterop kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0 5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
