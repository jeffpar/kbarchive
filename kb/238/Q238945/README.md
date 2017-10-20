---
layout: page
title: "Q238945: FIX: Repeatedly Manipulating Data in Edit Box Causes Error Msg"
permalink: /kb/238/Q238945/
---

## Q238945: FIX: Repeatedly Manipulating Data in Edit Box Causes Error Msg

{% raw %}

	Article: Q238945
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbContainer kbCtrl kbvfp500aBUG kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbVS
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After editing a large amount of data within an Editbox object, Visual FoxPro 6.0
	produces the following error:
	
	  Fatal error: Exception code=C0000005
	
	In Visual FoxPro 5.0x running under Windows NT 4.0, the following Dr. Watson
	message appears:
	
	  An application error has occurred and an application log is being generated.
	  VFP.exe
	  Exception: access violation:(0x0000005),Address: <memory address>
	
	Visual FoxPro 5.0x running on Windows 98 produces the following error:
	
	  This program has performed an illegal operation and will be shut down.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	
	MORE INFORMATION
	================
	
	This error normally occurs while copying, pasting, and deleting large amounts of
	data manually. The code below, which automates the process, produces the same
	results.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Paste the following code into a program file:
	
	  CLEAR
	  CLEAR all
	  _screen.addobject('edt1','editbox')
	  _screen.edt1.width = 360
	  _screen.edt1.visible = .t.
	  _screen.EDT1.value = '12345678901234567890123456789012345678901234'
	  _screen.edt1.setfocus()
	  KEYBOARD '{ctrl+a}{ctrl+c}{END}{ctrl+v}{ctrl+v}{ctrl+v}{ctrl+v}'+ ;
	  '{ctrl+v}{ctrl+v}{ctrl+v}{ctrl+v}{ctrl+v}{ctrl+v}{ctrl+v}' + ;
	  '{ctrl+v}{ctrl+v}{ctrl+v}{ctrl+v}{ctrl+v}{ctrl+v}{ctrl+v}{ctrl+v}'
	  KEYBOARD '{home}{shift+uparrow}{shift+uparrow}{del}{shift+end}{home}'
	  KEYBOARD '{home}{shift+uparrow}{shift+uparrow}{backspace}{shift+end}{home}'
	
	2. Close the Command window, but leave the program open.
	
	3. Run the program by pressing the CTRL+E key combination.
	
	One of the errors mentioned in the SYMPTOMS section above occurs.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kberrmsg kbContainer kbCtrl kbvfp500aBUG kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
