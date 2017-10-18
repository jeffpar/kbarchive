---
layout: page
title: "Q276380: BUG: ADO 2.0 Reference Cannot Be Saved in VB 6.0 With VS SP4"
permalink: kb/276/Q276380/
---

## Q276380: BUG: ADO 2.0 Reference Cannot Be Saved in VB 6.0 With VS SP4

	Article: Q276380
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP4
	Operating System(s): 
	Keyword(s): kbADO200 kbVBp600 kbVS600sp4bug
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Studio 6.0 SP4, used with:
	   - Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	   - Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic 6.0, with the Visual Studio 6.0 Service Pack 4 installed, a
	reference to the Microsoft ActiveX Data Objects (ADO) 2.0 Library (msado20.tlb)
	cannot be saved. Instead, the reference is automatically upgraded to Microsoft
	ActiveX Data Objects (ADO) 2.5 Library (msado15.dll) when the project is
	re-opened.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 5. For additional
	information about Visual Studio service packs, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. On the Project menu, click References, and then select Microsoft ActiveX Data
	  Objects 2.0 Library. This associates msado20.tlb with the project.
	
	3. Save and close the project.
	
	4. Re-open the project.
	
	5. On the Project menu, click References, and note that Microsoft ActiveX Data
	  Objects 2.5 Library (msado15.dll) is now selected.
	
	NOTE: If a project uses or references the adodc control (msadodc.ocx) or the data
	environment designer (msderun.dll), then the upgrade from ADO 2.0 to ADO 2.5 is
	done automatically because both of these components require ADO 2.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO200 kbVBp600 kbVS600sp4bug 
	Technology        : kbVSsearch kbAudDeveloper
	Version           : :6.0,6.0 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
