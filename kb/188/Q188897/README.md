---
layout: page
title: "Q188897: HOWTO: Setting the System Date and Time Programmatically"
permalink: /kb/188/Q188897/
---

## Q188897: HOWTO: Setting the System Date and Time Programmatically

	Article: Q188897
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although the system date and time can be set manually from Control Panel,
	programatically changing these settings requires using the Win32 SetLocalTime
	function.
	
	SetLocalTime is passed a SYSTEMTIME structure, containing the following members:
	
	  WORD wYear
	  WORD wMonth
	  WORD wDayOfWeek
	  WORD wDay
	  WORD wHour
	  WORD wMinute
	  WORD wSecond
	  WORD wMilliseconds
	
	Similar to all structures, you must construct a string containing its proper
	memory representation. The Word2Str function in the code below performs this
	conversion.
	
	Also, note that it is necessary to subtract 1 from the result of the FoxPro dow()
	function to obtain the wDayOfWeek member. Win32 treats Sunday as day 0 (zero)
	and Saturday as day 6, whereas dow() treats Sunday as day 1 and Saturday as day
	7.
	
	It is more convenient to use the SetLocalTime function rather than the
	intuitively more obvious choice, SetSystemTime, because the former treats the
	SYSTEMTIME structure as a timezone-adjusted local time, while the latter
	function treats the SYSTEMTIME structure as Greenwich Mean Time.
	
	MORE INFORMATION
	================
	
	Create and execute a program containing the code below. The program stores the
	current system date and time, changes it to 10:30:15.00 AM on 06/30/2001,
	displays the FoxPro time() and date() functions to demonstrate that the date and
	time have been changed, then resets them to their previous values.
	
	Sample Code
	-----------
	
	     SET CENTURY ON
	
	     * Save the current date and time, reset it at the end.
	     m.olddate = DATE()
	     m.oldtime = TIME(1)
	
	     * Set the system time arbitrarily to 10:30:15 AM on 06/30/2001.
	     m.updtdate = {06/30/2001}
	     m.updttime = "10:30:15.00"
	     =setsystime(m.updtdate, m.updttime)
	
	     =MESSAGEBOX("Old date: " + DTOC(m.olddate) + CHR(13) + ;
	        "Old time: " + m.oldtime + CHR(13) + ;
	        "New system date: " + DTOC(DATE()) + CHR(13) + ;
	        "New system time: " + TIME(1), ;
	        0 + 64 + 0, ;
	        "SetLocalTime()")
	
	     * Now, reset it to its original value.
	     m.updtdate = m.olddate
	     m.updttime = m.oldtime
	     =setsystime(m.updtdate, m.updttime)
	
	     * Function setsystime.
	     * Parameters: date, character time in the form HH:MM:SS:hh.
	     * Returns: nothing.
	     FUNCTION setsystime
	
	     PARAMETERS m.updtdate, m.updttime
	
	     DECLARE SHORT SetLocalTime IN win32api STRING SystemTime
	
	     * Use SendMessage to tell everybody that we've changed the system time.
	     DECLARE INTEGER SendMessage IN win32api ;
	        INTEGER WindowHandle, ;
	        INTEGER MESSAGE, ;
	        STRING Param1, ;
	        STRING Param2
	
	     * SendMessage constants.
	     #DEFINE HWND_BROADCAST 65535
	     #DEFINE WM_TIMECHANGE 30
	
	     m.SystemTime = word2str(YEAR(m.updtdate)) + ;
	        word2str(MONTH(m.updtdate)) + ;
	        word2str(DOW(m.updtdate) - 1) + ;
	        word2str(DAY(m.updtdate)) + ;
	        word2str(VAL(LEFT(m.updttime, 2))) + ;
	        word2str(VAL(SUBSTR(m.updttime, 4, 2))) + ;
	        word2str(VAL(SUBSTR(m.updttime, 7, 2))) + ;
	        word2str(VAL(RIGHT(m.updttime, 2)))
	
	     m.retval = SetLocalTime(m.SystemTime)
	
	     * Send the message that the time has changed.
	     m.retval = SendMessage(HWND_BROADCAST, WM_TIMECHANGE, "", "")
	
	     * Function word2str.
	     * Parameters: 16-bit value.
	     * Returns: low-high format string for use in structures
	     * requiring a WORD value.
	     FUNCTION word2str
	
	     PARAMETERS m.wordval
	
	     PRIVATE i, m.retstr
	
	     m.retstr = ""
	     FOR i = 8 TO 0 STEP -8
	        m.retstr = CHR(INT(m.wordval/(2^i))) + m.retstr
	        m.wordval = MOD(m.wordval, (2^i))
	     NEXT
	     RETURN m.retstr
	
	REFERENCES
	==========
	
	The Win32 API help file included in the MSDN Platform SDK CD.
	
	Additional query words: kbDSupport SYSTEMTIME SETLOCALTIME SETSYSTEMTIME time date kbDSE kbvfp500
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
