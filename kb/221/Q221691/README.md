---
layout: page
title: "Q221691: FIX: ADO Reference Keeps Visual FoxPro in Memory after Quitting"
permalink: /kb/221/Q221691/
---

## Q221691: FIX: ADO Reference Keeps Visual FoxPro in Memory after Quitting

{% raw %}

	Article: Q221691
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbADO kbDatabase kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After opening an ADO connection from within Visual FoxPro, Visual FoxPro may
	remain resident in memory after quitting the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run following code:
	
	  Conn = CreateObject("ADODB.Connection")        
	  CLEAR ALL
	  QUIT
	
	2. Press theCTRL+ALT+DEL key combination to open Task Manager, and note that
	  VFP6.EXE may still be listed as active.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO kbDatabase kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
