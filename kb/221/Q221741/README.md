---
layout: page
title: "Q221741: FIX: C0000005 Fatal Error with Unknown Var in Include File"
permalink: kb/221/Q221741/
---

## Q221741: FIX: C0000005 Fatal Error with Unknown Var in Include File

	Article: Q221741
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbVS600sp3fix kb
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you include a header file containing an unknown variable to a form or class
	using the Include File menu option, the following error occurs when saving the
	file:
	
	  Fatal error: Exception code=C0000005
	
	This error does not occur if you use the #INCLUDE to add the header file to the
	object.
	
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
	
	1. Create the following header file and call it Ztest.h:
	
	  #IF UnknownVar
	  #ENDIF
	
	2. Create a new class based on a custom class. Include the Ztest.h header file
	  using the Class menu pad and the Include File menu bar. Choose the Ztest.h
	  file in the Include File dialog box and click OK.
	
	3. Save the file.
	
	The C0000005 error message appears.
	Here is an automated example that runs in Visual FoxPro 6.0:
	
	1. Create a program with the following code:
	
	  #define EOL chr(13)
	  ***test.prg
	  dele file testxx.h
	  strtofile([#IFDEF BLA]+EOL+ ;
	   [#IF Empty(BLA)]+EOL+ ;
	   [#ENDIF]+EOL+ ;
	  	[#ENDIF], 'testxx.h')
	
	  dele file tempxx.vc?
	  LOCAL aobj[1], xx
	  _cliptext = 'testxx.h'
	  keyb '{alt+c}i{alt+i}{ctrl+v}{enter}{ctrl+w}'
	
	  CREATE CLASS TEMP1 AS FORM OF TEMPXX
	
	2. Save the file and run it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
