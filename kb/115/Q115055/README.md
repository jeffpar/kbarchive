---
layout: page
title: "Q115055: Function to Calculate Elapsed or Accumulated Time"
permalink: /kb/115/Q115055/
---

## Q115055: Function to Calculate Elapsed or Accumulated Time

{% raw %}

	Article: Q115055
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c; MS-DOS:1.02,2.0,2.5,2.5a,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 1.02, 2.0, 2.5, 2.5a, 2.6 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although the TIME() and SECONDS() functions in FoxPro return the current time
	and seconds elapsed since midnight, respectively, there are no intrinsic
	functions within FoxPro to directly perform arithmetic operations on time
	values.
	
	The user-defined (UDF) function shown below makes it possible to add or subtract
	values returned by the TIME() function or those entered manually in the standard
	hours:minutes:seconds format.
	
	MORE INFORMATION
	================
	
	The following function is used by the first set of code samples found below it:
	
	     * TIMECALC.PRG
	     PARAMETERS bt,et,op
	     hr1=VAL(LEFT(bt,2))
	     hr2=VAL(LEFT(et,2))
	     mn1=VAL(SUBSTR(bt,4,2))
	     mn2=VAL(SUBSTR(et,4,2))
	     sc1=VAL(RIGHT(bt,2))
	     sc2=VAL(RIGHT(et,2))
	     tot1=(hr1*3600)+(mn1*60)+sc1
	     tot2=(hr2*3600)+(mn2*60)+sc2
	     IF op=1
	       tt=tot1+tot2
	     ELSE
	       tt=tot2-tot1
	     ENDIF
	     thr=ALLTRIM(STR(INT(tt/3600)))
	     tmn=ALLTRIM(STR(INT((tt%3600)/60)))
	     tsc=ALLTRIM(STR((tt%3600)%60))
	     tdc=RIGHT(STR(INT((VAL(tmn)/60)*10)/10,5,1),1)
	     RETURN chr(13)+'  '+ ;
	            thr+' hour'+iif(val(thr)<>1,'s','')+', '+ ;
	            tmn+' minute'+iif(val(tmn)<>1,'s','')+', '+ ;
	            tsc+' second'+iif(val(tsc)<>1,'s','')+'.' + ;
	            chr(13)+chr(13)+ '  Decimal equivalent: '+ ;
	            thr+'.'+tdc+' hour'+iif(val(tdc)<>1,'s','')+'.'+chr(13)
	
	Sample Code
	-----------
	
	     *-> FOR MS-DOS and Macintosh
	     ? timecalc('00.05.15','01.25.00',1)
	     ? timecalc('00.05.15','01.25.00',2)
	
	     *-> FOR WINDOWS 2.5
	     SET TEXTMERGE ON
	     \<<timecalc('00.05.15','01.25.00',1)>>
	     \<<timecalc('00.05.15','01.25.00',2)>>
	     SET TEXTMERGE OFF
	
	     *-> FOR 2.5a MS-DOS or WINDOWS
	     WAIT WIND timecalc('00.05.15','01.25.00',1) NOWAIT
	     WAIT WIND timecalc('00.05.15','01.25.00',2) NOWAIT
	
	     **** R E S U L T S ******************************
	
	     * (1=ADDITION) returns:
	     *
	     *    1 hour, 30 minutes, 15 seconds.
	     *
	     *    Decimal equivalent: 1.5 hours.
	     *
	
	     * (2=SUBTRACTION) returns:
	     *
	     *    1 hour, 19 minutes, 45 seconds.
	     *
	     *    Decimal equivalent: 1.3 hours.
	     *
	     * NOTE: While a period is used in this example as a separator
	     * character for hr.mn.sc, any other character may be used.
	
	The following program demonstrates a FoxPro for Windows-specific implementation
	of the TimeCalc() function, which tracks the time since the current FoxPro
	session began. The timer can optionally be reset. This example uses a program
	file called by the CONFIG.FPW file when FoxPro is started to initialize the
	variables and set keytraps for displaying and resetting the timer.
	
	     *** T I M E T R A K . P R G
	     *
	     PUBLIC btime
	     ON KEY LABEL F4 btime=TIME()
	     ON KEY LABEL F5 WAIT WINDOW TimeCalc( btime, TIME(), 2 ) NOWAIT
	     KEYBOARD "{F4}"
	     * end of program
	
	To have the program load automatically when FoxPro starts, modify the CONFIG.FPW
	file to include the following line:
	
	     COMMAND=DO timetrak
	
	To use the timer, press F5 to display how long FoxPro has been running. You can
	display the elapsed time at any time during the session by pressing F5.
	
	If you are repeating a specific action and each action must be timed separately
	(such as data entry or phone call tracking), press F4 (or issued it
	programmatically with the KEYBOARD command) to reset the timer at the beginning
	of the action. When you have completed the action, press F5 to display the
	elapsed time for that action.
	
	If the timer has not been reset, you can display the entire session time by
	issuing F5 within an ON SHUTDOWN routine. If individual actions must be tracked
	as well, you can assign an additional variable in the TIMETRAK program to track
	the entire session.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin timing stopwatch lap
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b,2.5c; MS-DOS:1.02,2.0,2.5,2.5a,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	

{% endraw %}
