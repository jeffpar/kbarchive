---
layout: page
title: "Q255572: FIX: Private Data Session and Rich Text Control Cause Error"
permalink: /kb/255/Q255572/
---

## Q255572: FIX: Private Data Session and Rich Text Control Cause Error

{% raw %}

	Article: Q255572
	Product(s): Microsoft FoxPro
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrl kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A form contains the ActiveX Rich Text control, a private Data Session, and has
	ActiveX dual interface support disabled (this is the default setting in Visual
	FoxPro 6.0). After pressing the ENTER key in the Rich Text control, the
	following error appears and Visual FoxPro closes:
	
	  Fatal error: Exception code: C0000005
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	Do one of the following to work around this problem:
	
	- Change the private Data Session to the default Data Session. In the code
	  example below, comment this line:
	
	  DataSession = 2  
	
	  and uncomment this line:
	
	  * DataSession = 1
	
	- Enable ActiveX dual interface support by commenting this line:
	
	   sys(2333,0)
	
	  and uncommenting this line:
	
	  * sys(2333,1)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was first corrected in Microsoft Visual
	FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code and run it:
	
	  CLOSE DATA ALL
	  CLEAR ALL
	  SYS(2333,0)
	  *SYS(2333,1)
	
	  PUBL ox
	  ox = CREATEOBJECT('form1')
	  ox.ADDOBJECT('IL1', 'olecontrol', 'RICHTEXT.Richtextctrl.1')
	  ox.il1.CONTROLSOURCE = "ctemp.m1"
	  ox.il1.HEIGHT = 100
	  ox.il1.VISIBLE = .T.
	  ox.SHOW
	
	  DEFINE CLASS form1 AS FORM
	      DATASESSION = 2
	      * DATASESSION = 1
	      PROCEDURE LOAD
	      CREATE CURSOR ctemp (m1 m)
	      INSERT INTO ctemp VALUES ("this is a test")
	  ENDPROC
	      PROCEDURE UNLOAD
	      CLOSE DATA ALL
	  ENDPROC
	  ENDDEFINE
	
	2. Place the cursor at the end of the line in the Rich Text control box.
	
	3. Press ENTER.
	
	The error in the "Symptoms" section appears and Visual FoxPro closes. The
	behavior also happens in Visual FoxPro 6.0 with Service Pack 3 installed. This
	behavior does not occur in Visual FoxPro 5.0 because the ControlSource property
	is not exposed.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrl kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP700
	Version           : :6.0,7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
