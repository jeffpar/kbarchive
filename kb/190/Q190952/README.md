---
layout: page
title: "Q190952: PRB: Upgrade Project to Use New VB6 Controls"
permalink: /kb/190/Q190952/
---

## Q190952: PRB: Upgrade Project to Use New VB6 Controls

	Article: Q190952
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbComCtrls
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following controls are not automatically updated when a Visual Basic 5.0
	project is loaded by Visual Basic 6.0:
	
	- Comctl32.ocx
	- Comct232.ocx
	- Mschart.ocx
	
	You must manually upgrade the project to the new Visual Basic 6.0 controls:
	
	- Mscomctl.ocx
	- Mscomct2.ocx
	- Mschrt20.ocx
	
	NOTE: The "Upgrading Applications that Use the Windows Common Controls" topic in
	the Visual Basic documentation incorrectly states that these controls are
	automatically upgraded. Specifically, the following statements are in error:
	
	  When an application - created with Visual Basic version 5 and using these
	  controls - is first loaded in Visual Basic version 6, a dialog box will
	  appear informing you that a new version is available, and that the controls
	  can be upgraded. At that time, you can choose to upgrade the project to the
	  new controls, or continue to use the older control versions.
	
	CAUSE
	=====
	
	This behavior is by design. The new controls are not backward compatible with
	the older versions and, in accordance with the rules of COM, were given new file
	names and new GUIDs. This prevents your application from breaking existing
	applications that use the older controls. Because the new controls have new
	names and GUIDs, they also have new Typelibs. When you load a Visual Basic
	project, it checks the Typelib version. However, Visual Basic does not know the
	Controls were updated because the Typelib for the new controls have a different
	GUID than the Typelib for the old controls.
	
	RESOLUTION
	==========
	
	To upgrade a project to the newer version, do one of the following:
	
	- Download the ActiveX Control Update Utility from the following Web site:
	
	  http://msdn.microsoft.com/vbasic/downloads/axupgrade.asp
	
	- Manually update your project and from files using the following steps:
	
	1. Open the .vbp file in a text editor, such as Notepad, and change the lines
	  that reference the old version of the .ocx to the following:
	
	     Object={831FDD16-0C5C-11D2-A9FC-0000F8754DA1}#2.0#0; MSCOMCTL.OCX
	     Object={86CF1D34-0C5F-11D2-A9FC-0000F8754DA1}#2.0#0; MSCOMCT2.OCX
	     Object={65E121D4-0C60-11D2-A9FC-0000F8754DA1}#2.0#0; MSCHRT20.OCX
	
	2. Save and close the .vbp file.
	
	3. Open any .frm file (or .ctl file) that uses one of these controls in a text
	  editor, and change the lines that reference the old version of the .ocx to
	  the following:
	
	   Object = "{831FDD16-0C5C-11D2-A9FC-0000F8754DA1}#2.0#0"; "MSCOMCTL.OCX"
	   Object = "{86CF1D34-0C5F-11D2-A9FC-0000F8754DA1}#2.0#0"; "MSCOMCT2.OCX"
	   Object = "{65E121D4-0C60-11D2-A9FC-0000F8754DA1}#2.0#0"; "MSCHRT20.OCX"
	
	4. Change all text that references the old libraries to the new library names.
	  You need to replace ComCtlLib, Comctl2, and MSChartLib with MSComCtlLib,
	  MSComCtl2, and MSChart20Lib. For example, change:
	
	      ComctlLib.ImageList
	
	  To:
	
	      MSComctlLib.ImageList
	
	5. Save and close the file. When you open the project in Visual Basic 6.0, it
	  will use the new Mscomctl.ocx, Mscomct2.ocx or Mschrt20.ocx controls.
	
	NOTES:
	
	- IMPORTANT: Before you edit your .vbp, .frm, or .ctl files, you should backup
	  all of the files in your project.
	
	- While the objects listed in step 1 and 2 are very similar, they are not
	  identical and the upgrade will not work properly if each is not copied
	  exactly to the correct file.
	
	- If you get a message stating that the header is corrupt when you attempt to
	  load the project, you have probably made a copy error. Please go to your
	  backup and repeat the process.
	
	- If you prefer to continue using the older versions of these controls,
	  Comctl32.ocx and Comct232.ocx are included on the Visual Basic 6.0 product
	  CD-ROM in the \OS\System directory. Mschart32.ocx resides in the
	  \Common\Tools\VB\Controls directory.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbComCtrls 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
