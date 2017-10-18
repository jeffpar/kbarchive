---
layout: page
title: "Q103645: HOWTO: Change the Default Windows Printer from FoxPro"
permalink: kb/103/Q103645/
---

## Q103645: HOWTO: Change the Default Windows Printer from FoxPro

	Article: Q103645
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbprint kbPrinting kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	With the set of procedures included in this article, you can change the default
	Windows printer from within FoxPro for Windows.
	
	NOTE: These procedures also work in Window NT. The method described below does
	not work with FoxPro 2.6a in Windows 95.
	
	MORE INFORMATION
	================
	
	Following is a summary of the three main procedures: LISTPRINT, GETPRINT, and
	PUTPRINT.
	
	LISTPRINT
	---------
	
	LISTPRINT displays on the screen all the printers in the WIN.INI file, the number
	of printers, and the default printer.
	
	GETPRINT
	--------
	
	The GETPRINT procedure is called by LISTPRINT and gets a list of available
	printers, the number of printers, and the default printer in the WIN.INI file.
	The parameters are as follows:
	
	- Printer list (array)
	- Number of printers in WIN.INI file (numeric)
	- efault printer in the WIN.INI file (character)
	
	PUTPRINT
	--------
	
	The PUTPRINT procedure sets the default printer in the WIN.INI file. This
	procedure takes three or four parameters, as follows
	
	- Printer list (array--Use parameter 1 from GETPRINT.)
	- Number of printers (numeric--Use parameter 2 from GETPRINT.)
	- The new default print string (Put directly into the WIN.INI file.)
	
	or passes two numeric parameters (3 and 4):
	
	- Number of the printer in the printer array (numeric)
	- Port number (If a printer has more than one port [FILE:, LPT1:] the number
	  will represent the number in the list order [FILE: = 1, LPT1: = 2]. If a
	  third parameter is passed that is numeric, but no fourth parameter is passed,
	  it will default to the first or only port.)
	
	For example, after first executing the LISTPRINT procedure with the DO LISTPRINT
	command, the WIN.INI file's printer information is placed in the device array.
	The PUTPRINT procedure can then be used to change the default printer driver.
	There are two ways to use the GETPRINT and PUTPRINT routines, as shown in the
	examples below. (Example 1 is the easier of the two). LISTPRINT is the only a
	way to display the current printers. Both examples use GETPRINT to pass the
	number of printers back to PUTPRINT.
	
	Example 1
	---------
	
	     Printers = ""
	     Number = 0
	     Defa_print = ""
	     DO GETPRINT WITH Printers, Number, Defa_print
	     *Printers   - is an array with all the printers installed.
	     *Number     - is the number of printers in the WIN.INI file.
	     *Defa_print - is the default printer in the WIN.INI file.
	
	     DO PUTPRINT WITH Printers, Number, x
	     *Printers   - is the return array from the GETPRINT.
	     *Number     - is the return number of printers from GETPRINT.
	     *x          - is the number of the row (in the Printers array) that
	     *             you want to be the new default printer.
	     *y          - is only needed if the printer has more than one output
	     *             port.  If it does, you use this parameter to set the port
	     *             (LPT1 = 1, LPT2 = 2 and LPT3 = 3)
	
	Example 2
	---------
	
	     Printers = ""
	     Number = 0
	     Defa_print = ""
	     DO GETPRINT WITH Printers, Number, Defa_print
	     *Printers   - is an array with all the printers installed.
	     *Number     - is the number of printers in the WIN.INI file.
	     *Defa_print - is the default printer in the WIN.INI file.
	
	     DO PUTPRINT WITH Printers, Number, NEW_DEFA
	     *Printers   - is the return array from the GETPRINT.
	     *Number     - is the return number of printers from GETPRINT.
	     *NEW_DEFA   - is the new default string that will be put directly into
	     *             the WIN.INI file (e.g., "HP LaserJet III,HPPCL5MS,LPT1;")
	     *             This should only be done if you know exactly what should
	     *             be in the Default printer string.
	
	Keep in mind that PUTPRINT puts the information that you supply directly into the
	WIN.INI file. Therefore, GETPRINT is used first, so that no installed printers
	are lost while you are setting a new default printer.
	
	To verify that the correct driver has been set as the default, issue the
	following commands:
	
	  
	
	     RELEASE device
	     DO LISTPRINT
	
	Following is the code for the three main procedures, GETPRINT, LISTPRINT, and
	PUTPRINT, which make calls to three additional procedures, PUTPROSTRG,
	GETPROSTRG, and GETPORT.
	
	NOTE: Removing the SET TALK lines from this code will cause a "Cannot access
	characters beyond string" error.
	
	     *!*****************************************************************
	     *!
	     *!     Procedure: GETPRINT
	     *!
	     *!*****************************************************************
	     PROCEDURE getprint
	     * Query WIN.INI to get data on the installed and default printers.
	
	     PARAMETER DEVICE, NUMBER, dfltprnt
	     * Usage:
	     *    DIMENSION device[1]
	     *    numprinters = 0
	     *    defaultprnt = ""
	     *    DO GETPRINT WITH device, numprinters, defaultprnt
	     *
	     * The "device" array will be populated with the names and
	     * parameters for all installed print devices.
	     *
	     * The "device" array has this structure:
	     * Col 1: Printer name
	     * Col 2: Parameter for [device] section
	     * Col 3: Parameter for [PrinterPort] section (includes time-out
	     * parameters)
	     *
	     * The contents of "device" might look something like this after
	     * GETPRINT is called:
	     *   Col 1                      Col 2           Col 3
	     *   -------------------------  --------------  ----------------
	     *   Apple LaserWriter II NTX   pscript,LPT2:   pscript,LPT2:,15,90
	     *   Generic / Text Only=TTY    fred.prn        fred.prn,15,45
	     *   HP LaserJets(Level 5)      HPPCL5MS,LPT1:  HPPCL5MS,LPT1:,15,45
	     *
	     * "numprinters" in this case would be 3
	     * "defaultprnt" might be this:
	     *    HP LaserJets(Level 5),HPPCL5MS,LPT1:
	
	     #DEFINE buflen 2048
	     PRIVATE m.in_talk, m.dcount, m.retbuf, m.bytes, m.thisdevice
	
	     IF PARAMETERS() < 3
	        WAIT WINDOW "This procedure requires 3 parameters"
	        RETURN
	     ENDIF
	
	     IF FILE(SYS(2004)+"FOXTOOLS.FLL")
	        SET LIBRARY TO (SYS(2004)+"foxtools.fll") ADDITIVE
	     ELSE
	        WAIT WINDOW "GETPRINT requires the FoxTools library."
	        RETURN
	     ENDIF
	
	     IF SET("TALK") = "ON"
	        SET TALK OFF
	        m.in_talk = "ON"
	     ELSE
	        m.in_talk = "OFF"
	     ENDIF
	
	     * Fill in the first column of the array with installed device
	     * names.
	     m.retbuf = REPLICATE(CHR(0),buflen)
	     m.bytes = getprostrg("devices",0,CHR(0),@m.retbuf,buflen)
	     * The second argument of 0 to GetProfileString() returns the contents
	     * of the entire section, with each entry separated by a null terminator
	     * (CHR(0)).
	     m.dcount = 0
	     m.retbuf = LEFT(m.retbuf,m.bytes)
	     DO WHILE CHR(0) $ m.retbuf
	        m.thisdevice = LEFT(m.retbuf,AT(CHR(0),m.retbuf)-1)
	        IF LEFT(m.thisdevice,1) <> CHR(0)
	           m.dcount = m.dcount + 1
	           DIMENSION device[m.dcount,3]
	           device[m.dcount,1] = m.thisdevice
	        ENDIF
	        m.retbuf = SUBSTR(m.retbuf,AT(CHR(0),m.retbuf)+1)
	     ENDDO
	
	     * Fill in the second and third columns of the device array with the
	     * parameters of each installed device from the [devices] section
	     * (column 2) and the [PrinterPorts] section (column 3).
	     FOR m.j = 1 TO m.dcount
	        retbuf = REPLICATE(CHR(0),256)
	        m.bytes = ;
	           getprostrg("devices",device[m.j,1],CHR(0),@m.retbuf,256)
	        m.retbuf = LEFT(m.retbuf,m.bytes)
	        device[m.j,2] = m.retbuf
	
	        retbuf = REPLICATE(CHR(0),256)
	        m.bytes = ;
	           getprostrg("PrinterPorts",device[m.j,1],CHR(0),@m.retbuf,256)
	        m.retbuf = LEFT(m.retbuf,m.bytes)
	        device[m.j,3] = m.retbuf
	     ENDFOR
	
	     * Store the number of installed devices.
	     m.number = m.dcount
	
	     * Now get the default printer.
	     retbuf = REPLICATE(CHR(0),256)
	     m.bytes = getprostrg("windows","device",CHR(0),@m.retbuf,256)
	     m.retbuf = LEFT(m.retbuf,m.bytes)
	     m.dfltprnt = m.retbuf
	
	     SET TALK &in_talk
	
	     *!*****************************************************************
	     *!
	     *!     Procedure: LISTPRINT
	     *!
	     *!*****************************************************************
	     PROCEDURE listprint
	     PARAMETER DEVICE
	     #DEFINE buflen 2048
	     PRIVATE m.in_talk,m.i
	     IF FILE(SYS(2004)+"FOXTOOLS.FLL")
	        SET LIBRARY TO (SYS(2004)+"foxtools.fll") ADDITIVE
	     ELSE
	        WAIT WINDOW "LISTPRINT requires the FoxTools library."
	        RETURN
	     ENDIF
	     IF SET("TALK") = "ON"
	        SET TALK OFF
	        m.in_talk = "ON"
	     ELSE
	        m.in_talk = "OFF"
	     ENDIF
	
	     DIMENSION DEVICE(1)
	     NUMBER = 0
	     dflt = ""
	
	     DO getprint WITH DEVICE, NUMBER, dflt
	     CLEAR
	     ? ALLTRIM(STR(m.number,3))+" installed printer devices in win.ini:"
	     FOR m.i = 1 TO NUMBER
	        ? "  "+device[m.i,1]+"="+device[m.i,3]
	     ENDFOR
	     ?
	     ? "Default printer is "+dflt
	     SET TALK &in_talk
	
	     *!*****************************************************************
	     *!
	     *!     Procedure: PUTPRINT
	     *!
	     *!*****************************************************************
	     PROCEDURE putprint
	     PARAMETER DEVICE, NUMBER, dflt, portnum
	     * Take the printer device information in the device array and
	     * update WIN.INI with it.
	     *
	     * "Number" is the total number of printers listed in "device."
	     * "dflt" is the string to write to the [windows] device= statement
	     * to set the default printer, or if dflt is a number, the array row
	     * to construct this statement from. Thus, to make the default
	     * printer the third one listed in "device," either pass a 3 as dflt
	     * or pass the actual string (something like HP LaserJets(Level
	     * 5),HPPCL5MS,LPT1:). If the string is passed, it must exactly
	     * match an entry in the [devices] section of the WIN.INI file.
	     *
	     * GETPRINT can be used to construct the device array.
	     *
	     IF FILE(SYS(2004)+"FOXTOOLS.FLL")
	        SET LIBRARY TO (SYS(2004)+"foxtools.fll") ADDITIVE
	     ELSE
	        WAIT WINDOW "PUTPRINT requires the FoxTools library."
	        RETURN
	     ENDIF
	
	     IF TYPE("dflt") = "N"
	        IF PARAMETERS() < 4
	           portnum = 1
	        ENDIF
	        m.strg = device[m.dflt,1]+","+getport(device[m.dflt,2],portnum)
	     ELSE
	        m.strg = m.dflt
	     ENDIF
	
	     * Set the default printer
	     =putprostrg("windows","device",m.strg)
	
	     * Delete all existing device and PrinterPort entries.
	     =putprostrg("devices",0,CHR(0))
	     =putprostrg("PrinterPorts",0,CHR(0))
	
	     FOR m.i = 1 TO NUMBER
	        =putprostrg("devices",device[m.i,1],device[m.i,2])
	        =putprostrg("PrinterPorts",device[m.i,1],device[m.i,3])
	     ENDFOR
	
	     *!*****************************************************************
	     *!
	     *!     Function: PUTPROSTRG
	     *!
	     *!*****************************************************************
	     FUNCTION putprostrg
	     PARAMETER SECTION, entry, string
	     fn = regfn("WRITEPROFILESTRING","CCC","I")
	     RETURN callfn(fn,SECTION,entry,string)
	     * NOTE: When the code in this section is implemented in a program
	     * running on Windows 95 or Windows NT, the user will get the error
	     * "Entry point writeprofilestring not found." In this case, add the
	     * optional fourth argument to the call to function call RegFN()
	     * in the function named putprostrg as per the following example:
	     *
	     * fn=regfn("WRITEPROFILESTRING","CCC","I","krnl386.exe")
	     *
	     * The string "krnl386.exe" specifies that the writeprofilestring API
	     * is located in that library.
	     *!*****************************************************************
	     *!
	     *!     Function: GETPROSTRG
	     *!
	     *!*****************************************************************
	     FUNCTION getprostrg
	     PARAMETER SECTION, entry, dflt, buffer, blen
	     fn = regfn("GETPROFILESTRING","CCC@CI","I")
	     RETURN callfn(fn,SECTION,entry,dflt,@buffer,blen)
	     * NOTE: When the code in this section is implemented in a program
	     * running on Windows 95 or Windows NT, the user will get the error
	     * "Entry point getprofilestring not found." In this case, add the
	     * optional fourth argument to the call to function call RegFN()
	     * in the function named Getprostrg as per the following example:
	     *
	     * fn=RegFN("GETPROFILESTRING","CCC@CI","I","krnl386.exe")
	     *
	     * The string "krnl386.exe" specifies that the getprofilestring API
	     * is located in that library.
	
	     *!*****************************************************************
	     *!
	     *!     Function: GETPORT
	     *!
	     *!*****************************************************************
	     FUNCTION getport
	     PARAMETER m.pstrg, m.pnum
	     * Get the first "port" from a printer string.
	
	     * First get the printer driver name (e.g., pscript) and the comma.
	     m.retstrg = SUBSTR(m.pstrg,1,AT(',',m.pstrg))
	
	     * Now get the port designation (e.g., LPT1: or FILE:)
	
	     * Check if the port passed is greater than the ports available.
	     IF OCCURS(',',m.pstrg) >= m.pnum
	        m.portstrg = SUBSTR(m.pstrg,AT(',',m.pstrg,m.pnum)+1)
	     ELSE
	        m.portstrg = SUBSTR(m.pstrg,AT(',',m.pstrg,1)+1)
	     ENDIF
	
	     IF AT(',',m.portstrg) > 0
	        m.portstrg = LEFT(m.portstrg,AT(',',m.portstrg)-1)
	     ENDIF
	
	     RETURN m.retstrg + m.portstrg
	
	Additional query words:
	
	
	======================================================================
	Keywords          : kbcode kbprint kbPrinting kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
