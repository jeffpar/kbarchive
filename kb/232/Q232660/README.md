---
layout: page
title: "Q232660: BUG: GDI Leak Printing Report w/ 256 Color BMP &amp; SET PALETTE OFF"
permalink: /kb/232/Q232660/
---

## Q232660: BUG: GDI Leak Printing Report w/ 256 Color BMP &amp; SET PALETTE OFF

	Article: Q232660
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbReportWriter kbvfp300bBUG kbvfp500aBUG kbvfp600bug kbGrpDSFox _IK
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are printing a report that contains a bitmap or bitmaps using the REPORT
	FORM command under Windows 95 or Windows 98. If the bitmap resolution is
	256-colors or greater and the SET PALETTE setting is OFF, repeated printing of
	the report results in a leak in GDI resources. If the printing continues for
	enough iterations (500 to 1000), you might see one or both of the following
	error messages:
	
	  Low Resources
	
	  Ninety percent or more of your system resources are in use. To free up system
	  resources, quit any programs that you are not using. If you do not, your
	  computer may stop responding.
	
	  [OK]
	
	- or -
	
	  Program Error
	
	  Printer is not ready.
	
	RESOLUTION
	==========
	
	As a workaround, you can try the following:
	
	- Use the SET PALETTE ON setting within your program. This is the default
	  setting.
	
	- Perform the printing on Windows NT rather than Windows 95 or Windows 98
	  computers.
	
	- Use a bitmap with a resolution of 16-color or monochrome rather than
	  256-color or 24-bit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Execute the following commands in the Command window to create a 256-color
	  bitmap. The path to MSPaint is only valid for Windows 95 and Windows 98
	  installations. If your install drive is something other than C:, you must
	  change the drive letter in the RUN command from C: to your actual drive
	  letter:
	
	  cBmpName = '"'+HOME()+'FOX.BMP'+'"'
	  RUN /n C:\PROGRA~1\ACCESS~1\MSPaint &cBmpName
	
	2. Paint opens with FOX.BMP being edited. Select File, then Save As from the
	  Paint menu. Enter "Fox256.bmp" (without the quotation marks) as the file
	  name.
	
	3. Select 256-color bitmap from the Save as type drop-down box.
	
	4. Click the Save button and then close Paint.
	
	5. From the Start menu, start the Resource Meter by selecting the Start button,
	  and then selecting Programs/Accessories/System Tools/Resource Meter. If
	  Resource Meter does not appear in the System Tools menu, you can add it
	  through the Control Panel item Add/Remove Programs. Click on the Windows
	  Setup tab in the Add/Remove Programs dialog box, highlight Accessories in the
	  Components list, and click the Details button. In the Accessories dialog box,
	  scroll down in the Components list, and check the check box next to the
	  System Resource Meter. Click OK to close the Accessories dialog, then click
	  OK in the Add/Remove Programs dialog box. The Resource Meter is installed.
	  You might be prompted for your Windows CD ROM.
	
	6. Size and arrange the Visual FoxPro window and the Resource Meter window so
	  you can see both of them at the same time.
	
	7. Return to FoxPro and run the following code from the Command window:
	
	  CREATE CURSOR ctemp (f1 c(5))
	  INSERT INTO ctemp (f1) VALUES ('xxyy')
	  CREATE REPORT testrep FROM ctemp
	  MODIFY REPORT testrep
	
	8. When the Report Designer appears, add a Picture/ActiveX Bound Control to the
	  report Page Header. In the Report Picture dialog box, select the Picture from
	  File option, type the value "(home()+'fox256.bmp')" (without the quotation
	  marks) in the File textbox, and then click OK. Close the Report Designer, and
	  select Yes to save the report.
	
	9. Run the following code from a program (.PRG) file:
	
	  #DEFINE NUMITERATIONS 600
	  SET PALETTE OFF
	  SET MESSAGE TO
	  IF MESSAGEBOX('Have you paused your printer yet?',4,"Tree Saver Alert") = 7
	     RETURN
	  ENDIF
	  FOR lni  = 1 to NUMITERATIONS
	     REPORT FORM testrep TO PRINTER NOCONSOLE
	     IF MOD(lni,10) = 0
	        SET MESSAGE TO ALLTRIM(STR(lni)) + ' Iterations'
	     ENDIF
	  ENDFOR
	  SET MESSAGE TO
	
	10. When the Tree Saver Alert message box appears, pause your printer to prevent
	  the reports from actually printing. Do this by going to the Start menu,
	  selecting Settings and then selecting Printers. Right-click on your default
	  printer, and select Pause Printing. Once you have paused your printer, click
	  Yes in the Tree Saver message box.
	
	11. Monitor the GDI in Resource Meter as the program executes.
	
	In Resource Meter, GDI resources: % free decreases in increments of one or two
	percent until completely depleted. The number of iterations is displayed in the
	Visual FoxPro status bar. The decrease occurs at about one or two percent per 10
	iterations of the loop.
	
	If either of the errors displayed in the SYMPTOMS section of this article occurs,
	set focus to the main Visual FoxPro window and press the ESCAPE key a few times
	to exit the program.
	
	Once the test has completed, delete the print jobs. Do this by going to the Start
	menu, selecting Settings and then selecting Printers. Right-click on your
	default printer, and select Purge Print Documents.
	
	Exiting Visual FoxPro results in some of the GDI resources being made available,
	but the only way to restore all the resources is to restart Windows 95 or
	Windows 98.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbReportWriter kbvfp300bBUG kbvfp500aBUG kbvfp600bug kbGrpDSFox _IK 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0,6.0 SP3
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
