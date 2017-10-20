---
layout: page
title: "Q192197: FIX: Beautify May Not Uppercase Extended ASCII Characters"
permalink: /kb/192/Q192197/
---

## Q192197: FIX: Beautify May Not Uppercase Extended ASCII Characters

{% raw %}

	Article: Q192197
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Visual FoxPro's Beautify against code that contains extended ASCII
	characters, the extended characters may not be set to the proper case.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	The normal ASCII character set runs from ASCII 33 to ASCII 126, inclusive.
	Extended ASCII characters are those outside of that range.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Because Microsoft Knowledge Base articles do not support extended ASCII
	  characters, we will place the text in the Windows clipboard through the
	  _CLIPTEXT environment variable, and paste it into a program file from the
	  clipboard. Run the following code after pasting it into the Command window,
	  placing the cursor at the end of the last line, and pressing ENTER:
	
	        CLIPTEXT = ;
	        "#DEFINE V"+chr(196)+"NSTER 1"+chr(13)+ ;
	        "#DEFINE H"+chr(214)+"GER 2"+chr(13)+ ;
	        "#DEFINE "+chr(197)+"TER 3"+chr(13)+ ;
	        "? v"+chr(228)+"nster"+chr(13)+ ;
	        "? h"+chr(246)+"ger"+chr(13)+ ;
	        "? "+chr(229)+"ter"+chr(13)+ ;
	        "? V"+chr(196)+"NSTER"+chr(13)+ ;
	        "? H"+chr(214)+"GER"+chr(13)+ ;
	        "? "+chr(197)+"TER"
	
	2. Paste the contents of the clipboard into a program (.prg) file.
	
	3. Right-click in the Editor window, and select Beautify from the Context menu.
	
	4. In the Beautify Options dialog box, select the "Match first occurrence" in
	  the Symbols drop-down list box, and then click the Run button.
	
	  Look at the Editor for the results. The text following one or more of the
	  first 3 ? commands contains a lower case character or characters.
	
	5. From the Edit menu, click Undo.
	
	6. Right-click the Editor Window, and then select Beautify from the Context
	  menu.
	
	7. In the Beautify Options dialog box, select the "UPPERCASE" in the Symbols
	  drop-down list box, and then click the Run button.
	
	Look at the Editor for the results. The text following one or more of the first 2
	? commands contains a lower case character.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp600fix kbVFp500abug kbXBase kbMiscTools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
