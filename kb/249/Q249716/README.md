---
layout: page
title: "Q249716: HOWTO: Use NetRemoteTOD to Obtain Date/Time Info from a Server"
permalink: /kb/249/Q249716/
---

## Q249716: HOWTO: Use NetRemoteTOD to Obtain Date/Time Info from a Server

{% raw %}

	Article: Q249716
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAPI kbOSWin2000 kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows 2000 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows NT 4.0 or Microsoft Windows 2000, it is possible to obtain
	the date and time from a server by using the NET command line utility with the
	syntax:
	
	  NET TIME \\ServerName
	
	To avoid the expense of shelling to a new process, it is possible to obtain this
	information programmatically using the NetRemoteTOD API function under Windows
	NT.
	
	MORE INFORMATION
	================
	
	NOTE: This code does not work in Visual FoxPro when hosted on Windows 2000
	Terminal Server.
	
	Save and execute the following code, specifying the server name whose time you
	want to query in the line:
	
	  server_name = "yourservername"
	
	  * NetRemoteTOD's first parameter is a pointer to a
	  * Unicode string containing the server name.
	  *
	  * The second parameter is a pointer to a byte array
	  * containing a pointer to a TIME_OF_DAY_INFO structure
	
	  * The '@' preceding the second parameter ('integer @')
	  * dereferences this pointer to the byte array. Later in the
	  * program, the program uses RTLMoveMemory() to
	  * dereference the pointer this byte array contains
	  DECLARE INTEGER NetRemoteTOD IN netapi32 STRING @,  INTEGER @
	
	  * Note that the source address ('inbuffer') is declared as an integer,
	  * to be consistent with the second parameter in NetRemoteTOD above.
	  DECLARE INTEGER RtlMoveMemory IN win32api ;
	     STRING @outbuffer, ;
	     INTEGER inbuffer, ;
	     INTEGER bytes2copy
	
	  * the TIME_OF_DAY_INFO structure
	  * contains 11 DWORDs and 1 long, for
	  * a total of 48 bytes, so tdbuffout is
	  * initialized as:
	  tdbuffout=REPLICATE(CHR(0), 48)
	  tdbuffin = 0
	
	  * the server name must be converted to Unicode
	  * This API function behaves differently depending on
	  * whether the target is an Win2000 machine or not -
	  *
	  * If Win2000, then the servername must be preceded by "\\";
	  * otherwise, it must not.
	
	  server_name = "yourservername"
	  try_server_name = STRCONV(server_name, 5)
	  rc = NetRemoteTOD(@try_server_name, @tdbuffin)
	  IF rc = 0
	     * copy the contents pointed to by the address in tdbuffin to
	     * tdbuffout
	     =RtlMoveMemory(@tdbuffout, tdbuffin, 48)
	  ELSE
	     * call failed, so the target is possibly a Win2000 box;
	     * Retry the function call, prepending "\\" to the server_name
	     try_server_name = STRCONV("\\" + server_name, 5)
	     rc = NetRemoteTOD(@try_server_name, @tdbuffin)
	     IF rc = 0
	        * copy the contents pointed to by the address in tdbuffin to
	        * tdbuffout
	        =RtlMoveMemory(@tdbuffout, tdbuffin, 48)
	     ELSE
	        ? "NetRemoteTOD() call failed. Return code is: ", rc
	        RETURN
	     ENDIF
	  ENDIF
	
	  * Pick out the appropriate parts of the TIME_OF_DAY_INFORMATION
	  * buffer. This buffer will contain the UTC (Universal Coordinated
	  * Time) of the server, and must be adjusted by TOD_TIMEZONE minutes
	  * for the correct local time.
	
	  * str2long() converts the DWORDS and LONGS from their string
	  * representation back to numbers.
	  tod_month = str2long(SUBSTR(tdbuffout, 37, 4))
	  tod_day = str2long(SUBSTR(tdbuffout, 33, 4))
	  tod_year = str2long(SUBSTR(tdbuffout, 41, 4))
	  tod_hours = str2long(SUBSTR(tdbuffout, 9, 4))
	  tod_mins = str2long(SUBSTR(tdbuffout, 13, 4))
	  tod_secs = str2long(SUBSTR(tdbuffout, 17, 4))
	
	  * Subtract this bias (times 60, to obtain seconds)
	  * from the datetime value to obtain the
	  * server's local time
	  *
	  * Alternately, to convert the server's local time to
	  * the workstation's local time, use the Win32 API function
	  * SystemTimeToTzSpecificLocalTime, available under
	  * Windows NT only.
	  tod_timezone = str2long(SUBSTR(tdbuffout, 25, 4)) * 60
	
	  serverdatetime = DATETIME(tod_year, tod_month, tod_day, ;
	     tod_hours, tod_mins, tod_secs)
	
	  ? "UTC time of server is: ", serverdatetime
	  ? "Server's local time is: ", serverdatetime - tod_timezone
	
	  *************************************************************
	  FUNCTION str2long
	  *************************************************************
	  * passed:  4-byte character string (m.longstr) in low-high ASCII format
	  * returns:  long integer value
	  * example:
	  *	m.longstr = "1111"
	  *	m.longval = str2long(m.longstr)
	
	  PARAMETERS m.longstr
	
	  PRIVATE i, m.retval
	
	  m.retval = 0
	  FOR i = 0 TO 24 STEP 8
	     m.retval = m.retval + (ASC(m.longstr) * (2^i))
	     m.longstr = RIGHT(m.longstr, LEN(m.longstr) - 1)
	  NEXT
	  RETURN m.retval
	
	The remote UTC time and local time of the server appear on the Visual FoxPro
	desktop.
	
	REFERENCES
	==========
	
	Microsoft Developer Network (MSDN) topics "NetRemoteTOD" and "RTLMovememory"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbOSWin2000 kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
