---
layout: page
title: "Q137947: FIX: Bitmaps Black or Poor Quality Printed in LaserJet Reports"
permalink: /kb/137/Q137947/
---

## Q137947: FIX: Bitmaps Black or Poor Quality Printed in LaserJet Reports

	Article: Q137947
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Picture fields containing bitmaps in reports print black or in poor quality on
	Hewlett-Packard LaserJet 4 printers under Windows or Windows for Workgroups
	version 3.1x.
	
	WORKAROUND
	==========
	
	Upgrade to Windows 95 and use the LaserJet 4 driver that ships with Windows 95,
	or install and use the LaserJet 3 driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new report, and add a table to the data environment.
	
	2. Add a picture or OLE bound control to the page header of the report. Click
	  File as the source, and select Winlogo.bmp from the Windows directory as the
	  picture file.
	
	3. Click the Picture object on the Report Form to select it, and on the Edit
	  menu, click Copy. Then on the Edit menu, click Paste to copy the existing
	  picture. Place the newly created copy in the page header next to the first
	  picture.
	
	4. Click one of the pictures to select it. Then click Mode on the Format menu.
	  Change the Mode from the default of Transparent to Opaque.
	
	5. Move the Detail band separator bar up against the bottom of the Page Header
	  separator bar to conserve paper when the report is printed.
	
	6. Save and then print the report to a LaserJet 4 printer.
	
	7. The picture set as Transparent will appear as a black box. The picture set as
	  Opaque will appear as line drawing with very low resolution.
	
	Additional Notes
	----------------
	
	- This behavior occurs under Windows 3.1x with the LaserJet 4 driver versions
	  1.2 through 1.5.
	
	- Pictures print normally on the LaserJet 4 from Windows 95 and Windows NT
	  version 3.5x.
	
	- Use of the LaserJet 3 driver under Windows 3.1x with a LaserJet 4 printer may
	  correct the problem. However, some advanced features of the LaserJet 4 may
	  not be used in such a configuration.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
