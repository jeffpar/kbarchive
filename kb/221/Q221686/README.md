---
layout: page
title: "Q221686: FIX: Hang When Arrowing Through Disabled Item in ComboBox"
permalink: /kb/221/Q221686/
---

## Q221686: FIX: Hang When Arrowing Through Disabled Item in ComboBox

{% raw %}

	Article: Q221686
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbContainer kbCtrl kbvfp600 kbvfp600bug kbVS600sp2 kbVS600sp2fix kbVS600S
	Last Modified: 17-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the UP ARROW key to arrow up past a disabled item in the combobox causes
	Visual FoxPro 6.0 to hang.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: Close all running applications and save your data before following this
	procedure.
	
	1. Create a PRG.
	
	2. Cut and paste the following code into the PRG:
	
	  PUBLIC oform1
	
	  oform1=NEWOBJECT("form1")
	  oform1.Show
	  RETURN
	
	  DEFINE CLASS form1 AS form
	
	     Top = 0
	     Left = 0
	     Height = 123
	     Width = 138
	     DoCreate = .T.
	     Caption = "Form1"
	     Name = "Form1"
	
	     ADD OBJECT combo1 AS combobox WITH ;
	        RowSourceType = 1, ;
	        RowSource = "one,\two,three,four", ;
	        Height = 24, ;
	        Left = 0, ;
	        Top = 12, ;
	        Width = 100, ;
	        Name = "Combo1"
	
	  ENDDEFINE
	   
	
	3. Save and run the PRG.
	
	4. Click the combobox drop-down list, using the DOWN ARROW key to arrow down the
	  list.
	
	5. After highlighting the third item in the combobox drop-down list, use the UP
	  ARROW key to arrow up past the disabled item. Note that once the highlighted
	  bar moves past the disabled item, Visual FoxPro hangs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbContainer kbCtrl kbvfp600 kbvfp600bug kbVS600sp2 kbVS600sp2fix kbVS600SP1 kbVS600sp3fix kbGrpDSFox kbVS600SP1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
