---
layout: page
title: "Q105010: How To Use the OpenComm() Function with FOXTOOLS.FLL"
permalink: /kb/105/Q105010/
---

## Q105010: How To Use the OpenComm() Function with FOXTOOLS.FLL

{% raw %}

	Article: Q105010
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 2.60 2.60a
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	OpenComm() is a function that can be called using FOXTOOLS.FLL to open the COM
	or LPT ports. Below is a complete description of OpenComm().
	
	MORE INFORMATION
	================
	
	Purpose
	-------
	
	The OpenComm() function opens a communications device.
	
	Function Syntax
	---------------
	
	  OpenComm(<port>, <in_q>, <out_q>)
	
	  Argument       Description
	  -----------------------------------------------------------------
	
	  <port>         Points to a null-terminated string that specifies
	                 the device in the form COM<n> or LPT<n>, where <n>
	                 is the device number.
	
	  <in_q>         Specifies the size, in bytes, of the receiving
	                 queue. This parameter is ignored for LPT devices.
	
	  <out_q>        Specifies the size, in bytes, of the transmission
	                 queue. This parameter is ignored for LPT devices.
	
	Returns
	-------
	
	The return value identifies the open device if the function is successful.
	Otherwise, it is less than zero.
	
	Errors
	------
	
	If the function fails, it may return one of the following error values:
	
	  Value     Meaning
	  --------------------------------------------------------------------
	
	  -12       The device's baud rate is unsupported.
	  -11       The specified byte size is invalid.
	  -10       The hardware is not available (is locked by another device).
	   -5       The default parameters are in error.
	   -4       The function cannot allocate the queues.
	   -3       The device is not open.
	   -2       The device is already open.
	   -1       The device identifier is invalid or unsupported.
	
	If this function is called with both queue sizes set to zero, the return value is
	-2 if the device is already open, or -4 if the device is not open.
	
	Comments
	--------
	
	Windows allows COM ports 1 through 9 and LPT ports 1 through 3. If the device
	driver does not support a communications port number, the OpenComm() function
	will fail.
	
	Sample Code
	-----------
	
	The following code example uses the OpenComm() function and FOXTOOLS.FLL to open
	COM1. (This example can be found in FOXPROW\GOODIES\FOXTOOLS\DIALER.PRG.)
	
	     *-------------------- dialer.prg ------------------------
	
	     * Sample program to output to comm port
	     * Uses FoxTools library for generic DLL access
	
	     SET LIBRARY TO SYS(2004)+"foxtools.fll" ADDITIVE
	
	     opencomm = REGFN("OpenComm", "CII", "I")
	     writecomm = REGFN("WriteComm", "ICI", "I")
	     closecomm = REGFN("CloseComm", "I", "I")
	
	     com1 = CALLFN(opencomm, "COM1:", 100, 100)
	     s = "ATDT 5551212" + chr(13)
	     =CALLFN(writecomm, com1, s, len(s))
	
	     WAIT WINDOW "Press any key to hang up"
	     s = "ATH0" + chr(13)
	     =CALLFN(writecomm, com1, s, len(s))
	
	     =CALLFN(closecomm, com1)
	
	     RELEASE LIBRARY SYS(2004)+"foxtools.fll"
	
	NOTE: In reference to the applicability of the OpenComm() function to Visual
	FoxPro for Windows, the 32-bit Foxtools.fll returns a handle to the RegFN() call
	provided that it passes the optional 4th argument, which is "USER.DLL." Here is
	an example:
	
	     hnd = RegFN("OpenComm","CCC","I","User.dll")
	
	REFERENCES
	==========
	
	The above information can also be found in the Microsoft Windows Software
	Development Kit (SDK) "Programmer's Reference Volume 2: Functions" [describes
	OpenComm()] and the "Programmer's Reference Volume 3: Messages, Structures, and
	Macros" (describes the returned values). The online Help file for the
	Professional Version of Visual C++ also contains this information.
	
	Additional query words: FoxWin 2.50
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a
	Version           : 2.50 2.50a 2.50b 2.60 2.60a
	
	=============================================================================
	

{% endraw %}
