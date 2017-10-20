---
layout: page
title: "Q131302: PRB: Visual FoxPro Makes Bigger .EXE Files Than FoxPro 2.6 Did"
permalink: /kb/131/Q131302/
---

## Q131302: PRB: Visual FoxPro Makes Bigger .EXE Files Than FoxPro 2.6 Did

{% raw %}

	Article: Q131302
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,6.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp kbvfp300 kbvfp600 KBQ
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a FoxPro version 2.x application is converted to Visual FoxPro version 3.0,
	the final Visual FoxPro application (.APP) or executable (.EXE) is larger than
	the FoxPro versions 2.x EXE or APP. With some applications, the size of the EXE
	has doubled between the two versions of FoxPro.
	
	CAUSE
	=====
	
	FoxPro version 2.x .APPs and .EXEs included only the compiled versions of
	generated screens. In Visual FoxPro, forms are not generated into program files;
	they are run directly from the .SCX file. Therefore, the.SCX files must be
	included in the application, adding overhead that table structures have and that
	raw text files do not have.
	
	RESOLUTION
	==========
	
	This effect can be minimized in several ways. Both methods included below remove
	the code from an .SCX file that is not necessary in a compiled application.
	Please note that Microsoft does not provide technical support on .SCX and .VCX
	files that have been manually edited.
	
	Use the BUILDAPP Application
	----------------------------
	
	The easiest technique is to run BUILDAPP.PRG. This program is installed in the
	\TOOLS\BUILDAPP subdirectory of the main Visual FoxPro directory. To call
	BUILDAPP, you need to pass the name of your project as a parameter.
	
	The main purpose of the BUILDAPP program is to make an application smaller by
	removing the source code from all classes and forms.
	
	Manually Remove the Code from the SCX and VCX
	---------------------------------------------
	
	If you prefer to work manually, you can make backup copies of all your .SCX and
	.VCX files, open them as tables (with the USE command), and issue this command:
	
	     REPLACE ALL METHODS WITH ""
	
	WARNING: This permanently removes the source code and should NOT be done unless
	backup copies of the files exist. Once the code is removed, the forms and
	classes cannot be modified because the Form Designer and Class Designer attempt
	to recompile the now deleted source code and the code will be lost.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: lan performance speed
	
	======================================================================
	Keywords          : kbenv kbvfp kbvfp300 kbvfp600 KBQ 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP600
	Version           : WINDOWS:3.0,6.0
	
	=============================================================================
	

{% endraw %}
