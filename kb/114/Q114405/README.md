---
layout: page
title: "Q114405: X400: First Contact Form for X.400 Gateway"
permalink: kb/114/Q114405/
---

## Q114405: X400: First Contact Form for X.400 Gateway

	Article: Q114405
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Please use the checklist in this article to collect information about your
	system before you call Microsoft Product Support Services. You are able to work
	more effectively with a Microsoft Support Professional if all the information
	needed to trace and solve your problem is available. Include any troubleshooting
	steps you have taken in an effort to resolve the problem. Please be as complete
	and specific as possible when you fill out this form.
	
	There are ten articles of this type, one for each gateway product. Each is
	different, so find the one suited to your case by searching these keywords
	(without the spaces):
	
	   x 4 0 0 f c c          m s f c c
	   3 c o m f c c          p r o f s f c c
	   m c i f c c            s m t p f c c
	   f f a p i f c c        s n a d s f c c
	   f a x f c c            c o n n f c c
	
	
	MORE INFORMATION
	================
	
	              MICROSOFT X.400 GATEWAY PROBLEM REPORT FORM
	
	Gateway version:    2.1    3.0    3.2
	
	X400GATE.EXE 2.1 is 262265 bytes
	X400GATE.EXE 3.0 is 309792 bytes
	X400GATE.EXE 3.2 is 513370 Bytes
	
	MICROSOFT MAIL         Postoffice version: _____________________
	
	                            Network name: _____________________
	
	                         Postoffice name: _____________________
	
	Network operating system: ___________________________
	
	What system are you connecting to? (AT&T, RS4000, etc.)
	
	
	What is the Administrative Domain/Service Provider?
	
	
	How are you connecting?
	
	- TP0/X.25
	- TP4/CLNP (3.2 only)
	- Both (3.2 only)
	
	Has this worked before?   YES/NO
	
	If YES, when did it quit working? ______________________________
	
	What, if anything, was changed before it quit working?
	
	Is this problem seen on the foreign mail system?   YES/NO
	
	Is problem seen on local (MS Mail) system?   YES/NO
	
	Is this local to one user, or is it global?
	
	Intermittent or consistently reproducible? ___________________
	
	Can a loop message (from MS Mail to MS Mail through X.400) be sent? YES/NO
	
	Can mail be sent from the foreign sail system to MS Mail?   YES/NO
	
	Can mail be sent from MS Mail to the foreign mail system?   YES/NO
	
	List any error messages
	-----------------------
	
	Files needed
	------------
	
	You should find and extract these files and have them ready to send
	to Microsoft PSS (preferably electronically):
	
	- X400.LOG file from the LOG subdirectory.
	
	The most helpful way to do this is to create a new LOG file containing
	only the problem in question. If you cannot do this, send in the existing
	LOG file. Here is how to generate a new one:
	
	1. Delete the X400*.LOG file.
	2. Run the Gateway using the command line: "X400GATE -LVD".
	3. Recreate the problem.
	
	Extract these configuration files from the X.400 subdirectory:
	
	- ADDRCONV.CFG
	- BODYPART.CFG
	- INCNCT.CFG
	- MTA.CFG
	- OUTCNCT.CFG
	- ROUTE.CFG
	
	For version 3.2, extract these files also from the X.400 subdirectory:
	
	- INCNCT2.CFG
	- OUTCNCT2.CFG
	- X400GATE.INI
	
	Describe the problem
	--------------------
	
	Additional query words: x400fcc
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300 kbMailGatex400320
	Version           : MS-DOS:3.0,3.2
	Issue type        : kbinfo
	
	=============================================================================
	
