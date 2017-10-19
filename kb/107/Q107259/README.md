---
layout: page
title: "Q107259: Stacker Conversion: The MS-DOS Stacker Conversion Program..."
permalink: /kb/107/Q107259/
---

## Q107259: Stacker Conversion: The MS-DOS Stacker Conversion Program...

	Article: Q107259
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the MS-DOS 6.2 DoubleSpace Stacker Conversion routine you
	may receive the following error message:
	
	  The MS-DOS Stacker conversion program cannot continue because your drive(s)
	  still contain disk errors.
	
	  Before converting your drives, you must fix all disk errors. For information
	  about fixing disk errors, see the MS-DOS 6 User's Guide and your Stacker
	  documentation. After fixing the errors, run CONVERT again.
	
	CAUSE
	=====
	
	This error occurs if:
	
	- You are using Stacker 1.0.
	
	-or-
	
	- You are using Stacker 2.x or 3.0 and Stacker is not in your path.
	
	WORKAROUND
	==========
	
	If you are using Stacker 2.x or 3.0, you can work around this problem by adding
	the Stacker directory to the PATH command in your AUTOEXEC.BAT file.
	
	MORE INFORMATION
	================
	
	This error occurs with Stacker 1.0 because ALLSTACK.EXE cannot find STACKER.COM.
	(Stacker 1.0 does not use a STACKER.COM file).
	
	To use the Stacker conversion routine and convert a Stacker volume file (SVF) to
	a DoubleSpace compressed volume file (CVF), you must have a version of Stacker
	between 2.0 and 3.0, inclusive.
	
	
	Additional query words: dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
