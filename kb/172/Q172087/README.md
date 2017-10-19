---
layout: page
title: "Q172087: SAMPLE: Agrid.exe Navigates to Non-Visible Grid Cells in Visual"
permalink: /kb/172/Q172087/
---

## Q172087: SAMPLE: Agrid.exe Navigates to Non-Visible Grid Cells in Visual

	Article: Q172087
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbfile kbsample kbHWMAC kbvfp300 kbvfp500 kbvfp600
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Agrid.exe is a sample for FoxPro for Windows that shows a way to move to grid
	cells that are not visible on the face of the grid with program code. The files
	include a form, Gridtest.scx, with a grid on it. The grid is based on a class
	stored in the Agrid.vcx visual class library.
	
	Agrid.hqx is a sample for the Macintosh that shows a way to move to grid cells
	that are not visible on the face of the grid with program code. The files
	include a form, Gridtest.scx, with a grid on it. The grid is based on a class
	stored in the Agrid.vcx visual class library.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Agrid.exe
	  (http://download.microsoft.com/download/vfox50/demo/1/WIN98/EN-US/Agrid.exe)
	
	  Agrid.hqx
	  (http://download.microsoft.com/download/fox30powermac/demo/1/MacOS/EN-US/Agrid.hqx)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	In Visual FoxPro, the ActivateCell() method of a grid can be used to change the
	active cell in a grid. However, ActivateCell() works only for cells that are
	visible in the grid. A grid may have thousands of rows and more columns than can
	be shown. These rows and columns can be accessed if the user scrolls the grid or
	uses the navigation keys (page up, page down, arrow keys, and so forth) to move
	to them. The sample .vcx file contains a class based on a grid that has a custom
	method to allow access to any cell in the grid, visible or not.
	
	To use the files included, follow these steps:
	
	1. Download the Agrid.exe or Agrid.hqx file and place it in a new folder.
	
	2. Select Agrid.exe or Agrid.hqx to extract the files.
	
	3. Once the files are extracted, start Visual FoxPro.
	
	4. In Visual FoxPro, set the default directory to the location of the files
	  through the Tools, Options dialog box, File Locations tab or with the SET
	  DEFAULT TO command.
	
	5. The sample form, Gridtest.scx, uses the TestData!Customer table. This is a
	  sample table installed with Visual FoxPro in the \Samples\Data folder. In
	  Visual FoxPro 6.0, the data is located in the Microsoft Visual
	  Studio\Common\Data folder. Copy the files from that folder to the folder
	  where the sample files for this article have been saved. Visual FoxPro 5.x
	  users do not need to copy the .qpr, .prg, .pjx and .pjt files from that
	  folder.
	
	6. The form and class library were created in Visual FoxPro 5.0a. To use them in
	  Visual FoxPro 3.x, issue the following commands in Visual FoxPro 3.x to
	  recompile them:
	
	        COMPILE FORM Gridtest.scx
	        COMPILE FORM Agrid.vcx
	
	  When using the files in Visual FoxPro for Macintosh, at least for purposes of
	  this article, setting MacDeskTop off is recommended. The following command
	  will do that:
	
	        SET MACDESKTOP OFF
	
	  The form and class library should be recompiled on the Macintosh. Use the
	  commands above in Visual FoxPro for Macintosh.
	
	7. Run the form by issuing DO FORM Gridtest.scx in the Visual FoxPro Command
	  window or by selecting Do from the Program menu, changing the Files Of Type
	  drop-down list to Form, and selecting Gridtest.scx.
	
	8. The syntax for using the custom function of the agrid class is:
	
	        grid.GoToCell(nrow,ncol)
	
	  where nrow and ncol specify the row and column of the cell to make active.
	
	  Try these commands in the Command window with the form running to test the
	  custom method:
	
	        gridtest.agrid1.GoToCell(65,7)
	
	        gridtest.agrid1.GoToCell(18,5)
	        gridtest.agrid1.GoToCell(12,2)
	        gridtest.agrid1.GoToCell(1,1)
	        gridtest.agrid1.ActivateCell(18,5)  && Note that this will not work.
	
	  NOTE: An "Invalid subscript reference" error message results from either a
	  zero or negative number entered for the column reference.
	
	9. Quit and examine the agrid class in the Agrid.vcx visual class library as
	  desired.
	
	Any improvements to the code in the GoToCell custom method in the agrid class are
	appreciated.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbHWMAC kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbinfo
	
	=============================================================================
	
