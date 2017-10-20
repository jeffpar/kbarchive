---
layout: page
title: "Q221731: FIX: Copy/Paste Allowed With Password Character"
permalink: /kb/221/Q221731/
---

## Q221731: FIX: Copy/Paste Allowed With Password Character

{% raw %}

	Article: Q221731
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbContainer kbCtrl kbOOP kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug k
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can copy and paste the contents of a text box that has the PassWordChar
	property set into another object and see the information.
	
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
	
	In Visual Studio 6.0 Service Pack 3 for Visual FoxPro, if a text box object with
	the PassWordChar property is non-null, the copy and cut functionalities are
	disabled. However, you can still paste into the field.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called "Ztest."
	
	2. Add two text box objects to the form.
	
	3. In the first text box, set the PassWordChar property to *****.
	
	4. Run the form.
	
	5. Type something into the first text box.
	
	6. Highlight what you typed and press the CTRL+C key combination (to copy). Move
	  to the second text box and press the CTRL+V key combination (to paste). Note
	  that the second text box contains what was typed in the first text box.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbContainer kbCtrl kbOOP kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
