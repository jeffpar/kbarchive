---
layout: page
title: "Q221735: FIX: Reference to ActiveForm does not Allow Access to all Prop."
permalink: /kb/221/Q221735/
---

## Q221735: FIX: Reference to ActiveForm does not Allow Access to all Prop.

{% raw %}

	Article: Q221735
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbOOP kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Storing and referencing the ActiveForm property of the _VFP object as a variable
	prevents access to other properties of the object. For example, accessing the
	Objects.Count property of _VFP.ActiveForms causes the following error:
	
	  Unknown member OBJECTS.
	
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
	
	1. Create a program that contains the following code:
	
	     PUBLIC ox
	     ox = CREATE('form')
	     ox.ADDOBJECT('txt1', 'textbox')
	     ox.ADDOBJECT('txt2', 'textbox')
	     ox.txt1.VISIBLE = .T.
	     ox.txt2.VISIBLE = .T.
	     ox.SHOW()
	     ?_VFP.ACTIVEFORM.OBJECTS.COUNT
	     oy=_VFP.ACTIVEFORM
	     ?oy.OBJECTS.COUNT
	
	2. Run the program.
	
	The error mentioned in the SYMPTOMS section occurs on the last line of code.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbOOP kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
