---
layout: page
title: "Q221739: FIX:  Error Using Object Property &gt; 255 Characters As Parameter"
permalink: /kb/221/Q221739/
---

## Q221739: FIX:  Error Using Object Property &gt; 255 Characters As Parameter

	Article: Q221739
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbOOP kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 17-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have an object property that is a character string of length 255 characters
	or longer. You attempt to pass this property as a parameter to a form Init
	method using the DO FORM <formname> WITH <parameter> syntax. When
	the DO FORM command is executed, the following error is generated:
	
	  String is too long to fit.
	
	RESOLUTION
	==========
	
	Upgrade to Visual Studio 6.0 Service Pack 3 or try the workarounds below:
	
	- Pass the property as a named expression:
	
	  DO FORM testxx WITH (lObj.cText)
	
	- Store the property value to a variable and pass the variable to the form
	  Init:
	
	  LOCAL lcTxt
	  lcTxt = lObj.cText
	  DO FORM testxx WITH lcTxt
	
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
	
	1. Run the following code from a program (.PRG) file:
	
	  Local aobj[1], xx
	  Create FORM testxx NOWAIT
	  =ASELOBJ(aobj,1)
	  xx = aobj[1]
	  xx.autocenter = .t.
	  xx.WriteMethod('init',[LPARA tcInitString] ;
	     + chr(13)+ [? tcInitString])
	  Keyboard 'Y' CLEAR
	  Release WINDOW 'Form Designer - testxx.scx'
	
	  Local lobj, lofrm1, lctxt
	  lobj = CREATEOBJECT('obj1')        && Create an object with a text property
	  Do FORM testxx WITH lobj.cText     && This command produces the error:
	  Return
	
	  Define CLASS obj1 AS CUSTOM
	     cText = REPLICATE( 'X', 255 )
	  Enddefine
	
	2. The error above is displayed. This is error number 1903.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbOOP kbvfp300bBUG kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
