---
layout: page
title: "Q81541: Using PWB to Maintain Libraries"
permalink: kb/081/Q81541/
---

## Q81541: Using PWB to Maintain Libraries

	Article: Q81541
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS 
	- Microsoft Programmer's Workbench for OS/2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to add a template of build switches to the TOOLS.INI
	file, which will allow you to maintain libraries of object modules. This article
	also describes how to add new object modules to an existing library using the
	Programmer's WorkBench. One drawback to using these templates is that the
	library must exist before they can be used.
	
	This articles was originally written for PWB 1.X, but the process is the same for
	PWB 2.0. However, some of the steps to select the build options are different.
	
	MORE INFORMATION
	================
	
	Add the following template to the TOOLS.INI file in the subdirectory specified
	by the INIT environment variable. This template will allow you to replace .OBJ
	modules in an existing library. Note that the object module must be in the
	library to make use of this template.
	
	Note: The lines that are split should be concatenated. These lines were broken
	for readability.
	
	[pwb-Build Options:Replace OBJ in Library]
	 build: macro PWBRMAKE "pwbrmake"
	 build: macro NMAKEBSC1 "set"
	 build: macro NMAKEBSC2 "nmake"
	 build: macro CC "cl"
	 build: macro CFLAGS_G "/AL /W2 /G2 /BATCH /FR$*.sbr"
	 build: macro CFLAGS_D "/qc /Od /Zi /Zr"
	 build: macro CFLAGS_R "/Ot /Oi /Ol /Oe /Og /Gs"
	 build: macro ASM "ml"
	 build: macro AFLAGS_G "/W2 /WX /FR$*.sbr"
	 build: macro AFLAGS_D "/Sf /Sa /Sg /Sx /Zi /Fl"
	 build: macro AFLAGS_R "/nologo"
	 build: macro MAPFILE_D "$(PROJ).map"
	 build: macro MAPFILE_R "NUL"
	 build: macro BRFLAGS " /o $(PROJ).bsc"
	 build: macro BROWSE "1"
	 build: macro LIB "lib"
	 build: all $(PROJ).lib
	 build: target $(PROJ).bsc pwbrmake
	 build: target $(PROJ).lib lib nmakebsc1 nmakebsc2
	 build: inference .c.sbr cc_c_sbr
	 build: inference .asm.sbr asm_asm_sbr
	 build: inference .c.obj cc_c_obj lib_obj_lib
	 build: inference .asm.obj asm_asm_obj lib_obj_lib
	 build: inference .h.inc h2inc_h_inc
	 build: command pwbrmake "$(PWBRMAKE) @<<\n$(BRFLAGS) $(SBRS)\n<<"
	 build: command nmakebsc1 "$(NMAKEBSC1) MAKEFLAGS="
	 build: command nmakebsc2 "$(NMAKEBSC2) $(NMFLAGS) -f $(PROJFILE)
	                       $(PROJ).bsc"
	 build: command lib_obj_lib "$(LIB) $(PROJ).lib -+$(@B).obj;"
	 build: command lib "@echo $(OBJS) >NUL"
	 build: release command cc_c_sbr "$(CC) /Zs $(CFLAGS_G)
	                       $(CFLAGS_R) /FR$@ $<"
	 build: debug command cc_c_sbr "$(CC) /Zs $(CFLAGS_G) $(CFLAGS_D)
	                       /FR$@ $<"
	 build: release command asm_asm_sbr "$(ASM) /Zs $(AFLAGS_G)
	                       $(AFLAGS_R) /FR$@ $<"
	 build: debug command asm_asm_sbr "$(ASM) /Zs $(AFLAGS_G)
	                       $(AFLAGS_D) /FR$@ $<"
	 build: release command cc_c_obj "$(CC) /c $(CFLAGS_G) $(CFLAGS_R)
	                       /Fo$@ $<"
	 build: debug command cc_c_obj "$(CC) /c $(CFLAGS_G) $(CFLAGS_D)
	                       /Fo$@ $<"
	 build: release command asm_asm_obj "$(ASM) /c $(AFLAGS_G)
	                       $(AFLAGS_R) /Fo$@ $<"
	 build: debug command asm_asm_obj "$(ASM) /c $(AFLAGS_G)
	                       $(AFLAGS_D) /Fo$@ $<"
	 build: release command h2inc_h_inc "$(H2INC) /c $(CFLAGS_G)
	                       $(CFLAGS_R) $<"
	 build: debug command h2inc_h_inc "$(H2INC) /c $(CFLAGS_G)
	                       $(CFLAGS_D) $<"
	
	This template will allow you to add new OBJ modules to an existing library. Add
	the following template to the TOOLS.INI file in the subdirectory specified by
	the INIT environment variable.
	
	Note: The object module must not be in the library to make use of this template.
	
	[pwb-Build Options:Add OBJ to library]
	 build: macro PWBRMAKE "pwbrmake"
	 build: macro NMAKEBSC1 "set"
	 build: macro NMAKEBSC2 "nmake"
	 build: macro CC "cl"
	 build: macro CFLAGS_G "/AL /W2 /G2 /BATCH /FR$*.sbr"
	 build: macro CFLAGS_D "/qc /Od /Zi /Zr"
	 build: macro CFLAGS_R "/Ot /Oi /Ol /Oe /Og /Gs"
	 build: macro ASM "ml"
	 build: macro AFLAGS_G "/W2 /WX /FR$*.sbr"
	 build: macro AFLAGS_D "/Sf /Sa /Sg /Sx /Zi /Fl"
	 build: macro AFLAGS_R ""
	 build: macro MAPFILE_D "$(PROJ).map"
	 build: macro MAPFILE_R "NUL"
	 build: macro BRFLAGS " /o $(PROJ).bsc"
	 build: macro BROWSE "1"
	 build: macro LIB "lib"
	 build: all $(PROJ).lib
	 build: target $(PROJ).bsc pwbrmake
	 build: target $(PROJ).lib lib nmakebsc1 nmakebsc2
	 build: inference .c.sbr cc_c_sbr
	 build: inference .asm.sbr asm_asm_sbr
	 build: inference .c.obj cc_c_obj lib_obj_lib
	 build: inference .asm.obj asm_asm_obj lib_obj_lib
	 build: inference .h.inc h2inc_h_inc
	 build: command pwbrmake "$(PWBRMAKE) @<<\n$(BRFLAGS) $(SBRS)\n<<"
	 build: command nmakebsc1 "$(NMAKEBSC1) MAKEFLAGS="
	 build: command nmakebsc2 "$(NMAKEBSC2) $(NMFLAGS) -f $(PROJFILE)
	                       $(PROJ).bsc"
	 build: command lib_obj_lib "$(LIB) $(PROJ).lib +$(@B).obj;"
	 build: command lib "@echo $(OBJS) >NUL"
	 build: release command cc_c_sbr "$(CC) /Zs $(CFLAGS_G)
	                       $(CFLAGS_R) /FR$@ $<"
	 build: debug command cc_c_sbr "$(CC) /Zs $(CFLAGS_G) $(CFLAGS_D)
	                       /FR$@ $<"
	 build: release command asm_asm_sbr "$(ASM) /Zs $(AFLAGS_G)
	                       $(AFLAGS_R) /FR$@ $<"
	 build: debug command asm_asm_sbr "$(ASM) /Zs $(AFLAGS_G)
	                       $(AFLAGS_D) /FR$@ $<"
	 build: release command cc_c_obj "$(CC) /c $(CFLAGS_G) $(CFLAGS_R)
	                       /Fo$@ $<"
	 build: debug command cc_c_obj "$(CC) /c $(CFLAGS_G) $(CFLAGS_D)
	                       /Fo$@ $<"
	 build: release command asm_asm_obj "$(ASM) /c $(AFLAGS_G)
	                       $(AFLAGS_R) /Fo$@ $<"
	 build: debug command asm_asm_obj "$(ASM) /c $(AFLAGS_G)
	                       $(AFLAGS_D) /Fo$@ $<"
	 build: release command h2inc_h_inc "$(H2INC) /c $(CFLAGS_G)
	                       $(CFLAGS_R) $<"
	 build: debug command h2inc_h_inc "$(H2INC) /c $(CFLAGS_G)
	                       $(CFLAGS_D) $<"
	
	To demonstrate the use of these templates, do the following.
	
	1. At the command prompt, type the following:
	
	  " lib example" (without the quotation marks)
	
	2. The library manager will ask you if you would like to create the new library.
	  Answer "Y".
	
	3. Press ENTER for the remaining prompts.
	
	4. Start PWB.
	
	5. Create a program list EXAMPLE.MAK.
	
	6. Add a .C or .ASM file to the program list.
	
	7. From the Options menu, choose Build Options. If you are using PWB version
	  1.1, set the main language to none. Set Initial Build Options to Add OBJ to
	  library.
	
	8. Choose Rebuild All from the Make menu.
	
	9. In the Compile Results window, you should see the results of NMAKE compiling
	  your file and adding it to the existing library.
	
	10. Now choose Build Options from the Options menu.
	
	11. Set Initial Build Options to Replace OBJ in Library.
	
	12. Choose Rebuild All from the Make menu.
	
	13. In the Compile Results window, you should see the results of NMAKE compiling
	  or assembling your file and replacing it in the existing library.
	
	For information on how to make libraries dependents of the current target, query
	on the following words:
	
	  " library pwb dependent" (without the quotation marks)
	
	For more information about the PWB build switches and how to modify the above
	switches, see the "Microsoft Programmers WorkBench" application note, which can
	be obtained from Microsoft Product Support or query on SW0330.
	
	Additional query words: kbinf 1.00 1.10 2.00
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
