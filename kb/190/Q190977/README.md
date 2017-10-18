---
layout: page
title: "Q190977: BUG: Custom AppWizard Generates Incorrect Toolbars and Bitmaps"
permalink: kb/190/Q190977/
---

## Q190977: BUG: Custom AppWizard Generates Incorrect Toolbars and Bitmaps

	Article: Q190977
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbVC600bug kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Custom AppWizards based on Standard MFC AppWizard steps have the following
	problems when generating applications that do not support the Document/View
	architecture:
	
	- SDI applications created with the AppWizard, that do not support the
	  Document/View architecture, do not have the proper associations between their
	  toolbar buttons and their images. For example: the Help About toolbar button
	  has the Print image on it. When Context-sensitive help is selected, the Help
	  toolbar button has the Help About image on it.
	- MDI applications that do not support the Document/View architecture and have
	  Context-sensitive Help do not have a Help toolbar image.
	
	CAUSE
	=====
	
	There is one toolbar bitmap (Tbnd_.bmp) that is used for both SDI and MDI
	applications without Document/View support. This same bitmap is also used when
	Context-sensitive Help is selected in Custom AppWizard step 4. This bitmap does
	not contain the Help toolbar image.
	
	In the case of SDI applications, there is no File New toolbar button generated.
	
	RESOLUTION
	==========
	
	To remedy the disassociation between toolbar buttons and images for SDI
	applications, remove the following compile-time directives in the Toolbar
	section of the template file, All.rc:
	
	  .
	  .
	  //////////////////////////////////////////////////////////////////////// 
	  // Toolbar
	  // 
	
	  IDR_MAINFRAME TOOLBAR DISCARDABLE  16, 15
	  BEGIN
	  $$IF(!DB_NO_FILE)
	  $$IF(!NODOCVIEW)
	
	      BUTTON      ID_FILE_NEW
	      BUTTON      ID_FILE_OPEN
	      BUTTON      ID_FILE_SAVE
	      SEPARATOR
	
	  $$ELSE
	  $$IF(!PROJTYPE_SDI)           <-Remove this directive
	
	      BUTTON      ID_FILE_NEW
	      SEPARATOR
	
	  $$ENDIF // !PROJTYPE_SDI      <-Remove this directive
	  $$ENDIF // NODOCVIEW
	  $$ENDIF //!DB_NO_FILE
	
	      BUTTON      ID_EDIT_CUT
	      BUTTON      ID_EDIT_COPY
	      BUTTON      ID_EDIT_PASTE
	
	  .
	  .
	
	At this point, both SDI and MDI applications behave the same way--each is missing
	an image on the Help button when Context-sensitive help is selected. To resolve
	this problem, you must create a new toolbar bitmap that contains all of the
	images in Tbnd_.bmp, but also includes a Help image. Follow these steps to
	create the new toolbar bitmap:
	
	1. In FileView, expand the Template directory. Open the Tbah_.bmp toolbar bitmap
	  in the resource editor by double-clicking it. This bitmap contains the
	  required images along with the File Open and File Save images.
	
	2. In the Graphics window, select the Rectangle Selection tool if it is not
	  already selected. Using the mouse, select the File Open and File Save images
	  by dragging the mouse over them. Press the DEL key.
	
	  NOTE: Toolbar images are 16x15 pixels in size. The area you select should be
	  32x15 and can be verified in the status bar.
	
	3. Using the mouse, select the remaining images to the left of the deleted area.
	  These images include Edit Cut, Edit Copy, Edit Paste, Help About and Help.
	  Once the images are selected, use the mouse and drag the images to the right
	  so they are flush with the File New image. Resize the width of the bitmap to
	  be flush with Help image. On the main menu bar, click File, and then click
	  SaveAs. In this article, we will refer to it as Tbndh.bmp. Save the bitmap
	  and close the resource editor.
	
	4. On the Project menu, click Add To Project, and then click Files. Select the
	  newly created bitmap from the Template directory and click OK.
	
	5. On the Insert menu, click Resource. Click Toolbar and click Import. Select
	  the new bitmap. To do this, go to the Open As list, select Custom, and click
	  Import. Select "TEMPLATE" as the Resource type and click OK.
	
	6. Right-click the resource in ResourceView and click Properties. In the ID
	  drop-down box, type "TBNDH.BMP" (note that you must use the quotation marks)
	  and click OK.
	
	7. Add the following compile-time directive to the Resources section of the
	  NewProj.inf template file:
	
	  ///NewProj.inf
	  .
	  .
	  $$// Resources
	
	  /res
	  $$IF(MULTIPLE_LANGS)
	  $$BEGINLOOP(NUM_LANGS)
	  .
	  .
	  $$ELSE  // NODOCVIEW
	  $$IF(HELP) //Context-sensitive help  // <-Add this directive.
	  =:tbndh.bmp   res\Toolbar.bmp        // <-Use the new toolbar.
	  $$ELSE                               // <-Add this directive.
	  =:tbnd_.bmp   res\Toolbar.bmp
	  $$ENDIF  // HELP                     // <-Add this directive.
	  $$ENDIF
	  $$ENDIF //TOOLBAR
	  $$ENDIF //!PROJTYPE_DLG
	  .
	  .
	
	8. Recompile your Custom AppWizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	SDI applications that do not support the Document/View architecture do not have
	File New menu support. This is because a Frame and View are always created for
	you when the application is run. You may edit the code to include a File New
	menu and handler if you like. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q190518 BUG: MFC AppWizard Generates Incorrect Toolbars and Bitmaps
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and build a Custom AppWizard project based on Standard MFC AppWizard
	  (exe) steps.
	
	2. Create a project based on your new Custom AppWizard. In step 1, select Single
	  Document, clear Document/View architecture support. Accept the defaults in
	  steps 2 and 3. In step 4, select Context-sensitive help and click Finish.
	
	3. Build and run the application. Verify the toolbar tooltips.
	
	4. Create a project based on your new Custom AppWizard. In step 1, select
	  Multiple Document and clear Document/View architecture support. Accept the
	  defaults in steps 2 and 3. In step 4, select Context-sensitive help and click
	  Finish.
	
	5. Build and run the application. Verify that the Help toolbar button has no
	  image.
	
	REFERENCES
	==========
	
	"Creating an MFC EXE Program:" Visual C++ Documentation, Using Visual C++,
	Visual C++ Programmer's Guide, Beginning Your Program, Creating a Custom
	AppWizard.
	
	"Toolbar Editor:" Visual C++ Documentation, Using Visual C++, Visual C++ User's
	Guide, Resource Editors, Toolbar Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
