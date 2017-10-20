---
layout: page
title: "Q155059: PRB: Need Design-Time License for Microsoft ActiveX Controls"
permalink: /kb/155/Q155059/
---

## Q155059: PRB: Need Design-Time License for Microsoft ActiveX Controls

{% raw %}

	Article: Q155059
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbCOMt kbContainer kbDlg kbLicensing kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCAT
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a machine with Visual C++ installed, when you try to place an ActiveX (OLE)
	control on a dialog box template, you see a message box stating:
	
	  The ActiveX control "<The control inserted>" could not be instantiated
	  because it requires a design-time license.
	
	CAUSE
	=====
	
	There are two known causes for this message being displayed:
	
	- Installing Visual C++ with USER privileges causes this problem because it
	  prevents the installation of Visual C++ from adding several entries in the
	  Registry.
	- The registry is corrupted.
	
	
	The controls that may display this problem include: Anibutton, COMMON DIALOGS,
	Desaware Mlist, Grid, ImageList, Key State, Lead Std, ListView, Microsoft Comm,
	Microsoft MAPI Message, Microsoft MAPI Session, Microsoft Masked Edit, Microsoft
	Multimedia, Microsoft Rich Textbox, MSDataCombo, MSDataList, Outline, PicClip,
	PICS Data Edit, Pinnacle-BPS Graph, ProgressBar, ProtoView Diagramming
	Control(IDO), Sax Basic Engine Control - Foundation, Sheridan Tabbed Dialog,
	Slider, SpinButton, Stack, StatusBar, Stylus Visual Voice for TAPI, TabStrip,
	THREED CHECKBOX, THREED COMMAND BUTTON, THREED FRAME, THREED GROUP PUSH BUTTON,
	THREED OPTION BUTTON, THREED PANEL, Toolbar, TreeView, VideoPlay.
	
	RESOLUTION
	==========
	
	To resolve this problem, reinstall Visual C++. If you are installing on a
	Windows NT or Windows 2000 computer, then you must be logged on as an
	administrator. If your registry has been corrupted, install all software that
	may have been affected, including the operating system if necessary.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q151804 PRB: Dynamic Creation of Redistributable Control Fails
	
	Additional query words: Registry lic setup licensed install
	
	======================================================================
	Keywords          : kbsetup kbCOMt kbContainer kbDlg kbLicensing kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbDialog 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
