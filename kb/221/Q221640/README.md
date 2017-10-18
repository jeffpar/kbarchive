---
layout: page
title: "Q221640: FIX: C0000005 Fatal Error Importing Chinese Excel 97 Worksheet"
permalink: kb/221/Q221640/
---

## Q221640: FIX: C0000005 Fatal Error Importing Chinese Excel 97 Worksheet

	Article: Q221640
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running Visual FoxPro 6.0 U.S. version on a Traditional Chinese Windows 95 or 98
	operating system and attempting to import a Traditional Chinese Excel 5.0 or 97
	worksheet with DBCS character sheet name causes Visual FoxPro to produce the
	following error message:
	
	  Fatal Error: Exception code=C0000005
	
	The error message also occurs if you are running Visual FoxPro 6.0 US version on
	the US version of the Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	The above error also occurs in Visual FoxPro 6.0 if the Excel worksheet has
	Simplify Chinese character or Korean character as the sheet name. The above
	error will not occur if is using the Import Wizard from Visual FoxPro 6.0.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an workbook with Traditional Chinese Excel 97.
	
	2. Save the Excel workbook as book1.xls and type in Chinese characters for the
	  sheet name.
	
	3. Run Visual FoxPro 6.0, select the File menu pad and the Import menu bar to
	  import the Excel workbook.
	
	4. In the Import dialog, click the ellipses (...) button next to the From text
	  box to select book1.xls.
	
	5. Then, click the Sheet drop-down.
	
	  Immediately after clicking the drop-down, Visual FoxPro 6.0 produces the
	  following error and then terminates:
	
	  C0000005 Fatal Error
	
	  The above error message also occurs if the following command is issued in the
	  Command window:
	
	  IMPORT FROM book1.xls TYPE XL8 SHEET <Chinese sheet-name>
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
