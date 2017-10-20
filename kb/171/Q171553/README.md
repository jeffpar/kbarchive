---
layout: page
title: "Q171553: FIX: VFP May Crash While Running MS Web Browser Control"
permalink: /kb/171/Q171553/
---

## Q171553: FIX: VFP May Crash While Running MS Web Browser Control

{% raw %}

	Article: Q171553
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a; WINNT:97,97sp1,97sp2
	Operating System(s): 
	Keyword(s): kbVS97sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro v5.0x may crash while running an application that uses the
	Microsoft Web Browser Control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Form.
	
	2. Add a Microsoft Web Browser Control to the form and set its properties as
	  follows:
	
	     Name: WBCtrl1
	     Refresh: NODEFAULT
	     Init: This.Navigate("www.microsoft.com")
	
	3. Add a TextBox to the Form. The TextBox will be used to enter the URLs you
	  want to connect to. Add the following code to the Valid event of this
	  TextBox:
	
	        IF !EMPTY(This.Value)
	           ThisForm.WBCtrl1.Navigate(This.Value)
	        ENDIF
	
	4. Run the form, type a valid URL into the TexBox, and then hit the ENTER key to
	  go to and display the URL. Note that repeating step 4 several times may cause
	  Visual FoxPro to crash.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVS97sp2fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a; WINNT:97,97sp1,97sp2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
