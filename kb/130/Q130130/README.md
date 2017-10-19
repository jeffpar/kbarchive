---
layout: page
title: "Q130130: How to Customize Class Icons"
permalink: /kb/130/Q130130/
---

## Q130130: How to Customize Class Icons

	Article: Q130130
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When making your own classes that will be stored in a .VCX file, you can can
	also use your own bitmaps to identify your class object on a toolbar. This
	article shows you how.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The following steps show you how to change the bitmap that a class object uses on
	the toolbar.
	
	1. From the file Menu, choose New File, and then select Class.
	
	2. Enter a Class Name, such as MyCommandButton, and base it on the CommandButton
	  class.
	
	3. Enter mylib in the Store In section, and Click OK.
	
	4. From the Class menu, choose Class Info, and complete these steps:
	
	  a. On the Class Tab, click the button with three dots on it next to the
	     Toolbar icon.
	
	  b. Go to the SAMPLES\MAINSAMP\BITMAPS Directory, and select SAVE.BMP.
	
	  c. From the File menu, choose Save.
	
	5. Close the Class Designer.
	
	6. From the File menu, choose New File, and then select Form.
	
	7. In the Forms Controls toolbar, click the View Classes icon, and choose Add.
	
	8. In the Open Dialogue box, select MYLIB.VCX.
	
	The Form Control toolbar now shows you the control inside the MYLIB.VCX file. The
	Control for MyCommandButton will have the SAVE.BMP on it. To choose between
	standard or custom controls on the Form Control toolbar, click the View Classes
	button and choose the controls you want.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
