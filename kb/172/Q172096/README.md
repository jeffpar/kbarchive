---
layout: page
title: "Q172096: FIX: Forms Under Source Control Open Slowly"
permalink: kb/172/Q172096/
---

## Q172096: FIX: Forms Under Source Control Open Slowly

	Article: Q172096
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbvfp500bug kbvfp500fix
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0a, 5.0 
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify files in a Visual FoxPro project under Source Code Control, it
	takes 4 to 5 times longer than if the project is not under Source Code Control.
	
	CAUSE
	=====
	
	Instead of updating individual files when individual objects are being modified,
	the entire project is updated by default in Source Code Control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual
	FoxPro version 5.0a for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run Visual FoxPro v5.0 and create a Visual FoxPro program file, MakMor.prg,
	  with the following code:
	
	        **** Create sample programs ****
	        FOR i= 1 TO 200
	           lcname1="main" + maknum(i) + ".prg"
	           COPY FILE main000.prg TO &lcname1
	        ENDFOR
	
	        **** Create sample forms ****
	        FOR i= 1 TO 200
	           lcname1="main" + maknum(i) + ".scx"
	           lcname2="main" + maknum(i) + ".sct"
	           COPY FILE main000.scx TO &lcname1
	           COPY FILE main000.sct TO &lcname2
	        ENDFOR
	
	        PROCEDURE maknum
	        PARAMETERS tnWhich
	        RETURN PADL(ALLTRIM(STR(m.tnWhich)),3,"0")
	
	2. Save the program file created in the previous step into a directory by
	  itself, for example "..\BigProj\". This program will create 200 program files
	  and forms that will be used to reproduce the behavior.
	
	3. Create a Visual FoxPro program file, MAIN000.prg, with the following code:
	
	        &&***Top of MAIN000.PRG****
	        RETURN
	        DO MYINIT
	        DO MYSAVE
	        DO FORM main
	        READ EVENTS
	
	        PROCEDURE myinit
	
	           LOCAL x00,x01,x02,x03,x04,x05,x06,x07,x08,x09
	           LOCAL x10,x11,x12,x13,x14,x15,x16,x17,x18,x19
	
	           STORE 9 TO x00,x01,x02,x03,x04,x05,x06,x07,x08,x09
	           STORE 9 TO x10,x11,x12,x13,x14,x15,x16,x17,x18,x19
	
	        RETURN
	
	        PROCEDURE mysave
	
	           LOCAL x00,x01,x02,x03,x04,x05,x06,x07,x08,x09
	           LOCAL x10,x11,x12,x13,x14,x15,x16,x17,x18,x19
	           LOCAL x20,x21,x22,x23,x24,x25,x26,x27,x28,x29
	
	           STORE 9 TO x00,x01,x02,x03,x04,x05,x06,x07,x08,x09
	           STORE 9 TO x10,x11,x12,x13,x14,x15,x16,x17,x18,x19
	           STORE 9 TO x20,x21,x22,x23,x24,x25,x26,x27,x28,x29
	
	        RETURN
	        &&***End of MAIN000.PRG****
	
	  Save the program into the same directory (..\BigProj) as the program file
	  created in step 1. This is a sample program whose contents will be copied
	  into all the sample program files created by MakMor.prg.
	
	4. Create a Visual FoxPro form, MAIN000.SCX, and place a control on the form.
	  Save the form to the same directory (..\BigProj) as the previous step. The
	  contents of this form will be copied to all the sample forms created by
	  MakMor.prg.
	
	5. Create another Visual FoxPro program, MNDAT.PRG, with the following code:
	
	        IF !file("main.prg")
	           FHAND=fcreate("main.prg")
	           FCLOSE(fhand)
	        ENDIF
	        fhand = FOPEN("main.prg",11)
	        ?"fhand = ",fhand
	        IF FHAND >= 0
	           FOR i=1 TO 200
	              fnum=PADL(ALLTRIM(STR(i)),3,"0")
	              FPUTS(fhand, "Do Main"+(fnum))
	              ** Uncomment the following if forms added to the project **
	              fputs(fhand, "Do Form Main"+(fnum))
	           ENDFOR
	        ENDIF
	        FCLOSE(fhand)
	
	  Save the program to the same directory (..\BigProj) as the previous step. This
	  program creates MAIN.PRG that contains references to all the forms and
	  programs created by MakMor.prg.
	
	6. From Visual FoxPro issue the following commands:
	
	        SET DEFAULT TO <..\BigProj>  ** Set default to where all files saved
	        DO MakMor.prg     **Make sample programs and files
	        DO MNDAT.prg      **Create Main.prg with references to files
	
	7. Create a Project, BigProj.PJX, in the directory (..\BigProj) where all the
	  files have been saved so far.
	
	8. Add MAIN.PRG to the project and re-build the project to add all the files
	  referenced by MAIN.PRG.
	
	9. Modify any of the files (Programs or Forms) from within the Project Manager
	  and note that the modify window opens up instantly.
	
	10. Close all files and add the project to source control.
	
	11. Repeat step 9 and note that the modify window takes much longer to come up.
	
	NOTE: In Visual FoxPro v5.0a step 11 will be almost as fast as step 9.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbvfp500bug kbvfp500fix 
	Technology        : kbVFPsearch kbSSafeSearch kbAudDeveloper kbVFP500 kbSSafe400a kbSSafe500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
