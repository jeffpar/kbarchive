---
layout: page
title: "Q231393: BUG: Using DCOM with an Active Document"
permalink: /kb/231/Q231393/
---

## Q231393: BUG: Using DCOM with an Active Document

	Article: Q231393
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbcode kbActiveDocs kbDCOM kbDownload kbVBp600bug kbCodeDownload kbGrpDSInet
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Navigating to an Active Document that uses Distributed Component Object Model
	(DCOM) results in the following message:
	
	  Internet Explorer is opening file of unknown type: <Name of
	  Document>.VBD from...
	
	This happens when CliReg32.exe is included in the CAB instead of downloaded from
	the Microsoft Web site, or installed as a separate CAB from the local server.
	
	CAUSE
	=====
	
	When packaging up a DCOM Active Document using the Visual Basic Package and
	Deployment Wizard (PDW), the user gets the option to include CliReg32.exe in the
	current CAB; however, selecting this option does not work properly.
	
	RESOLUTION
	==========
	
	Choose to download CliReg32.exe from the Microsoft Web site, or download
	Msracli.cab from the Microsoft site and refer to in from your local Web server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	If you look in the code download error log file, you should see the following
	error:
	
	  Code Download Error: (hr = 80070057) The parameter is incorrect.
	
	Use the following steps to view this file:
	
	1. From the Internet Explorer 4 View menu, select Internet Options. Or from the
	  Internet Explorer 5 Tools menu, select Internet Options.
	
	2. On the General tab, click Settings.
	
	3. Click the View Files button.
	
	4. Sort the files by clicking on the Name column header.
	
	5. You should see at least one file named something like this:
	
	  ?CodeDownloadErrorLog!name={0000000-0000-0000-0000-000000000000}
	
	  Where the zeroes contain the class ID of your Active Document.
	
	6. Close the dialog boxes that you opened in steps 2 and 3.
	
	7. Drag the error log into Internet Explorer.
	
	NOTE: CliReg32.exe could be packaged in its own CAB, but not in the same one as
	the .vbr or .tlb files. Note that the PDW assumes the .inf file name is
	Msracli.inf when you choose a local CAB. To avoid changing each .inf file
	generated for any DCOM project, name the .inf in your CLIREG CAB Msracli.inf.
	
	REFERENCES
	==========
	
	For additional trouble shooting guidelines for this same error message, see the
	following article in the Microsoft Knowledge Base:
	
	  Q167380 PRB: IE Reports Unknown Type .VBD for ActiveX Document
	
	For further information on using CLIREG32, see the following article in the
	Microsoft Knowledge Base:
	
	  Q194636 HOWTO: Manually Register a VB Remote Component Using CLIREG32
	
	  Q185193 PRB: Clireg32 Fails to Register the Type Library of DCOM Server
	
	  Q221173 PRB: Installing VB6 Doesn't Update Clireg32.exe
	
	For more information, see the following Webcast:
	
	  How Does Internet Component Download Work?
	
	Additional query words: DCOM ActiveX Documnts CLIREG32.EXE VBR
	
	======================================================================
	Keywords          : kbcode kbActiveDocs kbDCOM kbDownload kbVBp600bug kbCodeDownload kbGrpDSInet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
