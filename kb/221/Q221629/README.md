---
layout: page
title: "Q221629: FIX: &quot;Unknown COM status code&quot; With ActiveX Conferencing Control"
permalink: /kb/221/Q221629/
---

## Q221629: FIX: &quot;Unknown COM status code&quot; With ActiveX Conferencing Control

{% raw %}

	Article: Q221629
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600fix kbGrpDSFox kbDSupport
	Last Modified: 23-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You attempt to create or run a form that contains the ActiveX Conferencing
	Object control. When adding the control to the form in the Form Designer, or
	running the form, you may see one of the following errors under Visual FoxPro
	5.0:
	
	  OLE error code 0x80040200: Unable to impersonate DCOM client.
	
	-or-
	
	  OLE error code 0x80040200: Unknown OLE status code.
	
	Performing the same tasks under Visual FoxPro 6.0, it may work without error, or
	you may see the following error:
	
	  OLE error code 0x80040200: Unknown COM status code.
	
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
	
	The ActiveX Conferencing Object is an ActiveX control that installs with
	Microsoft NetMeeting.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a new OLE Container Control.
	
	3. In the Insert Object dialog box, select the Insert Control option. After this
	  list populates, select ActiveX Conferencing Object from the Control type
	  list, then click OK.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
