---
layout: page
title: "Q167528: FIX: Class Browser Causes System Error on Exit"
permalink: /kb/167/Q167528/
---

## Q167528: FIX: Class Browser Causes System Error on Exit

{% raw %}

	Article: Q167528
	Product(s): Microsoft FoxPro
	Version(s): 5.0 5.0a
	Operating System(s): 
	Keyword(s): kbcode kbtool kbvfp kbvfp500 kbvfp600fix
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, on platform(s):
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If either of the TreeView ActiveX controls in the Class Browser have focus when
	you press Escape to close the Class Browser, a General Protection Fault (GPF) or
	Invalid Page Fault occurs. This problem occurs only under Windows 95; it does
	not occur under Windows NT.
	
	CAUSE
	=====
	
	This occurs when a new version of Comctl32.ocx has been installed. This problem
	occurs with any version of this file dated 1/16/97 or later.
	
	The problem actually occurs in any form using the ActiveX controls from this .ocx
	file if the form is released before the code associated with the ActiveX control
	is completed.
	
	RESOLUTION
	==========
	
	Follow these steps to implement an add-in for the Class Browser to fix the
	problem described above:
	
	1. Create a program named Brwescfx.prg in the root Visual FoxPro directory with
	  the following code:
	
	        *  Program...........: Brwescfx.prg
	        *  Author............: Ken R. Levy
	        *  Copyright.........: None (Public Domain)
	        *  Description.......: VFP 5.0 Class Browser patch for 1-16-97
	        *                      COMCTL32.OCX bug.
	        *  Note:  This add-in patch only fixes GPFs that occur when pressing
	        *  ESC to exit.
	        *
	        *  Instructions for installation:
	        *  1. Save Brwescfx.prg program file above into your VFP home/root
	        *     directory.
	        *  2. Launch the Class Browser in VFP 5.0 and open any VCX.
	        *  3. Run Barwescfx.prg to automatically register the BrwESCFx Class
	        *     Browser add-in.
	        *  4. No more GPFs will occur using the Class Browser when pressing
	        *     ESC.
	        *
	
	        LPARAMETERS oSource
	
	        IF TYPE("oSource")#"O" OR ISNULL(oSource)
	            IF TYPE("_oBrowser")#"O" OR ISNULL(_oBrowser)
	                MESSAGEBOX("You must have the Class Browser running " + ;
	                    "to register BrwESCFx.", 48,"BrwESCFx")
	                RETURN .F.
	            ENDIF
	            IF _oBrowser.AddIn("BrwESCFx",HOME()+"BrwESCFx","QueryUnload")
	                MESSAGEBOX("BrwESCFx has successfully been " + ;
	                    "registered.",0,"BrwESCFx")
	                RETURN
	            ENDIF
	            MESSAGEBOX("BrwESCFx failed to be registered.",16,"BrwESCFx")
	            RETURN .F.
	        ENDIF
	        IF NOT oSource.cAddInMethod=="QUERYUNLOAD"
	            RETURN .F.
	        ENDIF
	        IF TYPE("_screen.ActiveForm.ActiveControl")#"O" OR ;
	            LOWER(LEFT(_screen.ActiveForm.ActiveControl.Name,3))=="ole"
	            oSource.lNoDefault=.T.
	            oSource.cboClassType.SetFocus
	            KEYBOARD "{ESC}" PLAIN
	        ENDIF
	        RETURN
	        *  END PROGRAM: BrwESCFx.PRG
	
	2. Launch the Class Browser in Visual FoxPro and open any VCX.
	
	3. Run Brwescfx.prg (created in Step 1) to automatically register the BrwESCFx
	  Class Browser add-in.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Launch the Class Browser and open any VCX.
	
	2. Click in one of the TreeView controls to ensure it has focus.
	
	3. Press Escape to exit the Class Browser.
	
	If the version of Comctl32.ocx indicated in the "Cause" section above is
	installed, the error should occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbtool kbvfp kbvfp500 kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : 5.0 5.0a
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
