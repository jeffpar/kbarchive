---
layout: page
title: "Q221990: PRB: Can't Add Windows Common Controls or Common Dialog Control"
permalink: /kb/221/Q221990/
---

## Q221990: PRB: Can't Add Windows Common Controls or Common Dialog Control

{% raw %}

	Article: Q221990
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCmnCtrls kbRegistry kbVBp kbVBp500 kbVBp600 kbIDEProject kbGrpDSVB
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	Visual Basic 6.0 and Visual Basic 5.0 are both installed on the same system.
	After uninstalling Visual Basic 6.0, the following error appears when you
	attempt to add the Windows Common Controls or the Common Dialog control to a
	Visual Basic 5.0 project:
	
	  Error
	  Could Not Be Loaded
	
	
	CAUSE
	=====
	
	The registry contains a reference to a control version that was removed by
	uninstalling Visual Basic 6.0.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Delete the registry key for the problem control from:
	
	  HKEY_CLASSES_ROOT\TypeLib
	
	and re-register it. For additional information about deleting and re-registering
	an ActiveX control, please refer to the following article in the Microsoft
	Knowledge Base:
	
	  Q217180 HOWTO: Delete and Re-Register TypeLib GUID for ActiveX Control
	
	
	MORE INFORMATION
	================
	
	The following are the Class ID numbers for the controls known to be affected by
	this problem:
	
	
	ActiveX Control          File Name      Class ID
	-------------------------------------------------------------------------
	Windows Common Controls  comctl32.ocx  6B7E6392-850A-101B-AFC0-4210102A8DA7
	Common Dialog Control    comdlg32.ocx  F9043C88-F6F2-101A-A3C9-08002B2F49FB
	
	When you locate the Class ID folder for these controls in the registry, the
	folder will contain a version folder. This version folder contains the version
	entries for these controls.
	
	Installing multiple versions of the same ActiveX control results in multiple
	entries in the version folder. Deleting the ActiveX folder from the registry and
	then registering the control will add the correct entries to the registry.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCmnCtrls kbRegistry kbVBp kbVBp500 kbVBp600 kbIDEProject kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
