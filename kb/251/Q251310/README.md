---
layout: page
title: "Q251310: HOWTO: Exit Windows from Visual FoxPro"
permalink: /kb/251/Q251310/
---

## Q251310: HOWTO: Exit Windows from Visual FoxPro

{% raw %}

	Article: Q251310
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Knowledge Base articles Q110254 and Q109607 describe how to reboot or
	exit Microsoft Windows from within Microsoft FoxPro. These articles reference
	the use of Foxtools.Fll. The use of Foxtools.Fll is no longer needed in the
	Visual FoxPro product in order to call Win32 API functions. In addition, Windows
	NT and Windows 2000 cannot be shutdown, rebooted, or powered off without setting
	process token security to SE_SHUTDOWN_NAME and calling ExitWindowsEx().
	
	This article demonstrates how to directly call the Win32 ExitWindowsEx() API
	function to log off of, power off, reboot, or shut down the Windows operating
	system, as well as how to set the necessary process token security.
	
	MORE INFORMATION
	================
	
	The following code will shutdown any Windows machine. Note that if the platform
	I. D. returned from GetVersionEx() identifies the operating system as Windows NT
	or Windows 2000, the custom SetProcPrivilege() function is called to set the
	process token security before shutting down.
	
	Change the parameter passed in the first line of executable code to the
	appropriate #define value to logoff, shutdown, reboot, or power off.
	
	  *-- Define from Winnt.h
	  #DEFINE TOKEN_ADJUST_PRIVILEGES 0x0020
	  #DEFINE TOKEN_QUERY             0x0008
	  #DEFINE SE_PRIVILEGE_ENABLED    2
	
	  *-- Defines from Winbase.h
	  #DEFINE VER_PLATFORM_WIN32s             0
	  #DEFINE VER_PLATFORM_WIN32_WINDOWS      1
	  #DEFINE VER_PLATFORM_WIN32_NT           2
	
	  *-- Defines from WinUser.h
	  #DEFINE EWX_LOGOFF           0  && Shuts down all processes running
	                                  && in the security
	                                  && context of the process that
	                                  && called the ExitWindowsEx function.
	                                  && Then it logs the user off.
	
	  #DEFINE EWX_SHUTDOWN         1  && Shuts down the system to a point
	                                  && at which it is safe to turn off the
	                                  && power. All file buffers have been
	                                  && flushed to disk, and all
	                                  && running processes have stopped.
	
	                                  && Windows NT/2000: The calling process
	                                  && must have the SE_SHUTDOWN_NAME
	                                  && privilege.
	
	  #DEFINE EWX_REBOOT           2  && Shuts down the system and then
	                                  && restarts the system.
	
	                                  && Windows NT/2000: The calling process
	                                  && must have the SE_SHUTDOWN_NAME
	                                  && privilege.
	
	  #DEFINE EWX_POWEROFF         8  && Shuts down the system and turns
	                                  && off the power. The system must support
	                                  && the power-off feature.
	
	                                  && Windows NT/2000: The calling process
	                                  && must have the SE_SHUTDOWN_NAME
	                                  && privilege.
	
	  *-- Change EWX_SHUTDOWN to any of the above #define values to
	  *-- either logoff, shutdown, reboot, or power off.
	  DO ExitWindowsFox WITH EWX_SHUTDOWN
	
	  *----------------------------------
	  PROCEDURE ExitWindowsFox
	  *----------------------------------
	  	PARAMETERS ExitMode
	  	LOCAL iRc
	  	iRc = 0
	  	DECLARE ExitWindowsEx IN Win32Api INTEGER, INTEGER
	
	  	*-- Check the OS version, and call the SetPrivilege function if NT/Win2K
	  	liPlatform = GetPlatform()
	  	IF liPlatform != VER_PLATFORM_WIN32_NT  && We can do whatever we wish
	  && without worrying about security
	  		iRc = ExitWindowsEx(ExitMode, 0)
	  		IF ExitMode = EWX_LOGOFF OR ExitMode = EWX_POWEROFF
	
	  			*-- Necessary because VFP will not exit using
	  			*-- either of these parameters under Win9x.
	  			QUIT
	  		ENDIF
	  	ELSE  && We have to set the process security
	  		iRc = SetProcPrivilege()
	  		IF iRc <> 0
	  			iRc = ExitWindowsEx(ExitMode, 0)
	  		ENDIF
	  	ENDIF && liPlatform != VER_PLATFORM_WIN32_NT
	
	  *----------------------------------
	  PROCEDURE SetProcPrivilege
	  	*-- Sets the appropriate process privilege to allow shutdown on NT/Win2K
	  	*----------------------------------
	  	*-- Declare function to obtain current Process ID, needed to open the process
	  	*-- get the process token.
	  	LOCAL iRc
	  	iRc = 0
	  	DECLARE INTEGER GetCurrentProcessId IN kernel32.DLL
	  	DECLARE INTEGER OpenProcess IN Kernel32.DLL INTEGER, ;
	  		INTEGER, ;
	  		INTEGER
	  	DECLARE INTEGER OpenProcessToken IN AdvApi32.DLL INTEGER, ;
	  		INTEGER, ;
	  		INTEGER@
	
	  	*-- Declare function to retrieve a LUID for the necessary security
	  	*-- privilege.
	  	DECLARE INTEGER LookupPrivilegeValue IN AdvApi32.DLL STRING, ;
	  		STRING, ;
	  		INTEGER@ lsLuid
	
	  	*-- Declare function to adjust the process token privileges so that
	  	*-- we can shut down NT/Windows 2000
	  	DECLARE INTEGER AdjustTokenPrivileges IN AdvApi32.DLL INTEGER, ;
	  		INTEGER, ;
	  		STRING@ lsNewState, ;
	  		INTEGER, ;
	  		INTEGER, ;
	  		INTEGER
	
	  	liAccessToken = 0        && Placeholder for the access token whose privileges we'll change
	  	lsLuidBuffer = SPACE(8)  && Placeholder for LUID used to change access privileges
	  	lsName = SPACE(15)       && Placeholder for computer name
	  	liBufferLen = 15         && Placeholder for the computer name buffer length
	  	liLuid = 0
	  	liProc = 0
	  	liProc = GetCurrentProcessId()
	  	hProc = OpenProcess(2035711, 0, liProc)
	  	iRc = OpenProcessToken(hProc, BITOR(TOKEN_ADJUST_PRIVILEGES, TOKEN_QUERY), @liAccessToken)
	  	IF iRc <> 0
	  		IF iRc <> 0
	
	  			*-- "SeShutdownPrivilege" is the string value for the SE_SHUTDOWN_NAME value.
	  			LookupPrivilegeValue("", "SeShutdownPrivilege", @liLuid)
	  			lsLuidBuffer = LongToStr(liLuid) + CHR(0) + CHR(0) + CHR(0) + CHR(0)
	
	  			*-- Declare a string to hold the TOKEN_PRIVILEGES structure
	  			lsNewState = SPACE(16)
	
	  			*-- Fill in the structure
	  			lsNewState = LongToStr(1) + lsLuidBuffer + LongToStr(SE_PRIVILEGE_ENABLED)
	  			iRc = AdjustTokenPrivileges(liAccessToken, 0, @lsNewState, LEN(lsNewState), 0, 0)
	  			RETURN iRc
	  		ELSE
	  			RETURN iRc
	  		ENDIF
	  	ELSE
	  		RETURN iRc
	  	ENDIF
	  ENDPROC
	
	  *----------------------------------
	  PROCEDURE GetPlatform
	  	*----------------------------------
	  	LOCAL liPlatform, iRc
	  	liPlatform = 0
	  	iRc = 0
	
	  	DECLARE INTEGER GetVersionEx IN Win32Api STRING@
	
	  	*-- Declare a string to hold the OSVERSIONINFO structure
	  	lsOSVersionInfo = LongToStr(148) + SPACE(144)
	  	iRc = GetVersionEx(@lsOSVersionInfo)
	  	liPlatform = StrToLong(SUBSTR(lsOSVersionInfo, 17, 4))
	  	RETURN liPlatform
	  ENDPROC
	
	  *-- The following function converts a long integer to an ASCII
	  *-- character representation of the passed value in low-high format.
	  *----------------------------------
	  FUNCTION LongToStr
	  	*----------------------------------
	  	* Passed : 32-bit non-negative numeric value (lnLongval)
	  	* Returns : ascii character representation of passed value in low-high
	  	* format (lcRetstr)
	  	* Example :
	  	*   m.long = "999999"
	  	*   m.longstr = long2str(m.long)
	
	  	PARAMETERS lnLongval
	
	  	PRIVATE i, lcRetstr
	
	  	lcRetstr = ""
	  	FOR i = 24 TO 0 STEP -8
	  		lcRetstr = CHR(INT(lnLongval/(2^i))) + lcRetstr
	  		lnLongval = MOD(lnLongval, (2^i))
	  	NEXT
	  	RETURN lcRetstr
	
	  	*-- The following function converts a string in low-high format to a
	  	*-- long integer.
	  	*----------------------------------
	  FUNCTION StrToLong
	  	*----------------------------------
	  	* Passed:  4-byte character string (lcLongstr) in low-high ASCII format
	  	* Returns:  long integer value
	  	* Example:
	  	* m.longstr = "1111"
	  	* m.longval = str2long(m.longstr)
	
	  	PARAMETERS lcLongstr
	
	  	PRIVATE i, lnRetval
	
	  	lnRetval = 0
	  	FOR i = 0 TO 24 STEP 8
	  		lnRetval = lnRetval + (ASC(lcLongstr) * (2^i))
	  		lcLongstr = RIGHT(lcLongstr, LEN(lcLongstr) - 1)
	  	NEXT
	
	  	RETURN lnRetval
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mike A.
	Stewart, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
