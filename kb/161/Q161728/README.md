---
layout: page
title: "Q161728: PRB: &quot;PrinterShare GX&quot; Unimplemented Trap with General Field"
permalink: kb/161/Q161728/
---

## Q161728: PRB: &quot;PrinterShare GX&quot; Unimplemented Trap with General Field

	Article: Q161728
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro for Macintosh, attempting to print a report showing a general
	field containing a Microsoft Equation 2.0 object produces the following error:
	
	  Sorry, a system error occurred.
	  "PrinterShare GX"
	  unimplemented trap
	
	CAUSE
	=====
	
	This seems to be a problem with Equation 2.0 as Microsoft Word 6.0.1 for the
	Power Macintosh also crashes with the same error when printing a document with
	an Equation 2.0 object on it.
	
	RESOLUTION
	==========
	
	Do not use QuickDraw GX when printing a report that has Microsoft Equation 2.0
	objects in the source table and the report is printing the general fields that
	they are stored in.
	
	Converting the Equation 2.0 objects into static pictures in the general field
	does not solve the problem.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Note that it may be necessary to clear out the GX printer's print queue to
	resume normal printing after encountering this problem.
	
	Microsoft Equation 2.0 is an applet that can be installed with Microsoft Word for
	Macintosh. It is also included with Microsoft Word for Windows so Equation 2.0
	objects might find their way into a table that is used on both the Windows and
	Macintosh platforms even though the Macintosh version of Microsoft Word may not
	be in use.
	
	Steps To Reproduce Behavior
	---------------------------
	
	The following steps assume a working knowledge of Visual FoxPro and the Macintosh
	System software, how to determine if QuickDraw GX is loaded and used, and that
	Microsoft Word for Macintosh is installed, including Microsoft Equation 2.0.
	
	1. Make sure the QuickDraw GX extension is loaded and a printer is setup.
	
	2. In the Visual FoxPro Command window, run the following code to create a new
	  table and add a blank record to it:
	
	       CREATE TABLE test.dbf (descript C(10), olefield G)
	       APPEND BLANK
	       MODIFY GENERAL olefield
	
	3. At this point, the general field should be open. From the Edit menu, choose
	  the Insert Object command and create a new Microsoft Equation 2.0 object. If
	  Microsoft Equation 2.0 is not in the list of objects that can be created, it
	  is either not installed or has not been registered with the System software.
	  To register it, double-click the Equation Editor icon in the Microsoft folder
	  then quit once it comes up.
	
	4. Equation Editor should now appear with a dialog box titled "Equation in
	  Test.olefield." If the toolbar is not visible, select it from the View menu.
	  Then from the toolbar, click on a tool and select a symbol from the drop-down
	  list that is displayed. Select a few symbols if desired.
	
	5. From the File menu, choose Update and then choose Quit to go back to Visual
	  FoxPro.
	
	6. Close the general field in Visual FoxPro.
	
	7. Create a new report in Visual FoxPro.
	
	8. Add the Test.dbf to the report's DataEnvironment. From the DataEnvironment,
	  drag the olefield from the Test table into the detail band of the report.
	  This should create a Report Picture field. Size it as desired.
	
	9. Save the report as Test.frx and close it.
	
	10. Try to print the report by typing the following command in the Visual FoxPro
	  Command window:
	
	  " REPORT FORM test TO PRINT " (without the quotation marks)
	
	Additional query words: 3.00 kbdsd vfoxmac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300Mac
	Version           : :3.0
	
	=============================================================================
	
