---
layout: page
title: "Q148382: BUG: Menus Disappear When All Child Windows Are Closed"
permalink: /kb/148/Q148382/
---

## Q148382: BUG: Menus Disappear When All Child Windows Are Closed

{% raw %}

	Article: Q148382
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Closing all the child windows in a QuickWin application causes the application's
	menus to disappear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Illustrate Problem
	---------------------------------
	
	  C Compile options needed: /MW
	
	        include 'fgraph.fi'
	        include 'flib.fi'
	
	        open(1,file='user')         ! Opens a child window and displays
	        write(1,*)'hello world'     ! "hello world". At this point, the
	                                    ! menu is visible.
	        call sleepqq( 10000 )       ! The application pauses for 10
	        close( 1, status='delete' ) ! seconds then closes the child window,
	                                    ! which causes the menus to disappear.
	        call sleepqq( 5000 )        ! The application pauses for 5 seconds
	        end                         ! before terminating.
	
	Additional query words: 1.00 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbZNotKeyword2 kbFORTRANPower32100NT kbFORTRANPower400NT
	Version           : :1.0,4.0
	
	=============================================================================
	

{% endraw %}
