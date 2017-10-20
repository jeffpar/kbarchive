---
layout: page
title: "Q133739: PRB: Order of Read Level Clauses Different in Visual FoxPro"
permalink: /kb/133/Q133739/
---

## Q133739: PRB: Order of Read Level Clauses Different in Visual FoxPro

{% raw %}

	Article: Q133739
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The order in which Visual FoxPro executes READ clauses is different from that of
	previous versions of FoxPro. For example, the READ DEACTIVATE clause in Visual
	FoxPro, in some cases, behaves differently in Visual FoxPro.
	
	CAUSE
	=====
	
	Visual FoxPro now supports object oriented programming (OOP). This new event
	model has changed the order in which FoxPro processes certain events.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When developing applications in Visual FoxPro it is very important to learn the
	order of events. Because the event model in Visual FoxPro is greatly enhanced
	over previous versions, items may not fire when expected if compared to earlier
	versions of FoxPro.
	
	Code Sample
	-----------
	
	The following example demonstrates how Visual FoxPro's READ DEACTIVATE clause
	fires in two different places depending on which version of FoxPro runs the
	program. Create the following program, and name it Readordr.prg:
	
	  ****Begin ReadOrdr.PRG****
	
	     SET PRINT TO readordr.log
	     SET PRINT ON
	     COUNT = 1
	     CLEAR
	     SET TALK OFF
	     mquit = .F.
	     ON KEY LABEL F5 mquit = .T. && Use F5 to clear the READ
	
	     ***Define & Activate Windows, Gets and READ
	     DEFINE WINDOW window1 FROM 1,1 TO 20,60 SYSTEM CLOSE
	     ACTIVATE WINDOW window1
	
	     @1,1 GET X1 ;
	       DEFAULT "1234567890" ;
	       SIZE 1,10 ;
	       FONT "FIXEDSYS",10 ;
	       WHEN ret("@get x1 when clause") ;
	       VALID ret("@get x1 valid clause")
	
	     @1, 40 GET Y1 ;
	       DEFAULT "1234567890" ;
	       SIZE 1,10 ;
	       FONT "FIXEDSYS",10 ;
	       WHEN ret("@get y1 when clause") ;
	       VALID ret("@get y1 valid clause")
	
	     DEFINE WINDOW window2 FROM 21,1 TO 40,60 SYSTEM CLOSE
	     ACTIVATE WINDOW window2
	
	     @1,1 GET X2 ;
	       DEFAULT "1234567890" ;
	       SIZE 1,10 ;
	       FONT "FIXEDSYS",10 ;
	       WHEN ret("@get x2 when clause") ;
	       VALID ret("@get x2 valid clause")
	
	     @1, 40 GET Y2 ;
	       DEFAULT "1234567890" ;
	       SIZE 1,10 ;
	       FONT "FIXEDSYS",10 ;
	       WHEN ret("@get y2 when clause") ;
	       VALID ret("@get y2 valid clause")
	
	     READ ;
	       CYCLE ;
	       MODAL ;
	       ACTIVATE ret("read activate clause") ;
	       DEACTIVATE ret("read deactivate clause") ;
	       VALID ret("read valid clause", IIF(mquit = .T., .T.,.F.)) ;
	       WHEN ret("read when clause") ;
	       SHOW ret("read show clause")
	
	     ***CleanUp Code
	     RELEASE WINDOW window1
	     RELEASE WINDOW window2
	     SET PRINT OFF
	     SET PRINT TO
	
	     ***************************
	     *  Function to print return values to Readordr.log file
	     *  This function is called every time an event occurs, events found
	     *  in this program include:
	     *       READ WHEN
	     *            ACTIVATE
	     *            SHOW
	     *            DEACTIVATE
	     *            VALID
	     *       SHOW GET WHEN
	     *                VALID
	     **************************
	
	     FUNCTION ret
	     PARAMETERS clause, retval
	     IF param() < 2
	        retval = .T.
	     ENDIF
	     ? ALLTRIM(STR(count)) + ": "
	     ?? clause
	     count = count + 1
	     RETURN retval
	
	     ***End of Program Readordr.Prg
	
	When you run the Readordr.prg program, each of the events that fires is written
	to a log file name Readordr.log. You can use this file to check the order of
	events in Visual FoxPro or in a previous version of FoxPro.
	
	Steps to Demonstrate Behavior
	-----------------------------
	
	To illustrate this point, execute the Readordr.prg program in Visual FoxPro, and
	then follow these steps:
	
	1. When the screen is run, these events occur in this order:
	
	  READ WHEN (determines if we may enter the READ)
	  READ ACTIVATE (fires when READ is executed)
	  READ SHOW (occurs when @GET fields are shown on the screen)
	  @GET X1 WHEN (occurs when the cursor moves to the first GET object)
	
	  This behavior is identical to the behavior of previous FoxPro versions.
	
	2. From the first GET field (X1), press the TAB key to move the focus to the
	  second field (Y1) on the screen. The following events occur:
	
	  @GET X1 VALID (occurs when we attempt to leave the object)
	  @GET Y1 WHEN
	
	  This behavior is identical to the behavior of previous FoxPro versions.
	
	3. From the second GET field (Y1), press the TAB key again, this moves the focus
	  from Y1 to X2, but also moves from Window1 to Window2. These events occur:
	
	  @GET Y1 VALID
	  @GET X2 WHEN
	  READ DEACTIVATE (Occurs when we move from one window to the next)
	
	  This behavior is different from previous versions of FoxPro. Notice the WHEN
	  clause for the first object on window2 is fired before the READ DEACTIVATE.
	  In previous versions, the order of events was:
	
	  @GET Y1 VALID
	  READ DEACTIVATE
	
	4. To exit the Readordr.prg program, press the F5 key and then the ESC key.
	
	5. Run the same code in a previous version of FoxPro, and compare the log files.
	
	Why Visual FoxPro Uses a Different Firing Order
	-----------------------------------------------
	
	The reason why Visual FoxPro differs is because of the current event model. The
	Visual FoxPro order of events is described in the Visual FoxPro Help file in the
	"Visual FoxPro Event Sequence" topic.
	
	In the example, you press TAB to move from window1 to window2. The events are
	firing in the correct order. First, the VALID clause of Y1 determines if you may
	leave the object. Second, the WHEN clause is executed for the first object (X2)
	on window2. This occurs because Visual FoxPro's order of events executes the
	WHEN clause for the next object in the TAB order, before the form object
	(window1) loses the focus. Visual FoxPro has to first determine if the next
	object will get the focus before the current object loses the focus. When the
	form object (window1) loses the focus, the READ DEACTIVATE is executed.
	
	If for example, the WHEN clause for X2 fails, the form object (window1) will not
	lose focus, so the DEACTIVATE clause should not fire.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
