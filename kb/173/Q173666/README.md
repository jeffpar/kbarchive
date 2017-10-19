---
layout: page
title: "Q173666: SMSINST: Office 97 Does Not Show Template Icons"
permalink: /kb/173/Q173666/
---

## Q173666: SMSINST: Office 97 Does Not Show Template Icons

	Article: Q173666
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,97
	Operating System(s): 
	Keyword(s): kbusage smsinst
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click New on the File menu in Microsoft Word, Microsoft PowerPoint, or
	Microsoft Excel, a template dialog box is displayed, which does not show the
	icons for the templates. However, if you click in the template dialog box you
	will see the preview for the template.
	
	
	CAUSE
	=====
	
	When you repackage Office 97, Systems Management Server Installer sets an
	environment variable incorrectly and causes the registry entries to be
	incorrect. For example, see the value in the following registry key:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Office\8.0\Common
	  \FileNew\LocalTemplates
	
	  C:\\Program Files\Microsoft Office\Templates
	
	The path is incorrect because of the double backslash.
	
	WORKAROUND
	==========
	
	Edit the script and find the block:
	
	     Set variable MAINDIR to
	     If System Has Windows 95 Shell Interface Start Block
	        Get Registry....
	        Get Registry ...
	        Set Variable MAINDIR to C:\%MAINDIR%
	
	Change the text to:
	
	     Set Variable MAINDIR to C:%MAINDIR%
	
	Removing this extra backslash and then recompiling fixes the problem. Note there
	can be other directories before the MAINDIR variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms 1.20 smsinst
	
	======================================================================
	Keywords          : kbusage smsinst 
	Technology        : kbWordSearch kbSMSSearch kbExcelSearch kbPowerPtSearch kbWord97 kbWord97Search kbPowerPt97 kbZNotKeyword2 kbExcel97Search kbPowerPt97Search kbZNotKeyword3 kbMPTMathopolis
	Version           : WINDOWS:1.0,97
	Issue type        : kbbug
	
	=============================================================================
	
