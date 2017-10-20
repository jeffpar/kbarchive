---
layout: page
title: "Q150951: PRB: Setup Wizard Fails on HELO_SRV.VBP OC30.DLL Reference"
permalink: /kb/150/Q150951/
---

## Q150951: PRB: Setup Wizard Fails on HELO_SRV.VBP OC30.DLL Reference

{% raw %}

	Article: Q150951
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbole kbVBp400 kbGrpDSVB kbDSupport kb32bitOnly
	Last Modified: 20-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Setup Wizard fails when trying to locate the OC30.DLL file if it is used to
	build distribution disks for the \Vb\samples\remauto\hello\Helo_srv.VBP sample
	project.
	
	CAUSE
	=====
	
	The Helo_svr.VBP project was originally built using a BETA version of Visual
	Basic 4.0. The references are not properly updated in the released version of
	Visual Basic 4.0.
	
	RESOLUTION
	==========
	
	Use the following steps to resolve this problem:
	
	1. Open the project in the design environment.
	
	2. On the References Menu, select Options. Open the References dialog box.
	
	3. Remove the Standard OLE Types reference for OC30.DLL and add the Standard OLE
	  Types reference for OLEPRO32.DLL.
	
	4. Save the project.
	
	5. Run the Setup Wizard on the project.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Helo_srv.VBP sample project incorrectly makes a reference to the OC30.DLL
	file for the Standard OLE Types. This file is a run-time file for OCX controls
	built with the Microsoft Foundation Classes (MFC) 3.0. This file is not included
	with Visual Basic, and Visual Basic does not use it. The 32-bit edition of
	Visual Basic 4.0 points to the OLEPRO32.DLL file for the Standard OLE Types.
	
	There is an unrelated problem dealing with the OC30.DLL file. Many third party
	OCX manufacturers fail to ship this file with their OCXs built with MFC 3.0.
	Because Visual Basic does not include this file, the OCXs fail to register and
	run. This file must be obtained from the OCX manufacturer or Microsoft Visual
	C/C++ support.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbVBp400 kbGrpDSVB kbDSupport kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
