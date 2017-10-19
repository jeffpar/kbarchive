---
layout: page
title: "Q130615: PRB: Unwanted Rebuilds Occur When Using NMAKE or Visual C++"
permalink: /kb/130/Q130615/
---

## Q130615: PRB: Unwanted Rebuilds Occur When Using NMAKE or Visual C++

	Article: Q130615
	Product(s): Microsoft C Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, versions 1.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a project, the development environment suddenly executes a Rebuild
	All command or unnecessarily recompiles specific object modules. Alternatively,
	after rebuilding and then trying to debug your program you may receive the
	message:
	
	  One or more targets are out of date or do not exist
	
	This happens when you are building from within the integrated development
	environment provided with the Microsoft products listed at the beginning of this
	article or when you are using the NMAKE.EXE utility.
	
	CAUSE
	=====
	
	The time on one of your dependency files is later than one of the output files
	linked to the dependency.
	
	The build engine checks the time and date stamp of all files that have
	dependencies in the makefile. Files included in the project list are considered
	"dependencies." System- and user-created .H files included in the source files
	with #include statements are also considered dependencies. If the time and date
	of a dependency file is later than the time and date of a target file, then the
	target is automatically rebuilt.
	
	RESOLUTION
	==========
	
	The following five scenarios can cause this unwanted behavior. Resolve the issue
	by revising any of the following scenarios that fit your situation.
	
	1. The time and/or date on your computer is not correct or was not correct when
	  Visual C++ or the project in question was written to disk. The time and date
	  of the targets and/or dependencies end up being earlier than the time and
	  date when Visual C++ was installed.
	
	  For example:
	
	  a. You install Visual C++ when the date on the computer is 2/1/94 12:00 PM.
	
	  b. You change the date to 1/1/94 at 12:00 AM.
	
	  c. You try to build a sample application. The .OBJ and .EXE files are written
	     with the date 1/1/94 and some time. All the Visual C++ header files are
	     dated later than the target .OBJ and .EXE files. If any of these headers
	     are included as dependencies, the project will always be rebuilt.
	
	  The fix is to either change the date on the computer to be later then that of
	  any other files that are included in the project or to "touch" (rewrite the
	  time and date) every dependency file in the build process. Ideally you should
	  set the correct time and date on the computer and reinstall Visual C++.
	
	2. You have enabled network caching or the network writes out files only after a
	  certain time period.
	
	
	  This causes a problem if you modify a file in the build dependencies that is
	  stored on the network, save it, and then initiate a build. The network does
	  not use the time stamp when you issued the save command but rather when the
	  network actually writes the file.
	
	  For example, you save a DEPEND.H file on the network, and then start a build
	  on the local drive. The time is 1:00 PM. The network does not write DEPEND.H
	  to the network disk right away because of caching. The changes made are
	  presumably seen in the build, however, because the reads and writes to the
	  file are serviced by the network, which uses the image in network cache
	  memory. The build finishes and the output file ALLDONE.EXE file is written to
	  the local drive at 1:05PM. Then at 1:10PM, DEPEND.H is flushed to the network
	  disk.
	
	  If the network uses the time that DEPEND.H was actually rewritten to disk
	  (1:10) and not the when the user actually issued the save command (1:00), a
	  rebuild of all files dependent on DEPEND.H will occur.
	
	3. You are using some files over a network and the time and date on the local
	  computer and the server differ now or did differ at one time.
	
	  This is a variation of the two previous problems. The time stamp of the output
	  files on one location are earlier than the dependency files seen on the other
	  location. Synchronize the time on your local machine with the network time,
	  synchronize all of the file times, and rebuild.
	
	4. A dependency file is deleted but the dependencies were not updated.
	
	  For example, the TEST.H file is listed as a dependency but it has been deleted
	  and is no longer included in any source files. If the dependencies are not
	  updated, everything that was dependent on TEST.H is rebuilt every time.
	
	  With Visual C++ version 5.0, dependencies are updated every time the project
	  is built using either Build, Rebuild All, or Batch Build. Dependencies for C
	  and C++ files are generated by the C/C++ compiler during the build process.
	  Dependencies for other types of source files are generated by the build
	  system's dependency scanner.
	
	5. Some type of corruption causes the date of a dependency file to be later than
	  the output files.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower32400NT
	Version           : :1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
