---
layout: page
title: "Q229579: PRB: CE ActiveX Control Is Not in List of Insertable Controls"
permalink: /kb/229/Q229579/
---

## Q229579: PRB: CE ActiveX Control Is Not in List of Insertable Controls

{% raw %}

	Article: Q229579
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): _IK920 kbATL kbCtrlCreate kbMFC kbVC600 kbOSWinCEsearch kbCompGallery kbGrpDSMFCATL
	Last Modified: 18-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After building and registering a CE ActiveX control, there is no way to insert
	it onto a dialog box in the Resource Editor. The control does not appear in the
	"Insert ActiveX Control" dialog box. The control also does not appear in the
	list of controls in the "Components and Controls Gallery."
	
	CAUSE
	=====
	
	The Resource Editor and Components and Controls Gallery only recognize desktop
	ActiveX controls.
	
	RESOLUTION
	==========
	
	A desktop/Win32 version of the control must be created and registered, as
	follows:
	
	1. Using the project wizards, create a Win32 version of the control project in a
	  separate directory using the same name as the CE project (for ATL projects,
	  you also need to insert the control via the ATL Object Wizard).
	
	2. Close the project.
	
	3. Delete all files except for the .dsw and .dsp files.
	
	4. Rename Xxx.dsw to Xxx_win32.dsw, and Xxx.dsp to Xxx_win32.dsp.
	
	5. Copy the .dsw and .dsp files to the project directory of the CE ActiveX
	  control.
	
	6. Open Xxx_win32.dsw as a text file and find the reference to Xxx.dsp. Change
	  Xxx.dsp to Xxx_win32.dsp.
	
	7. Open Xxx_win32.dsw as a project workspace.
	
	8. If there are files in the CE project that are not Wizard-generated, you need
	  to add them by clicking Add To Project on the Project menu, and then clicking
	  Files.
	
	9. Build the project. The Win32 version of the control will automatically be
	  registered and available for inserting in the Resource Editor or Component
	  Gallery.
	
	The Win32 version of the control is only required at design time. A
	platform-specific build of the control will be used at run time (for example, in
	emulation, a version of the control built with x86em will be used).
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	"Converting a Windows CE ActiveX Control to a Windows Desktop Version" in
	"C:\Program Files\Windows CE Tools\Rlnvcce6.htm". This file comes with the CE
	Toolkit for Visual C++ 6.0.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q221083 BUG: Can't Insert CE ActiveX Control onto a Dialog Box in the
	  Resource Editor
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK920 kbATL kbCtrlCreate kbMFC kbVC600 kbOSWinCEsearch kbCompGallery kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCETK600VC
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
