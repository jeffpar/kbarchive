---
layout: page
title: "Q167707: PRB: Visual Basic Replaces Missing Controls with PictureBoxes"
permalink: kb/167/Q167707/
---

## Q167707: PRB: Visual Basic Replaces Missing Controls with PictureBoxes

	Article: Q167707
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbtshoot kbui kbusage kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	REFERENCES
	==========
	
	For additional information, see the following article in the Microsoft Knowledge
	Base:
	
	  Q161137 : HOWTO: Use Project and Binary Compatibility
	
	See also the following section in the Visual Basic 5.0 Books Online:
	
	Visual Basic 5.0 Components Guide, Chapter 7, "Debugging, Testing, and Deploying
	Components"
	
	SYMPTOMS
	========
	
	If a Visual Basic project uses a custom control (.OCX) whose CLSID has changed
	since the project was last opened, the following message will be displayed when
	opening the project:
	
	  '<Path To OCX>' could not be loaded-Continue Loading Project?
	
	After choosing "Yes," a second message will occur two times:
	
	  Errors during load. Refer to <Path To LOG File> for details
	
	Once the project is opened, all occurrences of the custom control have been
	replaced with PictureBox controls.
	
	CAUSE
	=====
	
	When Visual Basic attempts to load a custom control, each control is verified by
	its CLSID. If the CLSID stored with the project differs from the CLSID of the
	custom control, Visual Basic cannot load the control. In an attempt to maintain
	as many properties as possible, Visual Basic replaces the missing control with a
	PictureBox control. The code associated with the missing control is retained.
	
	A CLSID of a custom control changes when any of the following conditions are
	true:
	
	- The custom control project's Version Compatibility setting is set to "No
	  Compatibility." When no compatibility is set, a new CLSID is generated for a
	  custom control every time it is compiled.
	
	- The custom control project's Version Compatibility setting is set to "Project
	  Compatibility" or "Binary Compatibility," and the control's interface has
	  been modified in such a way that compatibility could not be maintained. This
	  will primarily occur if a Property or Method definition has changed.
	
	- A control is overwritten and the newer version has a different CLSID.
	
	For more information about project compatibility, refer to the REFERENCES section
	below.
	
	RESOLUTION
	==========
	
	  WARNING: ANY USE BY YOU OF THE FOLLOWING STEPS PROVIDED IN THIS ARTICLE IS AT
	  YOUR OWN RISK. Microsoft provides these steps "as is" without warranty of any
	  kind, either express or implied, including but not limited to the implied
	  warranties of merchantability and/or fitness for a particular purpose.
	
	The CLSID of each custom control is saved in the project file (.VBP). The VBP
	file may be opened with Notepad or any text editor. If you know the new CLSID
	for the new version of the custom control, the VBP file can be modified to
	reflect this change in CLSIDs.
	
	NOTE: Version compatibility in custom controls is used to ensure that your new
	version of a custom control will not break backward compatibility with
	applications that may be using older versions of your custom control. Following
	the example below to modify the project file with the new CLSID could result in
	unexpected errors in your application.
	
	For example, if your custom control, named Custom.OCX, appears in your project, a
	line in the VBP file could read as follows:
	
	     Object={B0784T02-A67Y-11E0-8840-00DD00F7B36C}#1.0#0; Custom.Ocx
	
	You can modify the CLSID in the above line,
	
	     {B0784T02-A67Y-11E0-8840-00DD00F7B36C}
	
	with the new CLSID of the Custom.Ocx. Saving the VBP file and reopening the
	project with Visual Basic should solve the problem.
	
	To obtain the new CLSID of your custom control, you may need to search the system
	registry or use a tool such as OLE2VIEW.EXE that can provide such information.
	The utility, OLE2VIEW.EXE, can be downloaded from the Microsoft Internet site at
	http://www.microsoft.com. To find the download file, search for "OLE2VIEW."
	
	STATUS
	======
	
	This behavior is by design.
	
	======================================================================
	Keywords          : kbenv kbtshoot kbui kbusage kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbprb
	
	=============================================================================
	
