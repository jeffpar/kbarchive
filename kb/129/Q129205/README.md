---
layout: page
title: "Q129205: How to Add Multiple Properties When You Add Objects"
permalink: /kb/129/Q129205/
---

## Q129205: How to Add Multiple Properties When You Add Objects

{% raw %}

	Article: Q129205
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 25-APR-2000
	
	3.00
	WINDOWS
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to:
	
	- Add objects to a container within a Class definition by using the ADD OBJECT
	  command, and specify multiple properties of the added object by using the
	  WITH keyword.
	
	- During the creation of a container, use the AddObject (one word) method to
	  add an object, and specify multiple properties of the object by using
	  WITH...ENDWITH.
	
	MORE INFORMATION
	================
	
	Example One
	-----------
	
	You can specify multiple properties of an added object within the Class
	definition by using the WITH clause. WITH...ENDWITH, however, is not valid
	within a Class definition and will result in an error.
	
	  ** Start of Example One
	
	  MyNewForm=CREATE("frmForm")
	  MyNewForm.Show
	
	  READ EVENTS
	
	  DEFINE CLASS frmForm AS Form
	
	     Visible = .T.
	     Left    = 50
	     Top     = 30
	     ADD OBJECT MyQuitButton AS cmdQuitButton WITH ;
	        Left    = 30, ;
	        Top     = 30, ;
	        Height  = 60, ;
	        Width   = 100, ;
	        Caption = "Quit"
	
	  ENDDEFINE
	
	  DEFINE CLASS cmdQuitButton AS CommandButton
	
	     PROCEDURE Click
	        RELEASE ThisForm
	        CLEAR EVENTS
	     ENDPROC
	
	  ENDDEFINE
	
	  ** Note: Without the semicolons and commas in the ADD OBJECT ... WITH
	  ** clause, error messages will occur such as "Unrecognized command
	  ** verb" and "Command contains unrecognized phrase/keyword."
	
	Example Two
	-----------
	
	This example shows how to use AddObject method with the WITH...ENDWITH clause to
	specify multiple properties for the object.
	
	  ** Start of Example Two
	
	  frmForm = CREATEOBJECT("Form")
	
	  WITH frmForm
	
	     .Visible   = .T.
	     .ScaleMode = 3
	     .AddObject("pgfPageFrame", "PageFrame")
	     WITH .pgfPageFrame
	        .Visible   = .T.
	        .PageCount = 2
	        .Left      = 50
	        .Top       = 20
	        .Height    = 200
	        .Width     = 250
	     ENDWITH
	
	  ENDWITH
	
	  ** The WITH...ENDWITH may be used to specify properties of the object
	  ** by pointing to the parent, which is the container in this case.
	
	  WITH frmForm.pgfPageFrame
	
	     .PageCount = 3
	
	  ENDWITH
	
	  READ EVENTS
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
