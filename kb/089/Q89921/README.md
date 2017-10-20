---
layout: page
title: "Q89921: Applications, Executables, &amp; Libraries Q&amp;A for FoxPro 2.0"
permalink: /kb/089/Q89921/
---

## Q89921: Applications, Executables, &amp; Libraries Q&amp;A for FoxPro 2.0

{% raw %}

	Article: Q89921
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-1997
	
	2.00
	MS-DOS
	kbinterop kbprg kbref kbtool
	
	--------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, version 2.0
	--------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following questions and answers pertain to applications, executables,
	and libraries.
	
	MORE INFORMATION
	================
	
	1. Q. I have created an application that does not allow me to edit
	     my database files. How can I correct this problem?
	
	  A. Mark your database as excluded in the project, then rebuild your
	     application. You must distribute these files to your end users.
	     Including the database in the project automatically makes these
	     files read only.
	
	2. Q. Why can't I build an executable file from within my project?
	     The options to do so are dimmed and unavailable.
	
	  A. To build an executable file, you must purchase the Microsoft
	     FoxPro Distribution Kit and install it in your FoxPro directory.
	     Prior to installing the FoxPro Distribution Kit, make sure that
	     the FoxPro files are not marked as read only.
	
	3. Q. When I attempt to build an executable file, I receive the
	     error message "Link command failed." How can I correct this
	     problem?
	
	  A. If you receive this error message, check the following items:
	
	     a. Make sure that you have enough conventional memory.
	
	     b. Make sure that you have enough disk space.
	
	     c. Increase the number of file handles available to Microsoft
	        FoxPro for MS-DOS. To do this, you can increase the FILES
	        setting in the CONFIG.SYS file or increase the FILE HANDLES
	        setting in the network configuration file.
	
	     d. Make sure that FoxPro can find your COMMAND.COM file.
	
	     e. Make sure that the following files are on your path:
	        WLINK8.EXE, PROAPI16.EXE, and FOXSWAP.COM.
	
	     f. If you are running the Extended Version of FoxPro, make
	        sure that DOSMEM=ON is not in your CONFIG.FP file.
	
	4. Q. My executable file runs correctly under the development
	     version, but I receive the error message "Feature not available"
	     under the stand-alone version. How can I correct this problem?
	
	  A. First, check the "Features Not Available" list in the FoxPro
	     Distribution Kit documentation. Certain features used for
	     development are not available in the applications and
	     executables you create. If you still encounter problems, it is
	     possible that you are using a macro substitution in your
	     program. You must either eliminate the macro substitution or
	     include a program that issues the proper command, but is never
	     called, in your project. If this problem persists, call
	     Microsoft Product Support for FoxPro at (425) 635-7191, Monday
	     through Friday, 6:00 A.M. to 6:00 P.M. Pacific time, excluding
	     holidays.
	
	5. Q. What is the Library Construction Kit and what does it do?
	
	  A. The Library Construction Kit is an application programming
	     interface (API) that allows you to extend the capabilities of
	     Microsoft FoxPro for MS-DOS. With this kit, you can create
	     function libraries of C and assembly language routines that can
	     be called from within FoxPro.
	
	Additional reference words: FoxDos 2.00 lck q&a
	KBCategory: kbinterop kbprg kbref kbtool
	KBSubcategory:
	======================================================================
	
	=============================================================================
	

{% endraw %}
