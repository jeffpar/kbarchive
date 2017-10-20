---
layout: page
title: "Q155257: Dialog Templates in Memory"
permalink: /kb/155/Q155257/
---

## Q155257: Dialog Templates in Memory

{% raw %}

	Article: Q155257
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbfile kbsample kbnokeyword kbDlg kbMFC kbResource kbVC400 kbVC420 kbGrpDSMFCATL kbDial
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dialog boxes can be created by using templates in resources or from templates
	built in memory at run time. The sample contains a class CDlgTempl, which can be
	used to create these templates in memory. This class provides an easy interface
	for building and manipulating templates in memory.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Dlgtpl32.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	The DLGTEMPLATE and DLGITEMTEMPLATE structures are used for building templates
	in memory. These structures are not fixed-length structures. They also must
	aligned properly.
	
	This sample provides a class to build these structures correctly. It also
	provides the ability to read a template from the resource and then manipulate
	them. Some of the important functions are:
	  SetDlgTemplate  Sets some of the properties of the dialog box.
	
	  SetCaption      Sets the caption for the dialog box.
	
	  AddControl      Adds a control to the template.
	
	  RemoveControl   Removes a control from the template.
	
	  MoveControl     Changes the TAB order of the control.
	
	  LockTemplate    Returns a pointer to memory that contains the dialog
	                  box template in a form that can be used with
	                  CreateDialogIndirect.
	
	  UnlockTemplate  Should be called to free the memory allocated by
	                  LockTemplate.
	
	  CreateTemplateInMemory  Fills the memory passed into the function with
	                  the dialog box template.
	
	  FromResource    Initializes the object with information from the
	                  template in resource.
	The sample illustrates using the class by loading the about box from resource and
	changing the Caption for the dialog box.
	
	REFERENCES
	==========
	
	See the Win32 SDK.
	
	Additional query words: 4.00 4.10 4.20 DLGTEMPLATE DLGITEMTEMPLATE
	
	======================================================================
	Keywords          : kbfile kbsample kbnokeyword kbDlg kbMFC kbResource kbVC400 kbVC420 kbGrpDSMFCATL kbDialog 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	
	=============================================================================
	

{% endraw %}
