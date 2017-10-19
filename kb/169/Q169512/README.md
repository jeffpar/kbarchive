---
layout: page
title: "Q169512: PRB: Controls Show on All Pages in Tabbed Dialog Control"
permalink: /kb/169/Q169512/
---

## Q169512: PRB: Controls Show on All Pages in Tabbed Dialog Control

	Article: Q169512
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual FoxPro control, such a text box or command button, is placed on a
	page of the Microsoft ActiveX Tabbed Dialog Control, version 5.0, it shows on
	all pages of the Tabbed Dialog Control. This is true even if the Tabbed Dialog
	Control is put in edit mode before placing the Visual FoxPro control on it.
	
	NOTE: The Tabctl32.ocx file that creates the Microsoft ActiveX Tabbed Dialog
	Control is not shipped in Visual FoxPro 6.0. However, if the file aready exists
	on any computer on which Visual FoxPro 6.0 is installed, the symptoms described
	in this article occur in Visual FoxPro 6.0.
	
	RESOLUTION
	==========
	
	Use the Visual FoxPro PageFrame base class or the SSTab Object ActiveX control
	that shipped with Visual FoxPro 5.0--version 4.01.0000 of Tabctl32.ocx.
	
	If Visual FoxPro 5.0a has been installed and the ActiveX controls have been
	updated to the ones that it installs, the older SSTab Object control can replace
	the newer version. Before following the steps below to do this, be sure to
	consider whether or not there are other applications, like Visual Basic 5.0,
	that may make use of the Microsoft Tabbed Dialog Control, version 5.0.
	
	1. Obtain version 4.01.0000 of Tabctl32.ocx. If the Visual FoxPro 5.0 CD is
	  available, it can be copied directly from the CD as the files are not
	  compressed.
	
	2. Rename the 5.00.3714 version of Tabctl32.ocx as Tabctl32.50a, and then copy
	  the 4.01.0000 version into either the Win95\System or WinNT\System32 folder
	  depending on the operating system.
	
	3. Start Visual FoxPro. From the Tools menu, select Options and click the
	  Controls tab.
	
	4. Ensure that the ActiveX controls option button is selected and also that the
	  Controls check box is selected.
	
	5. Locate the Microsoft Tabbed Dialog Control, version 5.0, and clear the check
	  box to the left of it.
	
	6. Click Add and navigate to the appropriate Windows\System folder and select
	  the Tabctl32.ocx file.
	
	7. In the list of Controls, find the SSTab Object and select the check box to
	  the left of it.
	
	8. Click Set As Default and then OK to exit the Options dialog box.
	
	9. To verify that the 4.01.0000 version of the .ocx file is being used, follow
	  the Steps to Reproduce Behavior section below, substituting the SSTab Object
	  control in place of the Microsoft Tabbed Dialog Control.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When adding a control to a Visual FoxPro PageFrame or the Tabbed Dialog Control,
	a common mistake is to not put the PageFrame or tabbed dialog into edit mode by
	right-clicking it and selecting Edit from the Shortcut menu. Controls placed on
	the Microsoft Tabbed Dialog Control, version 5.0, show on all pages of the
	control even if it was placed in edit mode before adding the control to the
	page. This does not happen with the SSTab Object ActiveX control that shipped
	with Visual FoxPro 5.0 or the Visual FoxPro PageFrame base class. Controls
	placed on the Microsoft Tabbed Dialog Control, version 5.0, in Visual Basic 5.0
	show only on the page they are placed on.
	
	As it was mentioned above, version 5.0 and 5.0a of Visual FoxPro install
	different versions of the tabbed dialog ActiveX control. Both .ocx files are
	named Tabctl32.ocx. Visual FoxPro 5.0 installs version 4.01.0000 of Tabctl32.ocx
	file and Visual FoxPro 5.0a installs version 5.00.3714. To check the version,
	find and select the Tabctl32.ocx in the WinNT\System32 or Win95\System folder
	and select Properties from the File menu, shortcut menu (if right-clicked) or
	press ALT+Enter with the file selected. You can also check the ActiveX controls
	loaded in the Controls tab in the Tools, Options dialog box. Version 4.01.0000
	of Tabctl32.ocx will show up as SSTab Object in the list of controls. Version
	5.00.3714 will show as Microsoft Tabbed Dialog Control, version 5.0.
	
	ActiveX controls are normally placed on Visual FoxPro forms using the OLE
	Container Control.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Determine which version of the Tabctl32.ocx file is being used by Visual
	  FoxPro. See above for instructions on how to do this. Visual FoxPro 5.0a and
	  the ActiveX controls that shipped with it will normally need to be installed
	  to reproduce the problem.
	
	2. In Visual FoxPro 5.0a, create a new form.
	
	3. Add an OLE Container Control to the form. From the Insert menu, select
	  Object, and select the Insert Control option button to show the ActiveX
	  controls. Click the Microsoft Tabbed Dialog Control, version 5.0 from the
	  list.
	
	4. Right-click on the Tabbed Dialog control and select Edit from the Shortcut
	  menu that appears.
	
	5. Add a Visual FoxPro control such as a text box or command button to one of
	  the pages of the tabbed dialog. If the drop-down list at the top of the
	  Properties sheet is clicked, the objects added to the tabbed dialog should
	  show as indented underneath Olecontrol1--the default name given to the Tabbed
	  Dialog control when it was placed on the form.
	
	6. Click on the tabs of the Tabbed Dialog control. The objects should show on
	  all the pages. Save and run the form and the behavior should be the same.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : 5.0 5.0a
	Issue type        : kbprb
	
	=============================================================================
	
