---
layout: page
title: "Q174658: XL: &quot;Merge Handler&quot; Error Message Dragging Files into Briefcase"
permalink: kb/174/Q174658/
---

## Q174658: XL: &quot;Merge Handler&quot; Error Message Dragging Files into Briefcase

	Article: Q174658
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Excel 97 for Windows 
	- Microsoft Excel 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you a drag a file that is not a Microsoft Excel version 7.0 or Microsoft
	Excel 97 file into a briefcase, you may receive the following error message:
	
	  Update Briefcase
	  '<Filename.xls>' will not be updated because its merge handler cannot be
	  loaded.
	
	CAUSE
	=====
	
	This problem occurs if both of the following conditions are true:
	
	- The file you are dragging into the briefcase opens by default in Microsoft
	  Excel 97.
	
	  -and-
	
	- The file is not saved in the "Microsoft Excel 5.0/95 Workbook (*.xls)" format
	  or the Microsoft Excel 97 workbook format.
	
	RESOLUTION
	==========
	
	To correct this problem, use the appropriate method for your situation.
	
	NOTE: If the Microsoft Office 97 SR-1 Patch is installed, it is necessary to
	remove a registry key in the registry. To remove the registry key, use Method 2
	instead of Method 1.
	
	Method 1: Use If SR-1 Patch Is Not Installed
	--------------------------------------------
	
	IMPORTANT: Microsoft Office 97 Service Release CD-ROMs and replacement CD-ROMs
	are no longer available from Microsoft. For additional information about
	obtaining the Microsoft Office 97 Service Release 1 (SR-1) and Microsoft Office
	97 Service Release 2 (SR-2), click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q192874 OFF97: An Overview of Microsoft Office 97 Service Release 2 (SR-2)
	
	If you have not updated Office 97 by running the SR-1 Patch, remove Office 97,
	and then install the Office 97 SR-2 Replacement CD. To do this, follow these
	steps:
	
	1. On the Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs. In the list of installed programs, click
	  Microsoft Office 97, and then click Add/Remove. If you installed Microsoft
	  Office from a CD, you are prompted to insert the first CD.
	
	  If a dialog box notifies you that programs are running, quit the programs, and
	  then click OK.
	
	3. In the Microsoft Office 97 Setup dialog box, click Remove All.
	
	4. When you are prompted to remove shared components, click Remove All.
	
	  If you are prompted to restart the computer after Setup is finished, do so.
	
	5. Install Microsoft Office 97 SR-2.
	
	Method 2: Use If SR-1 Patch Is Installed
	----------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If you have updated Office 97 by running the SR-1 Patch, follow these steps:
	
	1. On the Start menu, click Run. In the Open box, type "regedit" (without the
	  quotation marks), and then click OK.
	
	2. In the Registry window, click the plus sign (+) to the left of the following
	  keys, in order:
	
	  HKEY_CLASSES_ROOT CLSID {00020820-0000-0000-C000-000000000046} Roles
	
	  Then, click the yellow Reconciler folder on the left. The text that appears in
	  the status bar should be the following:
	
	  \HKEY_CLASSES_ROOT\CLSID\{00020820-0000-0000-C000-000000000046}
	  \Roles\Reconciler
	
	3. On the Edit menu, click Delete, and then click Yes to delete the key.
	
	4. On the Registry menu, click Exit.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office 97 for Windows.
	This problem was corrected in Microsoft Office 97 SR-2 Replacement CD.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	Q172475 : OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	This problem occurs because the Xlrec.dll file attempts to use the shared
	workbooks functionality that is built into Microsoft Excel 7.0 and Microsoft
	Excel 97 to share the workbook in the briefcase. Other file formats that are
	opened in Microsoft Excel do not support the shared workbooks functionality and
	thus have no merge handle to load. This functionality was changed in the
	Microsoft Office 97 SR-2 Replacement CD so that all files formats that you open
	in Microsoft Excel can be shared in a briefcase.
	
	For additional information about the error message, please see the following
	article in the Microsoft Knowledge Base:
	
	Q161445 : OFF97: Errors Appear When Dragging Files into a Briefcase
	
	
	Additional query words: XL97
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExcelSearch kbExcel2000 kbExcel2000Search kbExcel97Search kbZNotKeyword3 kbExcelWinSearch
	Version           : :2000
	Issue type        : kbbug
	
	=============================================================================
	
