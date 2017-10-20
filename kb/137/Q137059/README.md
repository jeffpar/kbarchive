---
layout: page
title: "Q137059: DOCERR: Missing Visual C/C++ &quot;Multithreaded Using DLL&quot; Setting"
permalink: /kb/137/Q137059/
---

## Q137059: DOCERR: Missing Visual C/C++ &quot;Multithreaded Using DLL&quot; Setting

{% raw %}

	Article: Q137059
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Visual FoxPro "Professional Features Guide," Chapter 11, pages
	188-189, instructions for compiling and linking a C library written with the
	Library Construction Kit are given for Microsoft Visual C++, 32-bit Edition,
	version 2.0. These instructions omit an important setting for the project - what
	library the linker should use to resolve external references and what run-time
	library the DLL (FLL) to look for when it is run.
	
	The missing setting is the Use Run-Time Library setting under the Code Generation
	category and it should be set to "Multithreaded using DLL."
	
	NOTE: This was corrected in the Visual FoxPro 3.0b for Windows documentation.
	
	MORE INFORMATION
	================
	
	Help File Documentation
	-----------------------
	
	This missing setting is also documented the Visual FoxPro Help file. To find this
	topic quickly, do the following:
	
	1. Type HELP CHANGES in the Command window.
	
	2. The Help Topics search dialog appears, with Changes to Printed Documentation
	  selected. Click the Display button.
	
	3. Click Professional Features Guide, then select the following:
	
	  Chapter 11: Creating a Library Heading.
	
	Correction to to Printed Documentation
	--------------------------------------
	
	To establish the "Multithreaded using DLL" setting, follow the steps shown at the
	bottom of page 188 of the "Professional Features Guide." Between steps 4 and 5
	under the "To establish project settings" heading, change the Use Run-Time
	Library drop-down list box to "Multithreaded using DLL." These steps are
	reproduced below with the additional step shown as step 4a:
	
	To establish project settings:
	
	1. From the Project menu, choose Settings.
	
	2. In the Settings dialog box, click the C/C++ tab.
	
	3. In the Category drop-down list box, choose Code Generator.
	
	4. In the Calling convention drop-down list box, choose _fastcall.
	
	  a. In the Use Run-Time Library drop-down list box, choose Multithreaded using
	     DLL.
	
	5. Click the Link tab.
	
	6. In the Object/Library Modules text box, add the following library:
	
	     winapims.lib
	
	7. Choose OK.
	
	The following error is known to occur when linking the DLL or FLL in Microsoft
	Visual C++ version 2.0:
	
	  error LNK2005: _memmove already defined in LIBCMT.lib(memove.obj)
	
	See the "Steps to Reproduce Error Message" section of this article for the steps
	that generate this error message, if you haven't .
	
	
	The following information on the Use Run-Time Library setting is from the
	Microsoft Visual C++ Help file on CD-ROM (Books Online):
	
	When you use the Run-Time Library, the following options enable you to:
	
	- Select either single-threaded or multi-threaded run-time routines.
	
	- Indicate that a multi-threaded module is a DLL.
	
	Single-threaded (Libc.lib)
	--------------------------
	
	Causes the compiler to place the library name Libc.lib into the object file so
	that the linker will use Libc.lib to resolve external symbols. This is the
	compiler's default action. Libc.lib does not provide multi-thread support.
	Command-line equivalent: /ML
	
	Multi-threaded (Libcmt.lib)
	---------------------------
	
	Defines _MT so that multi-thread-specific versions of the run-time routines are
	selected from the standard header files. It also causes the compiler to place
	the library name Libcmt.lib into the object file so that the linker will use
	Libcmt.lib to resolve external symbols. Either /MT or /MD is required to create
	multi-threaded programs. Command-line equivalent: /MT
	
	Multi-threaded Using DLL (Msvcrt.lib)
	-------------------------------------
	
	Defines _MT and _DLL so that both multi-thread- and DLL-specific versions of the
	run-time routines are selected from the standard header files. It also causes
	the compiler to place the library name Msvcrt.lib into the object file.
	Command-line equivalent: /MD
	
	Applications compiled with this option are statically linked to Msvcrt.lib. This
	library provides a layer of code that allows the linker to resolve external
	references. The actual working code is contained in Msvcrt20.dll, which must be
	available at run time to applications linked with Msvcrt.lib
	
	You can substantiate this information by following these steps:
	
	1. In Microsoft Visual C++ version 2.0, click Books Online on the Help menu.
	  (this may take a while to come up, especially if it is on the CD-ROM compact
	  disc)
	
	2. Click the User's Guides book icon.
	
	3. Click the Search Plus button. The Search dialog box should appear with the
	  Find tab active.
	
	4. In the "Type the word(s) you want to find" box, type Code Generation.
	
	5. In the "Click a topic, then click Display" box, click Code Generation
	  Category, and then click Display.
	
	6. Click Use Run-Time Library. The information should be displayed.
	
	Steps to Reproduce Error Message
	--------------------------------
	
	1. Open the \VFP\API\Samples\Examples.dbf database.
	
	2. Find the record that has MEMMOVE in the Xname field. It should be record 98.
	
	3. Copy the contents of the C_Code memo field for this record.
	
	4. Start Visual C++ 2.0, and create a new code text file. Paste in the contents
	  of the memo field copied in the previous step.
	
	5. Save the .c file. Called it Lnk2005.c for now.
	
	6. Create a new project in Visual C++ following all the steps shown on pages
	  188-189 of the "Professional Features Guide."
	
	7. On the Project menu, click Settings. Then click the C/C++ tab, click Code
	  Generation Category, and change the Use Run-Time Library to just
	  Multi-threaded. The fix is to set this to Multi-threaded using DLL. Click OK
	  to close the Settings dialog box.
	
	8. On the Project menu, click Build <name of project.DLL>.
	
	Additional query words: VFoxWin lck api
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
