---
layout: page
title: "Q153002: BUG:SET PRINTER TO Portname COMx Connection Parameters Ignored"
permalink: /kb/153/Q153002/
---

## Q153002: BUG:SET PRINTER TO Portname COMx Connection Parameters Ignored

	Article: Q153002
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The command SET PRINTER TO has a form allowing redirection to a filename or
	portname. When using the connection parameters to the PortName form of this
	command, the defaults will always be used regardless of the parameters
	specified.
	
	WORKAROUND
	==========
	
	1. Use AppleScript to automate a third-party communications package.
	
	2. Use a printer driver capable of sending data through a modem.
	
	3. Write a CFM library, ASLM library, or XCMD to write data to the modem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The parameters for the SET PRINTER TO PortName command are:
	
	     SET PRINTER TO PortName, [BaudRate], [Parity], [DataBits], [StopBits],
	       [HandShake], [EndLine]
	
	Set PortName to COM1 for the modem port or COM2 for the printer port. The
	connection arguments only apply to the SET PRINTER TO PortName version of this
	command. The defaults, as listed below, will always be used:
	
	  Parameter        Default Value
	  ---------        -------------
	  BaudRate         9600
	  Parity           N (None)
	  DataBits         8
	  StopBits         1
	  HandShake        H (Hardware CTS)
	  EndLine          RL (Return and Line Feed)
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          : kbenv kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
