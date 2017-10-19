---
layout: page
title: "Q248055: BUG: Run-Time Error 713 Opening Data Report in Distributed App"
permalink: /kb/248/Q248055/
---

## Q248055: BUG: Run-Time Error 713 Opening Data Report in Distributed App

	Article: Q248055
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbDatabase kbDataBinding kbDeployment kbReportWriter kbVBp kbVBp600
	Last Modified: 30-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are distributing a Visual Basic application that includes a data report.
	After installation, you receive the following error when you attempt to open the
	data report from your application:
	
	  Run-time error '713': Application-defined or object defined error
	
	CAUSE
	=====
	
	The Data Report run-time file (Msdbrptr.dll) was not included in your setup
	package.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- Open your project, and include a reference to the Msdbrptr.dll file. This
	  file is listed as Microsoft Data Report Designer v6.0 in the References
	  dialog box. You may see Microsoft Data Report Designer v6.0 listed more than
	  once. Make certain that the file associated with the reference is
	  Msdbrptr.dll. Once the reference has been verified, rebuild your setup
	  package.
	
	  -or-
	
	- Manually include the Msdbrptr.dll file in the Package and Deployment Wizard
	  (PDW). You can add the file manually in the Included Files dialog box window
	  when you run the PDW and then rebuild your setup package.
	
	After the installation, the following files should be present on the target
	system in the indicated folders:
	
	  <windows system>\Msdbrptr.dll
	  <program files>\Common Files\Designers\Msderun.dll
	  <windows system>\Msstdfmt.dll
	
	The inclusion of Msdbrptr.dll (and its dependent files) typically corrects this
	problem. If you are still experiencing problems, make sure that the following
	files are included in your package:
	
	  Msdatrep.ocx
	  Msbind.dll
	
	Data Reports do not directly depend on these files. However, if the files are
	missing, this can affect the Data Environment that is used by your report.
	
	NOTE: If your application must have the Msdatsrc.tlb file, do not explicitly
	include this file because Msdatsrc.tlb is installed as part of the Microsoft
	Data Access Components (MDAC) upgrade.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Visual Basic installs two files, Msdbrpt.dll and MSdbrptr.dll, that are very
	similar. Both files are listed in the References dialog box as Microsoft Data
	Report Designer v6.0. The Msdbrpt.dll file is the Data Report designer, and the
	Msdbrptr.dll file is the Data Report designer runtime. You must distribute the
	run-time version of this file with your application. There is no dependency file
	for Msdbrpt.dll. If Msdbrpt.dll is installed with your application, a data
	report does not function correctly.
	
	There are several ways in which to add a data report to a Visual Basic project.
	With two known exceptions, Visual Basic adds the correct reference. If you add
	this reference manually, the similarity between these two files makes it easy to
	reference the wrong file. The other way to get an incorrect reference is to add
	the data report component through the Add Components dialog box. This adds a
	reference to the data report instead of the data report runtime file. Under
	these circumstances, the data report works only in the development environment
	or when the data report is installed to a computer that has Visual Basic
	installed.
	
	Additional query words: DataReport
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbDatabase kbDataBinding kbDeployment kbReportWriter kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
