---
layout: page
title: "Q160921: PRB: Error Using OLE Controls"
permalink: kb/160/Q160921/
---

## Q160921: PRB: Error Using OLE Controls

	Article: Q160921
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use one of the ActiveX controls included with Visual FoxPro 5.0,
	an OLE error occurs.
	
	The following example is typical of the error message (but not the only wording
	that may be displayed):
	
	  OLE Idispatch exception code ) from TreeView Control: Imagelist must be
	  initialized before it can be used.
	
	CAUSE
	=====
	
	The Visual Basic Control Creation Edition 5.0 beta was installed on your system
	after Visual FoxPro 5.0 was installed.
	
	There is an incompatibility between Visual FoxPro 5.0 and the version of the
	ComCtl32.ocx that comes with Visual Basic Control Creation Edition (VBCCE) 5.0
	beta.
	
	
	RESOLUTION
	==========
	
	Follow these rules when you install the Visual Basic Control Creation Edition
	5.0 beta:
	
	1. Copy the existing Visual FoxPro 5.0 Comctl32.ocx (should be dated 8/21/96) to
	  a file called Comctl32.vfp.
	
	2. Install Visual Basic Control Creation Edition 5.0 beta (or any Visual Basic
	  5.0 beta).
	
	3. Copy the newly installed Comctl32.ocx to Comctl32.vb.
	
	4. Copy the Visual FoxPro Comctl32.vfp to Comctl32.ocx.
	
	5. Re-register the Visual FoxPro Comctl32.ocx control by executing the following
	  in a MS-DOS window:
	
	  
	
	        regsvr32 comctl32.ocx
	
	If you have already installed the Visual Basic Control Creation Edition 5.0 beta,
	you should rename the Visual Basic version of the .ocx file, and then re-install
	the Visual FoxPro version of ComCtl32.ocx.
	
	
	The steps to re-install the ActiveX control are as follows:
	
	1. Run the Setup.exe program in the root directory of Visual FoxPro 5.0.
	
	2. Choose "Add/Remove Components."
	
	3. Select "Professional Applications" and choose "Change Option."
	
	4. Select "ActiveX Controls" and clear the check box to remove the ActiveX
	  controls.
	
	5. Click "OK" to complete the removal (setup).
	
	6. Once the setup is completed, repeat the above steps, but mark the check box
	  for "ActiveX Controls" to re-install ComCtl32.ocx and the other controls.
	
	7. From the Visual FoxPro menu, choose "Tools/Options." Choose the "Controls"
	  tab and the "ActiveX Controls" option button, and ensure that the check boxes
	  for the controls in ComCtl32 are selected. These controls are shown in the
	  "ActiveX Controls Overview" Help topic.
	
	
	Additional query words: kbdsd vfoxwin
	
	======================================================================
	Keywords          : kbenv kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : :3.0,3.0b,5.0
	
	=============================================================================
	
