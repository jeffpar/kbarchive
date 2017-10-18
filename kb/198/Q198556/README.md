---
layout: page
title: "Q198556: PRB: Converted Form Has Large Page Frame"
permalink: kb/198/Q198556/
---

## Q198556: PRB: Converted Form Has Large Page Frame

	Article: Q198556
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbMiscTools kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After doing a Functional Conversion of a screen from FoxPro 2.x to Visual
	FoxPro, a page frame is placed on the form whose Height and Width properties are
	set to 30,000 pixels. The properties of the page frame are read-only.
	
	CAUSE
	=====
	
	These dimensions are hard coded into the Convert.app file.
	
	RESOLUTION
	==========
	
	There are at least three resolutions for this if these dimensions are a problem.
	Before attempting any of these resolutions, please backup your files.
	
	First Resolution
	----------------
	
	After the screen has been Functionally Converted, open the form file (.scx) as a
	table and look in the Class column until the page frame is found. This will
	probably be record 5 in the .scx file. For the page frame record, open the
	Properties memo field and change the Height and Width to the desired values.
	
	Second Resolution
	-----------------
	
	Modify the Convert.app file. The source code for the Convert.app file is located
	in the ..\VFP\Tools\Convert folder.
	
	1. Open the Convert.pjx and click the Code tab.
	
	2. Under Programs, open the convert file. This is the main program file for the
	  Convert.app.
	
	3. Search for M_HEIGHT until you find the following two lines of code:
	
	        THIS.AddProp(M_HEIGHT,30000)
	        THIS.AddProp(M_WIDTH,30000)
	
	4. Change the 30000 to the desired value then save and close the file.
	
	5. Rebuild the Convert.app from the Project Manager.
	
	6. Copy the new Convert.app to the ..\VFP folder. Be sure to verify that
	  the_converter system memory variable points to the correct file. From the
	  Tools meun, choose Options. In the Options dialog box click the File
	  Locations tab and then select the command button to the right of the
	  Converter text box.
	
	Third Resolution
	----------------
	
	Use the Visual FoxPro Transformer application. This could be the best solution
	since other aspects of converted forms can be changed with the Transformer and
	many forms at one time. The Transfrm.app file is located in the
	..\VFP\Tools\Transfrm folder. This application was not available until Visual
	FoxPro 5.0 on the Windows platform.
	
	NOTE: The Visual FoxPro Help file states the following:
	
	  The Transformer is not supported by Microsoft Support Services either
	  electronically or via telephone.
	
	  To learn more about the Transformer, go to the Transformer topic in Visual
	  FoxPro Help. "Help Transformer", without quotes, typed in the Command window
	  should bring it up.
	
	To use the Transformer to resolve the problem described in this article, use the
	following steps after performing a Functional conversion on the form(s):
	
	1. Run the Transfrm.app file. It may be easier to copy it to the Visual FoxPro
	  directory first and then use the following command:
	
	        DO HOME()+"transfrm.app"
	
	2. In the Files tab, add your .scx file or the directory that contains the .scx
	  files that you need to transform.
	
	3. In the Rules tab, fill in the following: "
	
	     Property: height
	     Value:    640           && Or whatever value is desired.
	     Files:    *.scx
	     Classes:  pageframe
	
	  " (without the quotation marks)
	
	4. Choose the Add button to add this rule. Do the same for the Width property.
	
	5. To save these rules for use at a later time, choose the save button and
	  supply a table name.
	
	6. In the Log tab, clear the Create Log Only check box and then select the
	  Transform button.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The page frame is so large when converted to allow you to place controls outside
	of the visible portion of the form for special behaviors. Not every developer is
	going to do this. However, if one does, the page frame is large enough to
	contain the controls. Since this page frame is invisible when you run the form,
	this should not effect the functionality of existing screens converted to Visual
	FoxPro.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form in FoxPro 2.x.
	
	2. Open this form in Visual FoxPro.
	
	3. When prompted, choose Functional Conversion.
	
	4. Examine the Height and Width properties of the page frame on the converted
	  form.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q135266 PRB: Converting 2.x Screen Does Not Allow Adjustable Pageframe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbMiscTools kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
