---
layout: page
title: "Q131941: PRB: Class Browser Does Not Recognize Inheritance"
permalink: kb/131/Q131941/
---

## Q131941: PRB: Class Browser Does Not Recognize Inheritance

	Article: Q131941
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Class Browser (Browser.app) displays only the methods, properties, and
	members that were added directly to the class. What you do not see are any
	methods, properties, or members that the class inherited from a parent class.
	
	For example, you create a text box class <parent class> and add a new
	method to the class. Then you creast a new class based on <parent class>
	and a method is added to this <subclass>. In the properties sheet under
	the Method tab, you can see that the inherited method from the <parent
	class> is shown with the method added in the <subclass>. However, when
	you run the Class Browser and select the <subclass>, the Class Browser
	displays only the method added directly to the <subclass>.
	
	STATUS
	======
	
	This behavior is by design. The class browser only shows members of the
	immediate class, not of any parent classes.
	
	There are two reasons for this:
	
	- It would be difficult, slow, and possibly problematic to open every
	  associated .VCX file of all parent classes when scrolling through the class
	  list to find all the inherited methods.
	
	- The inherited members can be displayed in the Class Designer by using either
	  the Properties sheet or the Class Info dialog box.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a class called testparent based on a text box, and store the class in
	  Test.vcx.
	
	2. Add a new method to the testparent class called test1. Save the class by
	  clicking Save on the File menu.
	
	3. Create a new class called testsub based on testparent, and store the new
	  class in Test.vcx.
	
	4. Add a new method to the testsub class called test2. Save the class by
	  clicking Save on the File menu.
	
	5. Open the Properties sheet with testsub open, and click the Method tab. Look
	  at the bottom of the method list to verify the existence of two additional
	  methods (test1 and test2).
	
	6. Close the Class Designer, and start the Class Browser.
	
	7. Open the Test.vcx library when prompted.
	
	8. Click the testsub class in the class hierarchy tree.
	
	9. In the list under the All tab, the only item showing is 'm ~ test2'. If it is
	  not showing, make sure the Empty button is depressed. The testsub class did
	  inherit the test1 method but it is not displayed in the Class Browser.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
