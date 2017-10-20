---
layout: page
title: "Q222111: FIX: FFCs - _WebBrowser3 and 4 in _webview.vcx Give Ref. Error M"
permalink: /kb/222/Q222111/
---

## Q222111: FIX: FFCs - _WebBrowser3 and 4 in _webview.vcx Give Ref. Error M

{% raw %}

	Article: Q222111
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 01-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Visual FoxPro project that includes the _WebBrowser3 or _WebBrowser4
	class. When you build the project, a dialog box appears with the following
	contents:
	
	  Locate File
	
	  Unable to find Unknown VFPSCRPT
	
	  [Locate] [Ignore] [Ignore all] [Cancel]
	
	CAUSE
	=====
	
	The Project Manager cannot resolve a reference to VFPSCRPT.
	
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
	
	1. Create a new project.
	
	2. Add a main program.
	
	3. Add the _webview class to the project. It is located in the VFP98\Gallery
	  directory.
	
	4. Build the project.
	
	5. A Locate dialog box appears, asking to locate the Visual Class Library
	  _Controls. Press the Locate button to bring up the Open dialog. Find and then
	  select _Controls.vcx in the VFP98\FFC directory. Click OK to close the Open
	  dialog.
	
	Another Locate dialog appears, as described in the SYMPTOMS section of this
	article.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbvfp600 kbvfp600bug kbFFC kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
