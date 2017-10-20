---
layout: page
title: "Q223166: PRB: &quot;Error 7 - Out of Memory &quot; When Loading Books Online"
permalink: /kb/223/Q223166/
---

## Q223166: PRB: &quot;Error 7 - Out of Memory &quot; When Loading Books Online

{% raw %}

	Article: Q223166
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbVBp500 kbVS97 kbDevStudio kbGrpDSVB
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears when you attempt to load Books Online:
	
	  Error 7 - Out of Memory
	
	CAUSE
	=====
	
	Books Online is attempting to use an older version of one of the following
	files:
	
	Control                                       File Name      Version Number
	---------------------------------------------------------------------------
	Windows Common Controls ActiveX Control DLL   comctl32.ocx   5.0.37.14
	Common Dialog ActiveX Control                 comdlg32.ocx   5.0.37.14
	Microsoft OLE Property Support DLL            olepro32.dll   5.0.4055.1
	
	Older versions of these files may be installed by other software programs, such
	as the software included with IOMEGA Zip drives or Jaz drives. The correct
	versions of these files should be installed in your system directory.
	
	RESOLUTION
	==========
	
	Unregister these files using REGSVR32 with the /U option and then register the
	correct versions in your system directory.
	
	MORE INFORMATION
	================
	
	To prevent ActiveX control conflicts such as this from occurring, remove all
	other copies of these files from directories other than the system directory.
	Your system directory should contain the latest versions of ActiveX controls.
	Register the versions in your system directory.
	
	REFERENCES
	==========
	
	For additional information about REGSVR32, please see the following article in
	the Microsoft Knowledge Base:
	
	Q198038 INFO: Useful Tools for Package and Deployment Issues
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnCtrls kbVBp500 kbVS97 kbDevStudio kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0,97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
