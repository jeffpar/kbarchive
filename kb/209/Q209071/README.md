---
layout: page
title: "Q209071: BUG: Doc Errors in &quot;Installing and Registering a Control&quot; Topic"
permalink: /kb/209/Q209071/
---

## Q209071: BUG: Doc Errors in &quot;Installing and Registering a Control&quot; Topic

	Article: Q209071
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbDocs kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB
	Last Modified: 17-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Help topic "Installing and Registering a Control" of the Windows CE Toolkit
	Help file contains some inaccuracies. Below, please find an updated Help topic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Installing and Registering a Control
	------------------------------------
	
	You can install and register a control to an emulator, to a device, or for use in
	the Visual Basic design environment. The following procedure shows how to
	install and uninstall a control using the Control Manager.
	
	To install and register a specified control:
	
	1. From the toolkit Windows CE menu, choose Control Manager.
	
	2. Choose the platform and target from the left pane of the Control Manager
	  window.
	
	3. Highlight a control from the list of controls.
	
	4. From the Control menu, choose Install to Target. The control is installed and
	  registered to the target device. A dialog box is displayed if the
	  installation is unsuccessful.
	
	To uninstall and unregister a specified control:
	
	1. From the toolkit Windows CE menu, choose Control Manager.
	
	2. Choose the platform and target from the left pane of the Control Manager
	  window.
	
	3. Highlight a control from the list of controls.
	
	4. From the Control menu, choose Uninstall from Target. The control is
	  uninstalled and unregistered from the target device. A dialog box is
	  displayed if the uninstallation is unsuccessful.
	
	You can also install and register a control that is not listed in the Control
	Manager.
	
	To install and register a control not listed in the Control Manager:
	
	1. Choose the platform and target from the left pane of the Control Manager
	  window.
	
	2. From the Control menu, choose Add New Control.
	
	3. Select the .dll (or .ocx) containing the control.
	
	The .dll (or .ocx) file is copied, then registered.
	
	Please note that by selecting Desktop Design Controls in the left pane of the
	Control Manager, you can install new controls (using the steps above) for use in
	the Visual Basic design environment. This allows you the ability to drop a
	custom control onto a Visual Basic form at design time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDocs kbToolkit kbVBp600bug kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
