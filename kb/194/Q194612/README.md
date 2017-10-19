---
layout: page
title: "Q194612: FIX: AlwaysOnTop Property Always Returns .F. For TopLevel Forms"
permalink: /kb/194/Q194612/
---

## Q194612: FIX: AlwaysOnTop Property Always Returns .F. For TopLevel Forms

	Article: Q194612
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use the AlwaysOnTop property of a Visual FoxPro form in conjunction with
	a TopLevel form to create an application that prevents other windows from
	covering the applications window. Changing the AlwaysOnTop property at run-time
	changes the behavior of the form, but querying the property value always returns
	.F. This behavior only exists when the ShowWindow property of the form is set to
	2 - As TopLevel Form.
	
	RESOLUTION
	==========
	
	You can use a custom property and an AlwaysOnTop Assign method to work around
	this problem. The following code uses a custom form property called
	AlwaysOnTop_Actual to store the actual setting of the AlwaysOnTop property of
	the form. The value of this custom property changes in the AlwaysOnTop_Assign
	method:
	
	     PUBLIC ox
	        ox = NewObject("test")
	        ox.Show
	        ?ox.AlwaysOnTop_Actual
	        ox.AlwaysOnTop = .F.
	        ?ox.AlwaysOnTop_Actual
	        ox.AlwaysOnTop = .T.
	        ?ox.AlwaysOnTop_Actual
	
	     DEFINE CLASS test AS form
	        ShowWindow = 2
	        AlwaysOnTop = .T.
	        AlwaysOnTop_Actual = .T.
	
	        PROCEDURE AlwaysOnTop_Assign
	           LPARAMETERS vNewVal
	           This.AlwaysOnTop_Actual = vNewVal
	           THIS.AlwaysOnTop = m.vNewVal
	        ENDPROC
	
	     ENDDEFINE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following program code:
	
	     PUBLIC ox
	        ox = NewObject("test")
	        ox.Show
	        ?ox.AlwaysOnTop
	        ox.AlwaysOnTop = .F.
	        ?ox.AlwaysOnTop
	        ox.AlwaysOnTop = .T.
	        ?ox.AlwaysOnTop
	
	     DEFINE CLASS test AS form
	        ShowWindow = 2
	        AlwaysOnTop = .T.
	     ENDDEFINE
	
	Note the querying the AlwaysOnTop property always returns .F.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
