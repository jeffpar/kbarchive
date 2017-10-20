---
layout: page
title: "Q116424: PPT: Adding the Present It Tool to Word"
permalink: /kb/116/Q116424/
---

## Q116424: PPT: Adding the Present It Tool to Word

{% raw %}

	Article: Q116424
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 4.0,4.0c,6.0,6.0a,6.0c,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbreadm kbhelpfile kbdta
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, version 4.0c 
	- Microsoft PowerPoint for Macintosh, version 4.0 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft Word for Windows, versions 6.0, 6.0a, 6.0c 
	- Microsoft Word for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The instructions for adding the Present It tool to Microsoft Word are not found
	in the PowerPoint Readme Help files for PowerPoint versions 4.0 or 4.0a. The
	file was updated in version 4.0c to include this information. The Readme Help
	information for PowerPoint 4.0c, which applies to all versions of PowerPoint and
	Word, is as follows.
	
	README HELP
	-----------
	
	Adding the Present It tool to Microsoft Word
	
	The Present It tool runs the "PresentIt" macro, which exports the outline
	information in the current Word document into Microsoft PowerPoint.
	
	The macro can be found in either the convert.dot template (version 6.0) or the
	Present.dot template (version 6.0a) or the Present7.dot (version 7.0).
	
	You can use the Organizer dialog box in Word to add the PresentIt macro to your
	Normal (global) template:
	
	1. Make sure that the template file has been installed (it may be in either the
	  Macros, Startup, or Template directory). If you cannot find the file, you
	  should consult the Word Help files and documentation for instructions on how
	  to install the template (or contact Microsoft Word support).
	
	2. In Word, choose the Macro command from the Tools menu.
	
	3. Select the Organizer button in the Macro dialog.
	
	4. In the Macros tab of the Organizer dialog select one of the Close File
	  buttons (it should change to an Open File button).
	
	5. Click the new Open File button and locate and open the appropriate template
	  file. When the file is open, one or more macros will be listed.
	
	6. Select the macro named "PresentIt" (without the quotation marks).
	
	7. Click the Copy button to copy the macro to your Normal.dot (Global Template).
	
	8. Click Close to exit the Organizer dialog.
	
	Once the macro has been added to your Normal.dot (Global Template), you can add
	the macro to your Microsoft toolbar:
	
	1. From the View menu, choose Toolbars.
	
	2. In the Toolbars box, select Microsoft so an X appears in the check box next
	  to it. Choose OK.
	
	3. From the Tools menu, choose Customize.
	
	4. Select the Toolbars tab.
	
	5. In the Categories box, select Macros.
	
	6. In the Macros box, select PresentIt.
	
	7. Drag the "PresentIt" macro name from the list of available macros and drop it
	  on the Microsoft toolbar (notice that the mouse pointer changes to a
	  gray-outlined square). When you drop the macro, the Custom Button dialog box
	  opens.
	
	8. In the Custom Button dialog box, select the Present It button (the Present It
	  button is the seventh button in the fourth row), and then choose the Assign
	  button. You should now see the PowerPoint button on the Microsoft toolbar.
	
	9. In the Tools Customize dialog box, select Normal.dot from the Save Changes In
	  list, then choose the Close button.
	
	MORE INFORMATION
	================
	
	For more information about the Present It tool, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q112093 Word 6.0a Patch Supplies but Does Not Install PRESENT.DOT
	
	  Q105765 Macros in the CONVERT, LAYOUT, TABLES, and MACRO60 Templates
	
	
	Additional query words: read me pp4readme readme.txt adding presentation macppt winppt readme
	
	======================================================================
	Keywords          : kbinterop kbreadm kbhelpfile kbdta 
	Technology        : kbHWMAC kbOSMAC kbWordSearch kbPowerPtSearch kbWord95Search kbPowerPt95 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt95Search kbPowerPt400Mac kbPowerPt400c kbWord600 kbWord600a kbWord600c kbWord95
	Version           : :4.0,4.0c,6.0,6.0a,6.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
