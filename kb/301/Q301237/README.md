---
layout: page
title: "Q301237: HOWTO: Create a Visual Basic Project Template For Creating IIS C"
permalink: /kb/301/Q301237/
---

## Q301237: HOWTO: Create a Visual Basic Project Template For Creating IIS C

	Article: Q301237
	Product(s): Internet Information Server
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you develop custom Visual Basic components to run under Internet
	Information Services (IIS), you must set a number of properties to maximize the
	uptime of the IIS server. To make it easier on the development team, it is
	recommended that a project template be created with all of the necessary
	settings already set. By doing this you can remove the possibility that a
	component will be created without these settings and therefore cause server
	problems when it is put into use.
	
	MORE INFORMATION
	================
	
	To create a project template, follow these steps:
	
	1. In Visual Basic, create a new ActiveX DLL project.
	
	2. On the Project menu, click Properties.
	
	3. On the General tab, select Unattended Execution and Retain in Memory.
	
	NOTE: Unattended Execution and Retain in Memory are necessary so that the IIS
	server does not stop responding (hang) or crash because of the Visual Basic
	dynamic-link library (DLL). For more information on the issues you can encounter
	if these settings are not selected, see the "References" section.
	4. On the Compile tab, select Create Symbolic Debug Info.
	
	NOTE: Create Symbolic Debug Info creates symbol files for the DLL whenever you
	compile. These can be used to debug problems with the DLL.
	
	5. On the Make tab, select Auto Increment.
	
	6. Click OK.
	
	7. On the Tools menu, click Options.
	
	8. On the Environment tab, note the setting for Template Directory. This is
	  where you will save the Visual Basic project (.vbp) file.
	
	9. Click OK.
	
	10. On the File menu, click Save Project As.
	
	11. Save the .cls file in any folder other than the template folder that is
	  listed on the Environment tab.
	
	12. Save the .vbp file in the template folder that is listed on the Environment
	  tab. Give the file a memorable name, such as IIS Component.vbp.
	
	You can see this template in the template directory when you click Open Project
	on the File menu. All necessary settings are set.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q214755 FIX: VB 6 DLL Settings Cause Access Violation During MTS Shutdown
	
	  Q191119 FIX: VB Classes Can Cause IIS to Have Access Violations
	
	  Q243548 INFO: Design Guidelines for VB Components Under ASP
	
	  Q281630 HOWTO: Configure Visual Basic DLL Project Properties to Run in IIS,
	  MTS, or COM+
	
	Additional query words: vb retain memory unattended execution visual basic iis
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis500 kbiis400 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
