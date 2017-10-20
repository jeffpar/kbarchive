---
layout: page
title: "Q249171: INFO: Clarification of SET CENTURY Help Topic in VFP 6.0 Help"
permalink: /kb/249/Q249171/
---

## Q249171: INFO: Clarification of SET CENTURY Help Topic in VFP 6.0 Help

{% raw %}

	Article: Q249171
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SET CENTURY Help topic in the Visual FoxPro 6.0 product documentation
	contains a description of the behavior of issuing the SET CENTURY TO command
	without any further qualifiers. This is in the Remarks section. This article
	provides some additional information describing the behavior of the command.
	
	Here is the current text from the Remarks section of the SET CENTURY Help topic:
	
	"Issue SET CENTURY TO without any additional arguments to restore the default
	century to the current century and ROLLOVER to the default value of the current
	year plus 50 years. In Visual FoxPro 5.0, issuing SET CENTURY TO without any
	additional arguments sets the century to 19 and ROLLOVER to zero."
	
	This implies that the century will be set to the century portion of the current
	system date. However, this only holds true for system dates where the two-digit
	year portion of the year is 50 or greater.
	
	The actual behavior is that SET CENTURY TO sets the default century to the
	current century minus one if the two-digit year of the system date is less than
	50, and to the current century if the two-digit year of the system date is 50 or
	greater.
	
	MORE INFORMATION
	================
	
	The following program demonstrates the behavior of SET CENTURY TO for a range of
	dates. It sets the system date and time to a range of dates, and resets it to
	the original date and time when the program has completed.
	
	NOTE: Do not run this program while you are running any other applications or
	services that depend on system dates. For example, having Microsoft Outlook
	running could trigger numerous meeting reminders. In addition, access to network
	resources such as shares and printers might not be available when the system
	date is artificially moved forward because access might be based on a
	time-dependent password.
	
	  * This program sets the system date and time
	  * to a range of values and resets it to the original values.
	  * A SET CENTURY TO is issued for each date setting.
	  * The date and time is then reset to the original values.
	  * The results are displayed in a text file called setcent.txt.
	
	  #DEFINE OUTPUTFILE 'setcent.txt'
	
	  LOCAL ldolddate, ltoldtime
	  ldolddate = DATE()
	  ltoldtime = TIME()
	
	  SET CENTURY ON
	
	  SET ALTERNATE TO OUTPUTFILE
	  SET ALTERNATE ON
	  ?'VFP Version is '+VERSION()
	  ?''
	
	  =SetCent()
	  =SetSysTime({^1900-01-01},"10:30:15.00")
	  =SetCent()
	  =SetSysTime({^1949-01-01},"10:30:15.00")
	  =SetCent()
	  =SetSysTime({^1950-01-01},"10:30:15.00")
	  =SetCent()
	  =SetSysTime({^1999-12-31},"10:30:15.00")
	  =SetCent()
	  =SetSysTime({^2000-01-01},"10:30:15.00")
	  =SetCent()
	  =SetSysTime({^2049-01-01},"10:30:15.00")
	  =SetCent()
	  =SetSysTime({^2050-01-01},"10:30:15.00")
	  =SetCent()
	  =SetSysTime({^2099-01-01},"10:30:15.00")
	  =SetCent()
	  =SetSysTime(ldolddate, ltoldtime)
	  =SetCent()
	
	  SET ALTERNATE OFF
	  SET ALTERNATE TO
	  MODIFY FILE OUTPUTFILE NOWAIT
	
	  PROCEDURE SetCent()
	  	?'Current system date is '+DTOC(DATE())
	  	SET CENTURY TO
	  	?'Current setting is SET CENTURY TO '+ALLTR(STR(SET('cent',1))) +' ROLLOVER '+ALLTR(STR(SET('cent',2)))
	  	?''
	  ENDPROC
	
	  PROCEDURE SetSysTime
	  	PARAMETERS m.updtdate, m.updttime
	
	  	DECLARE SHORT SetLocalTime IN win32api STRING SystemTime
	
	  	* Use SendMessage to tell apps we've changed the system time.
	  	DECLARE INTEGER SendMessage IN win32api ;
	  		INTEGER WindowHandle, ;
	  		INTEGER MESSAGE, ;
	  		STRING Param1, ;
	  		STRING Param2
	
	  	* SendMessage constants.
	  	#DEFINE hwnd_broadcast 65535
	  	#DEFINE wm_timechange 30
	
	  	m.SystemTime = Word2Str(YEAR(m.updtdate)) + ;
	  		Word2Str(MONTH(m.updtdate)) + ;
	  		Word2Str(DOW(m.updtdate) - 1) + ;
	  		Word2Str(DAY(m.updtdate)) + ;
	  		Word2Str(VAL(LEFT(m.updttime, 2))) + ;
	  		Word2Str(VAL(SUBSTR(m.updttime, 4, 2))) + ;
	  		Word2Str(VAL(SUBSTR(m.updttime, 7, 2))) + ;
	  		Word2Str(VAL(RIGHT(m.updttime, 2)))
	
	  	m.retval = SetLocalTime(m.SystemTime)
	
	  	* Send the message that the time has changed.
	  	m.retval = SendMessage(hwnd_broadcast, wm_timechange, "", "")
	
	  ENDPROC
	
	  * Function Word2Str.
	  * Parameters: 16-bit value.
	  * Returns: low-high format string for use in structures
	  * requiring a WORD value.
	  PROCEDURE Word2Str
	  	PARAMETERS m.wordval
	
	  	PRIVATE i, m.retstr
	
	  	m.retstr = ""
	  	FOR i = 8 TO 0 STEP -8
	  		m.retstr = CHR(INT(m.wordval/(2^i))) + m.retstr
	  		m.wordval = MOD(m.wordval, (2^i))
	  	NEXT
	  	RETURN m.retstr
	
	  ENDPROC
	
	REFERENCES
	==========
	
	The code for setting the date and time was taken from the following Microsoft
	Knowledge Base article:
	
	  Q188897 HOWTO: Setting the System Date and Time Programmatically
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
